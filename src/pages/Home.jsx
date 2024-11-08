// pages/Home.js
import React from 'react';
import Experience from './Experience';  // Ensure Experience component exists and is imported correctly
import { Link } from 'react-router-dom';

const Home = () => {


return (
    <>
      {/* <section  className="py-20 bg-gray-800 text-white"> */}
      <div className="container mx-auto px-6 py-20 bg-gray-800 text-white"> 
       {/* <div className="flex flex-col md:flex-row items-center"> */}
        <h2 className="text-4xl font-bold text-center my-10">
      
        Hi, I'm Hiba Alaani</h2>
        <p  className="text-lg text-gray-300 text-center my-10">A passionate Web Developer</p>
        {/* Ensure the buttons are styled appropriately */}
        <div className="flex items-center py-3 px-5 bg-gray-800 shadow-md  ">
        <Link  className="btn text-xl font-bold px-5 text-white" to="/projects" >View My Work</Link>
        <Link className="btn text-xl font-bold text-white" to="/contact" >Contact Me</Link></div>
</div> {/* </div> */}
        {/* Embedding the Experience component */}
        <section className="experience-section">
          <Experience /> {/* Ensure the Experience component is responsive and styled for both mobile and desktop */}
        </section>
       
      {/* </section> */}
    </>
  );
};

export default Home;
