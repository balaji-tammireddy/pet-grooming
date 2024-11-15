"use client"
import axios from "axios";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

import { Input } from "./ui/input";

export default function Packagecard(props: any) {
    const [address, setAddress] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [open, setOpen] = useState(false)
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
    return <div className={`h-60 w-64   lg:w-80 rounded-sm bg-white flex justify-around items-start flex-col dark:bg-black dark:text-gray-100 dark:border-zinc-800 px-5   `}>
        <div className="font-bold text-2xl">
            {props.title}
        </div>
        <div className="text-gray-100 text-xs">
            {props.desc}
        </div>
        <div className="font-extrabold text-xl">
            Rs.{props.price}
        </div>
        <div className="flex justify-between w-full">
            <Button>
                reviews
            </Button>
            <Button onClick={() => {
                setOpen(true)
            }}>
                Book Now
            </Button>
            {open && <div onClick={() => {
                setOpen(false)
            }} className="h-screen w-full inset-1 bg-transparent   justify-center fixed bg-opacity-25 bg-black backdrop-blur-sm  items-center flex   top-0 left-0">
                <div onClick={(e) => e.stopPropagation()} className="flex rounded-md flex-col transition-all justify-center fixed bg-zinc-900 items-start h-72 my-10 w-80  z-10 px-5">
                    <label >Address</label>
                    <Input placeholder="address" onChange={(e) => {
                        setAddress(e.target.value)
                    }} />
                    <label >Date</label>
                    <Input placeholder="date" onChange={(e) => {
                        setDate(e.target.value)
                    }} type="date" />
                    <label >Time</label>
                    <Input placeholder="time" onChange={(e) => {
                        setTime(e.target.value)
                    }} type="time" />
                    <div className="w-full flex justify-between items-center">
                        <Button onClick={() => {
                            setOpen(false)
                        }}>
                            Cancel
                        </Button>
                        <Button onClick={() => {
                            bookNow()
                            setOpen(false)
                        }}>
                            Confirm
                        </Button>
                    </div>
                </div>
            </div>}

        </div>
    </div>
}