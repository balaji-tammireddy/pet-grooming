import { Button } from "./ui/button";

export default function Packagecard(props:any){
    return <div className="h-52 w-64 lg:w-96 rounded-sm bg-white flex justify-around items-center flex-col dark:bg-black dark:text-gray-100 dark:border-zinc-800">
            <div className="font-bold text-xl">
                {props.title}
            </div>
            <div className="text-center">
                {props.desc}
            </div>
            <div className="flex justify-around w-full">
                <div className="font-extrabold text-xl">
                    {props.price}
                </div>
                <Button>Book Now</Button>
            </div>
    </div>
}