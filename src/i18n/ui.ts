export const languages: Record<string, string> = {
  es: "🇪🇸 Español",
  en: "🇺🇸 English",
  pt: "🇧🇷 Português",
};

export const defaultLang = "es";

export type Lang = keyof typeof ui;

export const ui = {
  es: {
    "hero.role": "Full Stack Developer",
    "hero.status":
      "Construyendo sistemas resilientes en <a href='https://www.zettabrasil.com.br' target='_blank' rel='noopener noreferrer' class='text-discord-blurple hover:text-vue-green transition-colors underline'>@Zettabrasil Sistemas</a>",
    "nav.projects": "Ingeniería",
    "nav.stack": "Stack",
    "nav.docs": "Docs",
    "footer.text": "Hay algunos easter eggs en este sitio web, por si te animas a buscarlos 😉",
    "section.engineering": "Artefactos de Ingeniería",
    "section.stack": "Stack Tecnológico",
    "section.docs": "Documentación",
    "docs.title": "Documentación de Proyectos",
    "docs.subtitle": "Guías, tutoriales y recursos para usar mis herramientas open source",
    "docs.empty": "Aún no hay documentación disponible. ¡Próximamente!",
    "docs.back": "Volver al inicio",
    "project.miga.title": "Miga CLI",
    "project.miga.description":
      "CLI ultrarápida construida en Rust para scaffolding y automatización de proyectos. Rendimiento bare-metal.",
    "project.patto.title": "Patto Ecosystem",
    "project.patto.description":
      "Ecosistema de validación y contratos tipados en TypeScript. Arquitectura de plugins extensible.",
    "project.vinrouge.title": "Vin Rouge Bistrô",
    "project.vinrouge.description":
      "Plataforma digital para bistrô francés con sistema de reservas en tiempo real y menú interactivo.",
    "egg.avatar": "¡Eso es girar con estilo!",
    "egg.logo": "¡Las hormigas son fuertes! 💪",
    "egg.project.0": "Rust es rapidísimo! 🦀⚡",
    "egg.project.1": "¡TypeScript: Types > Any! 📘",
    "egg.project.2": "¡Vue es magia reactiva! ✨",
    "egg.engineering": "La ingenieria es un arte 🎨",
    "egg.stack": "El stack nunca miente! 📚",
    "egg.found": "Easter Egg",
    "egg.congrats": "¡Felicitaciones!",
    "egg.complete": "Has encontrado todos los easter eggs",
    "egg.explorer": "Eres un verdadero explorador 🔍",
    "terminal.egg.0":
      "5 años en total: 2 formales + 3 de prueba y error hasta enamorarme del código",
    "terminal.egg.1":
      "Rust es mi favorito, pero no soy de los que quieren reescribir todo el universo en él 😄",
    "terminal.egg.2": "Mi pasión: crear dev-tools open source que faciliten la vida de otros devs",
    "terminal.egg.3": "El bajo nivel me fascina. Menos UI, más lógica pura y bare metal",
  },
  en: {
    "hero.role": "Full Stack Developer",
    "hero.status":
      "Building resilient systems in <a href='https://www.zettabrasil.com.br' target='_blank' rel='noopener noreferrer' class='text-discord-blurple hover:text-vue-green transition-colors underline'>@Zettabrasil Sistemas</a>",
    "nav.projects": "Engineering",
    "nav.stack": "Stack",
    "nav.docs": "Docs",
    "footer.text": "There are some easter eggs on this website, if you dare to find them 😉",
    "section.engineering": "Engineering Artifacts",
    "section.stack": "Tech Stack",
    "section.docs": "Documentation",
    "docs.title": "Project Documentation",
    "docs.subtitle": "Guides, tutorials, and resources for using my open source tools",
    "docs.empty": "No documentation available yet. Coming soon!",
    "docs.back": "Back to home",
    "project.miga.title": "Miga CLI",
    "project.miga.description":
      "Ultra-fast CLI built in Rust for project scaffolding and automation. Bare-metal performance.",
    "project.patto.title": "Patto Ecosystem",
    "project.patto.description":
      "Typed validation and contracts ecosystem in TypeScript. Extensible plugin architecture.",
    "project.vinrouge.title": "Vin Rouge Bistrô",
    "project.vinrouge.description":
      "Digital platform for a French bistro with real-time reservation system and interactive menu.",
    "egg.avatar": "That's spinning with style!",
    "egg.logo": "Ants are strong! 💪",
    "egg.project.0": "Rust is blazingly fast! 🦀⚡",
    "egg.project.1": "TypeScript: Types > Any! 📘",
    "egg.project.2": "Vue is reactive magic! ✨",
    "egg.engineering": "Engineering is an art 🎨",
    "egg.stack": "The stack never lies! 📚",
    "egg.found": "Easter Egg",
    "egg.congrats": "Congratulations!",
    "egg.complete": "You found all the easter eggs",
    "egg.explorer": "You are a true explorer 🔍",
    "terminal.egg.0":
      "5 years total: 2 formal + 3 of trial and error until I fell in love with code",
    "terminal.egg.1":
      "Rust is my favorite, but I'm not one of those who want to rewrite the entire universe in it 😄",
    "terminal.egg.2":
      "My passion: creating open source dev-tools that make life easier for other devs",
    "terminal.egg.3": "Low level fascinates me. Less UI, more pure logic and bare metal",
  },
  pt: {
    "hero.role": "Full Stack Developer",
    "hero.status":
      "Construindo sistemas resilientes em <a href='https://www.zettabrasil.com.br' target='_blank' rel='noopener noreferrer' class='text-discord-blurple hover:text-vue-green transition-colors underline'>@Zettabrasil Sistemas</a>",
    "nav.projects": "Engenharia",
    "nav.stack": "Stack",
    "nav.docs": "Docs",
    "footer.text": "Há alguns easter eggs neste site, se você se atrever a procurá-los 😉",
    "section.engineering": "Artefatos de Engenharia",
    "section.stack": "Stack Tecnológico",
    "section.docs": "Documentação",
    "docs.title": "Documentação de Projetos",
    "docs.subtitle": "Guias, tutoriais e recursos para usar minhas ferramentas open source",
    "docs.empty": "Ainda não há documentação disponível. Em breve!",
    "docs.back": "Voltar ao início",
    "project.miga.title": "Miga CLI",
    "project.miga.description":
      "CLI ultrarrápida construída em Rust para scaffolding e automação de projetos. Performance bare-metal.",
    "project.patto.title": "Patto Ecosystem",
    "project.patto.description":
      "Ecossistema de validação e contratos tipados em TypeScript. Arquitetura de plugins extensível.",
    "project.vinrouge.title": "Vin Rouge Bistrô",
    "project.vinrouge.description":
      "Plataforma digital para bistrô francês com sistema de reservas em tempo real e menu interativo.",
    "egg.avatar": "Isso é girar com estilo!",
    "egg.logo": "As formigas são fortes! 💪",
    "egg.project.0": "Rust é incrivelmente rápido! 🦀⚡",
    "egg.project.1": "TypeScript: Types > Any! 📘",
    "egg.project.2": "Vue é mágica reativa! ✨",
    "egg.engineering": "Engenharia é uma arte 🎨",
    "egg.stack": "O stack nunca mente! 📚",
    "egg.found": "Easter Egg",
    "egg.congrats": "Parabéns!",
    "egg.complete": "Você encontrou todos os easter eggs",
    "egg.explorer": "Você é um verdadeiro explorador 🔍",
    "terminal.egg.0":
      "5 anos no total: 2 formais + 3 de tentativa e erro até me apaixonar pelo código",
    "terminal.egg.1":
      "Rust é meu favorito, mas não sou um daqueles que querem reescrever o universo inteiro nele 😄",
    "terminal.egg.2":
      "Minha paixão: criar dev-tools open source que facilitam a vida de outros devs",
    "terminal.egg.3": "O baixo nível me fascina. Menos UI, mais lógica pura e bare metal",
  },
} as const;
