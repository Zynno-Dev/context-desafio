import logo from './logo.svg';
import './App.css';
import MobileList from './Components/MobileList/MobileList';
import { MobileProvider } from './MobileContext/MobileContext'

function App() {
  return (
    <MobileProvider>
      <div className="App">
        <h1>Celulares en venta</h1>
        <MobileList />
      </div>
    </MobileProvider>
  );
}

export default App;
