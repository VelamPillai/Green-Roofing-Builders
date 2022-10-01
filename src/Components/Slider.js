import { useState, useRef, useEffect } from 'react';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const homeImage = [
    { image: '/images/home1.jpg' },
    { image: '/images/home2.jpg' },
    { image: '/images/home3.jpg' },
   
   
    
]

let count = 0; 
export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    /*  const count = useRef(0);  */
    const slideRef = useRef();
    const slideInterval = useRef();
    function handleOnNextClick() {
        count = (count + 1) % homeImage.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }
    function handleOnPreviousClick() {
        count =((currentIndex+ homeImage.length -1) % homeImage.length )
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }
    const startSlider = () => {
        slideInterval.current=setInterval(() => { handleOnNextClick()},3000)
    } 
    const pauseSlider = () => {
        clearInterval(slideInterval.current);
    }
    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    }
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);
        startSlider();
        return () => {
            pauseSlider();
        }
    }, []);
    
     
    return (
        <div ref={slideRef} className="w-full  select-none relative">
           
             <div className="aspect-w-16 aspect-h-9 "><img src={homeImage[currentIndex].image} alt='home' className='w-full h-screen'/></div> 
            
            {/* left and right slider button */}
            <div className="absolute  w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-white ">
                <button onClick={handleOnNextClick} className='bg-opacity-50 hover:bg-opacity-100 '><BsFillArrowLeftCircleFill/></button>
                <button onClick={handleOnPreviousClick}><BsFillArrowRightCircleFill/></button>
            </div> 

        </div>
    )
    
}
