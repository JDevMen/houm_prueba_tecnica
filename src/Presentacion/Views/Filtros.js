import { FormControl, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BusquedaExacta from "../Componentes/Busqueda_Exacta";
import CamposFiltrado from "../Componentes/Campos_Filtrado";
import TipoBusqueda from "../Componentes/Tipo_Busqueda";

const Filtros = (props) => {
  const tipoBusquedaHandler = (e) => {
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
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <TipoBusqueda
            tipo={props.tipoFiltro}
            tipoBusquedaHandler={tipoBusquedaHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FilterSearch />
          </FormControl>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

export default Filtros;
