import React, { useEffect, useState } from "react";
import  ItemDetail  from "../ItemDetailContainer/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./itemDetailContainer.css"

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { id } = useParams();
    
  useEffect(() => {
    const productCollec = collection(db, "productos");
    const refDoc = doc(productCollec, id);
    getDoc(refDoc)
      .then((result) => {
        setProducto({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log(error);
      })
      
  }, [id]);

  return (
    <>
      <h1 className="title">Detalle de producto</h1>
      {<>{ <ItemDetail producto={producto} />}</>}
    </>
  );
};

export default ItemDetailContainer