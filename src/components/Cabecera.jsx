import "./Cabecera.css" 

export default function CabeceraCV({nombre, cargo}) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>
      <hr />
    </header>
  )
}