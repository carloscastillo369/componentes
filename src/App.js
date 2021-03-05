import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer message="ESTE ES EL CONTENEDOR DE LA LISTA DE ARTICULOS"/>
    </div>
  );
}

export default App;
