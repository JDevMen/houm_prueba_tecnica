import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const BusquedaExacta = (props) => {
  const [nombreExacto, setNombreExacto] = useState("");

  const onButtonPressedHandler = () => {
    console.log("Entro a button pressed", nombreExacto);
    props.buscarNombreExacto(nombreExacto);
  };

  const onResetSearchHandler = () => {
    props.resetFiltros();
  };

  const onChangeTextField = (e) => {
    setNombreExacto(e);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Exact name"
        variant="outlined"
        size="small"
        value={props.nombreExacto}
        onChange={(e) => onChangeTextField(e.target.value)}
      />
      <Button variant="contained" onClick={onButtonPressedHandler}>
        Search
      </Button>
      <Button variant="contained" onClick={onResetSearchHandler}>
        Reset search
      </Button>
    </div>
  );
};

export default BusquedaExacta;
