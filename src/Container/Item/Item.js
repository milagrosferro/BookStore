import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={producto.image}
          alt={producto.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/producto/id">
          Ver Detalle
      </Link>
      </CardActions>
    </Card>
  );
}

const styles = {
    container: {
      width: window.innerHeight > 900 ? "25%" : "90%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 20,
      backgroundColor: "#808080.",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 100,
    },
  };
  
  export default Item;