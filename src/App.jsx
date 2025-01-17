import React, { useState, useEffect } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Home.css';
import './styles/AboutMe.css';
import './styles/Skills.css';
import facebookIcon from './assets/icon-facebook.svg';
import githubIcon from './assets/icon-github.svg';
import instagramIcon from './assets/icon-instagram.svg';
import linkedinIcon from './assets/icon-linkedin.svg';
import ArrowDownIcon from './assets/icon-arrow-down.svg';
import MyImage from './assets/my-image.png';
import MyCv from './assets/curriculo-thiago.pdf';

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ['Dev Front-End', 'Dev Back-End', 'Web Designer'];
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((prev) => fullText.substring(0, prev.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 150;
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, roleIndex]);

  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = [
      { name: 'JavaScript', value: 80 },
      { name: 'NodeJs', value: 80 },
      { name: 'Java', value: 70 },
      { name: 'Kotlin', value: 70 },
      { name: 'React', value: 60 },
      { name: 'MySql', value: 60 },
      { name: 'Python', value: 60 },
      { name: 'Figma', value: 90 },
      { name: 'HTML', value: 80 },
      { name: 'CSS', value: 80 }
  ];

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <div className="app">
      <section className='home' id='home'>
        <header>
          <div className='logo'>thiagofreitas</div>
          <nav className='navigation'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-me">Sobre mim</a></li>
              <li><a href="#home">Portfólio</a></li>
              <li><a href="#home">Contato</a></li>
            </ul>
          </nav>
        </header>
        <div className='content'>
          <span className='content-welcome'>Bem-Vindo! </span>
          <h1>Eu sou <span className='highlight'>{displayedText}<span className='cursor'>|</span></span></h1>
          <ul className='content-work'>
            <li>Back-End</li> 
            <li>Front-End</li>
            <li>Web Designer</li>
          </ul>
          <ul className='content-social-media'>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100014517697036&locale=pt_BR" target='_blank' rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" width="36" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Thiago1223" target='_blank' rel="noopener noreferrer">
                <img src={githubIcon} alt="Github" width="36" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thiagofreitas_07/" target='_blank' rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" width="36" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/thiagofv/" target='_blank' rel="noopener noreferrer">
                <img src={linkedinIcon} alt="Linkedin" width="36" />
              </a>
            </li>
          </ul>
        </div>
        <a href="#about-me" className="bouncing-icon">
          <img src={ArrowDownIcon} alt="Arrow down" />
        </a>
      </section>
      <section className='about-me' id='about-me'>
        <div className='container-about'>
          <img src={MyImage} alt="Foto de Perfil" />
          <div className='container-my-info'>
            <p className='my-name'>Meu nome é <span className='my-name-content'>Thiago Freitas</span></p>
            <h2>Eu sou desenvolvedor que está no início de carreira.</h2>
            <p className='my-description'>Desde os meus primeiros passos na programação, fui cativado por esse universo fascinante. Através de um curso técnico, descobri a magia de transformar linhas de código em soluções tangíveis. Tornando-me confortável com várias linguagens, continuo ávido por aprender e dominar novas tecnologias, alimentando minha sede insaciável por conhecimento e desafio.</p>
            <ul className='content-details'>
              <li className='content-details-line'>
                <span className='content-details-key'>Nome Completo</span>
                <span>:</span>
                <span className='content-details-value'>Thiago Freitas Vilariço</span>
              </li>
              <li className='content-details-line'>
                <span className='content-details-key'>Idade</span>
                <span>:</span>
                <span className='content-details-value'>18</span>
              </li>
              <li className='content-details-line'>
                <span className='content-details-key'>Endereço</span>
                <span>:</span>
                <span className='content-details-value'>Carapicuíba, SP</span>
              </li>
              <li className='content-details-line'>
                <span className='content-details-key'>Telefone</span>
                <span>:</span>
                <span className='content-details-value'>11 93088-7360</span>
              </li>
              <li className='content-details-line'>
                <span className='content-details-key'>Email</span>
                <span>:</span>
                <span className='content-details-value'>tifreitas10@gmail.com</span>
              </li>
            </ul>
            <a href={MyCv} download="Curriculo_Thiago_Freitas.pdf">
              <button className='button-cv'>Baixar Currículo</button>
            </a>
          </div>
        </div>
      </section>
      <section className='skills'>
        <div className='container-title'>
          <h3>Minhas <span className='container-title-skills'>Habilidades</span></h3>
          <span className='container-title-subtitle'>Aqui estão minhas habilidades em destaque:</span>
        </div>
        <div className='container-skills'>
        {visibleSkills.map((skill, index) => (
          <div key={index} className='container-skills-individual'>
              <span>{skill.name}</span>
              <progress value={skill.value} max='100'></progress>
          </div>
        ))}
        </div>
        <button className='button-see-more' onClick={() => setShowAllSkills(!showAllSkills)}>Ver mais</button>
      </section>
      <section className='projects'></section>
    </div>
  );
}


export default App;
