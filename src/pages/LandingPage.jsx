import {useEffect} from "react";
import HeroImage from "../assets/main.gif";
import { Link, Element } from 'react-scroll';
import Contact from './Contact';
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
import WigglyBackground from "../components/WigglyBackground";
import Ilistra from "../assets/woman.jpg"
import FaceSvg from "./FaceSvg";

const LandingPage = () => {
  useEffect(() => {
    const face = document.getElementById("face");
    const leftEye = document.getElementById("left-eye");
    const rightEye = document.getElementById("right-eye");

    const updateEyes = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = face.getBoundingClientRect();
      const faceCenterX = left + width / 2;
      const faceCenterY = top + height / 2;

      // Increased sensitivity for more noticeable movement
      const angleX = (clientX - faceCenterX) / 20;
      const angleY = (clientY - faceCenterY) / 20;

      // Larger range for eye movement
      const maxMovement = 10;
      const limitedAngleX = Math.max(Math.min(angleX, maxMovement), -maxMovement);
      const limitedAngleY = Math.max(Math.min(angleY, maxMovement), -maxMovement);

      leftEye.style.transform = `translate(${limitedAngleX}px, ${limitedAngleY}px)`;
      rightEye.style.transform = `translate(${limitedAngleX}px, ${limitedAngleY}px)`;
    };

    document.addEventListener("mousemove", updateEyes);

    return () => {
      document.removeEventListener("mousemove", updateEyes);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);



  return (
  
<>


 
<section className="fade-in container mx-auto flex flex-col items-start justify-center min-h-screen p-10">
  <div className="flex flex-col md:flex-row items-center items-center space-x-10">
             {/* Right Image Section */}
        <div className="relative w-100 h-100 md:w-80 md:h-80">
          {/* Illustration */}
          <img
            src={HeroImage} // Replace with actual path
            alt="Illustration of Hiba"
            className="w-full h-full"
            id="face"
          />
         
      {/* Eyes */}
{/* <div
  id="left-eye"
  className="absolute bg-red-300 rounded-full w-5 h-5"
  style={{ top: '40%', left: '35%' }}
></div>
<div
  id="right-eye"
  className="absolute bg-red-300 rounded-full w-5 h-5"
  style={{ top: '40%', left: '60%' }}
></div> */}

      </div>
                <div className="flex-1 text-left space-y-5 p-6 bg-opacity-30 rounded-xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                        Hi, I'm Hiba Alaani
                    </h1>
                    <p className="text-lg md:text-xl font-light text-gray-200">
                        A passionate Web Developer & Designer who brings creativity to code.
                    </p>
                    <p className="text-md md:text-lg font-light text-gray-300">
                        I specialize in <span className="font-semibold text-white">React, Node, Django</span>, and modern web design principles. Check out my work and get in touch!
                    </p>
                    <div>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={800}
                        
                        className="bg-blue-600 transition-all text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 my-20 transition-colors cursor-pointer "
                    >
                        Contact Me
                    </Link></div>
                </div>
           </div>
        </section>

      {/* About Section */}
      <Element name="about"className="">

         <div className="fade-in flex flex-wrap justify-center gap-8">
          <About />
       </div>
      </Element>

      {/* Portfolio Projects Section */}
      <Element name="projects">
    
         
          <div className="fade-in flex flex-wrap justify-center gap-8">
            <Projects />
          </div>
    
      </Element>

   {/* Experience Section */}
   <Element name="experience">
        <div className="fade-in flex flex-wrap justify-center gap-8">
         
          <Experience />
        </div>
      </Element>


      {/* Contact Section */}
      <Element name="contact">
        <section className="">
         
          <div className="fade-in max-w-xl mx-auto  rounded-lg shadow-lg p-8">
            <Contact />
          </div>
        </section>
      </Element>



</>
  );
};

export default LandingPage;
