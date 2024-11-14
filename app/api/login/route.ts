import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        if (!body.email || !body.password) {
            return NextResponse.json({
                message: "Email or password is empty"
            })
        }
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            })
        }
        if (user.password !== body.password) {
            return NextResponse.json({
                success: false,
                message: "Invalid password"
            })
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)
        return NextResponse.json({
            success: true,
            token: token,
            id: user.id,
            message: "Login successful"
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}