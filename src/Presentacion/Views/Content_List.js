import { Grid } from "@mui/material";
import React from "react";
import CardComponent from "../Componentes/Card";

const ListaContenido = (props) => {
  const characterList = props.characters.map((character) => (
    <Grid
      item
      key={character.id}
      xs={6}
      md={3}
      lg={2.4}
      style={{ display: "flex" }}
    >
      <CardComponent character={character} />
    </Grid>
  ));

  return (
    <div className="listaContenido">
      <Grid container spacing={2} alignItems="stretch">
        {characterList}
      </Grid>
    </div>
  );
};

export default ListaContenido;
