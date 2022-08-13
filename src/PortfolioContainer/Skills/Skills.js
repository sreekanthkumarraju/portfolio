import React from 'react';
import './skills.css'
import LinearWithValueLabel from '../ProgressBar/LinearWithValueLabel';

export default function Skills(){
    return(
    
        <div id="skills" class="container skills">
            <p className='skills-section'>Skills</p>
        <div class="  row row-cols-2 row-cols-lg-2 g-2 g-lg-2 mt-2">
          <div class=" col ">
            <div class="p-3  mt-4 border tech">
               <p className=' technology'>HTML5</p>
               <LinearWithValueLabel  number={80}/>
            </div>
          </div>
          <div class="col ">
            <div class="p-3   mt-4 border tech">
                <p className=' technology'>CSS</p>
                <LinearWithValueLabel number={75}/> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech ">
                  <p className=' technology'>Javascript</p>
                  <LinearWithValueLabel number={80} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3 mt-4 border tech">
                  <p className='technology'>Bootstrap</p>
                  <LinearWithValueLabel number={75} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech">
                  <p className='technology'>Reactjs</p>
                  <LinearWithValueLabel number={80} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech">
                  <p className='technology'>Node js</p>
                  <LinearWithValueLabel number={75} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech">
                  <p className='technology'>Express </p>
                  <LinearWithValueLabel number={75} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech">
                  <p className=' technology'>MySQL</p>
                 <LinearWithValueLabel number={80} /> 
            </div>
          </div>
          <div class="col">
            <div class="p-3   mt-4 border tech">
                  <p className=' technology'>MongoDB</p>
                  <LinearWithValueLabel number={75} />
            </div>
          </div>
          <div class="col">
            <div class="p-3  mt-4 border tech">
                  <p className='technology'>Java</p>
                  <LinearWithValueLabel number={80} /> 
            </div>
          </div>
        </div>
      </div>
    )
}