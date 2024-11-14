import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        if (body.serviceId === "" || body.review === "" || body.rating === "" || body.userId === "") {
            throw new Error("ServiceId, Review or Rating is empty")
        }
        await prisma.rating.create({
            data: {
                serviceId: body.serviceId,
                comment: body.review,
                userId: body.userId,
                rating: body.rating
            }
        })
        return NextResponse.json({
            success: true,
            message: "Review created successfully"
        })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json()
        if (body.id == "") {
            throw new Error("Id is empty")
        }
        const reviews = await prisma.rating.findMany({
            where: {
                id: body.id
            },
        })
        return NextResponse.json({
            success: true,
            reviews: reviews
        })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}