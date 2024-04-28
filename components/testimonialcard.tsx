export default function Testimonailcard(props:any){
    return <div className="h-80 w-96 rounded-sm bg-white flex justify-around gap-2 items-center flex-col border-2 border-gray-100 shadow-sm">
        <div className="font-bold text-center text-2xl w-11/12">
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