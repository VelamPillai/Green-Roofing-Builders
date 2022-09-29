import { NavLink } from 'react-router-dom';
import NavBar from "./NavBar";
import SiteTitle from "./SiteTitle";
export default function Header() {
    return (
        <div className='p-5 text-center  sm:flex sm:justify-around sm:items-center sm:flex-row md:items-center bg-white shadow relative'>
            <NavLink to='/' ><SiteTitle /></NavLink>           
            <NavBar />
        </div>
    )
}