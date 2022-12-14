import React, { useState } from "react";
import { styles } from "./styles";

const ItemCount = ({ stock, initial, onAdd }) => {
  
    const [contador, setContador] = useState(initial);

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

    return (
        <div style={styles.contador}>
        <button onClick={restar}>-</button>
        <h3>{contador}</h3>
        <button onClick={sumar}>+</button>
        <button disabled={stock === 0} onClick={()=>onAdd(contador)}>
        </button>
      </div>
    );
};
export default ItemCount