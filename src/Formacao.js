import React from 'react';
import './Formacao.css';

function Formacao() {
  return (
    <section className="formacao">
      <h2>Formação Acadêmica</h2>
      <div className="formacao-lista">
        <div className="formacao-item">
          <h3>Bacharelado em Engenharia de Computação</h3>
          <span className="instituicao">Universidade de Brasília (UnB)</span>
          <span className="periodo">2017 - 2024</span>
          <p>Trabalho de Conclusão publicado no 23º Simpósio Brasileiro de Qualidade de Software (SBQS 2024)</p>
          <a href="https://dl.acm.org/doi/10.1145/3701625.3701665">Mining Discussions on Software Migration: A study of the Boost mailing list regarding C++ code evolution</a>
        </div>
      </div>
    </section>
  );
}

export default Formacao;
