import React, { useEffect, useState } from "react";
import ItemList   from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase"
import "./itemListCont.css"


export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  const prodColect = collection(db, "productos");
  const q =  id ? query(prodColect, where('category', '==', id)) : prodColect;


  useEffect(() => {

    getDocs(q)
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


  }, [id]);

  return (
    
    <>
      <h1 className="title">{greeting}</h1>
     {
       <>
      {<ItemList productos={productos} />}
     </>
   }
 </>
);
};

 