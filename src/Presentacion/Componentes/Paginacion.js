import { Pagination } from "@mui/material";
import React from "react";

const Paginacion = (props) => {
  const handleChangePage = (event, newPage) => {
    props.cambiarOffset(newPage);
  };

  return (
    <Pagination
      showFirstButton
      showLastButton
      page={props.paginaActual}
      count={Math.floor(props.totalResultados / props.resultadosPorPagina)}
      onChange={handleChangePage}
    />
  );
};

export default Paginacion;
