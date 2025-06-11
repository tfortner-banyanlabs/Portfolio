import React, { useState } from 'react';
import './Projects.css';
import HeaderImg from '/imgsVids/projects/NotesApp/HeaderTC.png'
import LoginOutlined from '/imgsVids/projects/NotesApp/LoginOutlined.png'
import LoginNImg from '/imgsVids/projects/NotesApp/LoginNotes.png';
import Map from '/imgsVids/projects/NotesApp/Map.png';
import LROption from '/imgsVids/projects/NotesApp/NotesLR.png'
import Register from '/imgsVids/projects/NotesApp/Register.png'
import IdeaSuggest from '/imgsVids/projects/Whitneys/IdeasTitle.png'
import IdeaTC from '/imgsVids/projects/Whitneys/IdeasWhits.png'
import LoginWhit from '/imgsVids/projects/Whitneys/LoginWhits.png'
import Prev from '/imgsVids/projects/Whitneys/Prevs.png'
import Unique from '/imgsVids/projects/Whitneys/Unique.png' 

const Projects = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, imgIndex: 0, images: [] });

  const projects = [
    {
      name: 'Whitneys Unique Creations',
      description: 'DIY App to share and explore handmade projects, made with the following TECH: ',
      tech: 'React, Node.js, Express, MongoDB, HTML, CSS',
      images: [
        Unique,
        IdeaTC, 
        IdeaSuggest,
        Prev, 
        LoginWhit, 
      ],
     },
    {
      name: 'NotesApp',
      description: 'Note-taking app with authentication and real-time features, made with the following TECH:',
      tech: 'React, Node.js, Express, MongoDB, HTML, CSS',
      images: [Register, LoginOutlined, LoginNImg, HeaderImg, Map, LROption],
    },
  ];

  const openLightbox = (images, index) => setLightbox({ isOpen: true, imgIndex: index, images });
  const closeLightbox = () => setLightbox({ isOpen: false, imgIndex: 0, images: [] });
  const nextImage = () => setLightbox((prev) => ({
    ...prev,
    imgIndex: (prev.imgIndex + 1) % prev.images.length,
  }));
  const prevImage = () => setLightbox((prev) => ({
    ...prev,
    imgIndex: (prev.imgIndex - 1 + prev.images.length) % prev.images.length,
  }));

  return (
    <section id='projects' className='projects-section'>
      <h1><strong>My Projects</strong></h1>
      <br />
      {projects.map((project, index) => (
        <div key={index} className='project-card'>
          <h3>{project.name}</h3>
          <br />
          <p>{project.description}</p>
          <br />
          <h2 className='tech'>{project.tech}</h2>
          <br />
          <br />
          <br />
          <div className='project-gallery'>
            {project.images.map((img, i) => (
              <img className='bg-white'
                key={i}
                src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                onClick={() => openLightbox(project.images, i)}
              />
            ))}
          </div>
        </div>
      ))}
      {lightbox.isOpen && (
        <div className='lightbox' onClick={closeLightbox}>
          <span className='close-btn' onClick={closeLightbox}>&times;</span>
          <span className='arrow left' onClick={(e) => { e.stopPropagation(); prevImage(); }}>&#10094;</span>
          <img
            src={lightbox.images[lightbox.imgIndex]}
            alt='lightbox'
            className='lightbox-img'
            onClick={(e) => e.stopPropagation()}
          />
          <span className='arrow right' onClick={(e) => { e.stopPropagation(); nextImage(); }}>&#10095;</span>
        </div>
      )}
    </section>
  );
};

export default Projects;
