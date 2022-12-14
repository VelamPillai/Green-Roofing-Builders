import { getTestimonials } from "../../data/testimonials";


export default function Content({display}) {
    const content = getTestimonials();

    
    return (
        <div className='flex flex-col  justify-center items-center m-4 p-2  md:m-6 md:p-4 lg:m-8 lg:p-6 italic'>
            {content.map((item, idx) => idx <= (display? content.length : 1) && (<h1 key={idx} style={idx % 2 ? { backgroundColor: '#154e15be' ,color:'white'}: {backgroundColor:'#afebafbe'}} className='w-3/4 m-2 p-4 md:m-4 md:p-6 md:text-2xl lg:m-6 lg:p-8 lg:text-4xl rounded-2xl'> {item.message}</h1>))}

        </div>
    )
}