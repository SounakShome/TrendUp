import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "../../../middleware/mongoose";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    await connectDB();
    const data = await req.json();
    const salt = bcrypt.genSaltSync(15);
    const pass = bcrypt.hashSync(data.password, salt);
    console.log("signup: ", pass);
    let newUser = new User({name: data.name, email: data.email, password: pass});
    await newUser.save();
    return NextResponse.json({ success: "success" });
}
