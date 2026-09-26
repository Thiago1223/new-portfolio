import React from 'react';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Home.css';
import './styles/AboutMe.css';
import './styles/Experience.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Contact.css';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="app">
      <Home />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer>Todos os direitos reservados {new Date().getFullYear()} | Desenvolvido por Thiago Freitas</footer>
    </div>
  );
}

export default App;
