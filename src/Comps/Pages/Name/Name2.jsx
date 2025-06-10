// import React, { useState } from 'react';
// import './Name.css';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import PortFolioLogo from '../../Assets/imgsVids/PortfolioLogo.png';
// import backgroundVideo from '../../Assets/imgsVids/background.mp4'; 

// const Name = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <div className="name-container">
//       <video autoPlay muted loop className="background-video">
//         <source src={backgroundVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="overlay" />

//       <header className="navbar">
//         <div className="logo-container">
//           <img src={PortFolioLogo} alt="Portfolio Logo" className="logo" />
//         </div>

//         <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
//           <ul>
//             <li><a href="#about">About</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//           <FaTimes className="close-icon" onClick={() => setNavOpen(false)} />
//         </nav>

//         <FaBars className="hamburger" onClick={() => setNavOpen(true)} />
//       </header>

//       <div className="intro-text">
//         <h1>Tabitha Fortner</h1>
//         <h2>Full Stack Web Developer</h2>
//       </div>
//     </div>
//   );
// };

// export default Name;
