import React, { useState } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { profile } from '../data/profile';
import facebookIcon from '../assets/icon-facebook.svg';
import githubIcon from '../assets/icon-github.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import linkedinIcon from '../assets/icon-linkedin.svg';
import ArrowIcon from '../assets/icon-arrow-down.svg';

const Home = () => {
  const displayedText = useTypingEffect(profile.roles);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="home" id="home">
      <header>
        <div className="logo">thiagofreitas</div>
        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="navigation">
          <ul className={menuOpen ? 'nav-open' : ''}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about-me" onClick={closeMenu}>Sobre mim</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experiência</a></li>
            <li><a href="#projects" onClick={closeMenu}>Portfólio</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <span className="content-welcome">Bem-Vindo! </span>
        <h1>Eu sou <span className="highlight">{displayedText}<span className="cursor">|</span></span></h1>
        <ul className="content-work">
          <li>Back-End</li>
          <li>Front-End</li>
          <li>Web Designer</li>
        </ul>
        <ul className="content-social-media">
          <li>
            <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" width="36" />
            </a>
          </li>
          <li>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github" width="36" />
            </a>
          </li>
          <li>
            <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" width="36" />
            </a>
          </li>
          <li>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Linkedin" width="36" />
            </a>
          </li>
        </ul>
      </div>
      <a href="#about-me" className="bouncing-icon">
        <img src={ArrowIcon} alt="Arrow down" />
      </a>
    </section>
  );
};

export default Home;
