import type { Project } from './types'

// Proyectos de fiorers.dev (portado del Portfolio anterior, sin Book Tracker).
// Branding usa `image` + `gallery` (archivos en /public/projects/).
// Las apps usan una portada generada (`cover`, ver AppCover.tsx) y `liveUrl` lleva a la app real.
// El orden de este arreglo es cronológico y define los números de catálogo (ver lib/catalog.ts).
// El orden del carrusel se define aparte en `featuredOrder`.
export const projects: Project[] = [
  {
    id: '2',
    slug: 'pycon-latam-2025',
    year: '2025',
    blurb: {
      en: 'Final logo adjustments and the complete brand manual for a Python conference held at UCR, Sede del Pacífico.',
      es: 'Ajuste final del logo y manual de marca completo para un evento de Python en la UCR, Sede del Pacífico.',
    },
    title: { en: 'PyCon LATAM 2025', es: 'PyCon LATAM 2025' },
    type: { en: 'Brand Manual & Identity', es: 'Manual de Marca e Identidad' },
    category: 'branding',
    image: '/projects/pycon-latam-2025/cover.webp',
    timeline: { en: '3 weeks', es: '3 semanas' },
    role: { en: 'Freelance Brand Designer', es: 'Diseñadora de Marca Freelance' },
    tools: { en: 'Figma, Adobe Creative Cloud', es: 'Figma, Adobe Creative Cloud' },
    overview: {
      en: [
        "PyCon LATAM 2025 was a Python conference held in Costa Rica at the Universidad de Costa Rica, Sede del Pacífico (my own campus) in August 2025. The event's design and advertising team needed extra support, and a friend already on the team recommended me as a freelance collaborator.",
        'My job was to take the existing logo and finalize it for official event use, then build out the complete brand manual: brand essence, imagotype construction, usage rules, and identity applications. My design professor, Verónica Solano, supervised the process and signed off on the final manual.',
      ],
      es: [
        'PyCon LATAM 2025 fue un evento de Python en Costa Rica realizado en la Universidad de Costa Rica, Sede del Pacífico (mi propia sede como estudiante activa) en agosto de 2025. El equipo de diseño y publicidad del evento necesitaba apoyo, y una amistad que ya era parte del equipo me recomendó como colaboradora freelance.',
        'Mi labor fue corregir el logo existente y darle los ajustes finales para su uso oficial en el evento, y luego construir el manual de marca completo: esencia de la marca, construcción del imagotipo, usos de la marca, y aplicaciones de identidad. Mi profesora de diseño, Verónica Solano, supervisó el proceso y dio luz verde al manual final.',
      ],
    },
    gallery: [
      {
        image: '/projects/pycon-latam-2025/logo-grid.webp',
        alt: { en: 'PyCon LATAM 2025 imagotype construction grid', es: 'Retícula de construcción del imagotipo de PyCon LATAM 2025' },
      },
      {
        image: '/projects/pycon-latam-2025/monochrome.webp',
        alt: { en: 'PyCon LATAM 2025 monochrome logo version', es: 'Versión monocromática del logo de PyCon LATAM 2025' },
      },
      {
        image: '/projects/pycon-latam-2025/signage.webp',
        alt: { en: 'PyCon LATAM 2025 event signage', es: 'Señalización del evento PyCon LATAM 2025' },
      },
      {
        image: '/projects/pycon-latam-2025/staff-shirts.webp',
        alt: { en: 'PyCon LATAM 2025 staff shirts', es: 'Camisetas de staff de PyCon LATAM 2025' },
      },
    ],
    summary: {
      en: "My first freelance design project, and different from starting a brand from scratch. I had to work inside a logo and direction the team had already chosen, correct it, and extend it into a full manual and a set of physical applications, all while keeping it consistent enough to pass review before the event's August deadline.",
      es: 'Mi primer proyecto de diseño freelance, y distinto a crear una marca desde cero. Tuve que trabajar dentro de un logo y una dirección que el equipo ya había elegido, corregirlo, y extenderlo en un manual completo y un set de aplicaciones físicas, manteniendo la consistencia necesaria para pasar la revisión antes de la fecha límite de agosto.',
    },
    galleryAspect: '16 / 9',
    pdf: {
      path: '/projects/pycon-latam-2025/brand-manual.pdf',
      label: { en: 'View Brand Manual (PDF)', es: 'Ver Manual de Marca (PDF)' },
    },
  },
  {
    id: '3',
    slug: 'pixmatic-studios',
    year: '2024',
    blurb: {
      en: 'Full identity and an original mascot, Coco the sloth, for a fictional 2D animation studio.',
      es: 'Identidad completa y una mascota original, Coco el perezoso, para un estudio de animación 2D ficticio.',
    },
    title: { en: 'Pixmatic Studios', es: 'Pixmatic Studios' },
    type: { en: 'Brand Identity & Mascot', es: 'Identidad de Marca y Mascota' },
    category: 'branding',
    image: '/projects/pixmatic-studios/cover.webp',
    timeline: { en: '6 weeks', es: '6 semanas' },
    role: { en: 'Personal Project — Solo Designer', es: 'Proyecto Personal — Diseñadora Única' },
    tools: {
      en: 'Figma, Adobe Creative Cloud, Medibang Paint',
      es: 'Figma, Adobe Creative Cloud, Medibang Paint',
    },
    overview: {
      en: [
        'A personal passion project imagining what it would be like to run my own 2D animation studio, in the spirit of Disney, DreamWorks, and Pixar; the name is a nod to the latter. The brief I set for myself: build the full identity for a fictional studio from the ground up.',
        "The brand needed to feel like a familiar, polished animation house while staying warm and local, so the studio's mascot, Coco, is a playful, friendly three-toed sloth (a national symbol of Costa Rica) wearing a collar tag with a simplified variation of the logo. In the wordmark itself, the X in PIXMATIC becomes a four-pointed star with Coco's simplified face at its center, tying the mascot directly into the logotype.",
      ],
      es: [
        'Un proyecto personal por diversión, imaginando cómo sería tener mi propio estudio de animación 2D al estilo Disney o DreamWorks; el nombre es un guiño a Pixar. El reto que me propuse: construir la identidad completa de un estudio ficticio desde cero.',
        'La marca necesitaba transmitir un aire familiar al estilo Pixar, pero manteniendo calidez local, así que la mascota del estudio, Coco, es un perezoso juguetón y amigable (símbolo nacional de Costa Rica) que lleva un collar con una chapita con una variación simplificada del logo. En el logotipo, la X de PIXMATIC se convierte en una estrella de cuatro puntas con la carita simplificada de Coco en el centro, conectando la mascota directamente con el logotipo.',
      ],
    },
    gallery: [
      {
        image: '/projects/pixmatic-studios/logo-formats.webp',
        alt: { en: 'Pixmatic Studios logo formats and usage', es: 'Formatos y usos del logo de Pixmatic Studios' },
      },
      {
        image: '/projects/pixmatic-studios/logo-colors.webp',
        alt: { en: 'Pixmatic Studios logo color variations', es: 'Variaciones de color del logo de Pixmatic Studios' },
      },
      {
        image: '/projects/pixmatic-studios/icon-colors.webp',
        alt: { en: 'Pixmatic Studios icon color variations', es: 'Variaciones de color del ícono de Pixmatic Studios' },
      },
      {
        image: '/projects/pixmatic-studios/mascot-coco.webp',
        alt: { en: 'Coco the sloth mascot character design', es: 'Diseño del personaje Coco, la mascota perezoso' },
      },
    ],
    summary: {
      en: "Designing a full identity system and an original character at the same time pushed me to think about branding and illustration together, how a mascot's personality has to survive being simplified down into a single mark inside a logo, and how a playful character can still sit inside a disciplined brand system.",
      es: 'Diseñar un sistema de identidad completo y un personaje original al mismo tiempo me hizo pensar en branding e ilustración de forma conjunta, cómo la personalidad de una mascota debe sobrevivir al simplificarse en una sola marca dentro de un logo, y cómo un personaje juguetón puede convivir dentro de un sistema de marca disciplinado.',
    },
  },
  {
    id: '5',
    slug: 'happy-home',
    year: '2024',
    blurb: {
      en: 'A more iconic logo for a business renting rooms to exchange students, plus keychains for the real room keys.',
      es: 'Un logo más icónico para un negocio que alquila habitaciones a estudiantes de intercambio, más llaveros para las llaves reales.',
    },
    title: { en: 'Happy Home', es: 'Happy Home' },
    type: { en: 'Logo & Brand Identity', es: 'Logo e Identidad de Marca' },
    category: 'branding',
    image: '/projects/happy-home/cover.webp',
    timeline: { en: '1 week', es: '1 semana' },
    role: { en: 'Freelance Brand Designer', es: 'Diseñadora de Marca Freelance' },
    tools: { en: 'Figma, Adobe Creative Cloud', es: 'Figma, Adobe Creative Cloud' },
    overview: {
      en: [
        'Happy Home rents rooms to exchange students in Costa Rica. The business already had a logo, but wanted something more iconic and distinctly their own; an identity that could hold up as they started marketing to an international audience.',
        'The new mark is an icon + wordmark logo built around a simple idea: a happy face shaped like a house. Alongside the logo, I designed functional keychains carrying the mark, made for the actual room keys tenants use day to day.',
      ],
      es: [
        'Happy Home alquila habitaciones a estudiantes de intercambio en Costa Rica. El negocio ya tenía un logo, pero querían algo más icónico y propio; una identidad que resistiera al empezar a promocionarse frente a una audiencia internacional.',
        'La nueva marca es un logo de ícono + texto construido alrededor de una idea simple: una cara feliz con forma de casa. Junto al logo, diseñé llaveros funcionales con la marca, pensados para las llaves reales que los inquilinos usan día a día.',
      ],
    },
    gallery: [
      {
        image: '/projects/happy-home/logo-lockup.webp',
        alt: { en: 'Happy Home logo and icon lockup', es: 'Logo e ícono de Happy Home' },
      },
      {
        image: '/projects/happy-home/icon-colors.webp',
        alt: { en: 'Happy Home icon color variations', es: 'Variaciones de color del ícono de Happy Home' },
      },
      {
        image: '/projects/happy-home/logo-colors.webp',
        alt: { en: 'Happy Home full logo color variations', es: 'Variaciones de color del logo completo de Happy Home' },
      },
      {
        image: '/projects/happy-home/keychains.webp',
        alt: { en: 'Happy Home room key keychain mockups', es: 'Mockups de llaveros de llaves de Happy Home' },
      },
    ],
    summary: {
      en: "A short, paid freelance turnaround taught me to move fast without losing the client's input. A one-week timeline meant getting the icon concept right early, since there wasn't room for many rounds of revisions.",
      es: 'Un proyecto freelance pagado y de entrega rápida me enseñó a avanzar rápido sin perder la retroalimentación del cliente. Un plazo de una semana significó acertar con el concepto del ícono desde temprano, ya que no había espacio para muchas rondas de revisión.',
    },
  },
  {
    id: '6',
    slug: 'hack-gb',
    year: '2026',
    blurb: {
      en: 'A phoenix mark for UW-Green Bay\'s hackathon, designed in one week and now on its stickers, keychains, shirts, official documents and website.',
      es: 'Un fénix como marca del hackathon de UW-Green Bay, diseñado en una semana y hoy presente en stickers, llaveros, camisas, documentos oficiales y su sitio web.',
    },
    title: { en: 'Hack GB', es: 'Hack GB' },
    type: { en: 'Event Branding', es: 'Identidad de Evento' },
    category: 'branding',
    image: '/projects/hack-gb/cover.webp',
    timeline: { en: '1 week', es: '1 semana' },
    role: { en: 'Design Team Support', es: 'Apoyo al Equipo de Diseño' },
    tools: {
      en: 'Figma, Adobe Creative Cloud, Medibang Paint',
      es: 'Figma, Adobe Creative Cloud, Medibang Paint',
    },
    overview: {
      en: [
        "HackGB is the University of Wisconsin-Green Bay's collegiate hackathon, a 24-hour weekend bringing together developers, hardware engineers, and designers. The event's design team needed the logo finished fast; they were about to launch their sponsor outreach campaign and couldn't wait.",
        'The mark centers on a phoenix, referencing UW-Green Bay\'s own mascot and school spirit, paired with the "Hack GB" wordmark. With sponsorship materials on a tight deadline, the priority was landing a strong, recognizable symbol in one week rather than exploring dozens of directions.',
        'Once delivered, the logo became the face of the event. The team carried it onto stickers, keychains and shirts, onto the event\'s official documents, onto its website, hackgb.com, and onto its Devpost page, where participants submitted their projects.',
      ],
      es: [
        'HackGB es el hackathon universitario de la Universidad de Wisconsin-Green Bay, un fin de semana de 24 horas que reúne a desarrolladores, ingenieros de hardware y diseñadores. El equipo de diseño del evento necesitaba el logo terminado rápido; estaban por lanzar su campaña de búsqueda de patrocinadores y no podían esperar.',
        'La marca se centra en un fénix, en referencia a la mascota de UW-Green Bay, junto al texto "Hack GB". Con los materiales de patrocinio bajo una fecha límite ajustada, la prioridad fue lograr un símbolo fuerte y reconocible en una semana, en vez de explorar docenas de direcciones.',
        'Una vez entregado, el logo se convirtió en la cara del evento. El equipo lo llevó a stickers, llaveros y camisas, a los documentos oficiales del evento, a su sitio web, hackgb.com, y a su página de Devpost, donde los participantes entregaron sus proyectos.',
      ],
    },
    gallery: [
      {
        image: '/projects/hack-gb/event-stand.webp',
        alt: {
          en: 'Hack GB registration area at UW-Green Bay: a roll-up banner with the phoenix logo next to the welcome table with badges and lanyards',
          es: 'Zona de registro de Hack GB en UW-Green Bay: un banner roll-up con el logo del fénix junto a la mesa de bienvenida con gafetes y cordones',
        },
      },
      {
        image: '/projects/hack-gb/event-team.webp',
        alt: {
          en: 'Hack GB organizing team in event shirts with the phoenix logo, in front of the "Welcome to HackGB" opening slide (photo: @hack.gb on Instagram)',
          es: 'Equipo organizador de Hack GB con camisas del evento con el logo del fénix, frente a la diapositiva de bienvenida "Welcome to HackGB" (foto: @hack.gb en Instagram)',
        },
      },
      {
        image: '/projects/hack-gb/event-closing.webp',
        alt: {
          en: 'Hack GB participants and organizers together on stage under the "Thanks for attending HackGB" closing slide with the phoenix logo (photo: @hack.gb on Instagram)',
          es: 'Participantes y organizadores de Hack GB juntos en el escenario bajo la diapositiva de cierre "Thanks for attending HackGB" con el logo del fénix (foto: @hack.gb en Instagram)',
        },
      },
      {
        image: '/projects/hack-gb/event-badges.webp',
        alt: {
          en: 'Hack GB badges with the phoenix logo, color-coded by role (mentor, sponsor, judge and hacker), on green lanyards (photo: @hack.gb on Instagram)',
          es: 'Gafetes de Hack GB con el logo del fénix, con un color por rol (mentor, patrocinador, juez y hacker), en cordones verdes (foto: @hack.gb en Instagram)',
        },
      },
      {
        image: '/projects/hack-gb/event-shirts.webp',
        alt: {
          en: 'Hack GB organizers wearing the event shirts and badges with the phoenix logo (photo: @hack.gb on Instagram)',
          es: 'Organizadores de Hack GB con las camisas y gafetes del evento con el logo del fénix (foto: @hack.gb en Instagram)',
        },
      },
      {
        image: '/projects/hack-gb/figma-vector.webp',
        alt: {
          en: 'Hack GB phoenix logo as an editable vector in the original Figma file, with its anchor points visible',
          es: 'Logo fénix de Hack GB como vector editable en el archivo original de Figma, con sus puntos de anclaje visibles',
        },
      },
      {
        image: '/projects/hack-gb/logo-formats.webp',
        alt: { en: 'Hack GB logo and icon formats', es: 'Formatos del logo e ícono de Hack GB' },
      },
      {
        image: '/projects/hack-gb/icon-colors.webp',
        alt: { en: 'Hack GB phoenix icon color variations', es: 'Variaciones de color del ícono fénix de Hack GB' },
      },
    ],
    summary: {
      en: "Designing under a hard sponsor-outreach deadline meant trusting my first strong direction instead of iterating endlessly. Seeing the phoenix later on stickers, keychains, shirts, official documents and the event website confirmed why that mattered: a mark built to be clear and simple holds up across every size and medium, from a small sticker to a full web page, for a team I'd never worked with before.",
      es: 'Diseñar bajo una fecha límite estricta para la búsqueda de patrocinadores significó confiar en mi primera dirección fuerte en vez de iterar sin fin. Ver después el fénix en stickers, llaveros, camisas, documentos oficiales y el sitio web del evento confirmó por qué importaba: una marca pensada para ser clara y simple aguanta cualquier tamaño y medio, desde un sticker pequeño hasta una página web, para un equipo con el que nunca había trabajado.',
    },
    liveUrl: {
      url: 'https://hackgb.com',
      label: { en: 'Visit Event Site', es: 'Ver Sitio del Evento' },
      short: { en: 'Visit site', es: 'Ver sitio' },
    },
    extraLinks: [
      {
        url: 'https://hackgb-2026.devpost.com/project-gallery',
        label: { en: 'View on Devpost', es: 'Ver en Devpost' },
      },
    ],
  },
  {
    id: '7',
    slug: 'teleo',
    year: '2026',
    blurb: {
      en: 'A private, ad-free reading journal: sagas, reviews, quotes, streaks, stats and a monthly and yearly recap to share.',
      es: 'Diario de lectura privado y sin anuncios: sagas, reseñas, citas, rachas, estadísticas y un resumen del mes y del año para compartir.',
    },
    title: { en: 'Teleo', es: 'Teleo' },
    type: { en: 'Web App (PWA)', es: 'Aplicación Web (PWA)' },
    category: 'web',
    cover: 'teleo',
    timeline: { en: 'August 2026 - present time', es: 'Agosto 2026 - actualidad' },
    role: { en: 'Solo Designer & Developer', es: 'Diseñadora y Desarrolladora Única' },
    tools: { en: 'React, TypeScript, Tailwind CSS, Supabase, TanStack Query, Figma', es: 'React, TypeScript, Tailwind CSS, Supabase, TanStack Query, Figma' },
    overview: {
      en: [
        'Teleo is a private, ad-free reading journal that I design and build on my own, and that my friends use every day. It started because no reading app had exactly what I wanted: some were missing something, others had so many options they became overwhelming. It began as a simple log just for me, and since August 2026 it has shipped 18 versions, each with release notes written for the people who use it.',
        'The app is organized like a notebook. La mesa shows what you are reading, your daily streak as a bookmark ribbon and your reading pace. El estante holds books and sagas on shelves, with filters by genre, mood, pace and tags. El cuaderno keeps reviews as ruled pages, quotes as notes with a folded corner, and content warnings. La bitácora gathers stats, purchases, and a monthly and yearly recap that can be shared as story cards. It also includes upcoming releases with a countdown, a Goodreads import, six color themes, invitations with a QR code and a guided tutorial over the app itself.',
        'It is an installable PWA built with React, TypeScript and Tailwind CSS, with Supabase handling auth, the Postgres database (row-level security per user), file storage and an Edge Function for account deletion, and TanStack Query managing the data. Before writing any code I designed the whole app in Figma, 51 screens in light and dark mode, along with a written specification.',
      ],
      es: [
        'Teleo es un diario de lectura privado y sin anuncios que diseño y desarrollo sola, y que mis amistades usan todos los días. Nació porque ninguna app de lectura tenía exactamente lo que yo quería: a algunas les faltaba algo y otras tenían tantas opciones que abrumaban. Empezó como un registro sencillo solo para mí y, desde agosto de 2026, ya lleva 18 versiones publicadas, cada una con notas de novedades escritas para quienes la usan.',
        'La app está organizada como un cuaderno. La mesa muestra lo que estás leyendo, tu racha diaria como una cinta marcapáginas y tu ritmo de lectura. El estante guarda libros y sagas en repisas, con filtros por género, ánimo, ritmo y etiquetas. El cuaderno reúne las reseñas como hojas rayadas, las citas como notas con la esquina doblada y los avisos de contenido. La bitácora junta estadísticas, compras y un resumen del mes y del año que se comparte como tarjetas tipo historia. Además tiene lanzamientos con cuenta atrás, importación desde Goodreads, seis temas de color, invitaciones con código QR y un tutorial sobre la misma app.',
        'Es una PWA instalable hecha con React, TypeScript y Tailwind CSS, con Supabase para la autenticación, la base de datos Postgres (con seguridad a nivel de fila por usuario), el almacenamiento de archivos y una Edge Function para eliminar la cuenta, y TanStack Query para manejar los datos. Antes de escribir código diseñé la app completa en Figma, con 51 pantallas en modo claro y oscuro, junto con una especificación escrita.',
      ],
    },
    summary: {
      en: 'Teleo taught me to keep a real product going over time, not just launch it: shipping in versions with release notes anyone can understand, listening to the people who use it every day, and deciding what to add without losing the original idea of a calm app that is private by default and public by choice.',
      es: 'Teleo me enseñó a sostener un producto real en el tiempo, no solo a lanzarlo: publicar por versiones con notas de novedades que cualquier persona entiende, escuchar a quienes la usan todos los días y decidir qué agregar sin perder la idea original de una app tranquila, privada por defecto y pública por decisión.',
    },
    liveUrl: {
      url: 'https://fiorers.dev/teleo/',
      label: { en: 'View Live Site', es: 'Ver Sitio en Vivo' },
    },
    demoAccess: {
      email: 'teleo@fiorers.dev',
      password: 'teleo123',
      note: {
        en: 'A shared demo account with a sample library. Explore freely: it resets every night.',
        es: 'Una cuenta de prueba compartida, con una biblioteca de ejemplo. Explora con libertad: se reinicia cada noche.',
      },
    },
  },
  {
    id: '9',
    slug: 'sobres',
    year: '2026',
    blurb: {
      en: 'Personal budgeting with the BCR envelope system. A visual tool that never connects to a bank.',
      es: 'Presupuesto personal con el sistema de sobres del BCR. Una herramienta visual que nunca se conecta a un banco.',
    },
    title: { en: 'Sobres', es: 'Sobres' },
    type: { en: 'Web App (PWA)', es: 'Aplicación Web (PWA)' },
    category: 'web',
    cover: 'sobres',
    timeline: { en: 'September 2026', es: 'Setiembre 2026' },
    role: { en: 'Solo Designer & Developer', es: 'Diseñadora y Desarrolladora Única' },
    tools: { en: 'React, TypeScript, Tailwind CSS, Vite PWA', es: 'React, TypeScript, Tailwind CSS, Vite PWA' },
    overview: {
      en: [
        "Sobres is a personal budgeting app based on the BCR (Banco de Costa Rica) envelope system: it splits an income across the envelopes you choose, recalculating their priorities proportionally so they always add up to 100% of that income. It's a visual reference tool only, never connecting to a real bank or account.",
        'Each envelope keeps a running balance instead of working like a one-off calculator, so priorities, balances, and movement history persist across incomes. Built as an installable PWA with React 19, TypeScript, and Tailwind CSS v4, storing everything in localStorage with no backend, following the same pattern as Teleo.',
        'Deployed to GitHub Pages via GitHub Actions. Envelopes can be reordered by dragging, and each one gets its own color, icon and an optional savings goal. Balances can be corrected by hand without creating a movement, the data can be exported and imported as a backup, and the theme can be light, dark or follow the system. It has its own install icons and splash screens, and starts clean, with no sample data.',
      ],
      es: [
        'Sobres es una app personal de presupuesto basada en el sistema de sobres del BCR (Banco de Costa Rica): reparte un ingreso entre los sobres que elegís, recalculando sus prioridades proporcionalmente para que siempre sumen el 100% de ese ingreso. Es una herramienta visual de referencia, no se conecta a ningún banco ni cuenta real.',
        'Cada sobre lleva un saldo acumulado en vez de funcionar como una calculadora puntual, así que las prioridades, saldos e historial de movimientos persisten entre ingresos. Construida como una PWA instalable con React 19, TypeScript y Tailwind CSS v4, guardando todo en localStorage sin backend, siguiendo el mismo patrón que Teleo.',
        'Desplegada en GitHub Pages vía GitHub Actions. Los sobres se reordenan arrastrándolos y cada uno puede tener su color, su ícono y una meta opcional. Los saldos se corrigen a mano sin generar un movimiento, los datos se exportan e importan como respaldo, y el tema puede ser claro, oscuro o el del sistema. Tiene íconos y splash screens propios para instalarla, y arranca limpia, sin datos de ejemplo.',
      ],
    },
    summary: {
      en: 'Designing Sobres meant translating a real financial mental model, the BCR envelope system, into clear interaction rules before writing any application logic: proportional recalculation of priorities so they always add up to 100%, rounding by largest remainder so amounts still sum exactly, and drag-and-drop reordering that stays honest to how people actually prioritize their money.',
      es: 'Diseñar Sobres significó traducir un modelo mental financiero real, el sistema de sobres del BCR, en reglas de interacción claras antes de escribir cualquier lógica de la aplicación: recálculo proporcional de prioridades para que siempre sumen 100%, redondeo por mayor residuo para que los montos sigan sumando exacto, y reordenamiento por drag-and-drop que respeta cómo las personas priorizan de verdad su dinero.',
    },
    liveUrl: {
      url: 'https://fiorers.dev/sobres/',
      label: { en: 'View Live Site', es: 'Ver Sitio en Vivo' },
    },
  },
]

/** Orden destacado: carrusel de la portada y "siguiente proyecto" en los casos de estudio. */
const featuredOrder = ['hack-gb', 'teleo', 'pycon-latam-2025', 'pixmatic-studios', 'happy-home', 'sobres']

export const featuredProjects: Project[] = [
  ...featuredOrder.map((slug) => projects.find((p) => p.slug === slug)).filter((p): p is Project => !!p),
  // Si se agrega un proyecto nuevo sin ponerlo en featuredOrder, aparece al final.
  ...projects.filter((p) => !featuredOrder.includes(p.slug)),
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)