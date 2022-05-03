import axios from "axios";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import ListaContenido from "./Lista_Contenido";
import Paginacion from "../Componentes/Paginacion";

const Contenido = () => {
  // https://gateway.marvel.com:443/v1/public/characters?apikey=56fd90630e2f2542b0e3a0c8a054a107

  // key privada: da24d53d41767d34e7cdd355201d79d7f2f3f07f
  // key pública: 56fd90630e2f2542b0e3a0c8a054a107

  // key completa: 1da24d53d41767d34e7cdd355201d79d7f2f3f07f56fd90630e2f2542b0e3a0c8a054a107

  // MD5 hash: 9a309344f0bb59803e881e9d8529cd55
  const [totalResultados, setTotalResultados] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [resultadosPorPagina, setResultadosPorPagina] = useState(20);
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

  const buscarNombreExactoHandler = (nombre) => {
    setNombreExacto(nombre);
    setIsLoaded(false);
  };

  const filtrarPorParametrosHandler = (params) => {
    setFilterParams(params);

    setIsLoaded(false);
  };

  const cambiarPaginaHandler = (pPagina) => {
    console.log("offset", pPagina);
    setPaginaActual(pPagina);
    setOffset(pPagina * resultadosPorPagina);
    setIsLoaded(false);
  };

  const resetFiltrosHandler = () => {
    setNombreExacto("");
    setFilterParams({
      empiezaCon: "",
      modificacionDesde: null,
      ordenarPor: "",
      direccionOrdenamiento: "",
    });
    setIsLoaded(false);
  };

  const baseUrlApi = "https://gateway.marvel.com:443/v1/public/characters";
  const ts = "1";

  const apikey = "56fd90630e2f2542b0e3a0c8a054a107";

  const hash = "9a309344f0bb59803e881e9d8529cd55";

  const cambiarBusquedaHandler = (pFiltrando) => {
    setfiltrando(pFiltrando);
  };

  //Llamada a la api para obtener los datos
  useEffect(() => {
    if (isLoaded) {
      console.log("entro a loaded");
      return;
    }

    let paramsRequest = {
      ts: ts,
      apikey: apikey,
      hash: hash,
      offset: resultadosPorPagina * (paginaActual - 1),
    };

    if (filtrando === "exact") {
      console.log("entró a exact");
      if (nombreExacto !== "") paramsRequest.nameStartsWith = nombreExacto;
    } else if (filtrando === "filter") {
      console.log("entró a filter");
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
      });

    return () => {
      setIsLoaded(true);
    };
  }, [
    filterParams,
    filtrando,
    isLoaded,
    nombreExacto,
    offset,
    personajes.length,
  ]);

  return (
    <div className="Contenido" style={{ width: "100%" }}>
      <Filtros
        nombreBusqueda={nombreExacto}
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
      <ListaContenido personajes={personajes} />
      <Paginacion
        paginaActual={paginaActual}
        resultadosPorPagina={resultadosPorPagina}
        totalResultados={totalResultados}
        cambiarOffset={cambiarPaginaHandler}
      />
    </div>
  );
};

export default Contenido;