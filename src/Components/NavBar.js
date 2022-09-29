import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import MobileMenuContext from "../Contexts/MobileMenuContext";

export default function NavBar() {
  const [menuBtn, setMenuBtn] = useContext(MobileMenuContext);

  function handleClick(e) {
    setMenuBtn((menuBtn) => !menuBtn);
  }
  return (
    <div >
      <button onClick={handleClick} className="md:hidden">
        <FaAngleDoubleDown
          style={menuBtn ? { display: "none" } : { display: "block" }}
          className="block text-3xl text-green-600 border-green-600 border-solid border-4"
        />
        <FaAngleDoubleUp
          style={menuBtn ? { display: "block" } : { display: "none" }}
          className="block text-3xl bg-green-600  text-white border-green-600 border-solid border-4 "
        />
      </button>

      <div
        style={
          menuBtn
            ? { opacity: 100, top: "380px" }
            : { opacity: 0, top: "-350px" }
        }
        className="  flex justify-center items-center flex-col  md:hidden z-[-1]  w-full absolute left-0 transition-all  ease-in-out duration-500 bg-white  text-black "
      >
        <NavLink
          to="/about"
          className=" navHover my-3 border-box p-1"
          onClick={handleClick}
        >
          About
        </NavLink>
        <NavLink
          to="/gallery"
          className=" navHover my-2 border-box p-1"
          onClick={handleClick}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/testimonials"
          className=" navHover my-2 border-box p-1"
          onClick={handleClick}
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/contact"
          className=" navHover  my-2 border-box p-1"
          onClick={handleClick}
        >
          Contact
        </NavLink>
      </div>

      <div className=" hidden md:flex md:justify-center md:items-end md:flex-row  md:text-sm lg:text-base  text-black lg:justify-end lg:items-center">
        <NavLink to="/about" className="navHover mr-1 p-1 border-box">
          About
        </NavLink>
        <NavLink to="/gallery" className="navHover mr-3 p-1 border-box">
          Gallery
        </NavLink>
        <NavLink to="/testimonials" className="navHover mr-3 p-1 border-box ">
          Testimonials
        </NavLink>
        <NavLink to="/contact" className="navHover mr-3 p-1 border-box">
          Contact
        </NavLink>
      </div>
    </div>
  );
}
