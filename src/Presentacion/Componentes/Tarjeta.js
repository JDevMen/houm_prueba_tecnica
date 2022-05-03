import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DetalleTarjeta from "./Detalle_tarjeta";

const Tarjeta = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card onClick={handleClickOpen}>
      <CardMedia
        component="img"
        image={`${props.personaje.thumbnail.path}/landscape_incredible.${props.personaje.thumbnail.extension}`}
        alt="test image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.personaje.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.personaje.description}
        </Typography>
      </CardContent>
      <DetalleTarjeta
        open={open}
        onClose={handleClose}
        personaje={props.personaje}
      />
    </Card>
  );
};

export default Tarjeta;
