import Card from "./Gallery/Card";

import {useState} from 'react';

import { NavLink } from "react-router-dom";


import { getGallery,getNewProject ,getFinishedProject} from "../data/gallery";

export default function Gallery() {

    let galleryArr=[];
   

    const [project , setProject] =useState('All');

   const selectProject =(e)=>{
    setProject(e.target.value);


   }

   const obj = {
    'All': getGallery(),
    'finished': getFinishedProject(),
    'New project' : getNewProject() 
    
}
   galleryArr = obj[project];
   
    
    
    return (
        <div className="min-h-screen">
          <div className="m-5 flex flex-col md:flex-row md:flex-wrap justify-center items-center">
          <h1 className='text-2xl'>Choose Project : {'  '} </h1>
          <select name="language" onChange={selectProject} className='text-2xl p-3 bg-green-300 m-5'>
         <option value="All" className='text-black'> All</option> 
        <option value="New project" className='text-black'> New Project</option>
        <option value="finished" className='text-black'>Finished Project</option>
       
        </select>
          </div>        
                     ( <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
            {galleryArr.map((item, idx) => {
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
</div>)
                   
        </div>
         
    )
}