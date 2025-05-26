import "./Educacion.css" 

const educacion = {
  superior: "Ingeniería de Datos y Software",
  tecnologia: "Tecnólogo en Análisis y Desarrollo de Software",
  bachillerato: "Bachiller técnico en Sistemas con especialidad en Desarrollo de Software",
  otros: "Diplomado de Programación en PHP",
};

const instituciones = {
  ucc: "Universidad Coperativa de Colombia",
  sena: "Servicio Nacional de Aprendizaje",
  ieag: "I.E. Atanasio Girardot",
  pg: "Politecnico Grancolombiano"
}

export default function Educacion() {
  return (
    <section>
      <h3>Educación</h3>
      <ul>
        <li>
          <strong>{educacion.superior}</strong> - {instituciones.ucc} (2027-2029)
        </li>
        <li>
            <strong>{educacion.tecnologia}</strong> - {instituciones.sena} (2025-2026)
        </li>
        <li>
            <strong>{educacion.bachillerato}</strong> - {instituciones.ieag} (2022-2024)
        </li>
        <li>
            <strong>{educacion.otros}</strong> - {instituciones.pg} (2024)
        </li>
      </ul>
    </section>
  );
}