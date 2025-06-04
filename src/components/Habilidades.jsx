import React from "react";

export default function Proyectos({ habilidades }) {
  if (!habilidades || habilidades.length === 0) {
    return (
      <section>
        <h3>Proyectos</h3>
        <p>No se han registrado proyectos.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Habilidades</h3>
      <ul>
        {habilidades.map(({ id, nombre, nivel }) => (
          <li key={id}>
            {nombre} <em>{nivel}</em>
          </li>
        ))}
      </ul>
      <hr />
    </section>
  );
}
