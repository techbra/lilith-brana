import React from "react";

const ItemDetail = ({item}) =>{
    return(
        <div>
            <img alt={item.imagen} src={item.imagen} />
      <h2>{item.nombre}</h2>
      <h3>{item.descripcion}</h3>
      <h3>{item.precio}</h3>
        </div>
    )
}

export default ItemDetail;