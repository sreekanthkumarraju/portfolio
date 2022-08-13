
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
    <div className="container mx-auto d-flex flex-wrap justify-content-end p-5 flex-row md:flex-row items-center">
      
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
       
      <a href="#about" className="mr-5 hover:text-white">
          About Me
        </a>
        <a href="#skills" className="mr-5 hover:text-white">
         Skills
        </a>
        <a href="#projects" className="mr-5 hover:text-white">
          Projects
        </a>
        <a href="#contact" className="mr-5 hover:text-white">
          Contact Me
        </a>
      </nav>
     
    </div>
  </header>
  );
}