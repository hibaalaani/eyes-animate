// src/components/SkillsSection.jsx
import React from 'react';
import { FaPython, FaNodeJs, FaReact, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';
import '../SkillsSection.css'
const skills = [
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Django', icon: <SiDjango />, color: '#092E20' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'SQL', icon: <FaDatabase />, color: '#003B57' },
];

const SkillsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
              style={{
                backgroundColor: skill.color,
                clipPath: 'polygon(15% 0%, 100% 10%, 85% 100%, 0% 90%)', // Custom shape
              }}
            >
              <div className="text-white text-3xl">{skill.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
