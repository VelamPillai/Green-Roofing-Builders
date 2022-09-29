import React, { useState } from 'react';

import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import SiteTitle from '../Components1/SiteTitle';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[120px] flex justify-between items-center px-10 shadow' >
            <div className='h-[100%]'>
                <SiteTitle />
            </div>
            {/* menu */}
            
            <ul className='hidden md:flex'>
                <li>About</li>
                <li>Gallery</li>
                <li>Testimonial</li>
                <li>Contact</li>
            </ul>
            {/* hamberger */}
            <div className='md:hidden text-3xl text-green-600 border-green-600 border-solid border-4'>
                <FaAngleDoubleDown />
            </div>
            {/* mobile menu */}
            <ul className='hidden '>
                <li>About</li>
                <li>Gallery</li>
                <li>Testimonial</li>
                <li>Contact</li>
            </ul>

        </div>
    )
    
}

export default Navbar;