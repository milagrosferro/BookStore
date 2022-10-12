import React from "react";
import { estilos } from './Item.style';
import ItemCount  from "../componentes/ItemCount/ItemCount";

export const ItemListContainer = ({ greeting, mansaje }) => {
  const onAdd = (count) => {
    console.log(`Se agrego ${count} productos al carrito`);
  };

  return (
    <>
      <h1 style={estilos.titulo} >{greeting}</h1>
      <h1>{mansaje}</h1>
      <ItemCount stock={10} initial={1} onAdd={onAdd}/>
    </>
  );
};

