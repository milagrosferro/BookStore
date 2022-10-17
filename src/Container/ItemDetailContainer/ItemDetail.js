import React from "react";

import ItemCount from "../../componentes/ItemCount/ItemCount"

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <img alt={producto.title} src={producto.image} />
      <h1>{producto.title}</h1>
      <span>{producto.description}</span>
      <ItemCount/>
      <h2>{producto.price}</h2>
    </div>
  );
};

export default ItemDetail;