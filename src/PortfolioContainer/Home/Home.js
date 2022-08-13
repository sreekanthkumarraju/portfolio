import React from "react";
import Profile from './Profile/Profile';
import Footer from "./Footer/Footer";
import './Home.css'
import About from "../AboutMe/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Contact from "../ContactMe/Contact";
import Navbar from "../Navbar";
import Projects from "../Projects/Projects";


export default function Home(){
    return(
     <main>
        <div className="home-container">
              <Navbar/> 
              <Profile/>
              <Footer/>
              <About/>
              <Skills/>
              <Projects/>
              <Contact/>
        </div>
      </main>  
    )
}