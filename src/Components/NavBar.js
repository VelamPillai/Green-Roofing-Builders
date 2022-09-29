import { NavLink } from "react-router-dom";
import { useState ,useContext } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import MobileMenuContext from '../Contexts/MobileMenuContext';

export default function NavBar() {
  const [menuBtn, setMenuBtn] = useContext(MobileMenuContext);
  

  function handleClick(e) {
    setMenuBtn((menuBtn) => !menuBtn);
    

  }
  return (
    <div >
      <button onClick={handleClick} className="sm:hidden">
        <FaAngleDoubleDown
          style={menuBtn ? { display: "none" } : { display: "block" }}
          className="block text-3xl text-green-600 border-green-600 border-solid border-4"
        />
        <FaAngleDoubleUp
          style={menuBtn ? { display: "block" } : { display: "none" }}
          className="block text-3xl bg-green-600  text-white border-green-600 border-solid border-4 "
        />
      </button>

    
        <div style={menuBtn ? { opacity:100,top:'100%' } : {opacity:0 ,top:'-280px'} } className="  flex justify-center items-center flex-col  sm:hidden z-[-1]  w-full absolute left-0  transition-all  ease-in duration-500 bg-white top-[-400px] text-black "> 
          <NavLink  to = '/about' className=" navHover my-3 " onClick={handleClick}>
            About
          </NavLink>
          <NavLink to = '/gallery' className=" navHover my-2 " onClick={handleClick}>
            Gallery
          </NavLink>
          <NavLink to = '/testimonials' className=" navHover my-2 " onClick={handleClick}>
            Testimonials
          </NavLink>
          <NavLink to = '/contact' className=" navHover  my-2" onClick={handleClick}>
            Contact
          </NavLink>
        </div>
     
      <div className=" hidden sm:flex sm:justify-center sm:items-center sm:flex-row  sm:text-sm md:text-base  text-black ">
        <NavLink to = '/about' className="navHover mr-5">About</NavLink>
        <NavLink to = '/gallery' className="navHover mr-5">Gallery</NavLink>
        <NavLink to = '/testimonials' className="navHover mr-5 ">Testimonials</NavLink>
        <NavLink to = '/contact' className="navHover mr-5">Contact</NavLink>
      </div> 
    </div>
  );
}
