import React from "react";
import Tarjeta from "../Componentes/Tarjeta";
import ListaContenido from "./Lista_Contenido";

const Contenido = () => {
  return (
    <div
      className="Contenido"
      style={{ backgroundColor: "gray", height: "100vh", width: "100%" }}
    >
      <ListaContenido />
    </div>
  );
};

export default Contenido;
