import React, { useState } from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ habilidades }) {
  const [mostrar, setMostrar] = useState(true);

  const handleToggle = () => {
    setMostrar((prev) => !prev);
  };

  return (
    <section>
      <button onClick={handleToggle}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
