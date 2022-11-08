import './App.css';
import React from 'react';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Landing from './components/Landing';
import { Routes ,Route } from 'react-router-dom';
import Experience from './components/Experiences';

function App() {
  

  // return navbar, about, skills, projects, and contact components
  // navbar contains links to about, skills, projects, and contact
  // add a router to the navbar to take me to about, skills, projects, and contact when clicked
  return (
    <div className="App">
      <div className="navbar">
        <h1><a href="/">Mike Jeong</a></h1>
        <div className="links">
          <a href="/about">About</a>
          <a href="/experiences">Experience</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experiences" element={<Experience />} />
      </Routes>
    </div>
  );
}

export default App;