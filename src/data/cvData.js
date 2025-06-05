/**
 * En este archivo se centraliza la información del CV en un solo archivo
 * para facilitar su mantenimiento y actualización.
 */

export const cabecera = {
  nombre: "Andrés Sebastián Ospina Guzmán",
  profesion: "Desarrollador Full Stack Senior",
};

export const perfil = {
  texto:
    "Bachiller técnico en Sistemas, con énfasis en Desarrollo de Software, tecnólogo en Analisis y Desarrollo de software con experiencia en desarrollo web y móvil, Ingeniero de Datos y Software con especialidad en Desarrollo de Inteligencia Artificial, apasionado por la tecnología.",
};

export const educacion = [
  {
    id: 1,
    titulo:
      "Especializacion en Desarrollo y Gestión de Inteligencia Artificial",
    universidad: "Universidad de los Andes",
    periodo: "2030 - 2034",
  },
  {
    id: 2,
    titulo: "Ingenieria de Datos y Software",
    universidad: "Universidad Coperativa de Colombia",
    periodo: "2027 - 2029",
  },
  {
    id: 3,
    titulo: "Tecnologia en Analisis y Desarrollo de Software",
    universidad: "SENA",
    periodo: "2025 - 2026",
  },
  {
    id: 4,
    titulo: "Diplomado de Programación en PHP",
    universidad: "Politécnico Grancolombiano",
    periodo: "2024",
  },
  {
    id: 5,
    titulo:
      "Bachiller técnico en Sistemas con énfasis en Desarrollo de Software",
    universidad: "I.E. Atanasio Girardot",
    periodo: "2019 - 2024",
  },
];

export const experiencia = [
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
    puesto: "Creador de aplicativos web y aplicaciones móviles y de escritorio",
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

export const stackTecnologias = [
  {
    id: 1,
    nombre: "React",
    tipo: "frontend",
  },
  {
    id: 2,
    nombre: "Node.js",
    tipo: "backend",
  },
  {
    id: 3,
    nombre: "JavaScript",
    tipo: "frontend",
  },
  {
    id: 4,
    nombre: "PostgreSQL",
    tipo: "base de datos",
  },
];

/* Nuevas secciones */
export const proyectos = [
  {
    id: 1,
    nombre: "PawLig",
    descripcion:
      "Aplicativo web dedicado a la adopción de mascotas.",
    enlace: "https://github.com/asebasg/pawlig",
  },
  {
    id: 2,
    nombre: "Noticiero El Bárbula",
    descripcion:
      "Aplicacion web para el Noticiero Estudiantil EL Bárbula, el cual permite a los estudiantes de la Institución Educativa Atanasio Girardot estar enterado noticias y eventos.",
    enlace: "https://github.com/asebasg/barbula",
  },
  {
    id: 3,
    nombre: "Venta de paginas web",
    descripcion:
      "Aplicación web para la venta de páginas web, donde los usuarios pueden comprar y vender páginas web.",
  },
  {
    id: 4,
    nombre: "Aplicativo de venta de proudctos",
    descripcion:
      "Aplicación web para la venta de productos, donde los usuarios pueden comprar y vender productos.",
  }
];

export const habilidades = [
  { id: 1, nombre: "Comunicación", nivel: "Avanzado" },
  { id: 2, nombre: "Trabajo en Equipo", nivel: "Intermedio" },
  { id: 3, nombre: "Resolución de Problemas", nivel: "Avanzado" },
  { id: 4, nombre: "Liderazgo", nivel: "Avanzado" },
];

export const idioma = [
    {
        id: 1,
        nombre: "Inglés",
        nivel: "B2",
    },
    {
        id: 2,
        nombre: "Francés",
        nivel: "A2",
    },
    {
        id: 3,
        nombre: "Noruego",
        nivel: "A2",
    }
]