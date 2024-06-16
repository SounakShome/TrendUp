import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "../../../middleware/mongoose";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

export const POST = async (req) => {
    await connectDB();
    const data = await req.json();
    let user = await User.findOne({"email": data.email});
    if (user){
        if (data.email == user.email && bcrypt.compareSync(data.password, user.password)) {
            let token = jwt.sign({email: user.email, name: user.name}, process.env.JWT_SECRET, {expiresIn: '2d'})
            return NextResponse.json({ success: true, token });
        } else {
            return NextResponse.json({ success: false, error: "Invalid credentials!" });
        }
    } else {
        return NextResponse.json({ success: false, error: "User does not exist!" });
    }
}
