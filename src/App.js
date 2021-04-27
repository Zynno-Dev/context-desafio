import logo from './logo.svg';
import './App.css';
import MobileList from './Components/MobileList/MobileList';

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
