import "./Educacion.css";

export default function Educacion() {
  const educacion = [
    {
      id: 1,
      titulo:
        "Especializacion en Desarrollo y Gestión de Inteligencia Artificial",
      institucion: "Universidad de los Andes",
      periodo: "2030 - 2034",
    },
    {
      id: 2,
      titulo: "Ingenieria de Datos y Software",
      institucion: "Universidad Coperativa de Colombia",
      periodo: "2027 - 2029",
    },
    {
      id: 3,
      titulo: "Tecnologia en Analisis y Desarrollo de Software",
      institucion: "SENA",
      periodo: "2025 - 2026",
    },
    {
      id: 4,
      titulo: "Diplomado de Programación en PHP",
      institucion: "Politécnico Grancolombiano",
      periodo: "2024",
    },
    {
      id: 5,
      titulo:
        "Bachiller técnico en Sistemas con énfasis en Desarrollo de Software",
      institucion: "I.E. Atanasio Girardot",
      periodo: "2019 - 2024",
    },
  ];

  if (educacion === 0) {
    return (
      <section>
        <h3>Educación</h3>
        <p>No se ha registrado educacion previa.</p>
      </section>
    );
  }
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        {educacion.map((edu) => (
          <li key={edu.id}>
            <strong>{edu.titulo}</strong>- {edu.institucion} ({edu.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
