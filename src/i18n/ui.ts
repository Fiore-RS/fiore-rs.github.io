import { useLanguage } from './LanguageContext'

// Todos los textos de la interfaz, en español e inglés.
export const ui = {
  nav: {
    work: { en: 'Work', es: 'Trabajo' },
    about: { en: 'About', es: 'Sobre mí' },
    skills: { en: 'Skills', es: 'Habilidades' },
    archive: { en: 'Archive', es: 'Archivo' },
    contact: { en: 'Contact', es: 'Contacto' },
    menu: { en: 'Menu', es: 'Menú' },
    close: { en: 'Close menu', es: 'Cerrar menú' },
    switchLang: { en: 'Ver en español', es: 'View in English' },
  },
  badge: { en: 'Available for freelance', es: 'Disponible para freelance' },
  clockLabel: { en: 'Local time in', es: 'Hora local en' },
  hero: {
    role: { en: 'UX/UI designer and developer', es: 'Diseñadora UX/UI y desarrolladora' },
    bio: {
      en: 'I design digital and visual brand experiences, from UX/UI and full-stack web apps to logos and brand identities. Student at Universidad de Costa Rica, Sede del Pacífico.',
      es: 'Diseño experiencias digitales y de marca visual, desde UX/UI y aplicaciones web full-stack hasta logos e identidades de marca. Estudiante en la Universidad de Costa Rica, Sede del Pacífico.',
    },
    cta: { en: 'See the full archive', es: 'Ver todo el archivo' },
  },
  work: {
    filtersLabel: { en: 'Filter projects', es: 'Filtrar proyectos' },
    all: { en: 'All', es: 'Todo' },
    branding: { en: 'Branding', es: 'Branding' },
    web: { en: 'Web & apps', es: 'Web y apps' },
    prev: { en: 'Previous project', es: 'Proyecto anterior' },
    next: { en: 'Next project', es: 'Proyecto siguiente' },
    caseStudy: { en: 'Case study', es: 'Caso de estudio' },
    liveApp: { en: 'Open app', es: 'Abrir app' },
    carouselLabel: { en: 'Selected work', es: 'Trabajo seleccionado' },
  },
  caseStudy: {
    role: { en: 'Role', es: 'Rol' },
    timeline: { en: 'Timeline', es: 'Duración' },
    tools: { en: 'Tools', es: 'Herramientas' },
    year: { en: 'Year', es: 'Año' },
    project: { en: 'The project', es: 'El proyecto' },
    gallery: { en: 'A closer look', es: 'De cerca' },
    learned: { en: 'What I learned', es: 'Lo que aprendí' },
    next: { en: 'Next project', es: 'Siguiente proyecto' },
    enlarge: { en: 'Enlarge image', es: 'Ampliar imagen' },
    close: { en: 'Close', es: 'Cerrar' },
    demoTitle: { en: 'Try it without signing up', es: 'Pruébala sin registrarte' },
    demoEmail: { en: 'Email', es: 'Correo' },
    demoPassword: { en: 'Password', es: 'Contraseña' },
    copy: { en: 'Copy', es: 'Copiar' },
    copied: { en: 'Copied', es: 'Copiado' },
  },
  archive: {
    title: { en: 'All the work', es: 'Todo el trabajo' },
    intro: {
      en: 'Every design and development project, newest first. Each one has its case study, and the apps can be opened live.',
      es: 'Todos mis proyectos de diseño y desarrollo, del más reciente al más antiguo. Cada uno tiene su caso de estudio, y las apps se pueden abrir en vivo.',
    },
    empty: { en: 'No projects in this category yet.', es: 'Todavía no hay proyectos en esta categoría.' },
    pdf: { en: 'PDF', es: 'PDF' },
  },
  about: {
    title: { en: "Hi, I'm Fiorella", es: 'Hola, soy Fiorella' },
    photoAlt: { en: 'Portrait of Fiorella, smiling at the camera.', es: 'Retrato de Fiorella, sonriendo a la cámara.' },
    experience: { en: 'Experience', es: 'Experiencia' },
    basedIn: { en: 'Based in', es: 'Vivo en' },
    location: { en: 'Alajuela, Costa Rica', es: 'Alajuela, Costa Rica' },
    seeProject: { en: 'See case study', es: 'Ver caso de estudio' },
    cta: { en: 'Work with me', es: 'Trabajemos juntos' },
    logo: { en: 'The logo', es: 'El logo' },
  },
  skills: {
    title: { en: 'What I bring to a project', es: 'Lo que aporto a un proyecto' },
    intro: {
      en: 'From research and brand to the code that ships, end to end.',
      es: 'De la investigación y la marca hasta el código que se publica, de principio a fin.',
    },
    tools: { en: 'Tools I have used in these projects', es: 'Herramientas que usé en estos proyectos' },
  },
  contact: {
    title: { en: "Let's work together", es: 'Trabajemos juntos' },
    intro: {
      en: "I'm open to freelance work and collaborations in web design and development and in graphic design. Here's how to reach me, when I'm available, and a starting reference for pricing.",
      es: 'Estoy abierta a trabajos freelance y colaboraciones en diseño y desarrollo web y en diseño gráfico. Aquí está cómo contactarme, cuándo estoy disponible y una referencia inicial de precios.',
    },
    write: { en: 'Write to me', es: 'Escribime' },
    availability: { en: 'Availability', es: 'Disponibilidad' },
    pricing: { en: 'Base pricing', es: 'Precios base' },
    pricingIntro: {
      en: 'Starting prices for common project types. The final price depends on scope, timeline and features. Reach out for a quote tailored to your project.',
      es: 'Precios iniciales para tipos de proyecto comunes. El precio final depende del alcance, el tiempo y las funcionalidades. Escribime para una cotización a la medida de tu proyecto.',
    },
    from: { en: 'From', es: 'Desde' },
    pricingNote: {
      en: 'Prices in US dollars, as a starting reference. They are not final quotes.',
      es: 'Precios en dólares estadounidenses, como referencia inicial. No son cotizaciones finales.',
    },
    terms: { en: 'Terms of service', es: 'Términos de servicio' },
    termsIntro: {
      en: 'A general summary of how I work, not a formal legal contract. Larger projects get a signed agreement.',
      es: 'Un resumen general de cómo trabajo, no un contrato legal formal. Los proyectos más grandes llevan un acuerdo firmado.',
    },
  },
  notFound: {
    label: { en: 'Error 404', es: 'Error 404' },
    title: { en: 'Page not found', es: 'Página no encontrada' },
    body: { en: 'This address does not exist on fiorers.dev.', es: 'Esta dirección no existe en fiorers.dev.' },
    back: { en: 'Back to work', es: 'Volver al trabajo' },
  },
  footer: {
    role: { en: 'UX/UI design and development', es: 'Diseño UX/UI y desarrollo' },
    email: { en: 'Email', es: 'Correo' },
  },
}

export function useT() {
  const { lang } = useLanguage()
  return {
    t: <T extends { en: string; es: string }>(entry: T) => entry[lang],
    tArr: <T extends { en: string[]; es: string[] }>(entry: T) => entry[lang],
    lang,
  }
}
