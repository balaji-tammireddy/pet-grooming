import { Button } from "./ui/button";

export default function Hero(){
    return <div className="w-11/12 rounded-sm shadow-sm h-[500px] border-2 border-gray-100 flex">
        <div className="w-7/12 h-full m-3  flex gap-10 flex-col justify-center items-center">
        <div className="text-7xl font-bold">
        Unleash Your Pets Beauty
        </div>
        <div className="text-lg">
        Experience the ultimate in pet grooming with our expert team. From full-service spa treatments to quick touch-ups, we have everything your furry friend needs to look and feel their best.
        </div>
        <div className="flex justify-start w-full">
        <Button size={"lg"}>Book Now</Button>
        </div>
        </div>
        <div className="w-5/12 h-full m-3  flex justify-center items-center">
        <img src="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg" className="h-96 rounded-sm ">

        </img>
        </div>
    </div>
}