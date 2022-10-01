
import { getProject } from "../../data/gallery";


import { useParams } from "react-router-dom";


export default function Project() {
    const  projectId  = useParams();
    const item = getProject( Number(projectId.id));
    console.log(item);
    console.log('hello',projectId);
    return (
        
            item ? 
            
                (<div
                  
                  className="m-4 w-[3/4] flex flex-col justify-center items-center bg-green-400"
            >
                
               
                  <div className="p-4 shadow-lg ">
                    <p>
                      
                      <span className="text-gray-500  font-bold ">
                        SquareFeet :
                      </span>
                      {item.SquareFeet}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Bedrooms :
                      </span>
                      {item.Bathrooms}
                    </p>
                    <p>
                      
                      <span className="text-gray-500  font-bold ">
                        Bathrooms :
                      </span>
                      {item.Bathrooms}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Category :
                      </span>
                      {item.category}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Interior:
                      </span>
                      {item.interior}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Utilities :
                      </span>
                      {item.Utilities}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Exterior :
                      </span>
                      {item.Exterior}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Insulation :
                      </span>
                      {item.Insulation}
                    </p>
                    <p>
                     
                      <span className="text-gray-500  font-bold ">
                        Flooring :
                      </span>
                      {item.Flooring}
                    </p>
                      </div>
                     
                </div> ): <p>No project found</p>
    )
}