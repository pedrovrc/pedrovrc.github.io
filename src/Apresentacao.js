import React from 'react';
import './Apresentacao.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

function Apresentacao() {
  return (
    <section className="apresentacao">
      <h1>Olá, eu sou Pedro Carvalho.</h1>
      <img src="/img/foto.jpg" alt="Minha foto" className="foto-apresentacao" />
      <p>Sou um desenvolvedor de software em início de carreira, com 4+ anos de experiência
        em C/C++ e Python, atualmente estudando desenvolvimento web e buscando minha
        primeira oportunidade profissional na área.</p>
      <p>Bem-vindo(a) ao meu site!</p>
      <div className="apresentacao-links">
        <a href="mailto:pedrovrc.dev@gmail.com" target="_blank" rel="noopener noreferrer" title="Email"><FaEnvelope /></a>
        <a href="https://linkedin.com/in/pedrovrc-dev/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/pedrovrc" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://flowcv.com/resume/4ear5oome000" target="_blank" rel="noopener noreferrer" title="CV em Português"><FaFilePdf /> PT</a>
        <a href="https://flowcv.com/resume/83n68qpal3r3" target="_blank" rel="noopener noreferrer" title="CV em Inglês"><FaFilePdf /> EN</a>
      </div>
    </section>
  );
}

export default Apresentacao;
