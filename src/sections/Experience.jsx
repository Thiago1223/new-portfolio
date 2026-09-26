import React from 'react';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/experience';

const Experience = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className={`experience ${isVisible ? 'animate-fade-in' : ''}`} id="experience" ref={ref}>
      <div className="container-title">
        <h3>Experiência <span className="container-title-default">Profissional</span></h3>
        <span className="container-title-subtitle">Onde já apliquei o que aprendi na prática:</span>
      </div>
      <div className="container-experience">
        {experience.map((job) => (
          <div className="experience-card" key={job.id}>
            <div className="experience-card-header">
              <h4>{job.role}</h4>
              <span className="experience-company">{job.company}</span>
              <span className="experience-period">{job.period}</span>
            </div>
            <ul>
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
