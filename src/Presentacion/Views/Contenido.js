import axios from "axios";
import React, { useEffect, useState } from "react";
import Filtros from "./Filtros";
import ListaContenido from "./Lista_Contenido";

const Contenido = () => {
  // https://gateway.marvel.com:443/v1/public/characters?apikey=56fd90630e2f2542b0e3a0c8a054a107

  // key privada: da24d53d41767d34e7cdd355201d79d7f2f3f07f
  // key pública: 56fd90630e2f2542b0e3a0c8a054a107

  // key completa: 1da24d53d41767d34e7cdd355201d79d7f2f3f07f56fd90630e2f2542b0e3a0c8a054a107

  // MD5 hash: 9a309344f0bb59803e881e9d8529cd55
  const [error, setError] = useState(null);
  const [personajes, setPersonajes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const urlAPI =
    "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=56fd90630e2f2542b0e3a0c8a054a107&hash=9a309344f0bb59803e881e9d8529cd55";

  useEffect(() => {
    axios.get(urlAPI).then((resp) => {
      console.log("lista personajes", resp.data.data.results);

      setPersonajes(resp.data.data.results);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="Contenido" style={{ width: "100%" }}>
      <Filtros />
      <ListaContenido personajes={personajes} />
    </div>
  );
};

export default Contenido;
