import './App.css';
import CounterComponent from './components/CounterComponent.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Coder Shoes 👟"/>
    </>
  );
}

export default App;
