import { Typography, Card} from "@mui/material";
import React from "react";


const ItemDetail = ({item}) =>{
    return(
        <div>
  
            <img alt={item.imagen} src={item.imagen} />
            <Typography>
      <h1>{item.nombre}</h1>
      <h3>{item.descripcion}</h3>
      <h2>{item.precio}</h2>
      </Typography>

  
   
         </div> 
    )
}

export default ItemDetail;