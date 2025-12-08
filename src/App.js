import './App.css';
import Apresentacao from './Apresentacao';
import SobreMim from './SobreMim';
import Habilidades from './Habilidades';
import Projetos from './Projetos';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import Contato from './Contato';
import React from 'react';

function App() {
  const [idioma, setIdioma] = React.useState('pt');

  return (
    <div className="App">
    <button className='botao-idioma' onClick={() => setIdioma(idioma === 'pt' ? 'en' : 'pt')}>
      {idioma === 'pt' ? '🇺🇸 Change to English' : '🇧🇷 Mudar para Português'}
    </button>
  <Apresentacao idioma={idioma} />
  <Habilidades idioma={idioma} />
  <Projetos idioma={idioma} />
  <Formacao idioma={idioma} />
  <Experiencia idioma={idioma} />
  <SobreMim idioma={idioma} />
  <Contato idioma={idioma} />
    </div>
  );
}

export default App;
