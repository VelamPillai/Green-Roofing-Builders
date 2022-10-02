export default function ContactForm() {
    return (
        <div className='w-full  flex flex-col justify-center items-center bg-[#12122b] p-2 md:p-4 lg:p-6'>
        <p className='font-light md:text-2xl lg:text-4xl'> HAVE A QUESTION?</p>
          <p className='text-3xl md:text-4xl lg:text-6xl font-light text-green-500'>Send us a Message </p>
          <div className='mt-6 md:mt-8 flex flex-col justify-center items-center'>
            <div className='flex justify-center '>
            <input type="text" placeholder ='Name' className='p-2 md:p-6 w-1/4 md:w-2/4 rounded-md h-10 mr-2 ' />
            <input type="text" placeholder ='Email' className=' p-2 md:p-6 w-1/4 md:w-2/4 rounded-md h-10'  />
            </div>
            <textarea className='mt-2 p-2 md:p-6 rounded-md w-2/4 md:w-full h-[200px] md:h-[400px]' placeholder='Message'></textarea>
            <button className='border-green md:w-1/4 bg-green-500 p-2 mt-2 border-1 rounded-sm hover:bg-white hover:text-green-600'>Send Message</button>
            
          </div>

        </div>
    )
}