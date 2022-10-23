import React, { useEffect, useState } from "react";
import ItemList   from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  const URL_BASE = 'https://fakestoreapi.com/products?limit=30'
  const URL_CAT = `${URL_BASE}/category/${id} `

  useEffect(() => {
    const getProductos = async () => {
      try {
        const res = await fetch(id ? URL_CAT : URL_BASE);
        const data = await res.json();
        setProductos(data);
      } catch {
        console.log("error");
      } 
    };
    getProductos();

  }, [id, URL_BASE, URL_CAT])


  return (
    
    <>
      <h1 >{greeting}</h1>
     {
       <>
      {<ItemList productos={productos} />}
     </>
   }
 </>
);
};

      