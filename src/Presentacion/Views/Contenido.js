import axios from "axios";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import ListaContenido from "./Lista_Contenido";
import Paginacion from "../Componentes/Paginacion";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const Contenido = () => {
  // https://gateway.marvel.com:443/v1/public/characters?apikey=56fd90630e2f2542b0e3a0c8a054a107

  // key privada: da24d53d41767d34e7cdd355201d79d7f2f3f07f
  // key pública: 56fd90630e2f2542b0e3a0c8a054a107

  // key completa: 1da24d53d41767d34e7cdd355201d79d7f2f3f07f56fd90630e2f2542b0e3a0c8a054a107

  // MD5 hash: 9a309344f0bb59803e881e9d8529cd55
  const [totalResultados, setTotalResultados] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [resultadosPorPagina] = useState(20);
  const [filtrando, setfiltrando] = useState("filter");
  const [personajes, setPersonajes] = useState([]);
  const [nombreExacto, setNombreExacto] = useState("");
  const [filterParams, setFilterParams] = useState({
    empiezaCon: "",
    modificacionDesde: null,
    ordenarPor: "",
    direccionOrdenamiento: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const buscarNombreExactoHandler = (e) => {
    setNombreExacto(e);
    setPaginaActual(1);
    console.log("nombre exacto", nombreExacto);
    setIsLoaded(false);
  };

  const filtrarPorParametrosHandler = (params) => {
    setFilterParams(params);
    setPaginaActual(1);
    setIsLoaded(false);
  };

  const cambiarPaginaHandler = (pPagina) => {
    setPaginaActual(pPagina);
    setOffset(pPagina * resultadosPorPagina);
    setIsLoaded(false);
  };

  const cambiarBusquedaHandler = (pFiltrando) => {
    setfiltrando(pFiltrando);
    setNombreExacto("");
    setFilterParams({
      empiezaCon: "",
      modificacionDesde: null,
      ordenarPor: "",
      direccionOrdenamiento: "",
    });
  };

  const resetFiltrosHandler = () => {
    setNombreExacto("");
    setFilterParams({
      empiezaCon: "",
      modificacionDesde: null,
      ordenarPor: "",
      direccionOrdenamiento: "",
    });
    setPaginaActual(1);
    setIsLoaded(false);
  };

  const Contenido = () => {
    if (!isLoaded) {
      return <CircularProgress color="secondary" />;
    } else {
      return <ListaContenido personajes={personajes} />;
    }
  };

  const baseUrlApi = "https://gateway.marvel.com:443/v1/public/characters";
  const ts = "1";

  const apikey = "56fd90630e2f2542b0e3a0c8a054a107";

  const hash = "9a309344f0bb59803e881e9d8529cd55";

  //Llamada a la api para obtener los datos
  useEffect(() => {
    let paramsRequest = {
      ts: ts,
      apikey: apikey,
      hash: hash,
      offset: resultadosPorPagina * (paginaActual - 1),
    };

    if (filtrando === "exact") {
      if (nombreExacto !== "") paramsRequest.nameStartsWith = nombreExacto;
    } else if (filtrando === "filter") {
      let filtro = {
        modifiedSince: filterParams.modificacionDesde,
        orderBy: filterParams.direccionOrdenamiento + filterParams.ordenarPor,
      };

      if (filterParams.empiezaCon !== "")
        filtro.nameStartsWith = filterParams.empiezaCon;

      Object.assign(paramsRequest, filtro);
    }

    axios
      .get(baseUrlApi, {
        params: paramsRequest,
      })
      .then((resp) => {
        setPersonajes(resp.data.data.results);
        setTotalResultados(resp.data.data.total);
        setIsLoaded(true);
      });
  }, [
    // filtrando,
    // filterParams,
    // nombreExacto,
    isLoaded,
    offset,
    paginaActual,
    personajes.length,
    resultadosPorPagina,
  ]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="0.5rem"
      paddingBottom="0rem"
    >
      <Filtros
        nombreBusqueda={nombreExacto}
        setNombreBusqueda={setNombreExacto}
        buscarNombre={buscarNombreExactoHandler}
        filtrarPor={filtrarPorParametrosHandler}
        tipoFiltro={filtrando}
        cambiarTipoFiltro={cambiarBusquedaHandler}
        resetFiltros={resetFiltrosHandler}
      />
      <Paginacion
        paginaActual={paginaActual}
        resultadosPorPagina={resultadosPorPagina}
        totalResultados={totalResultados}
        cambiarOffset={cambiarPaginaHandler}
      />
      <Contenido />
      <Paginacion
        paginaActual={paginaActual}
        resultadosPorPagina={resultadosPorPagina}
        totalResultados={totalResultados}
        cambiarOffset={cambiarPaginaHandler}
      />
    </Box>
  );
};

export default Contenido;
