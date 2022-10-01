import { useState } from 'react';

import Content from "./Testimonials/Content";
export default function Testimonials() {
    const [display, setDisplay] = useState(false);
    
    const handleClick = () => {
        setDisplay(!display);

    }
    return (
        <div className="w-[100vw] text-black flex flex-col flex-wrap justify-center items-center m-0   md:pt-8  bg-[url('images/home6.jpg')]">
            <Content display={display} />
            <button className='bg-white m-4 p-4 border-black rounded-sm text-2xl hover:bg-green-300 hover:border-black border-2' onClick={handleClick}>{display?'View Less':'View More'}</button>
       </div>
    )
}

