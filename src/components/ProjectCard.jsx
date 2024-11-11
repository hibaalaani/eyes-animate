import { useEffect, useState , useRef } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, imageUrl ,link , animationDirection }) => {

  const [isVisible, setIsVisible] = useState(false);
  // const cardRef = useRef(null);
  useEffect(() => {
    // Trigger the visibility after a short delay to simulate load
    const timer = setTimeout(() => setIsVisible(true), 100);  
    return () => clearTimeout(timer);
  }, []);


// Determine the inline styles based on the animation direction
const getStyle = () => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('animate-fadeInUp');
  //           observer.unobserve(entry.target); // Unobserve after animation
  //         }
  //       });
  //     },
  //     { threshold: 0.1 } // Adjust as needed
  //   );

  //   if (cardRef.current) {
  //     observer.observe(cardRef.current);
  //   }

  //   return () => observer.disconnect();
  // }, []);



  switch (animationDirection) {
    case 'left':
      return {
        transform: isVisible ? 'translateX(0)' : 'translateX(-300px)',
        opacity: isVisible ? '1' : '0',
        transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
      };
    case 'right':
      return {
        transform: isVisible ? 'translateX(0)' : 'translateX(300px)',
        opacity: isVisible ? '1' : '0',
        transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
      };
    case 'top':
      return {
        transform: isVisible ? 'translateY(0)' : 'translateY(-300px)',
        opacity: isVisible ? '1' : '0',
        transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
      };
    case 'bottom':
      return {
        transform: isVisible ? 'translateY(0)' : 'translateY(300px)',
        opacity: isVisible ? '1' : '0',
        transition: 'transform 1.5s ease-out, opacity 1.5s ease-out',
      };
    default:
      return {};  // No animation by default
  }
};
// console.log(live_link)
    return (
      <div className={`relative max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg transform hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out hover:bg-gradient-to-br from-gray-100 to-blue-50 m-4 `}>

<div className="w-full h-48 overflow-hidden rounded-t-lg" style={getStyle()}>
          <img   className="w-full h-full object-cover" src={imageUrl} alt={title} />
        </div>
      
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 transition-all duration-500 ease-in-out">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <Link target="_blank"
            to={link} 
            className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-md shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          >
            View Project
          </Link>
        </div>
      </div>
    );
  };
  

  export default ProjectCard