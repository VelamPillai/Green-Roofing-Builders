import Card from "./Gallery/Card";
import { Route ,Routes } from "react-router-dom";

import { NavLink } from "react-router-dom";
import Project from "./Gallery/Project";

import { getGallery } from "../data/gallery";

export default function Gallery() {
    const gallery = getGallery();

   
   
    
    return (
        <div>
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