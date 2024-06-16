"use client";
import { createContext, useState, useEffect, useReducer } from "react";
import { useRouter } from "next/navigation";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    // router.events.on("routeChangeStart", () => {
    //     setProgress(100);
    // });
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    let token = localStorage.getItem("token");
    if (token) {
      if (!user.value) {
        setUser({ value: token });
      }
      setKey(Math.random());
    }
  }, [user]);
  function saveCart(myCart) {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].qty * myCart[keys[i]].price;
    }
    setSubTotal(subt);
  }
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/login");
  };

  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {};
    qty = 1;
    newCart[itemCode] = { qty, price, name, size, variant };
    setCart(newCart);
    saveCart(newCart);
    router.push("/checkout");
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        subTotal,
        user,
        addToCart,
        removeFromCart,
        clearCart,
        buyNow,
        setUser,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
