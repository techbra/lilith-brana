import React from "react";
import logo from "../Assets/logo.jpg";
import {AppBar, Toolbar, Box, Typography } from "@mui/material"
import NightlightIcon from '@mui/icons-material/Nightlight';
import { styles }  from "./styles"
import CartWidget from "../Components/CartWidget"
import {Link, NavLink} from "react-router-dom";

 

const Navbar = () =>{
    return(
           
      <AppBar position="static" sx={{backgroundImage:"radial-gradient(circle, rgba(55,188,226,1) 0%, rgba(155,99,170,1) 52%, rgba(5,13,228,0.835171568627451) 100%);"}}>
        <Toolbar>
        
       <navbar style={styles.navbar}>
       <Link style={styles.logo} to="/">
        <img style={styles.logo}src={logo} alt="♥" />
        </Link>
        <Typography variant="h2" alinear="justificar">Lilith <NightlightIcon /></Typography>
        <Typography variant="h5">
        <NavLink style={styles.categorias} to={"/category/Indumentaria"}>Indumentaria</NavLink>
        <NavLink style={styles.categorias} to={"/category/Jabones"}>Jabones</NavLink>
        <NavLink style={styles.categorias} to={"/category/Velas"}>Velas</NavLink>
        <NavLink style={styles.categorias} to={"/category/Bijou"}>Bijou</NavLink>
         </Typography>
        <CartWidget />
        </navbar>
        </Toolbar>
        </AppBar>
       
    )
}

export default Navbar;