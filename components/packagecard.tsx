"use client"
import axios from "axios";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "./ui/input";

export default function Packagecard(props: any) {
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    async function bookNow() {
        try {
            const res = await axios.post("/api/bookings", {
                serviceId: props.id,
                userId: localStorage.getItem("userId"),
                address,
                date,
                time
            })
            if (res.data.success) {
                toast.success("Booking created successfully")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error: any) {
            console.log(error.message)

        }
    }
    return <div className="h-52 w-64 lg:w-80 rounded-sm bg-white flex justify-around items-center flex-col dark:bg-black dark:text-gray-100 dark:border-zinc-800">
        <div className="font-bold text-xl">
            {props.title}
        </div>
        <div className="text-center">
            {props.desc}
        </div>
        <div className="flex justify-around w-full">
            <div className="font-extrabold text-xl">
                {props.price}
            </div>

            <Sheet>
                <SheetTrigger>
                    <Button>Book Now</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <label>Address</label>
                        <Input className="bg-gray-400" onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                        <label>Date</label>
                        <Input className="bg-gray-400" type="date" onChange={(e) => {
                            setDate(e.target.value)
                        }} />
                        <label>Time</label>
                        <Input className="bg-gray-400" type="time" onChange={(e) => {
                            setTime(e.target.value)
                        }} />
                        <Button onClick={() => {
                            bookNow()
                        }}>Book</Button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    </div>
}