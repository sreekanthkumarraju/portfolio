import React, { useState } from "react";
import './Resume.css'
export default function Resume(){
 
    const [status,setStatus]=useState('')

   

    return(
        <div className="resume-container">
             <p className="resume-header">Resume</p>
             <p className="resume-explain">My formal Bio Details</p>
            
  
            <div class=" resume-card">
            {/* row g-0 */}
                <div class="sidenav">
                {/* col-md-4 */}
                  <nav className="sidebar">
                    
                    <ul className="sidebar-list">
                       <li className={status} onClick={ ()=> setStatus('active')}>
                           
                           <a href="#section-1"  >
                              <img src="https://img.icons8.com/material-sharp/24/undefined/student-male.png" className="icon"/>
                              <span class="title"> Education</span>
                               
                            </a>
                        </li>
                       <li className={status} onClick={()=>  setStatus('active')}>
                         
                           <a href="#section-2" >
                             <img src="https://img.icons8.com/material-two-tone/24/undefined/web-laptop.png" className="icon"/>
                              <span className="title">Programming skills</span>  
                            </a>
                        </li>
                       <li className={status} onClick={ ()=> setStatus('active')}>
                          
                           <a href="#section-3" >
                             <img src="https://img.icons8.com/nolan/30/project.png" className="icon"/>
                              <span className="title">Projects</span> 
                            </a>
                        </li>
                       <li className={status} onClick={()=>  setStatus('active')}>
                           
                           <a href="#section-4" >
                             <img src="https://img.icons8.com/material/24/undefined/hand-holding-heart--v2.png" className="icon"/>
                              <span className="title"> Interests</span> 
                            </a>
                        </li>
                     
                    </ul>
                 </nav>
                </div>
    
                <div className="rightdiv">
                {/* class="col-md-8" */}
                 
                   <main>
                     
                     <section id="section-1">
                        <dl>
                            <dt>
                                Sree Vidyanikethan Engineering College
                            </dt>
                            <dd>Bachelor of Technology</dd>
                            <dd>Information Technology</dd>
                            
                            <dt>
                                Sree Chaitanya jr College
                            </dt>
                            <dd>Intermediate</dd>
                            <dd>MPC</dd>
                       
                            <dt>
                               Vasishtha High School
                            </dt>
                            
                            <dd>Primary school Education</dd>
                            <dd>secondary school Education</dd>
                            
                        </dl>
                     </section>

                     <section id="section-2">
                         
                          <ul className="skills-list container">

                            <div className="list-item">
                              <li>HTML</li>  
                              <div class="progress">
                               
                                   <div class="progress-bar bg-danger" role="progressbar" style={{"width": "95%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>  
                            
                            <div className="list-item">
                              <li>CSS</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>BootStrap</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "90%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>JavaScript</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>React</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "80%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>SQL</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>MongoDB</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "85%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>Node js</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "75%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div className="list-item">
                              <li>Express js</li>
                              <div class="progress">
                                <div class="progress-bar bg-danger" role="progressbar" style={{"width": "75%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                          </ul>
                      </section>
                     <section id="section-3">
                      
                        <ul className="project-details">
                            <div className="project">
                              <li className="project-head">Complete  User Authentication page</li>  
                              <p className="project-description">User Authenication with Registration page, Login page,forgot password page and reset password page </p>
                           
                              
                            </div>

                            <div className="project">
                              <li className="project-head">Full stack CRUD APP</li>  
                              <p className="project-description">Creating a User with Create user page and view a user by id ,edit user by id and delete a user by id </p>
                             
                              
                            </div>

                            <div className="project">
                              <li className="project-head">Quiz Application</li>  
                              <p className="project-description">Creating a question ,editing a question ,deleting a qusetion and attempting a quiz</p>
                            </div>

                            <div className="project">
                              <li className="project-head">CRM application</li>  
                              <p className="project-description">Creating Customer Relationship management application with complete user Authentication and specifying access roles </p>
                            </div>

                            <div className="project">
                              <li className="project-head">CRM application</li>  
                              <p className="project-description">Creating Customer Relationship management application with complete user Authentication and specifying access roles </p>
                            </div>
                        
                        </ul>
                      </section>

                     <section id="section-4">
                         <div className="hobbies-section">
                       <ul className="hobbies">
                           <div className="hobbies-list">
                               <li>Reading</li>
                           </div>
                           <div  className="hobbies-list">
                               <li>Music</li>
                           </div>
                           <div  className="hobbies-list">
                               <li>Meditaion</li>
                           </div>
                           <div  className="hobbies-list">
                               <li>Exercising</li>
                           </div>
                           <div  className="hobbies-list">
                               <li>Cooking</li>
                           </div>
                           <div  className="hobbies-list">
                               <li>Teenis</li>
                           </div>
                          
                       </ul>
                    </div>
                      </section>
                      
                    </main>
                 
                </div>
             </div>
           </div>
        
    )
}