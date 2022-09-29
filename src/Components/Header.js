import { NavLink } from 'react-router-dom';
import NavBar from "./NavBar";
import SiteTitle from "./SiteTitle";
export default function Header() {
    return (
        <div className=' p-8 text-center  sm:flex sm:justify-around sm:items-center sm:flex-row md:items-center bg-white shadow relative border-box' >
            <NavLink to='/' ><SiteTitle /></NavLink>           
            <NavBar className='mt-1'/>
        </div>
    )
}