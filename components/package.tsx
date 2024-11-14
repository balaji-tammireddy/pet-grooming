
import Packagecard from "./packagecard";

export default function Package(props: any) {
    return <div className="w-11/12 rounded-sm shadow-sm min-h-[500px] border-2 border-gray-100 bg-gray-100 flex flex-col justify-center items-center gap-5 p-5 dark:bg-zinc-900 dark:text-gray-100 dark:border-zinc-800" >
        <div className="text-3xl lg:text-5xl font-extrabold text-center">Our Grooming Packages</div>
        <div className="text-xl w-1/2 flex text-center">Choose from our selection of premium grooming packages to keep your pet looking and feeling their best.</div>
        <div className=" flex justify-center items-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-full  gap-2">
                {props.services.map((service: any) => {
                    return <Packagecard id={service.id} title={service.name} desc={service.description} price={service.price}></Packagecard>
                })}
            </div>
        </div>
    </div>
}