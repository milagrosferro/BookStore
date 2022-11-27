import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Container/context/CustomContext";
import ItemCount from "../../componentes/ItemCount/ItemCount"
import "../ItemDetailContainer/itemDetail.css"


const ItemDetail = ({ producto }) => {
  const [mostrarItemCount, setMostrarItemCount] = useState(true);
  const { addItem } = useContext(Context);

  const onAdd = (count) => {
    addItem(producto, count);
    setMostrarItemCount(false);
  };


  return (
    <div className="container">
      <div className="productContainer">
        <img  className="productImg" alt={producto.title} src={producto.image} />
        <h1 className="productTitle">{producto.title}</h1>
        <span className="productDesc">{producto.description}</span>
        <h2 className="productPrice">${producto.price}</h2>
        {mostrarItemCount ? <ItemCount initial={1} stock={50} onAdd={onAdd}/> :  <Link to="/cart"><button >Finalizar Compra</button></Link>}  
      </div>
    </div>      
      )
  }
  
export default ItemDetail;