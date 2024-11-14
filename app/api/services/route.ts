import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

type ServiceData = {
    name: string;
    description: string;
    price: number;
};

export async function POST(req: NextRequest) {
    try {
        const body: ServiceData = await req.json();

        if (!body.name || !body.description || !body.price) {
            return NextResponse.json(
                { success: false, message: "Invalid data" },
                { status: 400 }
            );
        }

        await prisma.service.create({
            data: {
                name: body.name,
                description: body.description,
                price: body.price,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Service created successfully",
        });
    } catch (error) {
        console.error("Error creating service:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const services = await prisma.service.findMany();
        return NextResponse.json({
            success: true,
            services: services,
        });
    } catch (error) {
        console.error("Error fetching services:", error);
        return NextResponse.json(
            { success: false, error: error instanceof Error ? error.message : "Server error" },
            { status: 500 }
        );
    }
}
