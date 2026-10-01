import './App.css';
import Labelnama from './components/labelnama';

function App() {
  return (
    <div className="App">
      
      <h1>Profile </h1>
        <Labelnama name="Silvi" />
        <Labelnama name="Rizki" />
        <Labelnama name="Dewi" />
      <p>Alamat : Jl. Raya</p>
      
    </div>
  );
}

export default App;