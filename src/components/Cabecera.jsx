import React from "react";

export default function Cabecera({ nombre, profesion }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{profesion}</h2>
      <hr />
    </header>
  );
}
