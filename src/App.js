import React from "react";
import "./App.css";
import Navbar from './componentes/navbar/navbar'
import { ItemListContainer } from './Container/ItemListContainer'

const App = () => {

  const mensaje = "Prueba de mensaje para la preentrega"

  return ( <>
    <Navbar />
    <ItemListContainer greeting={mensaje} />
  </>
);
}

export default App;
