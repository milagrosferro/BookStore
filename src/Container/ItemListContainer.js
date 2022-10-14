import { estilos } from './Item.style';
import React, { useEffect, useState } from "react";
import { ItemCount } from "../componentes/ItemCount/ItemCount"
import { ItemList } from "../componentes/ItemCount/ItemList"

const productos = [
  {nombre:"HEARTSTOPPER", id:0, categoria:"romance", stock:10, precio:2365},
  {nombre:"HEARTLESS", id:1, categoria:"remake", stock:10, precio:4500},
  {nombre:"DE SANGRE Y CENIZAS", id:2, categoria:"fantasia", stock:10, precio:6000},
  {nombre:"ASESINO DE BRUJAS", id:3, categoria:"fantasia", stock:10, precio:3250},
];

const obtenerProductos = new Promise((resolve, reject)=>{
  setTimeout(() => {
    resolve(productos);
  }, );

})

export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((error)=>{
      console.log("salio todo mal");
      console.log(error);
    })
  }, [])

  const onAdd = ()=>{
    <h1>agregaste un producto al carrito</h1>
  }

  return (
    
    <main>
      <h1 style={estilos.titulo} >{greeting}</h1>
     {
        productos.map((producto)=>
          <h2 key={producto.id}>{producto.nombre}</h2>
        )
      }
      <ItemList productos = {productos}/>
      <ItemCount stock = {6} initial= {1} onAdd= {onAdd}/>
    </main>
    )
  };

      