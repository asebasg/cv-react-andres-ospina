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
          <strong>{experiencia.apps}</strong> - <p class="fecha">{empresas.axomy} (2022 - 2024)</p>
        </li>
        <li>
          <strong>{experiencia.tecnologias}</strong>
           - <p class="fecha">{empresas.amva} (2024 - 2025)</p>
        </li>
        <li>
          <strong>{experiencia.asociaciones}</strong>
           - <p class="fecha">{empresas.alcgir} (2025)</p>
        </li>
      </ul>
    </section>
  );
}
