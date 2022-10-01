import Address from './Address';
import SocialMedia from './SocialMedia';
import NewsLetter from './NewsLetter';



import footericon from '../../images/footericon.png';
function Footer() {
   
    return (
         

        <div className='w-[100vw]  flex flex-col  justify-center items-center flex-wrap  text-black bg-green-500 p-2  '>
            <img src={footericon} alt='footer icon' className = 'w-10 h-10  border-green-600 border-2  rounded-3xl  hover:border-green-800'/>
            <div className='   flex flex-col sm:flex-row justify-center items-center p-3 border-b  border-black '>
           
                <Address />
                 <NewsLetter />
                <SocialMedia /> 
            </div>
            <div className = 'text-center'>Copyright 2022 @ Green Roofing Builders .All rights reserved.</div>
        </div>
    )
}

export default Footer;