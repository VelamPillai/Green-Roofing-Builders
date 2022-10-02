
import { getProject } from "../../data/gallery";


import { useParams } from "react-router-dom";


import gallery1 from '../../images/gallery1.jpg';
import gallery2 from '../../images/gallery2.jpg';
import gallery3 from '../../images/gallery3.jpg';

import gallery4 from '../../images/gallery4.jpg';
import gallery5 from '../../images/gallery5.jpg';
import gallery6 from '../../images/gallery6.jpg';

import gallery7 from '../../images/gallery7.jpg';
import gallery8 from '../../images/gallery8.jpg';
import gallery9 from '../../images/gallery9.jpg';

const gallery = [
  /*  { image: 'images/home1.jpg' },
   { image: 'images/home2.jpg' },
   { image: 'images/home3.jpg' }, */
   { image: gallery1 },
   { image: gallery2},
  { image: gallery3 },
  { image: gallery4 },
  { image: gallery5},
  { image: gallery6 },
  { image: gallery7 },
   { image: gallery8},
   { image: gallery9 },
  
   
] 


export default function Project() {
    const  projectId  = useParams();
    const item = getProject( Number(projectId.id));
    console.log(item);
    console.log('hello',projectId);
    return (
        
            item ? 
            
                (<div
                  
                  className="m-4  min-h-screen w-[3/4] flex flex-col justify-center items-center bg-green-400"
            >
          <img src={gallery[`${item.id-1}`].image} className="w-[500px] h-[300px] p-4 md:p-6 md:w-[1000px] md:h-[600px]" alt={`gallery${item.id}`} />
               
                  <div className="p-4 shadow-lg ">
                    <p className='font-light md:text-3xl '>
                      
                      <span className="text-gray-500  font-bold ">
                        SquareFeet : {'  '}
                      </span>
                      {item.SquareFeet}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Bedrooms :{'  '}
                      </span>
                      {item.Bathrooms}
                    </p>
                    <p className='font-light md:text-3xl '>
                      
                      <span className="text-gray-500  font-bold ">
                        Bathrooms :{'  '}
                      </span>
                      {item.Bathrooms}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Category :{'  '}
                      </span>
                      {item.category}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Interior:{'  '}
                      </span>
                      {item.interior}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Utilities :{'  '}
                      </span>
                      {item.Utilities}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Exterior :{'  '}
                      </span>
                      {item.Exterior}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Insulation :{'  '}
                      </span>
                      {item.Insulation}
                    </p>
                    <p className='font-light md:text-3xl '>
                     
                      <span className="text-gray-500  font-bold ">
                        Flooring :{'  '}
                      </span>
                      {item.Flooring}
                    </p>
                      </div>
                     
                </div> ): <p>No project found</p>
    )
}