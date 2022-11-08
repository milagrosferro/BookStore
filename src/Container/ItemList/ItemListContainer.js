import React, { useEffect, useState } from "react";
import ItemList   from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase"


export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  const URL_BASE = "https://fakestoreapi.com/products"
  const URL_CAT = `${URL_BASE}/category/${id}`

  const prodColect = collection(db, "productos");
  const q = query(prodColect, where('category', '==', "Fantasia"))

  useEffect(() => {
    getDocs(prodColect)
    .then((resultado) => {
      const listProd = resultado.docs.map((item) => {
        return {
          ...item.data(),
          id: item.id,
        };
      });
      setProductos(listProd);
    })
    .catch((error) => {
      console.log(error);
    })
   

  }, [id, URL_BASE, URL_CAT, ]);


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

 