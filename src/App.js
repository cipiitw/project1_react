import './App.css';
import Labelalamat from './components/labelalamat';
import Labelnama from './components/labelnama';
import Button1 from './components/button1';


function App() {
  return (
    <div className="App">
      
      <h1>Profile </h1>
        <Labelnama name="Silvi" />
        <Labelnama name="Rizki" />
        <Labelnama name="Dewi" />
        <Labelalamat alamat="Jl. Raya No. 123" />
        <Button1 />
      
    </div>
  );
}

export default App;