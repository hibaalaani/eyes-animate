import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" w-full footer-section text-white text-center p-4 fixed bottom-0 left-0 flex flex-col items-center space-y-3 md:space-y-1 md:flex-row md:justify-around bg-gray-800 shadow-md fixed w-full z-10">
      {/* Copyright */}
      <p>© 2024 Hiba Alaani. All rights reserved.</p>

      {/* Links Section */}
      <div className="flex space-x-4 items-center">
        {/* CV Link */}
        <a 
          href="https://alaani.my.canva.site/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-400 transition-colors"
        >
          View My CV
        </a>

        {/* LinkedIn */}
        <a 
          href='https://www.linkedin.com/in/hiba-al-aani-156b49194/'
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/hibaalaani/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaGithub size={20} />
        </a>

        {/* Email */}
        <a 
          href="alaani.hiba@gmail.com" 
          className="text-white hover:text-blue-400 transition-colors"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
