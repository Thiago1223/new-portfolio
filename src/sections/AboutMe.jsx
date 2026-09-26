import React from 'react';
import { useInView } from '../hooks/useInView';
import { profile } from '../data/profile';
import MyImage from '../assets/my-image.png';
import MyCv from '../assets/curriculo-thiago.pdf';

const AboutMe = () => {
  const [ref, isVisible] = useInView();

  return (
    <section className={`about-me ${isVisible ? 'animate-slide-in' : ''}`} id="about-me" ref={ref}>
      <div className="container-about">
        <img src={MyImage} alt="Foto de Perfil" />
        <div className="container-my-info">
          <p className="my-name">Meu nome é <span className="my-name-content">{profile.displayName}</span></p>
          <h2>Eu sou estudante de Engenharia de Software e estagiário na área de dados.</h2>
          <p className="my-description">
            Sou estudante de Engenharia de Software na FIAP, com formação técnica em Análise e
            Desenvolvimento de Sistemas e experiência profissional em tecnologia no Bradesco,
            atuando com Dados, Riscos e Controles. No dia a dia, trabalho com Python, SQL e Power BI
            para automação de processos e construção de dashboards, além de manter conhecimentos em
            desenvolvimento Full Stack com JavaScript, React, Node.js, Java e Kotlin. Continuo ávido
            por aprender e dominar novas tecnologias, alimentando minha sede insaciável por
            conhecimento e desafio.
          </p>
          <ul className="content-details">
            <li className="content-details-line">
              <span className="content-details-key">Nome Completo</span>
              <span>:</span>
              <span className="content-details-value">{profile.fullName}</span>
            </li>
            <li className="content-details-line">
              <span className="content-details-key">Idade</span>
              <span>:</span>
              <span className="content-details-value">{profile.age}</span>
            </li>
            <li className="content-details-line">
              <span className="content-details-key">Endereço</span>
              <span>:</span>
              <span className="content-details-value">{profile.address}</span>
            </li>
            <li className="content-details-line">
              <span className="content-details-key">Telefone</span>
              <span>:</span>
              <span className="content-details-value">{profile.phone}</span>
            </li>
            <li className="content-details-line">
              <span className="content-details-key">Email</span>
              <span>:</span>
              <span className="content-details-value">{profile.email}</span>
            </li>
          </ul>
          <a href={MyCv} download="Curriculo_Thiago_Freitas.pdf">
            <button className="button-cv">Baixar Currículo</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
