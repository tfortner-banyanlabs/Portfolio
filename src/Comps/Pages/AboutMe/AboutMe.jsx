import React, { useRef, useState, useEffect } from 'react';
import './AboutMe.css';
import ProfilePics from '../../Assets/imgsVids/profile/ProfilePics.png'

const AboutMe = () => {
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id='about-me-section' ref={aboutRef} className={`about-me-section ${isVisible ? 'fade-in' : ''}`}>
      <div className='about-wrapper'>
        {/* Collage Section */}
        <div className='about-images'>
          <img src={ProfilePics} alt='Tabitha profile pic' className='about-img' />
         
        </div>
{/* <br /> */}
{/* <br />  */}
{/* <br />  */}
{/* <br />  */}
{/* <br />  */}
{/* <br />  */}


      {/* Text Section */}
      <div className='about-text'>


      <h1>Hi, I'm Tabitha!</h1>
      <p>I’m a Full Stack Web Developer with a passion for building clean, functional, and user-focused digital experiences. My journey into tech wasn’t traditional, but it’s shaped who I am as a developer and as a person.</p>
      <br />
      <p>I first heard about the Persevere coding program through my probation officer. Although I was already off probation by the time I started, I knew it was a second chance I couldn’t pass up. The road wasn’t easy — I was shuffled between instructors and, at times, unsure if I would make it through. But everything changed when I was placed with a teacher who genuinely cared, and I found support in my fellow class developers. With their help and my determination, I not only completed the program — I thrived.</p>
      <br />
       <p>After graduating from the Full Stack Web Development course, I was offered an internship with a company that saw my potential. I'm excited about starting this journey and the incredible opportunity to grow, sharpen my skills, creating the valuable conections with the wonderful network of Dev's, and keep doing what I love: solving problems, building things from the ground up, and learning every single day.</p>
       <br />
      <p>I’m driven by a desire to create meaningful tools and applications — and by the belief that your past doesn't shape your future.</p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;