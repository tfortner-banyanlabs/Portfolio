import React from 'react';
import './SocialLinks.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div id='social-links' className="social-links">
      <a href="https://github.com/TFPrsvr" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/tabitha-fortner-19a077315/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
