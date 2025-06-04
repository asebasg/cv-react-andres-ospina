import "./Educacion.css";

export default function Educacion({estudios}) {
  // Si no hay estudios, mostrar un mensaje
  if (!estudios || estudios.length === 0) {
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
        {estudios.map(({id, titulo, institucion, periodo}) => (
          <li key={id}>
            <strong>{titulo}</strong> - {institucion} ({periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
