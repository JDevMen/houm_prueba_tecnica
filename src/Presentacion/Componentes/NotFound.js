import React from "react";
import { Link } from "react-router-dom";
import Header from "../Views/Header";

const NotFound = () => (
  <div>
    <Header />
    <h1>404 - Not Found!</h1>
    <Link to="houm_prueba_tecnica/">Go Home</Link>
  </div>
);

export default NotFound;
