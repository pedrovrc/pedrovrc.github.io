import React from 'react';
import './Experiencia.css';

function Experiencia({ idioma }) {
  return (
    <section className="experiencia">
      <h2>{idioma === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}</h2>
      <h4 className="texto-regular">{idioma === 'pt' ? 'Sou um desenvolvedor em início de carreira. Me ajude a expandir essa lista!' : 'I am an early career developer. Help me expand this list!'}</h4>
      <div className="experiencia-lista">
        <div className="experiencia-item">
          <h3>{idioma === 'pt' ? 'Polícia Federal (Sede - Brasília/DF)' : 'Federal Police (Headquarters - Brasília/DF)'}</h3>
          <span className="cargo">{idioma === 'pt' ? 'Estagiário de Suporte de TI' : 'IT Support Intern'}</span>
          <span className="periodo">2021/12 - 2022/12</span>
          <ul className="texto-regular">
            <li>{idioma === 'pt' ? 'Realizei manutenção preventiva e corretiva em computadores e notebooks;' : 'Performed preventive and corrective maintenance on computers and laptops;'}</li>
            <li>{idioma === 'pt' ? 'Participei da configuração e manutenção de redes e servidores, garantindo disponibilidade de serviços internos;' : 'Participated in the configuration and maintenance of networks and servers, ensuring the availability of internal services;'}</li>
            <li>{idioma === 'pt' ? 'Provi soluções gerais de TI para usuários finais, aumentando a eficiência operacional.' : 'Provided general IT solutions for end users, increasing operational efficiency.'}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
