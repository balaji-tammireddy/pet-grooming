"use client"

import Hero from "@/components/hero"
import Package from "@/components/package"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchService() {
            try {
                const res = await axios.get("/api/services")
                setServices(res.data.services)
                setLoading(false)
            } catch (error: any) {
                console.log(error.message)
                setLoading(false)
                setError(true)
            }
        }
        fetchService()
    }, [])
    if (loading) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            Loading...
        </div>
    }
    if (error) {
        return <div className="w-full min-h-screen flex justify-center items-center">
            Error...
        </div>
    }
    return <div className="w-full min-h-screen flex gap-10 my-10 flex-col justify-center items-center">
        <Hero />
        <Package services={services} />
    </div>
}