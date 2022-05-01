import { Grid } from "@mui/material";
import React from "react";
import Tarjeta from "../Componentes/Tarjeta";

const ListaContenido = () => {
  return (
    <div className="listaContenido">
      <h3>Lista contenido</h3>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
        <Grid item xs={3}>
          <Tarjeta />
        </Grid>
      </Grid>
    </div>
  );
};

export default ListaContenido;
