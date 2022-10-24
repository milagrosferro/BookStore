import React from 'react'
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget/CartWidget";
import { style }from './navbar.style'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  
     const categorias =[
      { nombre: " Electronics ", id: 0, ruta: "/categoria/electronics" },
      { nombre: " Jewelery ", id: 1, ruta: "/categoria/jewelery" },
      { nombre: " Men's clothing ", id: 2, ruta: "/categoria/men's clothing" },
      { nombre: " Women's clothing ", id: 3, ruta: "/categoria/women's clothing" },
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

