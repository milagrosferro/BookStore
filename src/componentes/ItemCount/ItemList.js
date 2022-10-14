import React from "react";
import { Item } from "./Item"

export const ItemList = ({productos}) =>{

    console.log(productos)

    return (
        productos.map((producto)=>{
            <Item nombre = {productos.nombre} precio = {productos.precio} key = {productos.id}/>
        })
    )


}