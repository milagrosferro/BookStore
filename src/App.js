import React from "react";
import "./App.css";
import Navbar from './componentes/navbar/navbar';
import { ItemListContainer } from '../src/Container/ItemList/ItemListContainer'

const App = () => {

  const mensaje = "Encontra acá tu proxima lectura"

 
  return ( <>
    <Navbar />
    <ItemListContainer greeting={mensaje} />
  </>
);
}

export default App;
