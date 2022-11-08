import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const quitar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
          }
        };
    

    const agregar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
          }
          else {
            <h1>No hay stock</h1>
          }
        };

    const agregarCarrito = ()=>{
        onAdd();
        return onAdd();
      };
        

return (
    <div>
      <button onClick={quitar}>-</button>    
      <h2>{cantidad}</h2>
      <button onClick={agregar}>+</button>
      <button onClick = {agregarCarrito}>Agregar al carrito</button>
    </div>

  );
};

export default ItemCount;