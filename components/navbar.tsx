import { LuDog } from "react-icons/lu";
import { MdOutlinePets, MdPets } from "react-icons/md";

export default function Navbar(){
    return <div className="w-full bg-white border-b-2 border-gray-100 shadow-sm h-16 flex justify-between items-center dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800">
        <div className=" flex justify-center items-center">
            <LuDog className="text-4xl  "></LuDog>
            <div className="font-serif text-xl  pl-2">
            Paw-fect Pups
            </div>
            </div>
            <div className=" w-1/3 h-10 hidden lg:flex justify-around items-center">
                <div className="hover:underline  duration-100 cursor-pointer">
                     Services
                </div>
                <div className="hover:underline  duration-100 cursor-pointer">
                     Packages
                </div>
                <div className="hover:underline  duration-100 cursor-pointer">
                Testimonials
                </div>
                <div className="hover:underline  duration-100 cursor-pointer">
                Contact
                </div>
            </div>
    </div>
}