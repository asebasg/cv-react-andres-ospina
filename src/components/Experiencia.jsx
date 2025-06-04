import "./Experiencia.css";

export default function Experiencia({ trabajos }) {
  // si no hay experiencia previa, mostrar mensaje
  if (!trabajos || trabajos.length === 0) {
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
        {trabajos.map(({ id, cargo, empresa, periodo }) => (
          <li key={id}>
            <strong>{cargo}</strong>- {empresa} ({periodo})
          </li>
        ))}
        ;
      </ul>
    </section>
  );
}
