import React from "react";

import FlippingCardFront from "./ProjectCardFront/index";
import FlippingCardBack from "./ProjectCardBack/index";
import "./style.css";
import {projectData} from './Data'

export default function Projects () {

console.log(projectData)

  function flipCard(cardID) {
      console.log(cardID)
      const card = document.getElementById(`${cardID}`);
      card.classList.toggle("flipped");
   }

  return (
    
   <div id="projects" >
    <p className="project-section">Projects</p>
    <div  className="card-container row row-cols-1 row-cols-md-2 g-4">
      {  projectData.map((project)=>{
        return(
       
          <div className="col">  
            <div className="card-wrapper" id={project.id} onClick={() => flipCard(project.id)}>
        
              <FlippingCardFront
                projectImage={project.Image}
                title={project.title}
                codelink={project.codelink}
                livelink={project.livelink}
               />

              <FlippingCardBack description={project.description} />
            </div> 

            
          </div>
        )
      }) 
      } 
       
     </div> 
   </div>  
     
  );
}
