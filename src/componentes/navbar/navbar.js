import React from 'react'
import logo from '../../assets/logo.png'
import { CartWidget } from "../CartWidget/CartWidget";
import { style }from './navbar.style'

const Navbar = () => {
  return (
    <header style={style.header}>
        <img style={style.imgLogo}src={logo} alt="tienda online" />
        <h1 style={style.title}>Book Store</h1>
        <nav>
            <a style={style.cat} href="">Categoria 1</a>
            <a style={style.cat} href="">Categoria 2</a>
            <a style={style.cat} href="">Categoria 3</a>
            <a style={style.cat} href="">Categoria 4</a>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default Navbar

