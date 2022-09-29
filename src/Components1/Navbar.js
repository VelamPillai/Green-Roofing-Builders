import React, { useState } from 'react';

import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import SiteTitle from '../Components1/SiteTitle';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full md:h-[120px] flex justify-between items-center px-10 shadow bg-white z-10' >
            <div className='h-[100%]'>
                <SiteTitle />
            </div>
            {/* menu */}
            
            <ul className='hidden md:flex'>
            
                <li className='navHover'>About</li>
                <li className='navHover'>Gallery</li>
                <li className='navHover'>Testimonial</li>
                <li className='navHover'>Contact</li>
            </ul>
            {/* hamburger */}
            <div className='md:hidden text-3xl text-green-800 border-green-800 border-solid border-4 z-10' onClick={handleClick}>
               {nav?<FaAngleDoubleUp/>:<FaAngleDoubleDown/>} 
            </div>
            {/* mobile menu */}
            <ul className={!nav?'hidden ':'absolute top-0 right-0 w-full h-[100vh]  bg-green-300 flex flex-col justify-center items-center' }>
                <li className='py-6 text-3xl navHover'>About</li>
                <li className='py-6 text-3xl navHover'>Gallery</li>
                <li className='py-6 text-3xl navHover'>Testimonial</li>
                <li className='py-6 text-3xl navHover'>Contact</li>
            </ul>

        </div>
    )
    
}

export default Navbar;