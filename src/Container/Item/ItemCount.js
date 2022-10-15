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

return (
    <div>
      <button onClick={quitar}>-</button>    
      <h2>{cantidad}</h2>
      <button onClick={agregar}>+</button>
      <button disabled={stock === 0} onClick={()=>onAdd(cantidad)}>
        <span>{stock === 0 ? 'No tenemos stock' : 'Agrega al carrito'}</span>
      </button>
    </div>

  );
};

export default ItemCount;