import React from 'react';
import { profile } from '../data/profile';
import ContactForm from '../components/ContactForm';
import ArrowIcon from '../assets/icon-arrow-down.svg';
import AddressIcon from '../assets/icon-address.svg';
import EmailIcon from '../assets/icon-email.svg';
import PhoneIcon from '../assets/icon-phone.svg';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container-title">
        <h3>Entre em <span className="container-title-default">Contato</span></h3>
        <span className="container-title-subtitle contact-subtitle">
          Estou sempre em busca de novos desafios no desenvolvimento de experiências. Se precisar
          conversar, tirar dúvidas ou propor um projeto, minha caixa de entrada está aberta.
          Aguardo sua mensagem!
        </span>
      </div>
      <div className="container-contact">
        <ul className="card-contact">
          <li className="container-card-contact">
            <img src={AddressIcon} alt="Endereço" width="36" />
            <span className="card-title">Endereço</span>
            <span className="card-subtitle">{profile.address}</span>
          </li>
          <li className="container-card-contact">
            <img src={EmailIcon} alt="Email" width="36" />
            <span className="card-title">Email</span>
            <span className="card-subtitle">{profile.email}</span>
          </li>
          <li className="container-card-contact">
            <img src={PhoneIcon} alt="Telefone" width="36" />
            <span className="card-title">Telefone</span>
            <span className="card-subtitle">{profile.phone}</span>
          </li>
        </ul>
        <ContactForm />
      </div>
      <a href="#home" className="icon-up">
        <img src={ArrowIcon} alt="Arrow Up" />
      </a>
    </section>
  );
};

export default Contact;
