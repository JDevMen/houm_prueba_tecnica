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
      size="large"
      count={Math.floor(props.totalResultados / props.resultadosPorPagina)}
      onChange={handleChangePage}
      style={{ padding: "0.5rem" }}
      shape="rounded"
      color="primary"
    />
  );
};

export default Paginacion;
