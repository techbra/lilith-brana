import { Typography, Card} from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) =>{
    const {addItem}= useContext(CartContext);

    const onAdd = (cant) =>{
        addItem(item, cant);
    }
    return(
        <div>
  
            <img alt={item.imagen} src={item.imagen} />
            <Typography>
      <h1>{item.nombre}</h1>
      <h3>{item.descripcion}</h3>
      <h2>{item.precio}</h2>
      </Typography>
      <ItemCount itemStock={item.stock} onAdd={onAdd} />
  
  
  
   
         </div> 
    )
}

export default ItemDetail;