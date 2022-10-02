import React from "react";
import { estilos } from './Item.style';

export const ItemListContainer = ({ greeting, mansaje }) => {
  return (
    <>
      <h1 style={estilos.titulo} >{greeting}</h1>
      <h1>{mansaje}</h1>
    </>
  );
};