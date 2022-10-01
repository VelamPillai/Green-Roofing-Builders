

import { getGallery } from "../../data/gallery";

export default function Card() {
   
    const gallery = getGallery();

    return (
        <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center'>
            {
                gallery.map((item, idx) => 
              <div key={idx} className='m-4 hover:opacity-60 hover:bg-black hover:text-white'>
               
                        <img src={item.image} className='w-[500px] h-[300px] ' />
                        <div className='p-4 shadow-lg '>
                            <p> <span className='text-gray-500  font-bold '>SquareFeet : </span> {item.SquareFeet}</p>
                            <p> <span className='text-gray-500  font-bold '>Bedrooms :</span>  {item.Bathrooms}</p>
                            <p> <span className='text-gray-500  font-bold '>Bathrooms :</span>  {item.Bathrooms}</p>
                        </div>

                        
            </div>
           )
           }
            
        </div>
       
    )
}


