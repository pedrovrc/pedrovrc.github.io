import './App.css';
import Apresentacao from './Apresentacao';
import SobreMim from './SobreMim';
import Habilidades from './Habilidades';
import Projetos from './Projetos';
import Formacao from './Formacao';
import Experiencia from './Experiencia';
import Contato from './Contato';

function App() {
  return (
    <div className="App">
  <Apresentacao />
  <SobreMim />
  <Habilidades />
  <Projetos />
  <Formacao />
  <Experiencia />
  <Contato />
    </div>
  );
}

export default App;
