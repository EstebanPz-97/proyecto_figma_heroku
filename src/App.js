import './App.css';
import { Ahorro } from './Components/Ahorro';
import { Cabezera } from './Components/Cabezera';
import { Card } from './Components/Card';
import { Consejos } from './Components/Consejos';
import { Footer } from './Components/Footer';
import { Metas } from './Components/Metas';
import { Portafolio } from './Components/Portafolio';
import { Tarifas } from './Components/Tarifas';

function App() {
  return (
    <div className="App">
      <Cabezera />
      <Card />
      <Tarifas />
      <Metas />
      <Portafolio />
      <Ahorro />
      <Footer />
      <Consejos />

 
    </div>
  );
}

export default App;
