import React from 'react';
import './Projetos.css';

function Projetos({ idioma }) {
  return (
    <section className="projetos">
      <h2>{idioma === 'pt' ? 'Meus Projetos' : 'My Projects'}</h2>
      <p className="texto-regular" style={{marginBottom: "20px"}}>{idioma === 'pt' ? 'Aqui estão alguns de meus projetos.' : 'Here are some of my projects.'}<br/>{idioma === 'pt' ? 'Mais projetos podem ser encontrados' : 'More projects can be found'} <a href="https://github.com/pedrovrc/">{idioma === 'pt' ? 'no meu GitHub' : 'on my GitHub'}</a>.</p>
      <div className="projetos-lista">
        <div className="projeto-card">
          <h3>{idioma === 'pt' ? 'Classificador de Rejuvenescimento de Software' : 'Software Rejuvenation Classifier'}</h3>
          <p className="texto-regular">{idioma === 'pt' ? 'Um projeto que utiliza técnicas de aprendizado de máquina para classificar mensagens de texto com relação à temática de rejuvenescimento de software.' : 'A project that uses machine learning techniques to classify text messages related to the theme of software rejuvenation.'}</p>
          <div className="tags-projeto">
            <span>Python</span>
            <span>{idioma === 'pt' ? 'Aprendizado de Máquina' : 'Machine Learning'}</span>
            <span>{idioma === 'pt' ? 'Análise de Dados' : 'Data Analysis'}</span>
            <span>{idioma === 'pt' ? 'Artigo Científico' : 'Scientific Paper'}</span>
          </div>
          <a href="https://github.com/pedrovrc/Classificador-de-Rejuvenescimento" target="_blank" rel="noopener noreferrer">{idioma === 'pt' ? 'Ver repositório no GitHub' : 'View repository on GitHub'}</a>
        </div>
        <div className="projeto-card">
          <h3>Rest in Peace (or not)</h3>
          <p className="texto-regular">{idioma === 'pt' ? 'Um projeto de desenvolvimento de jogo, com uma engine simplificada baseada completamente em C++ e SDL.' : 'A game development project, with a simplified engine completely based on C++ and SDL.'}</p>
          <div className="tags-projeto">
            <span>C++</span>
            <span>SDL</span>
            <span>{idioma === 'pt' ? 'Desenvolvimento de Jogos' : 'Game Development'}</span>
            <span>{idioma === 'pt' ? 'Design de Jogos' : 'Game Design'}</span>
            <span>{idioma === 'pt' ? 'Arte de Jogos' : 'Game Art'}</span>
          </div>
          <a href="https://github.com/pedrovrc/Rest-in-Peace" target="_blank" rel="noopener noreferrer">{idioma === 'pt' ? 'Ver repositório no GitHub' : 'View repository on GitHub'}</a>
        </div>
        <div className="projeto-card">
          <h3>{idioma === 'pt' ? 'Estudos de Django' : 'Django Studies'}</h3>
          <p className="texto-regular">{idioma === 'pt' ? 'Mini projetos desenvolvidos para facilitar o aprendizado de Django.' : 'Mini projects developed to facilitate learning Django.'}</p>
          <div className="tags-projeto">
            <span>Python</span>
            <span>Django</span>
            <span>{idioma === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</span>
          </div>
          <a href="https://github.com/pedrovrc/Django" target="_blank" rel="noopener noreferrer">{idioma === 'pt' ? 'Ver repositório no GitHub' : 'View repository on GitHub'}</a>
        </div>
        <div className="projeto-card">
          <h3>{idioma === 'pt' ? 'Estudos de Flask' : 'Flask Studies'}</h3>
          <p className="texto-regular">{idioma === 'pt' ? 'Mini projetos desenvolvidos para facilitar o aprendizado de Flask.' : 'Mini projects developed to facilitate learning Flask.'}</p>
          <div className="tags-projeto">
            <span>Python</span>
            <span>Flask</span>
            <span>{idioma === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</span>
          </div>
          <a href="https://github.com/pedrovrc/Flask" target="_blank" rel="noopener noreferrer">{idioma === 'pt' ? 'Ver repositório no GitHub' : 'View repository on GitHub'}</a>
        </div>
        <div className="projeto-card">
          <h3>{idioma === 'pt' ? 'Site de Portfólio' : 'Portfolio Site'}</h3>
          <p className="texto-regular">{idioma === 'pt' ? 'Site construído com React para apresentar meus projetos e habilidades' : 'React website built to showcase my projects and skills'} <span className="texto-claro-italico">({idioma === 'pt' ? 'você está aqui' : 'you are here'})</span>.</p>
          <div className="tags-projeto">
            <span>JavaScript</span>
            <span>React</span>
            <span>Github Pages</span>
            <span>{idioma === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</span>
          </div>
          <a href="https://github.com/pedrovrc/pedrovrc.github.io" target="_blank" rel="noopener noreferrer">{idioma === 'pt' ? 'Ver repositório no GitHub' : 'View repository on GitHub'}</a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
