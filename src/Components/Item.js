import React from "react";
import Card from "@mui/material/Card";
import{ Grid, CardContent, CardMedia,Typography,Button,CardActionArea,CardActions, Container} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id}>
      <Container sx={{ marginY: 5}}>
       <Grid container spacing={4}>
      <Grid item xs={5}>
      <Card sx={{ maxWidth: 450 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={item.imagen}
          alt={item.nombre}
        />
        <CardContent>
          <Typography
            variant="h3" color="text.secundary">
            {item.nombre}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {item.descripcion}
          </Typography>
          <Typography variant="h4" color="text.primary">
            {item.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
     <Button variant="contained" color="secondary">
          Ver Detalles
        </Button>
       
      </CardActions>
    </Card>
 
  </Grid>
  </Grid>
  </Container>
</Link>
  
  );
};
const styles = {
    container: {
      width: window.innerHeight > 900 ? "50%" : "100%",
      flexDirection: "column",
      justifyContent: "left",
      alignItems: "left",
      margin: 5,
      backgroundColor: "lilac",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 120,
      color: "purple"
    },
  };
  
  
export default Item;