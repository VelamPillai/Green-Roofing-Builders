import Message from './contact/message';

import contactPageImage from '../images/home6.jpg';
import ContactForm from './contact/ContactForm';

export default function Contact() {
 
  return (
    <div className="w-[100vw] text-black flex flex-col flex-wrap justify-center items-center m-0   md:pt-8 bg-green-600 text-white">
      <img src={contactPageImage} className='w-[50vw] m-4 rounded-lg' />
      <div className='w-full md:flex  md:flex-row-reverse'>
      <Message />
        <ContactForm />
      </div>
      
     </div>
      
  )
}
