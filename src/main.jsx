import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Nav from './Comps/Nav/Nav'
// import Name from './Comps/Pages/Name/Name.jsx'
// import Skills from './Comps/Pages/Skills/Skills.jsx'
// import Projects from './Comps/Pages/Projects/Projects.jsx'
// import Projects2 from './Comps/Pages/Projects/Projects2.jsx'
// import ProjectCard from './Comps/Pages/Projects/ProjectCard.jsx'
// import ContactMe from './Comps/Pages/ContactMe/ContactMe.jsx'
// import AboutMe from './Comps/Pages/AboutMe/AboutMe.jsx'
// import Skills from './Comps/Pages/Skills/Skills.jsx'
// import Skills2 from './Comps/Pages/Skills/Skills2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
        <App />
        {/* <Nav /> */}
        {/* <Routes>
          <Route path='/' element={<Name />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/skills2' element={<Skills2 />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects2' element={<Projects2 />} />
          <Route path='/projectcard' element={<ProjectCard />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<ContactMe /> } />
        </Routes>  */}
        </BrowserRouter>
  </StrictMode>,
)
