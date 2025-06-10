import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiNextdotjs, SiVite } from 'react-icons/si';


const skills = [
   { name: 'HTML', level: 90, icon: <FaHtml5 /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: 80, icon: <FaJs /> },
  { name: 'React', level: 75, icon: <FaReact /> },
  { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
  { name: 'Node.js', level: 65, icon: <FaNodeJs /> },
  { name: 'Express.js', level: 60, icon: <SiExpress /> },
  { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss /> },
  { name: 'Next.js', level: 70, icon: <SiNextdotjs /> },
  { name: 'Vite', level: 75, icon: <SiVite /> }
];

const Skills2 = () => {
  return (
    <div id='skills' className='skills-section'>
      <h2 className='section-title'>Skills:</h2>
      <div className='skills-container'>
        {skills.map((skill, index) => (
          <div className='skill-card fade-in-up' key={index}>
            <div className='skill-header'>
               <span className='skill-icon'>{skill.icon}</span>
            <h3>{skill.name}</h3>
            </div>
            <div className='bar'>
              <div className='fill' style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills2;