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

function Habilidades({ idioma }) {
  return (
    <section className="habilidades">
      <h2>{idioma === 'pt' ? 'Habilidades' : 'Skills'}</h2>
      <ul>
        <li><span className="icon-header"><MdDataObject /></span><span>{idioma === 'pt' ? 'Linguagens de Programação' : 'Programming Languages'}</span>
            <ul>
                <li><span className="icon-header"><SiCplusplus /></span><span>C / C++</span>
                    <ul>
                        <li><span className="icon"><FaTerminal /></span><span>{idioma === 'pt' ? 'Interface de Terminais' : 'Terminal Interfaces'}</span></li>
                        <li><span className="icon"><LuMemoryStick /></span><span>{idioma === 'pt' ? 'Manejo de Memória' : 'Memory Management'}</span></li>
                        <li><span className="icon"><IoCodeWorking /></span><span>{idioma === 'pt' ? 'Orientação a Objeto' : 'Object-Oriented Programming'}</span></li>
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
        <li><span className="icon-header"><GiSkills /></span><span>{idioma === 'pt' ? 'Habilidades e Interesses' : 'Skills and Interests'}</span>
            <ul className="outras-habilidades-lista">
                <li><span className="icon"><FaCode /></span><span>{idioma === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</span></li>
                <li><span className="icon"><TbPick /></span><span>{idioma === 'pt' ? 'Web Scraping' : 'Web Scraping'}</span></li>
                <li><span className="icon"><FaDatabase /></span><span>{idioma === 'pt' ? 'Ciência/Análise de Dados' : 'Data Science/Analysis'}</span></li>
                <li><span className="icon"><LuBrainCircuit /></span><span>{idioma === 'pt' ? 'Machine Learning' : 'Machine Learning'}</span></li>
                <li><span className="icon"><FaGamepad /></span><span>{idioma === 'pt' ? 'Desenvolvimento de Jogos' : 'Game Development'}</span></li>
            </ul>
        </li>
        <li><span className="icon-header"><IoLanguage /></span><span>{idioma === 'pt' ? 'Idiomas' : 'Languages'}</span>
            <ul>
                <li>{idioma === 'pt' ? 'Português' : 'Portuguese'}
                    <ul>
                        <li>{idioma === 'pt' ? 'Nativo' : 'Native'}</li>
                    </ul>
                </li>
                <li>{idioma === 'pt' ? 'Inglês' : 'English'}
                    <ul>
                        <li>{idioma === 'pt' ? 'Fluente' : 'Fluent'}</li>
                    </ul>
                </li>
                <li>{idioma === 'pt' ? 'Espanhol' : 'Spanish'}
                    <ul>
                        <li>{idioma === 'pt' ? 'Básico' : 'Basic'}</li>
                    </ul>
                </li>
            </ul>
        </li>
      </ul>
    </section>
  );
}

export default Habilidades;
