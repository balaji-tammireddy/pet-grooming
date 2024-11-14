export default function Testimonailcard(props: any) {
    return <div className="min-h-80 w-64 lg:w-80 rounded-sm bg-white flex justify-around gap-2 items-center flex-col border-2 border-gray-100 shadow-sm dark:bg-black dark:text-gray-200 dark:border-zinc-800">
        <div className="font-bold text-center text-lg lg:text-xl w-11/12">
            {props.review}
        </div>
        <div className="font-bold flex flex-col justify-center items-center">
            {props.name}
            <div className="font-light">
                Satisfied Customer
            </div>
        </div>

    </div>
}