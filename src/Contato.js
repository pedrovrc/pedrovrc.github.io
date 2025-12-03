import React from 'react';
import './Contato.css';
import { FaFilePdf } from 'react-icons/fa';

function Contato() {
  return (
    <section className="contato">
      <h2>Contato</h2>
      <div className="contato-info">
        <p className="texto-regular">Email: <a href="mailto:pedrovrc.dev@gmail.com">pedrovrc.dev@gmail.com</a></p>
        <p className="texto-regular">LinkedIn: <a href="https://www.linkedin.com/in/pedrovrc-dev" target="_blank" rel="noopener noreferrer">linkedin.com/in/pedrovrc-dev</a></p>
        <p className="texto-regular">GitHub: <a href="https://github.com/pedrovrc" target="_blank" rel="noopener noreferrer">github.com/pedrovrc</a></p>
        <p className="texto-regular" style={{marginTop: '24px'}}><FaFilePdf style={{marginRight: '4px'}} /><a href="https://flowcv.com/resume/4ear5oome000" target="_blank" rel="noopener noreferrer">CV em Português</a> | <FaFilePdf style={{marginRight: '4px'}} /><a href="https://flowcv.com/resume/83n68qpal3r3" target="_blank" rel="noopener noreferrer">English Resume</a></p>
      </div>
    </section>
  );
}

export default Contato;
