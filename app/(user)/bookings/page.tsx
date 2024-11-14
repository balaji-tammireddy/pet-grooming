"use client"

import axios from "axios"

import { useEffect, useState } from "react"

export default function Bookings() {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchBookings = async () => {
            setLoading(true)
            try {
                const res = await axios.patch("/api/bookings", {
                    id: localStorage.getItem("userId")
                })
                setBookings(res.data.bookings)
                setLoading(false)
            } catch (error: any) {
                console.log(error.message)
                setLoading(false)
                setError(true)
            }

        }
        fetchBookings()
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
    return <div className="w-full min-h-screen flex justify-center items-center">

        <div className="w-full grid grid-cols-4 px-10 flex-col gap-5 items-center justify-center">
            {bookings.map((booking: any) => {
                return <div key={booking
                    .id} className="w-full h-52 border-2   rounded-sm flex flex-col justify-around items-start pl-5">
                    <div className="font-bold text-xl">
                        Name:{booking.service.name}
                    </div>
                    <div className="text-center">
                        Date:{booking.date}
                    </div>
                    <div className="text-center">
                        Time:{booking.time}
                    </div>
                    <div className="text-center">
                        Price:{booking.service.price}
                    </div>

                </div>
            })}
        </div>
    </div>
}