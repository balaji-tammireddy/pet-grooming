import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        console.log(body.userId)
        if (!body.serviceId || !body.userId || !body.address || !body.date || !body.time) {
            return NextResponse.json({
                message: "ServiceId, UserId, Address, Date or Time is empty"
            })
        }
        await prisma.booking.create({
            data: {
                serviceId: body.serviceId,
                userId: body.userId,
                address: body.address,
                date: body.date,
                time: body.time,
                status: "pending"
            }
        })
        return NextResponse.json({
            success: true,
            message: "Booking created successfully"
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
export async function PATCH(req: NextRequest) {
    try {
        const body = await req.json()
        console.log(body)
        if (!body.id) {
            return NextResponse.json({
                message: "Id is empty"
            })
        }
        const bookings = await prisma.booking.findMany({
            where: {
                userId: body.id
            },
            include: {
                service: true
            }
        })
        return NextResponse.json({
            success: true,
            bookings: bookings
        })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
