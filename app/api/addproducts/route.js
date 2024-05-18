import { NextResponse } from "next/server";
import Product from "../../../models/product";
import connectDB from "../../../middleware/mongoose";

export const POST = async (req) => {
    await connectDB();
    const data = await req.json();
    for (let i = 0; i < data.length; i++) {
        let p = new Product({
            title: data[i].title,
            slug: data[i].slug,
            desc: data[i].desc,
            img: data[i].img,
            category: data[i].category,
            size: data[i].size,
            colour: data[i].colour,
            price: data[i].price,
            availQty: data[i].availQty,
        })
        await p.save()
    }
    return NextResponse.json({ success: "success" })
}
