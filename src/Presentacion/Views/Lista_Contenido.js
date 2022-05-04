import { Grid } from "@mui/material";
import React from "react";
import Tarjeta from "../Componentes/Tarjeta";

const ListaContenido = (props) => {
  const listaPersonajes = props.personajes.map((personaje) => (
    <Grid
      item
      key={personaje.id}
      xs={6}
      md={3}
      lg={2.4}
      style={{ display: "flex" }}
    >
      <Tarjeta personaje={personaje} />
    </Grid>
  ));

  return (
    <div className="listaContenido">
      <Grid container spacing={2} alignItems="stretch">
        {listaPersonajes}
      </Grid>
    </div>
  );
};

export default ListaContenido;
