import React from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stackTecnologias as tecnologiasIniciales,
  proyectos,
  habilidades,
  idioma,
} from "./data/cvData";

import Cabecera from "./components/Cabecera";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Idioma from "./components/Idioma";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import "./components/Cabecera.css";
import "./components/Perfil.css";
import "./components/Educacion.css";
import "./components/Experiencia.css";

function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [...prev, nueva]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Cabecera nombre={cabecera.nombre} profesion={cabecera.profesion} />
      <Perfil texto={perfil.texto} />
      <Educacion estudios={educacion} />
      <Experiencia trabajos={experiencia} />
      <StackTecnologias tecnologias={stackTecnologias} />
      <Proyectos proyectos={proyectos} />
      <Habilidades habilidades={habilidades} />
      <Idioma idioma={idioma} />

      {/* Componente con evento + estado */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />
      {/* Componente con renderizado condicional */}
      <ToggleHabilidades habilidades={habilidades} />
    </div>
  );
}

export default App;