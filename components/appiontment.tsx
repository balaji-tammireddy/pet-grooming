"use client"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Toaster, toast } from "sonner";

export default function Appiontment(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <div className="w-11/12 rounded-sm shadow-sm  border-2 border-gray-100 bg-gray-100 flex flex-col justify-around items-center gap-5 p-5">
        <div className="font-bold text-3xl lg:text-5xl text-center">
        Schedule an Appointment
        </div>
        <div className="text-xl font-light text-center">
        Fill out the form below to schedule your pets next grooming appointment.
        </div>
        
        <div className="text-sm  w-2/3 md:w-[300px] flex flex-col justify-center items-center gap-2">
            Pets Name
        <Input type="text" placeholder="pets name" className="bg-white"></Input>
            </div>
            <div className="text-sm  w-2/3 md:w-[300px] flex flex-col justify-center items-center gap-2">
            Name
        <Input type="text" placeholder="name" className="bg-white"></Input>
            </div>
            <div className="text-sm  w-2/3 md:w-[300px] flex flex-col justify-center items-center gap-2">
            Email
        <Input type="email" placeholder="email" className="bg-white"></Input>
            </div>
            <div className="text-sm  w-2/3 md:w-[300px] flex flex-col justify-center items-center gap-2">
            Phone Number
        <Input type="number" placeholder="phone number" className="bg-white"></Input>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
        Select Date
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow bg-white"
    />
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
                Additional notes
                <Textarea placeholder="Type your message here." className="bg-white  w-[300px]"></Textarea>
            </div>
            <Toaster richColors></Toaster>
            <Button className="" onClick={()=>{
                toast.success("Appointment schduled")
            }}>Schedule Appointment</Button>
    </div>
}