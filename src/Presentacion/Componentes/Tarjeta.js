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
    <div>
      <Card sx={{ maxHeight: 300 }} onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="150px"
          image={`${props.personaje.thumbnail.path}/landscape_large.${props.personaje.thumbnail.extension}`}
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
      </Card>
      <DetalleTarjeta
        open={open}
        onClose={handleClose}
        personaje={props.personaje}
      />
    </div>
  );
};

export default Tarjeta;
