import React from 'react';
import './Habilidades.css';

function Habilidades() {
  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li>Linguagens de Programação
            <ul>
                <li>C / C++
                    <ul>
                        <li>Interface de Terminais</li>
                        <li>Manejo de Memória</li>
                        <li>Orientação a Objeto</li>
                    </ul>
                </li>
                <li>Python
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>BeautifulSoup</li>
                        <li>Scikit-Learn</li>
                        <li>Pandas</li>
                        <li>NumPy</li>
                        <li>Matplotlib</li>
                        <li>OpenCV</li>
                    </ul>
                </li>
                <li>JavaScript
                    <ul>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>Dev Tools
            <ul className="dev-tools">
                <li>Visual Studio Code</li>
                <li>MySQL</li>
                <li>Git/GitHub</li>
                <li>Docker</li>
            </ul>
        </li>
        <li className="outras-habilidades">Habilidades e Interesses
            <ul className="outras-habilidades-lista">
                <li>Desenvolvimento Web</li>
                <li>Web Scraping</li>
                <li>Ciência/Análise de Dados</li>
                <li>Machine Learning</li>
                <li>Desenvolvimento de Jogos</li>
            </ul>
        </li>
        <li>Idiomas
            <ul>
                <li>Português
                    <ul>
                        <li>Nativo</li>
                    </ul>
                </li>
                <li>Inglês
                    <ul>
                        <li>Fluente</li>
                    </ul>
                </li>
                <li>Espanhol
                    <ul>
                        <li>Básico</li>
                    </ul>
                </li>
            </ul>
        </li>
      </ul>
    </section>
  );
}

export default Habilidades;
