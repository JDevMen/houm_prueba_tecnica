import { FormControl } from "@mui/material";
import React from "react";
import BusquedaExacta from "../Componentes/Busqueda_Exacta";
import CamposFiltrado from "../Componentes/Campos_Filtrado";
import TipoBusqueda from "../Componentes/Tipo_Busqueda";

const Filtros = (props) => {
  const tipoBusquedaHandler = (e) => {
    console.log("handler", e);
    props.cambiarTipoFiltro(e);
  };

  const FilterSearch = () => {
    if (props.tipoFiltro === "exact") {
      return (
        <BusquedaExacta
          nombreExacto={props.nombreExacto}
          buscarNombreExacto={props.buscarNombre}
          resetFiltros={props.resetFiltros}
        />
      );
    } else if (props.tipoFiltro === "filter") {
      return (
        <CamposFiltrado
          filtrarPorParametros={props.filtrarPor}
          resetFiltros={props.resetFiltros}
        />
      );
    }
  };

  return (
    <FormControl fullWidth>
      <TipoBusqueda
        tipo={props.tipoFiltro}
        tipoBusquedaHandler={tipoBusquedaHandler}
      />
      <FilterSearch />
    </FormControl>
  );
};

export default Filtros;
