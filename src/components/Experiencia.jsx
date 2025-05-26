import "./Experiencia.css";

const experiencia = {
  apps: "Creador del aplicativos web y aplicaciones móviles",
  tecnologias: "Creador de sistemas de software de prevención de riesgos",
  asociaciones:
    "Colaborador en proyectos de software y produccion de contenido",
};

const empresas = {
  axomy: "Axomy Solutions & Co.",
  amva: "Área Metropolitana del Valle de Aburrá",
  alcgir: "Alcaldía de Girardota",
};

export default function Experiencia() {
  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        <li>
          <strong>{experiencia.apps}</strong> {empresas.axomy} -{" "}
          <p class="fecha">(2022 - 2024)</p>
        </li>
        <li>
          <strong>{experiencia.tecnologias}</strong>
          {empresas.amva} - <p class="fecha">(2024 - 2025)</p>
        </li>
        <li>
          <strong>{experiencia.asociaciones}</strong>
          {empresas.alcgir} - <p class="fecha">(2025)</p>
        </li>
      </ul>
    </section>
  );
}
