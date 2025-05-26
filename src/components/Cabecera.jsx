import "./Cabecera.css" 

const user = {
  nombre: "Andrés Sebastián Ospina Guzmán",
  cargo: "Desarrollador FullStack Senior",
  telefono: "3225316150",
  correo: "asebasg07@gmail.com",
  ciudad: "Medellín",
};

export default function CabeceraCV() {
  return (
    <header>
      <h1>{user.nombre}</h1>
      <h2>{user.cargo}</h2>
      <h4>Datos de contacto:</h4>
      <div class="contacto">
      <p>
        <strong>Teléfono</strong>: {user.telefono}
      </p>
      <p>
        <strong>Correo</strong>: {user.correo}
      </p>
      <p>
        <strong>Ciudad</strong>: {user.ciudad}
      </p>
      </div>
      
    </header>
  );
}
