import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/skills';

const Skills = () => {
  const [ref, isVisible] = useInView();
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <section className="skills">
      <div className="container-title">
        <h3>Minhas <span className="container-title-default">Habilidades</span></h3>
        <span className="container-title-subtitle">Aqui estão minhas habilidades em destaque:</span>
      </div>
      <div className={`container-skills ${isVisible ? 'animate-fade-in' : ''}`} ref={ref}>
        {visibleSkills.map((skill) => (
          <div key={skill.id} className="container-skills-individual">
            <span>{skill.name}</span>
            <progress value={skill.value} max="100"></progress>
          </div>
        ))}
      </div>
      <button className="button-see-more" onClick={() => setShowAllSkills(!showAllSkills)}>
        {!showAllSkills ? 'Ver mais' : 'Ver menos'}
      </button>
    </section>
  );
};

export default Skills;
