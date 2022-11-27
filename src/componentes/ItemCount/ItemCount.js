import React, { useState } from "react";

 export const ItemCount = ({ stock, initial, onAdd }) => {

  const [cantidad, setCantidad] = useState(initial);

  const agregar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const quitar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };


  const agregarAlCarrito = ()=>{
    if(stock!==0){
        onAdd(cantidad);
    }
}

  return (
    <div>
      <button onClick={quitar}>-</button>
      <h2>{cantidad}</h2>
      <button onClick={agregar}>+</button>
      <button disabled={stock === 0} onClick={agregarAlCarrito}>
        <span>{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span>
      </button>
    </div>

  );
};
export default ItemCount;