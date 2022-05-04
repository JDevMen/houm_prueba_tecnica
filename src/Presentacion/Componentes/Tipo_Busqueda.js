import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const TipoBusqueda = (props) => {
  return (
    <Box>
      <FormLabel id="tipo-busqueda">Search type</FormLabel>
      <RadioGroup
        row
        aria-labelledby="tipo-busqueda"
        name="row-radio-buttons-group"
        value={props.tipo}
        onChange={(e) => props.tipoBusquedaHandler(e.target.value)}
      >
        <FormControlLabel value="filter" control={<Radio />} label="Filter" />
        <FormControlLabel value="exact" control={<Radio />} label="Exact" />
      </RadioGroup>
    </Box>
  );
};

export default TipoBusqueda;
