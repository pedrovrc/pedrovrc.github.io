import React from 'react';
import './Habilidades.css';
import { SiCplusplus, SiFlask, SiDjango, SiScikitlearn, SiPandas, SiNumpy, SiOpencv } from "react-icons/si";
import { FaTerminal, FaPython, FaReact, FaNodeJs, FaHtml5, FaTools, FaCode, FaDatabase, FaGamepad, FaGitAlt, FaDocker } from "react-icons/fa";
import { LuMemoryStick, LuBrainCircuit } from "react-icons/lu";
import { GrMysql } from "react-icons/gr";
import { TbPick } from "react-icons/tb";
import { GiSkills  } from "react-icons/gi";
import { IoLogoJavascript, IoLogoCss3, IoCodeWorking, IoLanguage } from "react-icons/io5";
import { MdDataObject, MdOutlineSoupKitchen } from "react-icons/md";
import { VscGraphLine, VscVscode } from "react-icons/vsc";

function Habilidades() {
  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <ul>
        <li><span className="icon-header"><MdDataObject /></span><span>Linguagens de Programação</span>
            <ul>
                <li><span className="icon-header"><SiCplusplus /></span><span>C / C++</span>
                    <ul>
                        <li><span className="icon"><FaTerminal /></span><span>Interface de Terminais</span></li>
                        <li><span className="icon"><LuMemoryStick /></span><span>Manejo de Memória</span></li>
                        <li><span className="icon"><IoCodeWorking /></span><span>Orientação a Objeto</span></li>
                    </ul>
                </li>
                <li><span className="icon-header"><FaPython /></span><span>Python</span>
                    <ul>
                        <li><span className="icon"><SiDjango /></span><span>Django</span></li>
                        <li><span className="icon"><SiFlask /></span><span>Flask</span></li>
                        <li><span className="icon"><SiPandas /></span><span>Pandas</span></li>
                        <li><span className="icon"><SiNumpy /></span><span>NumPy</span></li>
                        <li><span className="icon"><SiScikitlearn /></span><span>Scikit-Learn</span></li>
                        <li><span className="icon"><SiOpencv /></span><span>OpenCV</span></li>
                        <li><span className="icon"><MdOutlineSoupKitchen /></span><span>BeautifulSoup</span></li>
                        <li><span className="icon"><VscGraphLine /></span><span>Matplotlib</span></li>
                    </ul>
                </li>
                <li><span className="icon-header"><IoLogoJavascript /></span><span>JavaScript</span>
                    <ul>
                        <li><span className="icon"><FaReact /></span><span>React.js</span></li>
                        <li><span className="icon"><FaNodeJs /></span><span>Node.js</span></li>
                        <li><span className="icon"><FaHtml5 /></span><span>HTML</span></li>
                        <li><span className="icon"><IoLogoCss3 /></span><span>CSS</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><span className="icon-header"><FaTools /></span><span>Dev Tools</span>
            <ul className="dev-tools">
                <li><span className="icon"><VscVscode /></span><span>Visual Studio Code</span></li>
                <li><span className="icon"><GrMysql /></span><span>MySQL</span></li>
                <li><span className="icon"><FaGitAlt /></span><span>Git / GitHub</span></li>
                <li><span className="icon"><FaDocker /></span><span>Docker</span></li>
            </ul>
        </li>
        <li><span className="icon-header"><GiSkills /></span><span>Habilidades e Interesses</span>
            <ul className="outras-habilidades-lista">
                <li><span className="icon"><FaCode /></span><span>Desenvolvimento Web</span></li>
                <li><span className="icon"><TbPick /></span><span>Web Scraping</span></li>
                <li><span className="icon"><FaDatabase /></span><span>Ciência/Análise de Dados</span></li>
                <li><span className="icon"><LuBrainCircuit /></span><span>Machine Learning</span></li>
                <li><span className="icon"><FaGamepad /></span><span>Desenvolvimento de Jogos</span></li>
            </ul>
        </li>
        <li><span className="icon-header"><IoLanguage /></span><span>Idiomas</span>
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
