import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Container/context/CustomContext";

export const CartWidget = () => {
  const { qty } = useContext(Context);
  return (
    <>
       <div className="cartImg">
            {qty === 0 ? '': <p className="qty">{qty}</p> }
                <ShoppingCartIcon  fontSize="large"/>
        </div>
      
    </>
  );
};

