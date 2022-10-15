import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const Item = ({ producto }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.imagen}
          alt={producto.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {producto.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Detalle
        </Button>
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
      backgroundColor: "rgba(249, 220, 92, 0.3)",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 100,
    },
  };
  
  export default Item;