import React from 'react';
import './Resume.css';
import resumePDF from '../../Assets/ResumePDF/tabitha_fortnerResume.pdf';

const Resume = () => (
  <section id='resume' className='resume-section'>
    <h2>Tabitha's Resume</h2>
    <br />
    <p>Available to View or Download</p>
      <br />
    <br />
    <div className='resume-actions'>
      <a href={resumePDF} download className='btn'>Download Resume</a>
      <br />
      <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='btn'>View Resume</a>
    </div>
  </section>
);

export default Resume;