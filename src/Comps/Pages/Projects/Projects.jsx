import React, { useState } from 'react';
import './Projects.css';
import HeaderImg from './projects/NotesApp/HeaderTitleContentNotesApp.png'
import LoginOutlined from './projects/NotesApp/NotesAppLoginOutlined.png'
import LoginNImg from './projects/NotesApp/LoginNotesApp.png'
import Map from './projects/NotesApp/MapNotesApp.png'
import LROption from './projects/NotesApp/NotesAppLRoption.png'
import Register from './projects/NotesApp/RegisterNoteApp.png'
import IdeaSuggest from './projects/Whitneys/IdeasSuggestWhits.png'
import IdeaTC from './projects/Whitneys/IdeasTitleContentInputsWhits.png'
import LoginWhit from './projects/Whitneys/LoginWhitney.png'
import Prev from './projects/Whitneys/PrevProjsWhits.png'
import Unique from './projects/Whitneys/WHitUniqueCreations.png' 

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
     <strong>
      <h1>My Projects</h1>
      </strong> 
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
