import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const BusquedaExacta = (props) => {
  const [nombreExacto, setNombreExacto] = useState("");

  const onButtonPressedHandler = () => {
    props.buscarNombreExacto(nombreExacto);
  };

  const onResetSearchHandler = () => {
    props.resetFiltros();
  };

  const onChangeTextField = (e) => {
    setNombreExacto(e);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label="Exact name"
          variant="outlined"
          size="small"
          style={{ minWidth: "100%" }}
          color="primary"
          value={props.nombreExacto}
          onChange={(e) => onChangeTextField(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={onButtonPressedHandler}>
          Search
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="outlined" onClick={onResetSearchHandler}>
          Reset search
        </Button>
      </Grid>
    </Grid>
  );
};

export default BusquedaExacta;
