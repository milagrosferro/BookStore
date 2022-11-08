import React from 'react'
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget/CartWidget";
import { style }from './navbar.style'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
     const categorias =[
      { nombre: " Fantasia ", id: 0, ruta: "/categoria/fantasia" },
      { nombre: " Romance ", id: 1, ruta: "/categoria/romance" },
      { nombre: " Misterio ", id: 2, ruta: "/categoria/misterio" },
      { nombre: " Sagas ", id: 3, ruta: "/categoria/sagas" },
    ]

    return (
      <header style={style.header}>
       <Link style={style.imagenes} to="/">
        <img style={style.imgLogo} src={logo} alt="CambreraStore" />
      </Link>
          <h1 style={style.title}>Cambrera Store</h1>
      
        <nav>
          {categorias.map((categoria) => {
            return (
              <NavLink
                key={categoria.id}
                style={style.categoria}
                to={categoria.ruta}
              >
                {categoria.nombre}
              </NavLink>
            );
          })}
        </nav>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </header>
    );
  };


export default Navbar

