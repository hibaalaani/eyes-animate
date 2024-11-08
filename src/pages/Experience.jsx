import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
const experiences = [
  {
    role: "Web Developer Instructor",
    company: "DCI (Digital Career Institute), Berlin",
    duration: "February 2021 - current",
    location: "Berlin, Germany",
    description: [
      "Taught aspiring developers web development, focusing on modern technologies such as React.js, JavaScript, and Python. Guided students through the process of building web applications, debugging, and testing. Additionally, helped them understand concepts related to responsive design, version control, and automation. Mentored students on real-world projects, preparing them for the job market"
    ]
  },
  {
    role: "Web Developer & Web Automation Specialist (Python/Selenium)",
    company: "There Is No Planet B",
    duration: "August 2020 - April 2021",
    location: "Berlin, Germany",
    description: [
      "As a web developer and automation specialist, I contributed to building and maintaining web platforms while also developing automation scripts using Python and Selenium. Automated repetitive tasks such as data scraping and form submissions to enhance the efficiency of internal processes. Focused on performance optimization and clean code practices."
    ]
  },
  {
    role: "Web Developer",
    company: "Binary Pixels",
    duration: "2018 - 2020",
    location: "Berlin, Germany",
    description: [
      "Worked as a full-stack web developer, specializing in creating dynamic and interactive websites. Used technologies like React.js, Node.js, and PostgreSQL to develop scalable web applications. Collaborated with cross-functional teams to deliver high-quality products, while continuously learning and applying new technologies"
    ]
  },
  {
    role: "Freelance Web Designer",
    company: "Binary Pixel",
    duration: "2017 - 2019",
    location: "Genova Italy",
    description: [
      "Worked independently as a web designer, creating visually appealing and user-friendly websites for clients. Focused on crafting responsive layouts using HTML, CSS, and JavaScript. Collaborated with clients to deliver projects that met their needs, emphasizing creativity and a modern design approach."
    ]
  },
  {
    role: "Electronic and Communication Engineering Student",
    company: "University of Al nahrain, Iraq",
    duration: "2005 - 2009",
    location: "Iraq",
    description: [
      "Developed a strong foundation in electronic and communication engineering, learning about digital systems, telecommunications, and microprocessor applications. Gained skills in problem-solving and analytical thinking through various projects and assignments."
    ]
  },
  // Add more experience objects if needed
];

const Experience = () => {
  return (
    <section className="fade-in container my-20 py-20 text-white ">
    
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

        <div className="relative">
          <div className="absolute w-1 h-full bg-gray-300 left-1/2 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              className={`mb-16 flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'} relative`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className={`bg-white shadow-lg p-6 rounded-lg max-w-lg ${index % 2 === 0 ? 'ml-12' : 'mr-12'}`}>
                <h3 className="text-2xl text-black font-semibold mb-2">{exp.role}</h3>
                <p className="text-lg font-light text-gray-800 mb-4">{exp.company}</p>
                <p className="text-sm font-medium mb-2">{exp.duration} | {exp.location}</p>
                <ul className=" ml-5 text-left">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="mb-2 text-gray-800">{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
