import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/projects';
import Card from '../components/Card';
import LeftUpDecoration from '../assets/left-up-decoration.png';
import RightUpDecoration from '../assets/right-up-decoration.png';
import RightDownDecoration from '../assets/right-down-decoration.png';

const filters = ['Todos', 'Mobile', 'React', 'Vanilla', 'Dados'];

const Projects = () => {
  const [ref, isVisible] = useInView();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className={`projects ${isVisible ? 'animate-slide-in-projects' : ''}`} id="projects" ref={ref}>
      <img src={LeftUpDecoration} alt="Detalhe Esquerdo Emcima" className="left-up-decoration" />
      <img src={RightUpDecoration} alt="Detalhe Direito Emcima" className="right-up-decoration" />
      <img src={RightDownDecoration} alt="Detalhe Direito Embaixo" className="right-down-decoration" />
      <div className="container-initial">
        <div className="container-title">
          <h3>Meus <span className="container-title-default">Projetos</span></h3>
          <span className="container-title-subtitle">Aqui estão meus projetos destacados:</span>
        </div>
        <div className="container-filter">
          {filters.map((category) => (
            <button
              key={category}
              className={`button-filter ${selectedCategory === category ? 'main-button' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="container-card">
        {(showAll ? filteredProjects : filteredProjects.slice(0, 4)).map((project) => (
          <Card
            key={project.id}
            image={project.image}
            description={project.description}
            siteLink={project.siteLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <button className="button-see-more" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Ver menos' : 'Ver mais'}
      </button>
    </section>
  );
};

export default Projects;
