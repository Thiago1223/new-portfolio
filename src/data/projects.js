import FirstProject from '../assets/first-project.png';
import SecondProject from '../assets/second-project.png';
import ThirdProject from '../assets/third-project.png';
import FourthProject from '../assets/fourth-project.png';
import FifthProject from '../assets/fifth-project.png';
import SixthProject from '../assets/sixth-project.png';
import SeventhProject from '../assets/seventh-project.png';
import EighthProject from '../assets/eighth-project.png';
import NinthProject from '../assets/ninth-project.png';
import TenthProject from '../assets/tenth-project.png';
import EleventhProject from '../assets/eleventh-project.png';
import TwelfthProject from '../assets/twelfth-project.png';
import ThirteenthProject from '../assets/thirteenth-project.png';
import FourteenthProject from '../assets/fourteenth-project.png';
import FifteenthProject from '../assets/fifteenth-project.png';
import GenericProject from '../assets/generic-project.svg';

// NOTA: os dois projetos abaixo (Programa Capacita e Sistema de Gerenciamento de
// Perfis) foram feitos internamente no Bradesco — sem print real disponível
// (usam uma imagem genérica) nem link público (o Card mostra o aviso
// "sem link público" no lugar dos botões).
export const projects = [
  {
    id: 'p1',
    image: FirstProject,
    description: 'Esta landing page foi criada para explorar minhas habilidades em front-end, aplicando conceitos de design e usabilidade. O projeto apresenta o jogo Valorant, destacando personagens, mapas e modos de jogo, utilizando HTML e CSS para uma interface atraente e responsiva.',
    siteLink: 'https://thiago1223.github.io/projeto-valorant/',
    githubLink: 'https://github.com/Thiago1223/projeto-valorant',
    category: 'Vanilla',
  },
  {
    id: 'p2',
    image: SecondProject,
    description: 'Esta landing page foi criada para explorar minhas habilidades em front-end, aplicando conceitos de design e usabilidade. O projeto apresenta o jogo Apex Legends, destacando personagens, mapas e modos de jogo, utilizando HTML e CSS para uma interface atraente e responsiva.',
    siteLink: 'https://thiago1223.github.io/projeto-apex/',
    githubLink: 'https://github.com/Thiago1223/projeto-apex',
    category: 'Vanilla',
  },
  {
    id: 'p3',
    image: ThirdProject,
    description: 'Este projeto, chamado Lion School, foi desenvolvido para simular o sistema de uma escola, aplicando meus conhecimentos em front-end. Utilizei HTML, CSS e JavaScript para criar uma interface interativa, exibindo informações sobre alunos, cursos e desempenho acadêmico.',
    siteLink: 'https://lion-school-fawn.vercel.app/',
    githubLink: 'https://github.com/Thiago1223/lion-school',
    category: 'Vanilla',
  },
  {
    id: 'p4',
    image: FourthProject,
    description: 'Este projeto foi inspirado na hamburgueria Le pinguê, onde desenvolvi uma interface interativa para exibir o cardápio, promoções e informações do estabelecimento. Utilizei HTML, CSS e JavaScript para criar uma experiência visual atraente e responsiva.',
    siteLink: 'https://fernandoleonid.github.io/one-page-2022/ds1t-b/thiagoFreitas/',
    githubLink: 'https://github.com/Thiago1223/one-page-2022',
    category: 'Vanilla',
  },
  {
    id: 'p5',
    image: FifthProject,
    description: 'Esta landing page foi criada para homenagear o universo de Naruto, destacando personagens, vilas e arcos da história. Utilizei HTML, CSS e JavaScript para desenvolver uma interface dinâmica e envolvente, integrando uma API pública para exibir informações detalhadas sobre os personagens da série.',
    siteLink: 'https://naruto-api-two.vercel.app/',
    githubLink: 'https://github.com/Thiago1223/naruto-api',
    category: 'Vanilla',
  },
  {
    id: 'p6',
    image: SixthProject,
    description: 'Esta landing page foi criada para destacar o Pikachu, um dos Pokémon mais icônicos. Utilizei HTML, CSS e JavaScript para desenvolver uma interface interativa e responsiva, integrando uma API pública para exibir informações detalhadas sobre o personagem e suas habilidades.',
    siteLink: 'https://thiago1223.github.io/landing-page-pikachu/',
    githubLink: 'https://github.com/Thiago1223/landing-page-pikachu',
    category: 'Vanilla',
  },
  {
    id: 'p7',
    image: SeventhProject,
    description: 'Esta landing page foi desenvolvida para apresentar a motocicleta E-Bike, destacando seu design inovador, desempenho e sustentabilidade. Utilizei HTML, CSS e JavaScript para criar uma interface moderna e responsiva, proporcionando uma experiência visual imersiva e informativa para os usuários.',
    siteLink: 'https://thiago1223.github.io/Projeto-motocicleta/',
    githubLink: 'https://github.com/Thiago1223/Projeto-motocicleta',
    category: 'Vanilla',
  },
  {
    id: 'p8',
    image: EighthProject,
    description: 'Esta landing page foi criada para apresentar o headphone Razer Kraken BT, destacando seu design, qualidade de som e conforto. Utilizei HTML, CSS e JavaScript para desenvolver uma interface moderna e responsiva, proporcionando uma experiência imersiva com detalhes sobre suas especificações e benefícios.',
    siteLink: 'https://thiago1223.github.io/headphone-purple/',
    githubLink: 'https://github.com/Thiago1223/headphone-purple',
    category: 'Vanilla',
  },
  {
    id: 'p9',
    image: NinthProject,
    description: 'Este projeto acadêmico foi desenvolvido para criar um formulário dinâmico que utiliza a API do ViaCEP para facilitar o preenchimento de endereços. Com HTML, CSS e JavaScript, a interface permite que o usuário insira um CEP e obtenha automaticamente as informações.',
    siteLink: 'https://thiago1223.github.io/formulario/',
    githubLink: 'https://github.com/Thiago1223/formulario',
    category: 'Vanilla',
  },
  {
    id: 'p10',
    image: TenthProject,
    description: 'Este projeto foi desenvolvido como um clone do WhatsApp, onde é possível visualizar conversas. Utilizei HTML, CSS e JavaScript para criar uma interface semelhante ao aplicativo original, proporcionando uma experiência interativa e responsiva para a navegação entre os chats.',
    siteLink: 'https://fernandoleonid.github.io/whatsApp-senai-1-2023/ds2t/thiago_freitas_vilari%C3%A7o/',
    githubLink: 'https://github.com/Thiago1223/whatsApp-senai-1-2023',
    category: 'Vanilla',
  },
  {
    // ATENÇÃO: os dois links abaixo ainda apontam para o repo do "headphone-purple"
    // (herdado do projeto original) — confirme com o Thiago qual o link correto
    // do app de agência de viagens antes de publicar.
    id: 'p11',
    image: EleventhProject,
    description: 'Este projeto foi desenvolvido como um aplicativo de agência de viagens utilizando Kotlin. O app possui telas de login, cadastro e inicial, onde os usuários podem visualizar pacotes de viagem. Os dados são consumidos de um banco de dados local, oferecendo uma navegação eficiente.',
    siteLink: 'https://thiago1223.github.io/headphone-purple/',
    githubLink: 'https://github.com/Thiago1223/headphone-purple',
    category: 'Mobile',
  },
  {
    id: 'p12',
    image: TwelfthProject,
    description: 'Este projeto foi desenvolvido para o setor de mecânica de usinagem do Senai, onde o professor pode gerenciar turmas, notas e matérias. É possível criar turmas, adicionar tarefas e visualizar os detalhes. O sistema foi feito com HTML, CSS e JavaScript, oferecendo uma gestão eficiente.',
    siteLink: 'https://front-mecanica-novo.vercel.app/',
    githubLink: 'https://github.com/Thiago1223/front-mecanica-novo',
    category: 'Vanilla',
  },
  {
    id: 'p13',
    image: ThirteenthProject,
    description: 'Este projeto foi desenvolvido como um aplicativo em Kotlin para simular uma escola. O app permite cadastrar alunos, visualizar cursos e notas, além de criar e gerenciar matérias. Utilizei Kotlin e um banco de dados local para garantir uma navegação ágil e eficiente.',
    siteLink: 'https://github.com/Thiago1223/Lion-School-Kotlin',
    githubLink: 'https://github.com/Thiago1223/Lion-School-Kotlin',
    category: 'Mobile',
  },
  {
    id: 'p14',
    image: FourteenthProject,
    description: 'Este projeto é uma página de visualização de produtos, onde o usuário pode adicionar itens ao carrinho. Utilizei uma API de produtos para exibir os itens e implementando as funcionalidades com TypeScript e React, proporcionando uma experiência interativa e dinâmica.',
    siteLink: 'https://projeto-mks-ten.vercel.app/',
    githubLink: 'https://github.com/Thiago1223/projeto-mks',
    category: 'React',
  },
  {
    id: 'p15',
    image: FifteenthProject,
    description: 'Este projeto foi meu TCC, um e-commerce para venda, troca e doações de livros. Durante seis meses, criamos o banco de dados e desenvolvemos as versões mobile em Kotlin e desktop em React, proporcionando uma plataforma funcional e responsiva.',
    siteLink: 'https://github.com/DevelopersVision/FrontEnd-Web_Sbook',
    githubLink: 'https://github.com/DevelopersVision/FrontEnd-Web_Sbook',
    category: 'React',
  },
  {
    id: 'p16',
    image: GenericProject,
    description: 'Solução analítica desenvolvida no Programa Capacita do Bradesco, em Python e Databricks, utilizando grafos para cálculo de rotas mais eficientes e de menor custo. Inclui um dashboard interativo em Power BI para visualização e análise dos resultados.',
    siteLink: null,
    githubLink: null,
    category: 'Dados',
  },
  {
    id: 'p17',
    image: GenericProject,
    description: 'Aplicação low-code em Power Apps para gestão de acessos e análise de conflitos de permissões, com automação do fluxo de validação e aprovação por gestores.',
    siteLink: null,
    githubLink: null,
    category: 'Dados',
  },
];
