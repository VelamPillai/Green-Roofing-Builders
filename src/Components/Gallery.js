
import { useContext } from "react";

import MobileMenuContext from "../Contexts/MobileMenuContext";
export default function Gallery() {
    const [menuBtn ] = useContext(MobileMenuContext);
    return (
        menuBtn?<div className = 'w-full h-[100vh] fixed top-[580px] sm:static  sm:top-0  text-black transition-all  ease-in duration-500 '><h1  > Gallery</h1></div > : <div className='w-full h-[80vh] text-black '><h1 >Gallery</h1></div>
    )
}