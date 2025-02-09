import React, { useState, useEffect } from 'react';
import './styles/Reset.css';
import './styles/App.css';
import './styles/Home.css';
import './styles/AboutMe.css';
import './styles/Skills.css';
import './styles/Projects.css';
import './styles/Contact.css';
import facebookIcon from './assets/icon-facebook.svg';
import githubIcon from './assets/icon-github.svg';
import instagramIcon from './assets/icon-instagram.svg';
import linkedinIcon from './assets/icon-linkedin.svg';
import ArrowIcon from './assets/icon-arrow-down.svg';
import AddressIcon from './assets/icon-address.svg';
import EmailIcon from './assets/icon-email.svg';
import PhoneIcon from './assets/icon-phone.svg';
import MyImage from './assets/my-image.png';
import MyCv from './assets/curriculo-thiago.pdf';
import FirstProject from './assets/first-project.png';
import LeftUpDecoration from './assets/left-up-decoration.png';
import RightUpDecoration from './assets/right-up-decoration.png';
import RightDownDecoration from './assets/right-down-decoration.png';

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const filters = ["Todos", "Mobile", "React"];
  const skills = [
    { name: 'JavaScript', value: 80 },
    { name: 'NodeJs', value: 80 },
    { name: 'Java', value: 70 },
    { name: 'Kotlin', value: 70 },
    { name: 'React', value: 70 },
    { name: 'MySql', value: 70 },
    { name: 'Python', value: 60 },
    { name: 'Figma', value: 90 },
    { name: 'HTML', value: 80 },
    { name: 'CSS', value: 80 }
  ];

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

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  useEffect(() => {
    const aboutMeSection = document.querySelector('.about-me');

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    observer.observe(aboutMeSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <section className='home' id='home'>
        <header>
          <div className='logo'>thiagofreitas</div>
          <nav className='navigation'>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-me">Sobre mim</a></li>
              <li><a href="#projects">Portfólio</a></li>
              <li><a href="#contact">Contato</a></li>
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
          <img src={ArrowIcon} alt="Arrow down" />
        </a>
      </section>
      <section className={`about-me ${isVisible ? 'animate' : ''}`} id='about-me'>
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
          <h3>Minhas <span className='container-title-default'>Habilidades</span></h3>
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
        <button className='button-see-more' onClick={() => setShowAllSkills(!showAllSkills)}>{!showAllSkills ? 'Ver mais' : 'Ver menos'}</button>
      </section>
      <section className='projects' id='projects'>
        <img src={LeftUpDecoration} alt="Detalhe Esquerdo Emcima" className='left-up-decoration' />
        <img src={RightUpDecoration} alt="Detalhe Direito Emcima" className='right-up-decoration' />
        <img src={RightDownDecoration} alt="Detalhe Direito Embaixo" className='right-down-decoration' />
        <div className='container-initial'>
          <div className='container-title'>
            <h3>Meus <span className='container-title-default'>Projetos</span></h3>
            <span className='container-title-subtitle'>Aqui estão meus projetos destacados:</span>
          </div>
          <div className='container-filter'>
            {filters.map((category, index) => (
            <button key={index} className={`button-filter ${selectedCategory === category ? "main-button" : ""}`} onClick={() => setSelectedCategory(category)}> {category}</button>))}
          </div>
        </div>
        <div className='container-card'>
          <div className='card'>
            <div className='container-start'>
              <img src={FirstProject} alt="Primeiro Projeto" />
              <p>Este é um projeto realizado com o intuíto, de práticar minhas habilidades ao redor do front end e na capacidade de criar landing pages com base nos conhecimentos adquiridos de Html e Css no curso de desenvolvimento de sistemas pelo senai.</p>
            </div>
            <div className='container-button'>
              <button>Ver site</button>
              <button>GitHub</button>
            </div>
          </div>
          <div className='card'>
            <div className='container-start'>
              <img src={FirstProject} alt="Primeiro Projeto" />
              <p>Este é um projeto realizado com o intuíto, de práticar minhas habilidades ao redor do front end e na capacidade de criar landing pages com base nos conhecimentos adquiridos de Html e Css no curso de desenvolvimento de sistemas pelo senai.</p>
            </div>
            <div className='container-button'>
              <button>Ver site</button>
              <button>GitHub</button>
            </div>
          </div>
          <div className='card'>
            <div className='container-start'>
              <img src={FirstProject} alt="Primeiro Projeto" />
              <p>Este é um projeto realizado com o intuíto, de práticar minhas habilidades ao redor do front end e na capacidade de criar landing pages com base nos conhecimentos adquiridos de Html e Css no curso de desenvolvimento de sistemas pelo senai.</p>
            </div>
            <div className='container-button'>
              <button>Ver site</button>
              <button>GitHub</button>
            </div>
          </div>
          <div className='card'>
            <div className='container-start'>
              <img src={FirstProject} alt="Primeiro Projeto" />
              <p>Este é um projeto realizado com o intuíto, de práticar minhas habilidades ao redor do front end e na capacidade de criar landing pages com base nos conhecimentos adquiridos de Html e Css no curso de desenvolvimento de sistemas pelo senai.</p>
            </div>
            <div className='container-button'>
              <button>Ver site</button>
              <button>GitHub</button>
            </div>
          </div>
        </div>
        <button className='button-see-more'>Ver mais</button>
      </section>
      <section className='contact' id='contact'>
        <div className='container-title'>
          <h3>Entre em <span className='container-title-default'>Contato</span></h3>
          <span className='container-title-subtitle contact-subtitle'>Estou sempre em busca de novos desafios no desenvolvimento de experiências. Se precisar conversar, tirar dúvidas ou propor um projeto, minha caixa de entrada está aberta. Aguardo sua mensagem!</span>
        </div>
        <div className='container-contact'>
          <ul className='card-contact'>
            <li className='container-card-contact'>
              <img src={AddressIcon} alt="Endereço" width="36" />
              <span className='card-title'>Endereço</span>
              <span className='card-subtitle'>Carapicuíba, SP</span>
            </li>
            <li className='container-card-contact'>
              <img src={EmailIcon} alt="Email" width="36" />
              <span className='card-title'>Email</span>
              <span className='card-subtitle'>tifreitas10@gmail.com</span>
            </li>
            <li className='container-card-contact'>
              <img src={PhoneIcon} alt="Telefone" width="36" />
              <span className='card-title'>Telefone</span>
              <span className='card-subtitle'>11 93088-7360</span>
            </li>
          </ul>
          <div className='container-contact-input'>
            <div className='container-contact-input-initial'>
              <input type="text" placeholder='Primeiro Nome *' id='input-name' />
              <input type="text" placeholder='Sobrenome *' id='input-last-name' />
              <input type="email" placeholder='Email *' id='input-email' />
              <input type="ph" placeholder='Telefone *' id='input-phone' />
            </div>
            <input type="text" placeholder='Assunto *' className='first-contact-input' id='input-subject' />
            <textarea class="second-contact-input" placeholder="Descrição *" id='input-description'></textarea>
            <button>Enviar</button>
          </div>
        </div>
        <a href="#home" className='icon-up'>
          <img src={ArrowIcon} alt="Arrow Up" />
        </a>
      </section>
      <footer>Todos os direitos reservados 2024 | Desenvolvido por Thiago Freitas</footer>
    </div>
  );
}

export default App;