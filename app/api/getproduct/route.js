import { NextResponse } from "next/server";
import Product from "../../../models/product";
import connectDB from "../../../middleware/mongoose";
import { data } from "autoprefixer";

export async function GET(req) {

    await connectDB();

    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");

    let product = await Product.findOne({slug: slug});
    let variants = await Product.find({title: product.title});
    let infoVariant = {};

    for (let item of variants){
        if(Object.keys(infoVariant).includes(item.colour)){
            infoVariant[item.colour][item.size]={slug: item.slug, title: item.title, price: item.price}
        } else {
            infoVariant[item.colour]={};
            infoVariant[item.colour][item.size]={slug: item.slug, title: item.title, price: item.price}
        }
    }

    let res = {
        variant: infoVariant,
        data: product
    }
    
    return new NextResponse(JSON.stringify(res), { status: 200 });
}
