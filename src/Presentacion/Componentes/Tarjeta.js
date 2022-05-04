import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DetalleTarjeta from "./Detalle_tarjeta";
import { Box } from "@mui/system";

const Tarjeta = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Card
        onClick={handleClickOpen}
        sx={{
          minHeight: "100%",
          border: 2,
          borderColor: "primary.main",
          ":hover": {
            boxShadow: 10, // theme.shadows[20]
          },
        }}
      >
        <CardMedia
          component="img"
          image={`${props.personaje.thumbnail.path}/landscape_incredible.${props.personaje.thumbnail.extension}`}
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.personaje.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <b> # of comics</b> {props.personaje.comics.available}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <b> # series</b> {props.personaje.series.available}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <b> # of stories appearances</b> {props.personaje.stories.available}
          </Typography>
        </CardContent>
      </Card>
      <DetalleTarjeta
        open={open}
        onClose={handleClose}
        personaje={props.personaje}
      />
    </Box>
  );
};

export default Tarjeta;
