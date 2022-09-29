import { useContext } from "react";

import icon from '../images/homeimage.jpg';


import MobileMenuContext from "../Contexts/MobileMenuContext";

export default function Contact() {
  const [menuBtn] = useContext(MobileMenuContext);
  return menuBtn ? (
    <div className="w-full h-[80vh] fixed top-[680px] sm:static  sm:top-0 text-black transition-all  ease-in duration-500">
          <h1> Contact</h1>
          <img src={icon} alt="icon" className='  w-16'/>
    </div>
  ) : (
    <div className="w-full h-[80vh] text-black ">
              <h1>Contact</h1>
              <img src={icon} alt="icon" />
    </div>
  );
}
