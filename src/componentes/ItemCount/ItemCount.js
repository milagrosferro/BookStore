import React, { useState } from "react";
import "./itemCount.css"

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
    <div >
      <div className="contador">
        <button className="quitar" onClick={quitar}>-</button>
        <h2 className="cant" >{cantidad}</h2>
        <button className="agregar"  onClick={agregar}>+</button>
      </div>
      <div>
        <button  className="btn" disabled={stock === 0} onClick={agregarAlCarrito}>
          <span>{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span>
        </button>
      </div>
    </div>

  );
};
export default ItemCount;