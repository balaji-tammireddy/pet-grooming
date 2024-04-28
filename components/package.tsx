import Packagecard from "./packagecard";

export default function Package(){
    return <div className="w-11/12 rounded-sm shadow-sm h-[500px] border-2 border-gray-100 bg-gray-100 flex flex-col justify-center items-center gap-5" >
        <div className="text-5xl font-extrabold">Our Grooming Packages</div>
        <div className="text-xl w-1/2 flex text-center">Choose from our selection of premium grooming packages to keep your pet looking and feeling their best.</div>
        <div className="flex justify-around items-center w-full">
        
        <Packagecard title="Basic Grooming" desc="A simple bath, brush, and trim to keep your pet clean and comfortable." price="Rs.500"></Packagecard>
        <Packagecard title="Premium Grooming" desc="A full-service spa experience including a deep cleansing bath, haircut, and pampering treatments.

" price="Rs.1000"></Packagecard>
        <Packagecard title="Deluxe Grooming" desc="The ultimate pampering experience with a luxurious bath, full haircut, and soothing treatments." price="Rs.2000"></Packagecard>
        </div>
    </div>
}