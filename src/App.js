import './App.css';
import { Cabezera } from './Components/Cabezera';
import { Card } from './Components/Card';
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
      {/* <Footer /> */}
      <Portafolio />

 
    </div>
  );
}

export default App;
