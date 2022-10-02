import Card from "./Gallery/Card";


import { NavLink } from "react-router-dom";


import { getGallery } from "../data/gallery";

export default function Gallery() {
    const gallery = getGallery();

   
   
    
    return (
        <div className="min-h-screen">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
            {gallery.map((item, idx) => {
                return (
               
                <NavLink
                className="navlink"
                to={`/gallery/${item.id}`}
                key={idx}
              >
                <Card  item={item} />
              </NavLink>)
            
            })
            }

            
            
            
            </div>
           
        
        </div>
         
    )
}