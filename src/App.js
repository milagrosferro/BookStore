import React from "react";
import "./App.css";
import Navbar from './componentes/navbar/navbar';
import { ItemListContainer } from '../src/Container/ItemList/ItemListContainer'
import { ItemDetailContainer } from '../src/Container/ItemDetailContainer/ItemDetailContainer'
import { Cart } from '../src/Container/CartView/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {

  const mensaje = "Encontra los mejores productos"
  
  return ( 
  <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje} />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer greeting={mensaje}/>}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
  </>
);
}

export default App;
