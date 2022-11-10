import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Container/context/CustomContext";
import ItemCount from "../../componentes/ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
  const [mostrarItemCount, setMostrarItemCount] = useState(true);
  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    addItem(producto, count);
    setMostrarItemCount(false);
  };

  if (mostrarItemCount)

  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <h2>{producto.price}</h2>
      {mostrarItemCount ? (
        <ItemCount initial={1} stock={50} onAdd={onAdd} />
      ) : (
        <Link to={'/cart'}>
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;