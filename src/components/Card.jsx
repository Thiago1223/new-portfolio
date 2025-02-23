import React from "react";

const Card = ({ image, description, siteLink, githubLink }) => {
    const blank = '_blank';
  return (
    <div className='card'>
        <div className='container-start'>
            <img src={image} alt="Projeto" />
            <p>{description}</p>
        </div>
        <div className='container-button'>
            <a href={siteLink} target={blank}>
                <button>Ver site</button>
            </a>
            <a href={githubLink} target={blank}>
                <button>GitHub</button>
            </a>
        </div>
    </div>
  );
};

export default Card;
