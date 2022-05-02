import { Grid } from "@mui/material";
import React from "react";
import Tarjeta from "../Componentes/Tarjeta";

const ListaContenido = (props) => {
  console.log("personajes", props.personajes);

  const listaPersonajes = props.personajes.map((personaje) => (
    <Grid item xs={3}>
      <Tarjeta personaje={personaje} />
    </Grid>
  ));

  return (
    <div className="listaContenido">
      <h3>Lista contenido</h3>
      <Grid container spacing={1}>
        {listaPersonajes}
      </Grid>
    </div>
  );
};

export default ListaContenido;
