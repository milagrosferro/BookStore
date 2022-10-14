import "./App.css";
import Navbar from './componentes/navbar/navbar'
import { ItemListContainer } from './Container/ItemListContainer'

const App = () => {

  const mensaje = "Encontra acá tu proxima lectura"

 
  return ( <>
    <Navbar />
    <ItemListContainer greeting={mensaje} />
  </>
);
}

export default App;
