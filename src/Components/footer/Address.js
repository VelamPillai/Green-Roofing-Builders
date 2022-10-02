import { AiFillPhone,AiOutlineMail } from "react-icons/ai";

export default function Address() {
    
    return (
        
        <div className="p-5 border-b  border-black sm:border-b-0 sm:border-r  sm:border-black md:text-2xl">
            < h1 > 9675 Master Street, #345</h1 >
            < h1 > Master City </h1 >
            < h1 className="flex flex-row items-center  "> <AiFillPhone /> (111)123-4567   </h1 >
            < h1 className="flex flex-row items-center  "> <AiOutlineMail /> info@greenroffing.com</h1 >
            </div>
            
        
    )
}