import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {  collection, getDocs, getFirestore,  query, where, limit  } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {id} = useParams ();
     
  
      useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setCargando(false);
          });
    }, [id]);

 
    return(
    <div>
        <Typography variant="h5" color="primary">
        {greeting}
        </Typography>
        {cargando ? <Loading /> : <ItemList items={items} />}
    </div>

    )

}

export default ItemListContainer;