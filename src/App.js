import React from "react";
import "./App.css";
import Navbar from './componentes/navbar/navbar';
import { ItemListContainer } from '../src/Container/ItemList/ItemListContainer'
import { ItemDetailContainer } from '../src/Container/ItemDetailContainer/ItemDetailContainer'
import  { Cart }  from '../src/Container/CartView/Cart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "../src/Container/context/CustomContext";

const App = () => {

  const mensaje = "Encontra los mejores productos"
  
  return ( 
  
    <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje} />} />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer greeting={mensaje} />}
          />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ItemListContainer />} />
        </Routes>
    </CustomProvider>
  </BrowserRouter>

);
}

export default App;
