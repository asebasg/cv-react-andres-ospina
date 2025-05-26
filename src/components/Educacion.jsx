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
          <strong>{educacion.superior}</strong> -  <p class="info-adicional">{instituciones.ucc} (2027-2029)</p>
        </li>
        <li>
            <strong>{educacion.tecnologia}</strong> -  <p class="info-adicional">{instituciones.sena} (2025-2026)</p>
        </li>
        <li>
            <strong>{educacion.bachillerato}</strong> -  <p class="info-adicional">{instituciones.ieag} (2022-2024)</p>
        </li>
        <li>
            <strong>{educacion.otros}</strong> - <p class="info-adicional">{instituciones.pg} (2024)</p>
        </li>
      </ul>
    </section>
  );
}