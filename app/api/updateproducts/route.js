import { NextResponse } from "next/server";
import Product from "../../../models/product";
import connectDB from "../../../middleware/mongoose";

export const POST = async (req) => {
    await connectDB();
    const data = await req.json();
    for (let i = 0; i < data.length; i++) {
        let p = await Product.findByIdAndUpdate(data[i]._id, data[i])
    }
    return NextResponse.json({ success: "success" })
}
