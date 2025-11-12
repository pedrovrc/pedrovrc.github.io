import React from 'react';
import './Projetos.css';

function Projetos() {
  return (
    <section className="projetos">
      <h2>Meus Projetos</h2>
      <h4>Aqui estão alguns de meus projetos. Mais projetos podem ser encontrados <a href="https://github.com/pedrovrc/">no meu GitHub</a>.</h4>
      <div className="projetos-lista">
        <div className="projeto-card">
          <h3>Classificador de Rejuvenescimento de Software</h3>
          <p>Um projeto que utiliza técnicas de aprendizado de máquina para classificar mensagens de texto com relação à temática de rejuvenescimento de software.</p>
          <a href="https://github.com/pedrovrc/Classificador-de-Rejuvenescimento" target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>
        <div className="projeto-card">
          <h3>Rest in Peace (or not)</h3>
          <p>Um projeto de desenvolvimento de jogo, com uma engine simplificada baseada completamente em C++ e SDL.</p>
          <a href="https://github.com/pedrovrc/Rest-in-Peace" target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>
        <div className="projeto-card">
          <h3>Estudos de Django</h3>
          <p>Mini projetos desenvolvidos para facilitar o aprendizado de Django.</p>
          <a href="https://github.com/pedrovrc/Django" target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>
        <div className="projeto-card">
          <h3>Estudos de Flask</h3>
          <p>Mini projetos desenvolvidos para facilitar o aprendizado de Flask.</p>
          <a href="https://github.com/pedrovrc/Flask" target="_blank" rel="noopener noreferrer">Ver projeto</a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
