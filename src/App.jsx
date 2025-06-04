import React from "react";
import {
  cabecera,
  perfil,
  educacion,
  experiencia,
  stacktecnologias,
  proyectos,
  habilidades,
} from "./data/cvData.js";

import CabeceraCV from "./components/Cabecera";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import Proyectos from "./components/Proyectos";
import Habilidades from "./data/cvData.js";

function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/*Cabecera*/}
      <Cabecera nombre={cabecera.nombre} cargo={cabecera.cargo} />
      <Perfil perfil={perfil.perfil} />
      <Educacion estudios={educacion.titulo} />
      <Experiencia trabajos={experiencia.cargo} />
      <StackTecnologias tecnologias={stacktecnologias.nombre} />
      <Proyectos proyectos={proyectos.nombre} />
      <Habilidades habilidades={habilidades.nombre} />
    </div>
  );
}

export default App;
