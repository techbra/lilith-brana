import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
  const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [venta, setVenta] = useState(false);

    const restar = () => {
      console.log("restar")
      if (contador > 1) {
        setContador(contador - 1);
      }
    };

    const sumar = () => {
      console.log("sumar")
      if (contador < stock) {
        setContador(contador + 1);
      }
    };

    const addCart = (cant) => {
        setItemStock(itemStock - cant);
        setContador(1);
        setVenta(true);
        onAdd(cant);
    }

     useEffect(() =>{
         setItemStock(stock);

     }, [stock])

    return (
        <div>
        <button onClick={restar}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        {venta ? <Link to={"/cart"}> Compra lista!</Link> : <button onClick={() => {addCart(contador)}}>Agregar al Carrito</button>}
      </div>
    );
};
export default ItemCount 