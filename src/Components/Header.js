import { NavLink } from 'react-router-dom';
import NavBar from "./NavBar";
import SiteTitle from "./SiteTitle";
export default function Header() {
    return (
        <div className='text-center sm:m-10 sm:flex sm:justify-around sm:items-center sm:flex-row md:items-center '>
            <NavLink to='/' ><SiteTitle /></NavLink>           
            <NavBar />
        </div>
    )
}