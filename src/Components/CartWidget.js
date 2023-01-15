import React, { useContext } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from "@mui/material";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{

    const {cartTotal} = useContext(CartContext);
    return cartTotal() ? <Link to={"/cart"}>
            <div>
                <AddShoppingCartIcon  sx={{ color: "pink"[500] }} fontSize="large" />
              <span> {cartTotal()} </span>
            </div>
            </Link> : "";
    
}
 
export default CartWidget;