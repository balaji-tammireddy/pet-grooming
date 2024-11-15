"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"

import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function Bookings() {
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [open, setOpen] = useState(false)
    const [id, setId] = useState("")
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")
    const [card, setCard] = useState("")
    const [cvv, setCvv] = useState("")
    const [expiry, setExpiry] = useState("")
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const [openreview, setOpenreview] = useState(false)
    const handlesubmit = async () => {
        try {
            const res = await axios.put("/api/bookings", {
                id: id
            })
            if (res.data.success) {
                setCount(count + 1)
                toast.success("Payment successful")
            }
            else {
                toast.error("Payment failed")
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
    const hadlereview = async () => {
        try {
            const res = await axios.post("/api/reviews", {
                serviceId: id,
                review: review,
                rating: rating,
                userId: localStorage.getItem("userId")
            })

            if (res.data.success) {
                setCount(count + 1)
                toast.success("Payment successful")
            }
            else {
                toast.error("Payment failed")
            }
        } catch (error: any) {
            console.log(error.message)
        }
    }
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
    }, [count])
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
                    <div>

                        <p>{booking.paid ? <Button onClick={() => {
                            setId(booking.id)
                            setOpenreview(true)
                        }}>Give review</Button> : <Button onClick={() => {
                            setId(booking.id)
                            setOpen(true)
                        }}>Pay in Advance</Button>}</p>
                    </div>

                    {open && <div className="h-screen w-full bg-transparent backdrop-blur-sm bg-opacity-25  justify-center  items-center flex  fixed top-0 left-0">
                        <div className="flex flex-col justify-center bg-zinc-900 items-start h-72 my-10 w-80  z-10 px-5">
                            <label >Name</label>
                            <Input placeholder="name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <label >Expiry</label>
                            <Input onChange={(e) => {
                                setExpiry(e.target.value)
                            }} />
                            <label >CVV</label>
                            <Input onChange={(e) => {
                                setCvv(e.target.value)
                            }} />
                            <label >Card no</label>
                            <Input onChange={(e) => {
                                setCard(e.target.value)
                            }} />
                            <div className="w-full flex justify-between items-center">
                                <Button onClick={() => {
                                    setOpen(false)
                                }}>
                                    Cancel
                                </Button>
                                <Button onClick={() => {
                                    handlesubmit()
                                    setOpen(false)
                                }}>
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </div>}
                    {openreview && <div className="h-screen w-full bg-black  bg-opacity-25 backdrop-blur-sm  justify-center  items-center flex  fixed top-0 left-0">
                        <div className="flex flex-col rounded-md justify-center gap-5 bg-zinc-900 items-start h-72 my-10 w-80  z-10 px-5">
                            <label >review</label>
                            <Input placeholder="review" onChange={(e) => {
                                setReview(e.target.value)
                            }
                            } />
                            <label >Rating</label>
                            <Input onChange={(e) => {
                                setRating(e.target.value)
                            }} />
                            <div className="w-full flex justify-between items-center">
                                <Button onClick={() => {
                                    setOpenreview(false)
                                }}>
                                    Cancel
                                </Button>
                                <Button onClick={() => {
                                    hadlereview()
                                    setOpenreview(false)
                                }}>
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </div>}

                </div>
            })}
        </div>
    </div>
}