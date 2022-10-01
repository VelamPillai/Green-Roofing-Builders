import {ImBubbles } from 'react-icons/im';

export default function Message() {
    return (
        <div className='w-full flex flex-col justify-around items-center   bg-[#12122b] p-2 m-0'>
        <div className='w-full flex flex-col justify-center items-center'>
<ImBubbles className='text-5xl  text-green-500'/>
          <p className='text-3xl font-bold'>WELCOME</p>
          <p className='p-4 text-center w-10/12 font-light'>When you're thinking about building a new home, you're sometimes full of questions.  We're here to help!

          </p>
          <p className=' p-2 text-center w-8/12 font-light'>Send us a message and we'll get back to you quickly.</p>

            </div>
            </div>
    )

}