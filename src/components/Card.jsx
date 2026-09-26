import React from 'react';

const Card = ({ image, description, siteLink, githubLink }) => {
  return (
    <div className="card">
      <div className="container-start">
        <img src={image} alt="Projeto" />
        <p>{description}</p>
      </div>
      <div className="container-button">
        {siteLink && (
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <button>Ver site</button>
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        )}
        {!siteLink && !githubLink && (
          <span className="card-no-link">Projeto interno — sem link público</span>
        )}
      </div>
    </div>
  );
};

export default Card;
