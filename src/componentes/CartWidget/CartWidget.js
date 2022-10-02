import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { style }from '../navbar/navbar.style'

export const CartWidget = () => {
  return (
    <ShoppingCartIcon style={style.shopingCart} />
  )
}