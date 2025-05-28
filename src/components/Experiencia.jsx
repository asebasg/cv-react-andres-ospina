import "./Experiencia.css";

export default function Experiencia() {
  const experiencia = [
    {
      id: 1,
      puesto: "Desarrollador Full Stack",
      empresa: "ToGrow Agencia",
      periodo: "2026 - Actualidad",
    },
    {
      id: 2,
      puesto: "Lider de proyectos de desarrollo de software",
      empresa: "Gobernacion de Antioquia",
      periodo: "2024 - 2026",
    },
    {
      id: 3,
      puesto:
        "Creador de aplicativos web y aplicaciones móviles y de escritorio",
      empresa: "Axomy Solutions & Co.",
      periodo: "2024 - 2025",
    },
    {
      id: 4,
      puesto: "Creador de sistemas de software para la prevencion de riesgos",
      empresa: "Área Metropolitana del Valle de Aburrá",
      periodo: "2024 - 2025",
    },
    {
      id: 5,
      puesto: "Desarrollador de Software",
      empresa:
        "Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC)",
      periodo: "2023 - 2024",
    },
    {
      id: 6,
      puesto: "Desarrollador Backend",
      empresa: "Heinsohn Business Technology",
      periodo: "2023 - 2024",
    },
    {
      id: 7,
      puesto: "Colaborador de proyectos de software y produccion de contenido",
      empresa: "Alcaldía de Girardota",
      periodo: "2023 - 2024",
    },
    {
      id: 8,
      puesto: "Desarrollador de Software",
      empresa: "Imagine Apps",
      periodo: "Julio 2022 - Enero 2023",
    },
    {
      id: 9,
      puesto: "Desarrollador Full Stack",
      empresa: "Pragma S.A.",
      periodo: "Enero 2022 - Agosto 2022",
    },
    {
      id: 10,
      puesto: "Backend Developer",
      empresa: "TEAM International",
      periodo: "Enero 2022 - Junio 2022",
    },
  ];

  if (experiencia.length === 0) {
    return (
      <section>
        <h3>Experiencia laboral</h3>
        <p>No se ha registrado experiencia laboral.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Experiencia Profesional</h3>
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.puesto}</strong> - {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
