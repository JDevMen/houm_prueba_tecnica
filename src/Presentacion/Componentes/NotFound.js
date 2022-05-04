import React from "react";
import { Link } from "react-router-dom";
import Cabecera from "../Views/Cabecera";

const NotFound = () => (
  <div>
    <Cabecera />
    <h1>404 - Not Found!</h1>
    <Link to="houm_prueba_tecnica/">Go Home</Link>
  </div>
);

export default NotFound;
