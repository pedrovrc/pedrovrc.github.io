import React from 'react';
import './Experiencia.css';

function Experiencia() {
  return (
    <section className="experiencia">
      <h2>Experiência Profissional</h2>
      <h4>Sou um desenvolvedor em início de carreira. Me ajude a expandir essa lista!</h4>
      <div className="experiencia-lista">
        <div className="experiencia-item">
          <h3>Polícia Federal (Sede - Brasília/DF)</h3>
          <span className="cargo">Estagiário de Suporte de TI</span>
          <span className="periodo">2022/12 - 2023/12</span>
          <p>- Realizei manutenção preventiva e corretiva em computadores e notebooks. <br />
            - Participei da configuração e manutenção de redes e servidores, garantindo disponibilidade de serviços internos. <br />
            - Provi soluções gerais de TI para usuários finais, aumentando a eficiência operacional. <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
