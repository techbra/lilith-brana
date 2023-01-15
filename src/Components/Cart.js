import React, { useContext } from "react";
import {CartContext} from "./Context/CartContext";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';


const Cart = () => {
    const {cart, removeItem, clear, cartTotal, subTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div >
                 <h1>No se encontraron Productos en el Carrito!</h1>
                 <Link to={"/"}>Volver a la Página Principal</Link>
            </div>
        )
    }
return (
        <div >
            <Link onClick={clear}  title="Vaciar Carrito">Vaciar Carrito</Link>
                        
                                <h1>Producto</h1>
                                <h1>Cantidad</h1>
                                <h1>Precio</h1>
                           
                            {cart.map((item) => 
                            <Card key={item.id} item={item}>
                            <img src={item.imagen} alt={item.nombre} width={64} />
                            <Typography>
                            {item.nombre}
                            {item.cant}
                           ${item.cant * item.precio}
                          <Link onClick={() => {removeItem(item.id)}} title="Eliminar Producto"> <DoNotDisturbOnIcon /> </Link>
            
                            </Typography>
                            </Card>
                            )}
                              
                             <h1>Suma Total</h1>
                            <h1>${subTotal()}</h1>
                            <Link to={"/checkout"}  title="Finalizar Compra">Finalizar Compra</Link>
                              
                         
        </div>
    )
}

export default Cart;
