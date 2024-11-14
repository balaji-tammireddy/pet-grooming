"use client"
import Link from "next/link";
import { LuDog } from "react-icons/lu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


export default function Navbar() {
    const router = useRouter()
    return <div className="w-full bg-white border-b-2 border-gray-100 shadow-sm h-16 flex justify-between items-center dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800">
        <div className=" flex justify-center items-center">
            <LuDog className="text-4xl"></LuDog>
            <div className="font-serif text-xl  pl-2">
                Paw-fect Pups
            </div>
        </div>
        <div className="flex w-1/4">
            <div className=" w-full h-10 hidden lg:flex justify-around items-center">
                <Link href="/services" className="cursor-pointer">Services</Link>
                <Link href="/bookings" className="cursor-pointer">Bookings</Link>
                <Button onClick={() => {
                    router.push("/")
                }} >Logout</Button>
            </div>
        </div>
    </div>
}