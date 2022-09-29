import { AiOutlineMail} from "react-icons/ai";

export default function Address() {
    
    return (
        
        <div className="p-5 border-b  border-black sm:border-b-0 sm:border-r  sm:border-black">
           
            < h1 className="flex flex-row items-center  "> <AiOutlineMail className='mr-2 text-3xl' />  <div className="text-[18px]">SIGN UP FOR OUR NEWSLETTER</div>   </h1 >
            <br></br>
            <div className="flex flex-row justify-center items-center">
                <input type='email' className="w-3/4 h-6 bg-gray-100 focus:bg-white"  />
                <button className="border border-black p-1 m-1 text-[16px] w-1/4 h-6 flex justify-center items-center hover:bg-white hover:text-gray-600">Sign Up</button>
            </div>
            
            </div>
            
        
    )
}