import React from "react";
import "./style.css";
import {GoLinkExternal ,GoMarkGithub} from "react-icons/go";

const CardFront = ({
    projectImage,
    title,
   livelink,
   codelink

}) => {
  return (
    <div className="front">
       
              
          <img src={ projectImage} class="card-img-top" alt="..." />
           
            <div class="card-footer">
              
              <h4 class="card-title">{title}</h4>
              
              <a
                href={livelink}
                target="_blank"
                rel="noopener noreferrer"
                 className="trailer-btn"
               >
                  <GoLinkExternal />
              </a>
               
               <a
                href={codelink}
                target="_blank"
                rel="noopener noreferrer"
                 className="github-btn"
               >
                  <GoMarkGithub />
                </a>
            </div>
     
    </div>
  );
};
export default CardFront;
