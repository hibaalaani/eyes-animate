import React , {useState, useEffect} from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import ME from '../assets/20220801_size.jpg'

const About = () => {

  const [text, setText] = useState("");
  const name = "Hello I'm Hiba ALaani, a passionate web developer with a keen interest working with Python ,building websites responsive and user-friendly websites.Specializing in technologies such as React, Tailwind CSS, and JavaScript. In backend , I'm specializing in Python , Nodejs as well as Database"
   // Replace with your name
  const speed = 150; // Speed in 



  return (
    <section className="fade-in container py-20 text-white ">
    

      {/* <div className="container mx-auto px-5"> */}
        {/* <h2 className="text-4xl font-bold text-center mb-10 ">About Me</h2> */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src={ME}
              alt="About Me" 
              className="rounded-full mx-auto w-60 h-60 object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-10 mt-10 md:mt-0">
      
              
             <div className="text-writer">
    What's mean a passionate web developer.
  </div>
  <p className="about-paragraph">
    I build responsive and user-friendly websites. I have a background in frontend development, specializing in technologies such as React, Tailwind CSS, and JavaScript. I'm constantly exploring new ways to improve my skills and keep up with the latest trends in web development.
  </p>
          
           
          </div>
        </div>
      {/* </div> */}

    </section>
  );
};

export default About;
