import React from 'react';
import './Footer.css';
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Tabitha Fortner</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;