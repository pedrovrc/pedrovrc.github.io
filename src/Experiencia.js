import React from 'react';
import './Experiencia.css';

function Experiencia() {
  return (
    <section className="experiencia">
      <h2>Experiência Profissional</h2>
      <h4 className="texto-regular">Sou um desenvolvedor em início de carreira. Me ajude a expandir essa lista!</h4>
      <div className="experiencia-lista">
        <div className="experiencia-item">
          <h3>Polícia Federal (Sede - Brasília/DF)</h3>
          <span className="cargo">Estagiário de Suporte de TI</span>
          <span className="periodo">2021/12 - 2022/12</span>
          <ul className="texto-regular">
            <li>Realizei manutenção preventiva e corretiva em computadores e notebooks;</li>
            <li>Participei da configuração e manutenção de redes e servidores, garantindo disponibilidade de serviços internos;</li>
            <li>Provi soluções gerais de TI para usuários finais, aumentando a eficiência operacional.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
