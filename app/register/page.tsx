"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    async function register() {
        try {
            setLoading(true)
            const res = await axios.post("/api/signup", {
                email,
                password,
                name
            })
            if (res.data.success) {
                setLoading(false)
                localStorage.setItem("userId", res.data.id)
                toast.success("registered successfully")
                router.push("/services")
            }
            else {
                toast.error(res.data.message)
                setLoading(false)
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
    return (
        <div className="h-screen w-full  flex justify-center items-center bg-black text-white">
            <div className="w-80 gap-5 flex flex-col justify-center items-start">
                <Link href={"/"}>already have an account! login</Link>
                <label>Name</label>
                <Input onChange={(e) => {
                    setName(e.target.value)
                }} />
                <label>Email</label>
                <Input onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <label>Password</label>
                <Input onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <Button disabled={loading} onClick={() => register()}>{(loading) ? ".." : "register"}</Button>
            </div>
        </div>
    )
}