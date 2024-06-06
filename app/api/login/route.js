import { NextResponse } from "next/server";
import User from "@/models/user";
import connectDB from "../../../middleware/mongoose";
import bcrypt from "bcryptjs"

export const POST = async (req) => {
    await connectDB();
    const data = await req.json();
    let user = await User.findOne({"email": data.email});
    if (user){
        if (data.email == user.email && bcrypt.compareSync(data.password, user.password)) {
            return NextResponse.json({ success: true, email: user.email, name: user.name });
        } else {
            return NextResponse.json({ success: false, error: "Invalid credentials!" });
        }
    } else {
        return NextResponse.json({ success: false, error: "User does not exist!" });
    }
}
