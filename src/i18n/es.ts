const es = {
  nav: {
    navigate: 'Navegar',
    home: 'Inicio',
    about: 'Sobre mí',
    resume: 'CV',
    projects: 'Proyectos',
    math: 'Matemáticas',
    illustration: 'Ilustración',
    programming: 'Programación',
  },
  hero: {
    name: 'Francisco A. Mayorga Cetina',
    subtitle: 'Matemático',
    scrollDown: 'Desplázate hacia abajo',
  },
  home: {
    about: {
      title: 'Sobre mí',
      bio: 'Soy un matemático y desarrollador de software colombiano. Interesado en la tecnología, videojuegos, ilustración y más.',
      stats: {
        years: { prefix: '~', label: 'Años de experiencia desarrollando en ambientes de .NET.' },
        projects: { prefix: '~', label: 'Proyectos desarrollados completamente de cero.' },
        problems: { prefix: '>', label: 'Problemas resueltos en competencias de programación.' },
        puzzles: { prefix: '>', label: 'Soluciones de puzzles completadas en competencias oficiales de WCA.' },
      },
    },
    skills: {
      title: 'Habilidades',
      subtitle:
        'Con la combinación de mis estudios y experiencia, he adquirido un conjunto de habilidades que combina mi conocimiento en matemáticas con competencias en desarrollo de software.',
      items: [
        { name: 'Liderazgo', value: 85 },
        { name: 'Resolución de Problemas', value: 90 },
        { name: 'C#', value: 90 },
        { name: 'Python', value: 80 },
        { name: 'SQL', value: 75 },
        { name: 'F#', value: 70 },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle:
        'Tengo una variedad de diferentes proyectos (en su mayoría personales): desde desarrollo de software/videojuegos y matemáticas hasta algunas cosas en diseño gráfico e ilustración.',
      items: [
        {
          icon: 'mdi:file-document-outline',
          title: 'Respecto a lo académico',
          description: 'Cuando era estudiante, participé en algunos proyectos de investigación asociados con mi tesis de pregrado.',
          href: '/es/projects/math',
          external: false,
        },
        {
          icon: 'mdi:palette',
          title: 'Ilustraciones y diseño',
          description: 'Durante mucho tiempo una de mis mayores aficiones ha sido la ilustración.',
          href: '/es/projects/gallery',
          external: false,
        },
        {
          icon: 'mdi:laptop',
          title: 'Algo de programación',
          description: 'Además de mi trabajo, a veces paso mi tiempo haciendo mis propios retos de desarrollo.',
          href: 'https://github.com/Maycet',
          external: true,
        },
      ],
    },
  },
  about: {
    pageTitle: 'Sobre mí',
    breadcrumb: ['Inicio', 'Sobre mí'],
    intro: '¡Hola, soy Francisco!\nPermíteme compartir un poco sobre mí.',
    p1: 'Soy de Bogotá, Colombia, y actualmente tengo {age} años.',
    p2: 'Completé mi pregrado en matemáticas en la Universidad Sergio Arboleda, donde tuve la oportunidad de trabajar en <a href="/es/projects/math">proyectos</a> realmente interesantes, especialmente en combinatoria y teoría de grafos. Estos años de estudio me han proporcionado una base sólida en el pensamiento lógico y la resolución de problemas, habilidades que ahora aplico en mi carrera.',
    p3: 'En el ámbito profesional, actualmente trabajo como desarrollador de software, donde he tenido la oportunidad de aprender una variedad de herramientas y tecnologías, principalmente enfocadas en lenguajes de .NET. Además, he tenido el privilegio de liderar equipos de desarrollo, participando en el ciclo completo del desarrollo y aprendiendo a interactuar con diversos tipos de personas. Disfruto de los desafíos que presenta este campo en constante evolución y la forma en que puedo contribuir a distintos tipos de soluciones, tanto técnicas como personalmente.',
    p4: 'Sin embargo, mi pasión no se limita solo al mundo tecnológico. Desde temprana edad, he sido un entusiasta del dibujo, encontrando en el bolígrafo una herramienta que me permite dar vida a mis ideas de manera única. A lo largo de los años, he creado <a href="/es/projects/gallery">algunas piezas</a> que reflejan mi estilo y visión personal. Recientemente, también he estado incursionando en el diseño e ilustración digital. Aunque estoy en las primeras etapas de aprendizaje, estoy emocionado por seguir creciendo en este campo y explorar nuevas técnicas y enfoques creativos.',
    p5: 'Además de mis intereses profesionales y artísticos, disfruto resolviendo rompecabezas al estilo de los <a href="https://www.worldcubeassociation.org/persons/2015CETI01" target="_blank">cubos de Rubik</a>, y también adoro todo lo relacionado con los gatos.',
  },
  resume: {
    pageTitle: 'Currículum',
    breadcrumb: ['Inicio', 'CV'],
    downloadGeneral: 'Descargar versión general',
    downloadDev: 'Descargar versión desarrollador',
    summary1: 'Profesional en Matemáticas con más de cinco años de experiencia en desarrollo de software usando tecnologías .NET (C#, F#, Visual Basic), aplicaciones de escritorio (WPF) y herramientas de datos (Python, SQL).',
    summary2: 'Trayectoria comprobada liderando equipos de desarrollo y entregando soluciones de alta calidad. Experiencia en desarrollo backend, interfaces de escritorio, plataformas en la nube e integración de APIs.',
    experience: {
      title: 'Experiencia Profesional',
      development: 'Experiencia en Desarrollo',
      teaching: 'Experiencia Docente y Académica',
    },
    education: { title: 'Educación' },
    publications: { title: 'Publicaciones' },
    activities: { title: 'Actividades y eventos' },
    contact: { title: 'Contacto:' },
    skills: { title: 'Habilidades' },
  },
  gallery: {
    pageTitle: 'Galería',
    breadcrumb: ['Inicio', 'Proyectos', 'Galería'],
    filters: { all: 'Todo', illustration: 'Ilustración', design: 'Diseño' },
  },
  math: {
    pageTitle: 'Matemáticas',
    breadcrumb: ['Inicio', 'Proyectos', 'Matemáticas'],
  },
  terms: {
    pageTitle: 'Términos de uso',
    breadcrumb: ['Inicio', 'Términos de uso'],
  },
  footer: {
    hostedBy: 'Alojado por',
    termsAcceptance: 'El uso de este sitio significa la aceptación de los',
    terms: 'Términos de uso',
    copyright: 'Copyright © {year} Francisco A. Mayorga Cetina',
    contact: 'Contacto:',
  },
  common: {
    backToTop: 'Volver arriba',
  },
} as const

export default es
