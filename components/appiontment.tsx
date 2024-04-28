"use client"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Appiontment(){
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <div className="w-11/12 rounded-sm shadow-sm  border-2 border-gray-100 bg-gray-100 flex flex-col justify-around items-center gap-5 p-5">
        <div className="font-bold text-5xl">
        Schedule an Appointment
        </div>
        <div className="text-xl font-light">
        Fill out the form below to schedule your pets next grooming appointment.
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center">
            <div className=" flex  justify-around w-full">
                <div className="flex flex-col justify-center items-center gap-2 text-sm">Name
                    <Input className="bg-white" type="text" placeholder="name"></Input>
                </div>
                <div  className="flex flex-col justify-center items-center gap-2 text-sm">Email
                    <Input className="bg-white" type="email" placeholder="email"></Input>
                </div>
            </div>
           
        </div>
        <div className="text-sm font-light w-1/4 flex flex-col justify-center items-center gap-2">
            Pets Name
        <Input type="text" placeholder="pets name" className="bg-white"></Input>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
        selectdate
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow bg-white"
    />
            </div>
            <div className=" flex flex-col justify-center items-center">
                additional notes
                <Textarea placeholder="Type your message here." className="bg-white  w-[300px]"></Textarea>
            </div>
            <Button className="w-1/4">Schedule Appointment</Button>
    </div>
}