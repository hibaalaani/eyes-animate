// pages/Projects.js
import React, {useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Gallery from '../assets/Gallery.png'
import Candy from '../assets/Candy.png';
import ColorGame from '../assets/gameColor.png';
import Tgif from '../assets/Tgif.png';
import GitHub from '../assets/download.jpg';
const Projects = () => {
// const [projects, setProjects]= useState([])
const [isLoaded, setIsLoaded] = useState(false);
//   const fetchProjects = async () => {
//     console.log(import.meta.env);
//     try {
//       const response = await fetch(`${import.meta.env.VITE_BACK_END_URL}/api/projects/`);
//       console.log(response)
//       const data = await response.json();
//       setProjects(data); // Update your state with the fetched data
//       setIsLoaded(true);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };
  
// useEffect(()=>{

//   fetchProjects()


// },[])

  const projects = [
    {
      title: 'Candy Color',
      description: ' An interactive website designed for a coffee shop.Based on the request of the client,',
      imageUrl: Candy,
      link: "https://alaani-candy-color.netlify.app/",
    },
    {
        title: "Color Game",
        description: "A guessing game that challenges users to identify colors. Great for improving color recognition skills and adding a bit of fun competition.",
        imageUrl:ColorGame,
        link: "https://color-game-guess.netlify.app/",
      },
      {
        title: "The Image Gallery",
        description: "A beautifully designed image gallery showcasing various pictures. This project offers a clean, visually pleasing way to browse images.",
        imageUrl: Gallery,
        link: "https://alaani-image-gallery.netlify.app/",
      },
  
    {
      title: 'Tgif',
      description: 'A project designed as blueprint for a News website  ',
      imageUrl: Tgif,
      link: "https://alaani-tgif.netlify.app/",
    },
    {
        title: "Visit my GitHub",
        description: "Double Check my GITHUB",
        imageUrl:GitHub,
        link: "https://github.com/hibaalaani",
      },
  ];

  // const getAnimationClass = (index) => {
  //   switch (index) {
  //     case 0:
  //       return "animate-from-left";
  //     case 1:
  //       return "animate-from-right";
  //     case 2:
  //       return "animate-from-top";
  //     case 3:
  //       return "animate-from-bottom";
  //     case 4:
  //       return "animate-from-left";
  //     case 5:
  //       return "animate-from-right";
  //     default:
  //       return "";
  //   }
  // };
  const getAnimationDirection = (index) => {
    const directions = ['left', 'right', 'top', 'bottom'];  // Define possible directions
    return directions[index % directions.length];  // Cycle through directions
  };

  return (
    <section className="fade-in min-h-screen container my-20 py-20 text-white ">
    
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className=" mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        { projects.map((project, index) => (
          <ProjectCard key={index} {...project}   imageUrl ={project.imageUrl}  animationDirection={getAnimationDirection(index)} />
        ))}
     </div>
      </div>
    </section>
  );
};

export default Projects;
