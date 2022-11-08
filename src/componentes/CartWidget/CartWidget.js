import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { style }from '../navbar/navbar.style'
import { Context } from "../../Container/context/CustomContext";

export const CartWidget = () => {
  const { qty } = useContext(Context);
  return (
    <>
      <p>{qty}</p>
      <ShoppingCartIcon style={style.shopingCart} />
    </>
  );
};

