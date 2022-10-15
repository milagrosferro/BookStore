import React, { useEffect, useState } from "react";
import ItemList   from "./ItemList";



export const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then((res) => res.json())
      .then((json) => setProductos(json))
      .catch((error) => {
        console.log(error);
      })
  }, [])

 

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

      