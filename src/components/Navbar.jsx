import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link , useNavigate, useLocation } from "react-router-dom";
import FaceSvg from "../pages/FaceSvg";

const Navbar = () => {

  const linkClasses = "text-lg font-medium px-4 py-2 rounded-md transition-all duration-300  shadow hover:shadow-lg cursor-pointer";


  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isLandingPage = location.pathname === "/";

  // Logout handler
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar flex justify-around items-center px-10  shadow-md fixed w-full z-10 bg-gradient-to-r from-indigo-700 ">
      <div className="">
        <ScrollLink className={linkClasses} to="/"><FaceSvg/></ScrollLink>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Links for Desktop */}
      <ul className="hidden md:flex space-x-6">
        <li className='relative group'>
          <ScrollLink to="projects" className= { `${linkClasses} text-white hover:text-blue-200 transition-colors `}>
            Projects
          </ScrollLink>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:bg-white"></span>
        </li>
        <li className='relative group'>
          <ScrollLink to="experience" className={`${linkClasses} text-white hover:text-blue-400 transition-colors `}>
            Experience
          </ScrollLink>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300 group-hover:bg-white "></span>
        </li>
      
        
          <li className='relative group'>
            <ScrollLink to="contact" smooth={true} duration={500} spy={true} 
  hashSpy={true}  className={`${linkClasses} text-white hover:text-blue-400 transition-colors `}>
              Contact
            </ScrollLink>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-transparent transition-all duration-300  group-hover:bg-white"></span>
          </li>
      
         
      </ul>

      {/* Links for Mobile */}
      {isNavOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-indigo-500 p-5">
          <ul className="flex flex-col space-y-4">
            <li>
              <ScrollLink to="projects"  className={`${linkClasses} text-white hover:text-blue-400 transition-colors`} onClick={() => setIsNavOpen(false)}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="experience"  className={`${linkClasses} text-white hover:text-blue-400 transition-colors`} onClick={() => setIsNavOpen(false)}>
                Experience
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" className={`${linkClasses} text-white hover:text-blue-400 transition-colors`} onClick={() => setIsNavOpen(false)}>
                About
              </ScrollLink>
            </li>
            
              <li>
                <ScrollLink to="contact" smooth={true} duration={500}  className={`${linkClasses} text-white hover:text-blue-400 transition-colors`}onClick={() => setIsNavOpen(false)}>
                  Contact
                </ScrollLink>
              </li>
           
              
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
