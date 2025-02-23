import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
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
import SecondProject from './assets/second-project.png';
import ThirdProject from './assets/third-project.png';
import FourthProject from './assets/fourth-project.png';
import FifthProject from './assets/fifth-project.png';
import SixthProject from './assets/sixth-project.png';
import SeventhProject from './assets/seventh-project.png';
import EighthProject from './assets/eighth-project.png';
import NinthProject from './assets/ninth-project.png';
import TenthProject from './assets/tenth-project.png';
import EleventhProject from './assets/eleventh-project.png';
import TwelfthProject from './assets/twelfth-project.png';
import ThirteenthProject from './assets/thirteenth-project.png';
import FourteenthProject from './assets/fourteenth-project.png';
import FifteenthProject from './assets/fifteenth-project.png';
import LeftUpDecoration from './assets/left-up-decoration.png';
import RightUpDecoration from './assets/right-up-decoration.png';
import RightDownDecoration from './assets/right-down-decoration.png';
import Card from './components/Card';

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isAboutMeVisible, setIsAboutMeVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const filters = ["Todos", "Mobile", "React", "Vanilla"];
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
  const projects = [
    {
      image: FirstProject,
      description: "Esta landing page foi criada para explorar minhas habilidades em front-end, aplicando conceitos de design e usabilidade. O projeto apresenta o jogo Valorant, destacando personagens, mapas e modos de jogo, utilizando HTML e CSS para uma interface atraente e responsiva.",
      siteLink: "https://thiago1223.github.io/projeto-valorant/",
      githubLink: "https://github.com/Thiago1223/projeto-valorant",
      category: "Vanilla"
    },
    {
      image: SecondProject,
      description: "Esta landing page foi criada para explorar minhas habilidades em front-end, aplicando conceitos de design e usabilidade. O projeto apresenta o jogo Apex Legends, destacando personagens, mapas e modos de jogo, utilizando HTML e CSS para uma interface atraente e responsiva.",
      siteLink: "https://thiago1223.github.io/projeto-apex/",
      githubLink: "https://github.com/Thiago1223/projeto-apex",
      category: "Vanilla"
    },
    {
      image: ThirdProject,
      description: "Este projeto, chamado Lion School, foi desenvolvido para simular o sistema de uma escola, aplicando meus conhecimentos em front-end. Utilizei HTML, CSS e JavaScript para criar uma interface interativa, exibindo informações sobre alunos, cursos e desempenho acadêmico.",
      siteLink: "https://lion-school-fawn.vercel.app/",
      githubLink: "https://github.com/Thiago1223/lion-school",
      category: "Vanilla"
    },
    {
      image: FourthProject,
      description: "Este projeto foi inspirado na hamburgueria Le pinguê, onde desenvolvi uma interface interativa para exibir o cardápio, promoções e informações do estabelecimento. Utilizei HTML, CSS e JavaScript para criar uma experiência visual atraente e responsiva.",
      siteLink: "https://fernandoleonid.github.io/one-page-2022/ds1t-b/thiagoFreitas/",
      githubLink: "https://github.com/Thiago1223/one-page-2022",
      category: "Vanilla"
    },
    {
      image: FifthProject,
      description: "Esta landing page foi criada para homenagear o universo de Naruto, destacando personagens, vilas e arcos da história. Utilizei HTML, CSS e JavaScript para desenvolver uma interface dinâmica e envolvente, integrando uma API pública para exibir informações detalhadas sobre os personagens da série.",
      siteLink: "https://naruto-api-two.vercel.app/",
      githubLink: "https://github.com/Thiago1223/naruto-api",
      category: "Vanilla"
    },
    {
      image: SixthProject,
      description: "Esta landing page foi criada para destacar o Pikachu, um dos Pokémon mais icônicos. Utilizei HTML, CSS e JavaScript para desenvolver uma interface interativa e responsiva, integrando uma API pública para exibir informações detalhadas sobre o personagem e suas habilidades.",
      siteLink: "https://thiago1223.github.io/landing-page-pikachu/",
      githubLink: "https://github.com/Thiago1223/landing-page-pikachu",
      category: "Vanilla"
    },
    {
      image: SeventhProject,
      description: "Esta landing page foi desenvolvida para apresentar a motocicleta E-Bike, destacando seu design inovador, desempenho e sustentabilidade. Utilizei HTML, CSS e JavaScript para criar uma interface moderna e responsiva, proporcionando uma experiência visual imersiva e informativa para os usuários.",
      siteLink: "https://thiago1223.github.io/Projeto-motocicleta/",
      githubLink: "https://github.com/Thiago1223/Projeto-motocicleta",
      category: "Vanilla"
    },
    {
      image: EighthProject,
      description: "Esta landing page foi criada para apresentar o headphone Razer Kraken BT, destacando seu design, qualidade de som e conforto. Utilizei HTML, CSS e JavaScript para desenvolver uma interface moderna e responsiva, proporcionando uma experiência imersiva com detalhes sobre suas especificações e benefícios.",
      siteLink: "https://thiago1223.github.io/headphone-purple/",
      githubLink: "https://github.com/Thiago1223/headphone-purple",
      category: "Vanilla"
    },
    {
      image: NinthProject,
      description: "Este projeto acadêmico foi desenvolvido para criar um formulário dinâmico que utiliza a API do ViaCEP para facilitar o preenchimento de endereços. Com HTML, CSS e JavaScript, a interface permite que o usuário insira um CEP e obtenha automaticamente as informações.",
      siteLink: "https://thiago1223.github.io/formulario/",
      githubLink: "https://github.com/Thiago1223/formulario",
      category: "Vanilla"
    },
    {
      image: TenthProject,
      description: "Este projeto foi desenvolvido como um clone do WhatsApp, onde é possível visualizar conversas. Utilizei HTML, CSS e JavaScript para criar uma interface semelhante ao aplicativo original, proporcionando uma experiência interativa e responsiva para a navegação entre os chats.",
      siteLink: "https://fernandoleonid.github.io/whatsApp-senai-1-2023/ds2t/thiago_freitas_vilari%C3%A7o/",
      githubLink: "https://github.com/Thiago1223/whatsApp-senai-1-2023",
      category: "Vanilla"
    },
    {
      image: EleventhProject,
      description: "Este projeto foi desenvolvido como um aplicativo de agência de viagens utilizando Kotlin. O app possui telas de login, cadastro e inicial, onde os usuários podem visualizar pacotes de viagem. Os dados são consumidos de um banco de dados local, oferecendo uma navegação eficiente.",
      siteLink: "https://thiago1223.github.io/headphone-purple/",
      githubLink: "https://github.com/Thiago1223/headphone-purple",
      category: "Mobile"
    },
    {
      image: TwelfthProject,
      description: "Este projeto foi desenvolvido para o setor de mecânica de usinagem do Senai, onde o professor pode gerenciar turmas, notas e matérias. É possível criar turmas, adicionar tarefas e visualizar os detalhes. O sistema foi feito com HTML, CSS e JavaScript, oferecendo uma gestão eficiente.",
      siteLink: "https://front-mecanica-novo.vercel.app/",
      githubLink: "https://github.com/Thiago1223/front-mecanica-novo",
      category: "Vanilla"
    },
    {
      image: ThirteenthProject,
      description: "Este projeto foi desenvolvido como um aplicativo em Kotlin para simular uma escola. O app permite cadastrar alunos, visualizar cursos e notas, além de criar e gerenciar matérias. Utilizei Kotlin e um banco de dados local para garantir uma navegação ágil e eficiente.",
      siteLink: "https://github.com/Thiago1223/Lion-School-Kotlin",
      githubLink: "https://github.com/Thiago1223/Lion-School-Kotlin",
      category: "Mobile"
    },
    {
      image: FourteenthProject,
      description: "Este projeto é uma página de visualização de produtos, onde o usuário pode adicionar itens ao carrinho. Utilizei uma API de produtos para exibir os itens e implementando as funcionalidades com TypeScript e React, proporcionando uma experiência interativa e dinâmica.",
      siteLink: "https://projeto-mks-ten.vercel.app/",
      githubLink: "https://github.com/Thiago1223/projeto-mks",
      category: "React"
    },
    {
      image: FifteenthProject,
      description: "Este projeto foi meu TCC, um e-commerce para venda, troca e doações de livros. Durante seis meses, criamos o banco de dados e desenvolvemos as versões mobile em Kotlin e desktop em React, proporcionando uma plataforma funcional e responsiva.",
      siteLink: "https://github.com/DevelopersVision/FrontEnd-Web_Sbook",
      githubLink: "https://github.com/DevelopersVision/FrontEnd-Web_Sbook",
      category: "React"
    }
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
    const skillsSection = document.querySelector('.container-skills');
    const projectsSection = document.querySelector('.projects');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === aboutMeSection && entry.isIntersecting && !isAboutMeVisible) {
          setIsAboutMeVisible(true);
        }
        if (entry.target === skillsSection && entry.isIntersecting && !isSkillsVisible) {
          setIsSkillsVisible(true);
        }
        if (entry.target === projectsSection && entry.isIntersecting && !isProjectsVisible) {
          setIsProjectsVisible(true);
        }
      });
    }, {
      threshold: 0.1
    });
  
    if (aboutMeSection) observer.observe(aboutMeSection);
    if (skillsSection) observer.observe(skillsSection);
    if (projectsSection) observer.observe(projectsSection);
  
    return () => {
      observer.disconnect();
    };
  }, [isAboutMeVisible, isSkillsVisible, isProjectsVisible]);

  const filteredProjects = selectedCategory === "Todos" ? projects : projects.filter((project) => project.category === selectedCategory);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

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
      <section className={`about-me ${isAboutMeVisible ? 'animate-slide-in' : ''}`} id='about-me'>
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
        <div className={`container-skills ${isSkillsVisible ? 'animate-fade-in' : ''}`}>
        {visibleSkills.map((skill, index) => (
          <div key={index} className='container-skills-individual'>
              <span>{skill.name}</span>
              <progress value={skill.value} max='100'></progress>
          </div>
        ))}
        </div>
        <button className='button-see-more' onClick={() => setShowAllSkills(!showAllSkills)}>{!showAllSkills ? 'Ver mais' : 'Ver menos'}</button>
      </section>
      <section className={`projects ${isProjectsVisible ? 'animate-slide-in-projects' : ''}`} id='projects'>
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
          {(showAll ? filteredProjects : filteredProjects.slice(0, 4)).map((project) => (
              <Card image={project.image} description={project.description} siteLink={project.siteLink} githubLink={project.githubLink} />
          ))}
        </div>
        <button className='button-see-more' onClick={toggleShowAll}>{showAll ? "Ver menos" : "Ver mais"}</button>
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
          <ContactForm />
        </div>
        <a href="#home" className='icon-up'>
          <img src={ArrowIcon} alt="Arrow Up" />
        </a>
      </section>
      <footer>Todos os direitos reservados 2025 | Desenvolvido por Thiago Freitas</footer>
    </div>
  );
}

export default App;