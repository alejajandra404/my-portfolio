export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      stack: 'Stack',
      projects: 'Proyectos',
    },
    sidebar: {
      role: 'Software Developer',
      tagline: 'Construyo productos web y mobile, de brief a producción.',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Alejandra.',
      role: 'Software Developer.',
      description:
        'Combino formación en ingeniería de software con experiencia real construyendo productos para clientes, desde web hasta mobile.',
      primaryCta: 'Ver proyectos',
      secondaryCta: 'Descargar CV',
    },
    about: {
      heading: 'Sobre mí',
      paragraph1:
        'Voy en séptimo semestre de Ingeniería en Software en el ITSON (GPA 9.4/10), pero mi aprendizaje no se ha quedado solo en el salón de clases: desde enero de 2024 trabajo en AW IT, un negocio familiar de IT, donde llevo proyectos reales de principio a fin — del brief del cliente hasta el sitio en producción.',
      paragraph2:
        'Esa combinación es mi diferenciador: entiendo los fundamentos porque los estudio a fondo, y sé cómo se ven en la práctica porque los aplico todos los días. Ahora mismo estoy enfocada en dar el salto a equipos remotos, idealmente en empresas grandes, donde pueda seguir creciendo como developer full-stack.',
      paragraph3:
        'Fuera del código, soy de las que siempre trae un libro a medias (mi Goodreads lo confirma), escribo cuando algo no me deja tranquila, y intento no faltar al gym o a mis clases de pilates.',
    },
    experience: {
      heading: 'Experiencia',
      role: 'Junior Web Developer',
      company: 'AW IT',
      period: 'Enero 2024 — Presente',
      achievements: [
        'Diseñé y desarrollé más de 6 sitios web para clientes, de principio a fin: desde el levantamiento de requerimientos hasta el despliegue, usando React.js, HTML5 y Firebase.',
        'Di soporte técnico continuo a los sitios y aplicaciones ya en producción, resolviendo incidencias reportadas por clientes y manteniendo la confiabilidad de cada entrega.',
        'Construí funcionalidades asíncronas y basadas en eventos para el software financiero interno de la empresa, usando Python y FastAPI con RabbitMQ, Kafka y Arq para procesamiento en segundo plano, Redis para caché, y PostgreSQL LISTEN/NOTIFY para actualizaciones en tiempo real.',
        'Desarrollé el frontend de esa misma plataforma con React y Redux para el manejo de estado, apoyándome en la librería de componentes CoreUI.',
      ],
    },
    stack: {
      heading: 'Stack Técnico',
      categories: [
        { title: 'Frontend', items: ['React.js', 'Redux', 'HTML5', 'CSS3', 'CoreUI'] },
        { title: 'Backend', items: ['Python', 'FastAPI', 'Java'] },
        { title: 'Mobile', items: ['Kotlin', 'Jetpack Compose'] },
        { title: 'Datos y mensajería', items: ['PostgreSQL', 'MySQL', 'RabbitMQ', 'Kafka', 'Redis'] },
        { title: 'Infra y herramientas', items: ['Firebase', 'Docker', 'Linux', 'Git'] },
        { title: 'Otros', items: ['Android Studio'] },
      ],
    },
    projects: {
      heading: 'Proyectos Destacados',
      items: [
        {
          title: 'Plataforma financiera interna — AW IT',
          description:
            'Backend de eventos asíncronos para software financiero interno: mensajería con RabbitMQ y Kafka, tareas en segundo plano con Arq, caché con Redis y actualizaciones en tiempo real vía PostgreSQL LISTEN/NOTIFY. Frontend en React con Redux y CoreUI.',
          tech: ['Python', 'FastAPI', 'RabbitMQ', 'Kafka', 'Redis', 'React', 'Redux'],
          badge: 'En producción',
        },
        {
          title: 'Monitor de ECG — Sistemas Embebidos',
          description:
            'Sistema de monitoreo de electrocardiograma para un curso de sistemas embebidos: adquisición de señal, temporización no bloqueante y pantalla OLED sobre un ESP32-S3 (Arduino/C++), junto con una aplicación en Python (pyserial) para monitoreo de datos en tiempo real.',
          tech: ['C++', 'Arduino', 'ESP32-S3', 'Python', 'pyserial'],
          badge: 'Escolar',
        },
        {
          title: 'Seguros Encinas — Sitio de correduría de seguros',
          description:
            'Sitio web construido desde cero para una correduría de seguros, organizando más de 8 líneas de producto —auto, transporte marítimo y terrestre, médico, vida, retiro, residencial, comercial y viajes— en una estructura clara y navegable, con llamadas a la acción pensadas para generar cotizaciones.',
          tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
          link: 'https://segurosencinas.com',
        },
        {
          title: 'Morelos 508 — Landing de preventa inmobiliaria',
          description:
            'Sitio de marketing mobile-first construido desde cero para el desarrollo residencial de lujo de una constructora local, con un formulario de captación de leads para convertir visitantes en prospectos de venta.',
          tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
          link: 'https://dsd.mx',
        },
      ],
    },
    footer: {
      eyebrow: '05. Contacto',
      heading: 'Trabajemos juntos',
      description:
        'Estoy buscando oportunidades remotas donde pueda seguir creciendo como developer. Si tienes un proyecto en mente o simplemente quieres saludar, escríbeme.',
      emailCta: 'Escríbeme',
      cvLink: 'Descargar CV',
      legal: 'Alejandra · Portafolio personal',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      stack: 'Stack',
      projects: 'Projects',
    },
    sidebar: {
      role: 'Software Developer',
      tagline: 'Building web and mobile products, from brief to production.',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Alejandra.',
      role: 'Software Developer.',
      description:
        'I combine a software engineering degree with real hands-on experience building products for clients, from web to mobile.',
      primaryCta: 'View projects',
      secondaryCta: 'Download CV',
    },
    about: {
      heading: 'About me',
      paragraph1:
        "I'm in my 7th semester of Software Engineering at ITSON (GPA 9.4/10), but my learning hasn't stayed in the classroom: since January 2024 I've worked at AW IT, a family-run IT business, where I own real client projects end-to-end — from the initial brief to the site in production.",
      paragraph2:
        "That combination is what sets me apart: I understand the fundamentals because I study them in depth, and I know how they hold up in practice because I apply them every day. Right now I'm focused on moving into remote teams, ideally at larger companies, where I can keep growing as a full-stack developer.",
      paragraph3:
        "Outside of code, I'm always in the middle of a book (my Goodreads can confirm), I write when something's on my mind, and I try not to skip the gym or my pilates classes.",
    },
    experience: {
      heading: 'Experience',
      role: 'Junior Web Developer',
      company: 'AW IT',
      period: 'January 2024 — Present',
      achievements: [
        'Designed and developed 6+ client-facing websites end-to-end, from requirements gathering through deployment, using React.js, HTML5, and Firebase.',
        'Provided ongoing technical support and troubleshooting for deployed websites and applications, resolving client-reported issues and maintaining site reliability.',
        'Built asynchronous, event-driven features for internal financial software using Python and FastAPI, leveraging RabbitMQ, Kafka, and Arq for background task processing, Redis for caching, and PostgreSQL LISTEN/NOTIFY for real-time data updates.',
        "Developed the platform's frontend using React and Redux for state management, with the CoreUI component library.",
      ],
    },
    stack: {
      heading: 'Tech Stack',
      categories: [
        { title: 'Frontend', items: ['React.js', 'Redux', 'HTML5', 'CSS3', 'CoreUI'] },
        { title: 'Backend', items: ['Python', 'FastAPI', 'Java'] },
        { title: 'Mobile', items: ['Kotlin', 'Jetpack Compose'] },
        { title: 'Data & Messaging', items: ['PostgreSQL', 'MySQL', 'RabbitMQ', 'Kafka', 'Redis'] },
        { title: 'Infra & Tools', items: ['Firebase', 'Docker', 'Linux', 'Git'] },
        { title: 'Other', items: ['Android Studio'] },
      ],
    },
    projects: {
      heading: 'Featured Projects',
      items: [
        {
          title: 'Internal Financial Platform — AW IT',
          description:
            'Asynchronous, event-driven backend for internal financial software: messaging with RabbitMQ and Kafka, background tasks with Arq, Redis caching, and real-time updates via PostgreSQL LISTEN/NOTIFY. React frontend with Redux and CoreUI.',
          tech: ['Python', 'FastAPI', 'RabbitMQ', 'Kafka', 'Redis', 'React', 'Redux'],
          badge: 'In production',
        },
        {
          title: 'ECG Monitor — Embedded Systems',
          description:
            'Electrocardiogram monitoring system built for an embedded systems course: signal acquisition, non-blocking timing, and an OLED display interface on an ESP32-S3 (Arduino/C++), paired with a Python (pyserial) app for real-time serial data monitoring.',
          tech: ['C++', 'Arduino', 'ESP32-S3', 'Python', 'pyserial'],
          badge: 'School project',
        },
        {
          title: 'Seguros Encinas — Insurance Brokerage Website',
          description:
            'Website built from scratch for an insurance brokerage, organizing 8+ product lines — auto, marine and land transport, medical, life, retirement, residential, commercial, and travel insurance — into a clear, navigable structure with conversion-focused calls-to-action.',
          tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
          link: 'https://segurosencinas.com',
        },
        {
          title: 'Morelos 508 — Real Estate Presale Landing Page',
          description:
            "Responsive, mobile-first marketing website built from scratch for a local construction company's luxury residential development, with a lead-capture form to convert visitors into sales inquiries.",
          tech: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
          link: 'https://dsd.mx',
        },
      ],
    },
    footer: {
      eyebrow: '05. Contact',
      heading: "Let's work together",
      description:
        "I'm looking for remote opportunities where I can keep growing as a developer. If you have a project in mind or just want to say hi, reach out.",
      emailCta: 'Get in touch',
      cvLink: 'Download CV',
      legal: 'Alejandra · Personal portfolio',
    },
  },
}
