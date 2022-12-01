import { Typography } from "@mui/material";
import React from "react";
import { styles }  from "./styles"

const ItemListContainer = ({greeting}) =>{
    return(
    <div>
        <Typography variant="h5" color="primary">
        {greeting}
        </Typography>
    </div>
    )

}

export default ItemListContainer;