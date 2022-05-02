import { Button, TextField } from "@mui/material";
import React from "react";

const BusquedaExacta = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Exact name"
        variant="outlined"
        size="small"
      />
      <Button variant="contained">Search</Button>
    </div>
  );
};

export default BusquedaExacta;
