"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  async function login() {
    try {
      setLoading(true)
      const resp = await axios.post("/api/login", {
        email,
        password
      });
      if (resp.data.success) {
        localStorage.setItem("userId", resp.data.id);
        toast.success("login successful");
        router.push("/services");
      } else {
        toast.error(resp.data.message);
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error("error");
    }
  }
  return (
    <div className=" w-full flex min-h-screen flex-col items-center justify-center gap-10 bg-black text-white">
      <div className="w-80 h-96   shadow-md rounded-lg flex flex-col justify-center items-start gap-3">
        <Link href={"/register"}>Dont have an account? register</Link>
        <label >email</label>
        <Input onChange={(e) => {
          setEmail(e.target.value);
        }} className="border-2 w-[90%] h-12 rounded-lg"></Input>
        <label >password</label>
        <Input onChange={(e) => {
          setPassword(e.target.value);
        }} className="border-2 w-[90%] h-12 rounded-lg"></Input>
        <Button onClick={() => {
          login()
        }}>Login</Button>

      </div>
    </div>
  );
}
