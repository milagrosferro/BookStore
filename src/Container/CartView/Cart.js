import React, { useContext, useState } from "react";
import { Context } from "../../Container/context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { db } from '../../firebase/firebase';
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2/dist/sweetalert2.js'

  export const Cart = () => {
    const {cart, qty, total, deleteItem, clear} = useContext(Context);
    const [user, setUser] = useState({});
  
    const updateUser = (event) => {
      setUser( user => ({...user, [event.target.name]: event.target.value }))
  }
  
    const updateStock = (e)=>{
      e.preventDefault();
      cart.forEach(element => {
        const updateStock = doc(db, "productos", element.id)
        updateDoc(updateStock, {Stock: element.Stock - qty})
      });
      finalizarCompra();  
    }
  
    const finalizarCompra = ()=>{
      const ventaCollection = collection(db, "ventas");
      addDoc(ventaCollection, {
        comprador: user,
        items: cart, 
        total,
        date: serverTimestamp(),
      })
      .then(result =>{
        Swal.fire({
          title: ("Tu compra fue completada con exito!", "Codigo de la compra: " + result.id, "success"),
          width: 600,
          padding: '3em',
          color: '#716add',
          background: '#fff url(/images/trees.png)',
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `
        })
        })
      .catch(e=>{
        console.log(e);
      })
      clear();    
    }
  
   
    return (
      <>
      {cart.length === 0 ? (
        
          <h1 className>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          
      ) : (
        <>
    <div >
      <div className='partesProd'>
        <p className='prod'>Foto</p>
        <p className='prod'>Producto</p>
        <p className='prod'>Unidades</p>
        <p className='prod'>SubTotal</p>
        <p className='prod'>Borrar</p>
      </div>          
      {cart.map((producto)=>(
        <div key={producto.id} className='prodList'>
            <img className='prodImg' src={producto.image} alt={producto.title} /> 
            <p className='prod'>{producto.title}</p>
            <p className='prod'>{producto.cantidad}</p>
            <p className='prod'>$ {producto.price * producto.cantidad}</p>
            <div >
              <button className='btnDelete' onClick={()=>deleteItem(producto.id)}><DeleteIcon /></button>
            </div>
        </div>
      ))}
</div>
      <div>
        <form action="" className='form' onSubmit={updateStock}>
            <p>Productos: {qty}</p>
            <p>Total del carrito: $ {total}</p>            
              <input onChange={updateUser} placeholder="Nombre" name='name' type='text' required/>
              <input onChange={updateUser} placeholder="Apellido" name='surname' type='text' required/>
              <input onChange={updateUser} placeholder="Tel" name='Tel' type='text' />
              <input onChange={updateUser} placeholder="Email" name='email' type='email' required/>
              <button className='btnFinalizar' type="submit">Finalizar Compra</button>
              <button className='btnFinalizar' onClick={clear}>Limpiar Carrito</button>
        </form>
                
      </div>  
        </>
      )
    }

    </>
  );

}