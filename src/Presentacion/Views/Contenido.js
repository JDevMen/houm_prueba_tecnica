import axios from "axios";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import ContentList from "./Lista_Contenido";
import PaginationComponent from "../Componentes/Paginacion";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

//Contenido de la página web
const Content = () => {
  const [totalResults, setTotalResults] = useState(0);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(20);
  const [filtering, setFiltering] = useState("filter");
  const [characters, setCharacters] = useState([]);
  const [exactName, setExactName] = useState("");
  const [filterParams, setFilterParams] = useState({
    startsWith: "",
    modifiedSince: null,
    orderBy: "",
    orderDirection: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  //Handler para buscar por el nombre exacto
  const searchExactNameHandler = (e) => {
    setExactName(e);
    setCurrentPage(1);
    setIsLoaded(false);
  };

  //Handler para filtar por los parámetros
  const filterByParametersHandler = (params) => {
    setFilterParams(params);
    setCurrentPage(1);
    setIsLoaded(false);
  };

  //Handler para la paginación
  const changePageHandler = (pPagina) => {
    setCurrentPage(pPagina);
    setOffset(pPagina * resultsPerPage);
    setIsLoaded(false);
  };

  //Cambiar tipo de búsqueda entre exacta y filtro
  const changeSearchHandler = (pFiltrando) => {
    setFiltering(pFiltrando);
    setExactName("");
    setFilterParams({
      startsWith: "",
      modifiedSince: null,
      orderBy: "",
      orderDirection: "",
    });
  };

  //Handler para reiniciar los filtros completamente y
  //volver a la página 1
  const resetFiltersHandler = () => {
    setExactName("");
    setFilterParams({
      startsWith: "",
      modifiedSince: null,
      orderBy: "",
      orderDirection: "",
    });
    setCurrentPage(1);
    setIsLoaded(false);
  };

  //Mostrar lista de resultados o anillo de carga mientras
  //se hace la carga
  const Content = () => {
    if (!isLoaded) {
      return <CircularProgress color="secondary" />;
    } else {
      return <ContentList personajes={characters} />;
    }
  };

  //Variables de la petición a la API
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
      offset: resultsPerPage * (currentPage - 1),
    };

    if (filtering === "exact") {
      if (exactName !== "") paramsRequest.nameStartsWith = exactName;
    } else if (filtering === "filter") {
      let filtro = {
        modifiedSince: filterParams.modifiedSince,
        orderBy: filterParams.orderDirection + filterParams.orderBy,
      };

      if (filterParams.startsWith !== "")
        filtro.nameStartsWith = filterParams.startsWith;

      Object.assign(paramsRequest, filtro);
    }

    axios
      .get(baseUrlApi, {
        params: paramsRequest,
      })
      .then((resp) => {
        setCharacters(resp.data.data.results);
        setTotalResults(resp.data.data.total);
        setIsLoaded(true);
      });
  }, [
    //Nota de desarrollador:
    //La arquitectura actual genera advertencia de ESlint
    //por falta de dependencias. Sin embargo, el agregar dichas dependencias
    //genera un comportamiento no esperado en la app, por lo cual
    //se decide dejar la advertencia hasta hacer los ajustes de arquitectura.
    isLoaded,
    offset,
    currentPage,
    characters.length,
    resultsPerPage,
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
        searchExactNameHandler={searchExactNameHandler}
        filterByParametersHandler={filterByParametersHandler}
        filterType={filtering}
        changeSearchHandler={changeSearchHandler}
        resetFiltersHandler={resetFiltersHandler}
      />
      <PaginationComponent
        currentPage={currentPage}
        resultsPerPage={resultsPerPage}
        totalResults={totalResults}
        changePageHandler={changePageHandler}
      />
      <Content />
      <PaginationComponent
        currentPage={currentPage}
        resultsPerPage={resultsPerPage}
        totalResults={totalResults}
        changePageHandler={changePageHandler}
      />
    </Box>
  );
};

export default Content;
