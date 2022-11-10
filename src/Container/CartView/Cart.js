import React, { useContext } from "react";
import { Context } from "../../Container/context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";

  export const Cart = ({ estilo, color }) => {
    const { cart } = useContext(Context);
   
    return (
      <>
      {cart.length === 0 ? (
        <>
          <h1 className>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2 className>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <h1 key={producto.id}>{producto.title}</h1>
          ))}
        </>
      )}
    </>
  );
};