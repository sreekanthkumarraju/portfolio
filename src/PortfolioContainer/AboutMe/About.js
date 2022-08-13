/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import './About.css';
import profile from '../../assets/Home/developer.avif'
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = ` I'm ,sreekanth kumar Raju .An Information Technology
graduate at Sree Vidyanikethan Engineering College.
I am very ambitious and hard working Web Developer.

  My interest in web development started during the 
lockdown and has been something that's been a part of 
my life from the past 1 year.

  I am a creative problem solver who loves to create 
and is always trying new things.I work with Javascript 
and its endless list of frameworks, primarily with
React.js, Nodejs.`;

  return (
      <div className="about-container" id="about">
        <h4 className="About-section">About Me</h4>
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" style={{"color":"rgb(240, 98, 73)"}} />
              <h5> Apprenticeship</h5>
              <small style={{"color":"rgb(240, 98, 73)"}}>ZEN class Full Stack Developement program</small>
              <small style={{"color":"rgb(240, 98, 73)","paddingLeft":"8px"}}> <a href="https://drive.google.com/file/d/1CVKaeHfOZTtzNUir9SnmQOnFWLIzgaGr/view?usp=sharing" target="_blank">certificate</a></small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" style={{"color":"rgb(240, 98, 73)"}} />
              <h5>Projects</h5>
              <small style={{"color":"rgb(240, 98, 73)"}}>20+ Completed Projects</small>
            </article>
          </div>
            <p className="greetings" style={{"marginTop":"10px","fontSize":"20px"}}>Hello There !</p>
            
              <pre className="aboutme">{aboutme}</pre> 
            
            <a href="#contact" className="contact-btn">
              <div className="profile-options">
              <a href="#contact" className="mr-5 btn highlighted-btn">
                   Hire Me
               </a>
                          <a href='https://drive.google.com/file/d/1_owpdrqKd3nqMT7zekugkEMWF1WA_VrA/view' target="_blank">
                              <button className="btn highlighted-btn">Get Resume</button>
                          </a>
                      </div>
            </a>
          </div>
        </div>
     </div>
  );
};

export default About