import { Grid } from "@mui/material";
import React from "react";
import Tarjeta from "../Componentes/Tarjeta";

const ListaContenido = (props) => {
  const listaPersonajes = props.personajes.map((personaje) => (
    <Grid item xs={3}>
      <Tarjeta personaje={personaje} />
    </Grid>
  ));

  return (
    <div className="listaContenido">
      <Grid container spacing={1}>
        {listaPersonajes}
      </Grid>
    </div>
  );
};

export default ListaContenido;
