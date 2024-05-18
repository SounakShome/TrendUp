import { NextResponse } from "next/server";

export async function GET(request) {
    const pincodes=[123456, 234567, 345678, 456789]
    return NextResponse.json({pincodes}, {status: 200});
}