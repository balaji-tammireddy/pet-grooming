import Packagecard from "./packagecard";

export default function Package(){
    return <div className="w-11/12 rounded-sm shadow-sm min-h-[500px] border-2 border-gray-100 bg-gray-100 flex flex-col justify-center items-center gap-5 p-5 dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800" >
        <div className="text-3xl lg:text-5xl font-extrabold text-center">Our Grooming Packages</div>
        <div className="text-xl w-1/2 flex text-center">Choose from our selection of premium grooming packages to keep your pet looking and feeling their best.</div>
        <div className=" flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-full  gap-2">
        
        <Packagecard title="Basic Grooming" desc="A simple bath, brush, and trim to keep your pet clean and comfortable." price="Rs.500"></Packagecard>
        <Packagecard title="Premium Grooming" desc="A full-service spa experience including a deep cleansing bath, haircut, and pampering treatments.

" price="Rs.1000"></Packagecard>
        <Packagecard title="Deluxe Grooming" desc="The ultimate pampering experience with a luxurious bath, full haircut, and soothing treatments." price="Rs.2000"></Packagecard>
        </div>
        </div>
    </div>
}