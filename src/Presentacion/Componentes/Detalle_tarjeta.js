import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const DetalleTarjeta = (props) => {
  const { onClose, open, personaje } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{personaje.name}</DialogTitle>
      <DialogContent>
        <img
          src={`${props.personaje.thumbnail.path}/landscape_amazing.${props.personaje.thumbnail.extension}`}
          alt="imagenDetalleTarjeta"
        />
        <DialogContentText>{personaje.description}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default DetalleTarjeta;
