import React from "react";
import Typical from 'react-typical'
import './Profile.css'
import {GoMarkGithub} from "react-icons/go";
import { SiHackerrank } from "react-icons/si";
import { DiCodepen} from "react-icons/di";
export default function Profile(){
    return(
        <div className="profile-container">
           
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                       <div className="colz-icon">         
                         <a href='https://github.com/sreekanthkumarraju' target="_blank">
                            <GoMarkGithub/>
                         </a>
                         <a href='https://www.hackerrank.com/dashboard' target="_blank"  style={{"marginLeft":"10px","fontsize":"20px"}}>
                            <SiHackerrank/>
                         </a>
                         <a href='https://www.guvi.in/code-kata' target="_blank"  style={{"marginLeft":"10px","fontSize":"20px"}}>
                            <DiCodepen/>
                         </a>
                      </div>
                    </div>
                      <div className="profile-details-name">
                          <span className="primary-text">
                              {" "}
                               
                               Hello,I AM <span className="highlighted-text">Sreekanth</span>
                              
                           </span> 

                      </div>
                      <div className="profile-details-role">
                          <span className="primary-text">
                                {""}
                                <h1>
                                  {" "}
                                  <Typical
                                   loop={Infinity}
                                   steps={[ 
                                       "MERN STack DEveloper",
                                       1000,
                                       "React DEveloper",
                                       1000,
                                       
                                   ]}
                                  />
                                </h1>
                                <span className="profile-role-tagline">
                                 A MERN STACK DEVELOPER
                                </span>
                          </span>

                      </div>
                      <div className="profile-options">
                         <a href="#contact" className="btn highlighted-btn mr-5">
                              Hire Me
                          </a>
                          <a href='https://drive.google.com/file/d/1_owpdrqKd3nqMT7zekugkEMWF1WA_VrA/view' target="_blank">
                              <button className="btn highlighted-btn">Get Resume</button>
                          </a>
                      </div>
                </div>

                <div className="profile-picture">
                    <div className="profile-pticture-background">

                    </div>
                </div>
            </div>

        </div>
    )
}
