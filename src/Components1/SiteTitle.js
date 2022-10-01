
import icon from  '../images/icon.png';

export default function SiteTitle() {
    
    return (
        <div className=' flex flex-col  items-center   '>
             <img src={icon} alt="icon" className='w-16 flex '/>
             <h1 className='font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-500 to-green-800 '>Green Roofing</h1>
        </div>
    )
}