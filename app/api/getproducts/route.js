import { NextResponse } from "next/server";
import Product from "../../../models/product";
import connectDB from "../../../middleware/mongoose";

export async function GET(req) {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const cat = searchParams.get("cat");
    let products = await Product.find({category: cat});
    let tshirts = {}
    for(let item of products){
        if(item.title in tshirts){
            if(!tshirts[item.title].colour.includes(item.color) && item.availQty > 0){
                tshirts[item.title].colour.push(item.colour)
            }
            if(!tshirts[item.title].size.includes(item.size) && item.availQty > 0){
                tshirts[item.title].size.push(item.size)
            }
        }
        else{
            if(item.availQty > 0){
                tshirts[item.title] = JSON.parse(JSON.stringify(item))
                tshirts[item.title].colour = [item.colour]
                tshirts[item.title].size = [item.size]
            }
        }
    }
    
    return new NextResponse(JSON.stringify(tshirts), { status: 200 });
}
