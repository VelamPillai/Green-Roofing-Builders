
import { useContext } from "react";

import MobileMenuContext from "../Contexts/MobileMenuContext";

export default function About() {
    const [menuBtn ] = useContext(MobileMenuContext);
    
    return (
        
            menuBtn?<div className = 'w-full h-[80vh] fixed top-[680px]  sm:static  sm:top-0 text-black transition-all  ease-in duration-500'><h1  > About</h1></div > : <div className='w-full h-[80vh] text-black '><h1 >About</h1></div>
       
       
    )
}