import React, { useState, useEffect } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Home.css';
import facebookIcon from './assets/icon-facebook.svg';
import githubIcon from './assets/icon-github.svg';
import instagramIcon from './assets/icon-instagram.svg';
import linkedinIcon from './assets/icon-linkedin.svg';
import ArrowDownIcon from './assets/icon-arrow-down.svg';

function App() {

  const [role, setRole] = useState('Dev Front-End'); 

  useEffect(() => {
    const roles = ['Dev Front-End', 'Dev Back-End', 'Web Designer'];
    let index = 0;
    
    const changeRole = () => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    };

    const interval = setInterval(changeRole, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <section className='home' id='home'>
        <header>
          <div className='logo'>thiagofreitas</div>
          <nav className='navigation'>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#home">Sobre mim</a>
              </li>
              <li>
                <a href="#home">Portfólio</a>
              </li>
              <li>
                <a href="#home">Contato</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='content'>
          <span className='content-welcome'>Bem-Vindo! </span>
          <h1>Eu sou <span className='highlight'>{role}</span></h1>
          <ul className='content-work'>
            <li>Back-End</li> 
            <li>Front-End</li>
            <li>Web Designer</li>
          </ul>
          <ul className='content-social-media'>
            <li>
              <a href="#home">
                <img src={facebookIcon} alt="Facebook" width="36" />
              </a>
            </li>
            <li>
              <a href="#home">
                <img src={githubIcon} alt="Github" width="36" />
              </a>
            </li>
            <li>
              <a href="#home">
                <img src={instagramIcon} alt="Instagram" width="36" />
              </a>
            </li>
            <li>
              <a href="#home">
                <img src={linkedinIcon} alt="Linkedin" width="36" />
              </a>
            </li>
          </ul>
        </div>
        <img src={ArrowDownIcon} alt="Arrow down" />
      </section>
    </div>
  );
}

export default App;
