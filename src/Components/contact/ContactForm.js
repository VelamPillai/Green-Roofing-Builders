export default function ContactForm() {
    return (
        <div className='w-full  flex flex-col justify-center items-center bg-[#12122b] p-2'>
        <p className='font-light'> HAVE A QUESTION?</p>
          <p className='text-3xl font-light text-green-500'>Send us a Message </p>
          <div className='mt-6 flex flex-col justify-center items-center'>
            <div className='flex justify-center '>
            <input type="text" placeholder ='Name' className='p-2 w-1/4 rounded-md h-10 mr-1 ' />
            <input type="text" placeholder ='Email' className=' p-2 w-1/4 rounded-md h-10'  />
            </div>
            <textarea className='mt-2 p-2 rounded-md w-2/4 h-[200px] ' placeholder='Message'></textarea>
            <button className='border-green bg-green-500 p-2 mt-2 border-1 rounded-sm hover:bg-white hover:text-green-600'>Send Message</button>
            
          </div>

        </div>
    )
}