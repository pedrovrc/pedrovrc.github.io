import React from 'react';
import './Formacao.css';

function Formacao({ idioma }) {
  return (
    <section className="formacao">
      <h2>{idioma === 'pt' ? 'Formação Acadêmica' : 'Academic Background'}</h2>
      <div className="formacao-lista">
        <div className="formacao-item">
          <h3>{idioma === 'pt' ? 'Bacharelado em Engenharia de Computação' : 'Bachelor in Computer Engineering'}</h3>
          <span className="instituicao">{idioma === 'pt' ? 'Universidade de Brasília (UnB)' : 'University of Brasília (UnB)'}</span>
          <span className="periodo">2017/08 - 2024/12</span>
          <p className="texto-regular">{idioma === 'pt' ? 'Trabalho de Conclusão publicado no 23º Simpósio Brasileiro de Qualidade de Software' : 'Thesis published at the 23rd Brazilian Symposium on Software Quality'} <i>(SBQS 2024)</i></p>
          <p className="texto-regular">{idioma === 'pt' ? 'Artigo' : 'Paper'}: <a href="https://dl.acm.org/doi/10.1145/3701625.3701665">Mining Discussions on Software Migration: A study of the Boost mailing list regarding C++ code evolution</a></p>
        </div>
      </div>
    </section>
  );
}

export default Formacao;
