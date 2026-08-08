import { NextResponse } from "next/server";
export async function POST(request:Request){const body=await request.json();if(!body.name||(!body.phone&&!body.email))return NextResponse.json({message:"Thiếu thông tin bắt buộc"},{status:400});console.info("[mock-lead]",body);return NextResponse.json({ok:true,message:"Đã ghi nhận thông tin"},{status:201});}
