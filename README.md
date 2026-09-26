# 💻 Portfólio Pessoal — Thiago Freitas Vilariço

Site pessoal desenvolvido em React para apresentar minha trajetória, experiência profissional, habilidades técnicas e projetos como estudante de Engenharia de Software.

🔗 **Deploy:** [Site Hospedado](https://new-portfolio-five-gold.vercel.app/)

---

## 📋 Índice

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Como executar](#-como-executar)
- [Scripts disponíveis](#-scripts-disponíveis)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Responsividade](#-responsividade)
- [Autor](#-autor)

---

## 📖 Sobre o projeto

Este é o meu portfólio pessoal, construído do zero com **React** e **CSS puro** (sem frameworks de UI). O objetivo é centralizar em um único lugar minha apresentação profissional, formação acadêmica, experiência no mercado, principais projetos desenvolvidos e uma forma direta de contato.

O site é **totalmente responsivo**, adaptando o layout, a tipografia e a navegação (incluindo um menu hambúrguer) para desktop, tablet e celular.

## ✨ Funcionalidades

- **Hero animado** com efeito de digitação (typing effect) alternando entre minhas áreas de atuação
- **Sobre mim** com dados pessoais, formação e botão de download do currículo em PDF
- **Experiência profissional** listando minhas passagens por empresas, com principais atividades de cada uma
- **Skills** com barra de progresso por tecnologia e opção de "ver mais/ver menos"
- **Projetos** com filtro por categoria (Mobile, React, Vanilla, Dados), cards com imagem, descrição e links para site/repositório
- **Formulário de contato** funcional, integrado via [Formspree](https://formspree.io/), com máscara de telefone e modal de feedback de envio
- **Animações de entrada** (fade-in / slide-in) ao rolar a página, usando `IntersectionObserver`
- **Menu responsivo**: navegação normal em telas grandes e menu hambúrguer (3 barras) em telas de celular

## 🚀 Tecnologias utilizadas

- [React 19](https://react.dev/)
- [React Scripts](https://create-react-app.dev/) (Create React App)
- [Swiper](https://swiperjs.com/) — carrossel
- **JavaScript (JSX)**
- **CSS3** (variáveis CSS, Flexbox, Grid, media queries)
- **HTML5**
- [Formspree](https://formspree.io/) — envio do formulário de contato sem back-end próprio

## ✅ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (instalado junto com o Node.js) ou [yarn](https://yarnpkg.com/)
- Git (opcional, para clonar o repositório)

## ⚙️ Como executar

```bash
# Clone este repositório
git clone https://github.com/Thiago1223/new-portfolio.git

# Acesse a pasta do projeto
cd new-portfolio

# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm start
```

O projeto abrirá automaticamente em [http://localhost:3000](http://localhost:3000).

> **Windows + PowerShell:** se aparecer um erro de "execução de scripts desabilitada" ao rodar `npm install`/`npm start`, use o Prompt de Comando (cmd) no lugar do PowerShell, ou rode como administrador:
> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

## 📜 Scripts disponíveis

| Comando         | Descrição                                                       |
|-----------------|------------------------------------------------------------------|
| `npm start`     | Roda o projeto em modo desenvolvimento (`localhost:3000`)         |
| `npm run build` | Gera a versão de produção otimizada na pasta `build/`             |
| `npm test`      | Executa os testes                                                 |
| `npm run eject` | Expõe as configurações internas do Create React App (irreversível)|

## 📁 Estrutura de pastas

new-portfolio/
├── public/ # Arquivos estáticos (favicon, manifest, index.html)
├── src/
│ ├── assets/ # Imagens, ícones, PDF do currículo
│ ├── components/ # Componentes reutilizáveis
│ │ ├── Card.jsx # Card de projeto (imagem, descrição, links)
│ │ ├── ContactForm.jsx # Formulário de contato (integração Formspree)
│ │ └── Modal.jsx # Modal de feedback (sucesso/erro no envio)
│ ├── data/ # Dados do site, separados da UI (fonte única de verdade)
│ │ ├── profile.js # Nome, contato, redes sociais
│ │ ├── skills.js # Lista de habilidades e nível de cada uma
│ │ ├── projects.js # Lista de projetos (imagem, descrição, links, categoria)
│ │ └── experience.js # Experiências profissionais
│ ├── hooks/ # Hooks customizados reutilizáveis
│ │ ├── useTypingEffect.js # Efeito de digitação do hero
│ │ └── useInView.js # Detecção de scroll (IntersectionObserver)
│ ├── sections/ # Cada seção da página como um componente
│ │ ├── Home.jsx
│ │ ├── AboutMe.jsx
│ │ ├── Experience.jsx
│ │ ├── Skills.jsx
│ │ ├── Projects.jsx
│ │ └── Contact.jsx
│ ├── styles/ # Um arquivo CSS por seção/componente
│ ├── App.jsx # Composição das seções
│ └── index.js # Ponto de entrada da aplicação
├── package.json
└── README.md


## 📱 Responsividade

O layout foi construído com breakpoints para três faixas principais:

- **Desktop** (padrão)
- **Tablet** (`max-width: 1000px` / `1100px` conforme a seção)
- **Mobile** (`max-width: 640px`, com ajustes extras em `max-width: 380px`)

Em telas de celular, o menu de navegação é substituído por um **menu hambúrguer** (3 barras que se transformam em X ao abrir).

## 👤 Autor

**Thiago Freitas Vilariço**

- [LinkedIn](https://www.linkedin.com/in/thiagofv/)
- [GitHub](https://github.com/Thiago1223)
- [Instagram](https://www.instagram.com/thiagofreitas_07/)

---

Feito por Thiago Freitas.