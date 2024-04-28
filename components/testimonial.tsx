import Testimonailcard from "./testimonialcard";

export default function Testimonials(props:any){
    return <div className="w-11/12 rounded-sm shadow-sm  border-2 border-gray-100 flex flex-col justify-around items-center gap-5 p-5 dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800">
        <div className="text-center font-bold text-3xl lg:text-5xl">
        What Our Customers Say
        </div>
        <div className="text-xl w-1/2 text-center font-light">
        Hear from our satisfied customers and see why they trust us to keep their pets looking and feeling their best.
        </div>
        <div className="flex justify-center items-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full   gap-2 ">
<Testimonailcard review="“The team at Paw-fect Pups is simply the best. They always take such great care of my pup and he always comes home looking and feeling his absolute best.“" name="Aditya singh"></Testimonailcard>
<Testimonailcard review="“I've been taking my dog to Paw-fect Pups for years and they always do an amazing job. The staff is friendly, the facilities are clean, and my dog always leaves happy and healthy.“" name="sakshi agarwal"></Testimonailcard>
<Testimonailcard review="“I can't say enough good things about Paw-fect Pups. The attention to detail and care they put into grooming my dog is unparalleled. I highly recommend them to anyone looking for top-notch pet care.“" name="abhiram verma"></Testimonailcard>
        </div>
        </div>
    </div>
}