import React, { useContext } from "react";
import { Context } from "../../Container/context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from "../../firebase/firebase"
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
 
  export const Cart = ({ estilo, color }) => {
   
    }
   
    return (
      <>
      {cart.length === 0 ? (
        <>
          <h1 className={estilo ? "red" : "green"}>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2 className={`tamanio ${color || ''}`}>Gracias por tu visita</h2>
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