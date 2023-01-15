import { Typography } from "@mui/material";
import React from "react";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';

const Loading = () =>{
    return(
        <Typography>Cargando...
            <AirportShuttleIcon />
        </Typography>
    )
}

export default Loading;