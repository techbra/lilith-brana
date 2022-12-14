import React, { useEffect, useState } from "react";
import { styles }  from "./styles"
import { Typography } from "@mui/material";
import arrayProductos from "../Json/arrayProductos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{
    const [items, setItems] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
      const promesa = new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
        })
     });
     promesa.then((data) => {
        console.log(data)
        setItems(data);

     })
      }, [id]);
    return(
    <div>
        <Typography variant="h5" color="primary">
        {greeting}
        </Typography>
        <ItemList items={items} />
    </div>

    )

}

export default ItemListContainer;