export default function StackTecnologias({ tecnologias }) {
  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend":
        return "blue";
      case "backend":
        return "green";
      case "base de datos":
        return "orange";
      default:
        return "gray";
    }
  };
  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <ul>
        {tecnologias.map(({ id, nombre, tipo }) => (
          <li key={id} style={{ color: obtenerColor(tipo) }}>
            <strong>{nombre}</strong>- {tipo}
          </li>
        ))}
      </ul>
    </section>
  );
}
