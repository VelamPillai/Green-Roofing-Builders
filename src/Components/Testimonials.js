
import { useContext } from "react";

import MobileMenuContext from "../Contexts/MobileMenuContext";
export default function Testimonials() {
    const [menuBtn ] = useContext(MobileMenuContext);
    return (
        menuBtn?<div className = 'w-full h-[100vh] fixed sm:static top-[580px] sm:top-0 text-black '><h1  > Testimonial</h1></div > : <div className='w-full h-[80vh] text-black '><h1 >Testimonials</h1></div>
    )
}

