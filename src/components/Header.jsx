import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-md">
      <div className="text-xl font-bold">My Portfolio</div>
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
      <div className="md:hidden">Menu</div>
    </header>
  );
};

export default Header;
