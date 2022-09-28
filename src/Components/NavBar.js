import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

export default function NavBar() {
  const [menuBtn, setMenuBtn] = useState(false);
  

  function handleClick(e) {
    setMenuBtn((menuBtn) => !menuBtn);
  }
  return (
    <div>
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

      <div className={menuBtn ? "block" : "hidden"}>
        <div className=" mt-6 flex justify-center items-center flex-col  sm:hidden"> 
          <NavLink  to = '/about' className=" navHover mr-5 ">
            About
          </NavLink>
          <NavLink to = '/gallery' className=" navHover  mr-5">
            Gallery
          </NavLink>
          <NavLink to = '/testimonials' className=" navHover  mr-5 ">
            Testimonials
          </NavLink>
          <NavLink to = '/contact' className=" navHover  mr-5 ">
            Contact
          </NavLink>
        </div>
      </div>
      <div className=" hidden sm:flex sm:justify-center sm:items-center sm:flex-row  sm:text-sm md:text-base">
        <NavLink to = '/about' className="navHover mr-5">About</NavLink>
        <NavLink to = '/gallery' className="navHover mr-5">Gallery</NavLink>
        <NavLink to = '/testimonial' className="navHover mr-5 ">Testimonials</NavLink>
        <NavLink to = '/contact' className="navHover mr-5">Contact</NavLink>
      </div> 
    </div>
  );
}
