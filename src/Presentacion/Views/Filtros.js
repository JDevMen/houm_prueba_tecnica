import { FormControl } from "@mui/material";
import React, { useState } from "react";
import BusquedaExacta from "../Componentes/Busqueda_Exacta";
import CamposFiltrado from "../Componentes/Campos_Filtrado";
import TipoBusqueda from "../Componentes/Tipo_Busqueda";

const Filtros = () => {
  const [tipoBusqueda, setTipoBusqueda] = useState("filter");

  const tipoBusquedaHandler = (e) => {
    console.log("handler", e);
    setTipoBusqueda(e);
  };

  return (
    <FormControl fullWidth>
      <TipoBusqueda
        tipo={tipoBusqueda}
        tipoBusquedaHandler={tipoBusquedaHandler}
      />
      <BusquedaExacta />
      <CamposFiltrado />
    </FormControl>
  );
};

export default Filtros;
