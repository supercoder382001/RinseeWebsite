import { NextResponse } from "next/server";
export async function GET(req){
    return NextResponse("This is my first api");
}