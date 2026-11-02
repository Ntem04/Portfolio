import type { Project, PersonalInfo, TechCategoryData } from '../types'

export const personalInfo: PersonalInfo = {
  name: 'NTEM Dilane La Victoire',
  role: 'Élève ingénieur en génie logiciel',
  roleEn: 'Software Engineering Student',
  title: 'FULLSTACK',
  subtitle: 'PROMOTEUR',
  tagline: 'UN ÉDITEUR DE TEXTE ET DU CAFÉ.',
  bio: "Élève ingénieur en génie logiciel à l'École Nationale Supérieure Polytechnique de Douala, je développe des applications web et des solutions réseau. Je recherche un stage à Douala à partir du 2 février 2027 (4 à 5 mois) pour contribuer à des projets logiciels concrets.",
  bioEn: 'Software engineering student at École Nationale Supérieure Polytechnique de Douala, building web applications and network solutions. Seeking a 4 to 5 months internship in Douala starting February 2, 2027.',
  email: 'ntemdilane32@gmail.com',
  phone: '+237 697 489 473',
  location: 'Douala, Cameroun',
  availableForWork: true,
  cvUrl: '/cv-ntem-dilane.pdf',
  school: 'Polytechnique de Douala (2024–2027)',
  internshipGoal: 'Stage de 4 à 5 mois dès le 2 février 2027 à Douala',
  linkedin: 'https://linkedin.com/in/dilane-la-victoire-ntem-396aba385',
  github: 'https://github.com/ntem04',
}

export const projectsData: Project[] = [
  {
    id: 'beac-sante',
    number: '01',
    title: 'BEAC Santé',
    titleEn: 'BEAC Health',
    category: 'APPLICATION WEB & SANTÉ',
    categoryEn: 'HEALTHCARE WEB APP',
    status: 'In production',
    description:
      "Application web de gestion d'une infirmerie développée avec React, Tailwind CSS, DaisyUI et Node.js/Express, intégrant une communication en temps réel avec WebSockets.",
    descriptionEn:
      'Infirmary management web application built with React, Tailwind CSS, DaisyUI, and Node.js/Express, featuring real-time WebSockets communication.',
    features: [
      'Gestion médicale : suivi des consultations, dossiers patients et pharmacie.',
      'Interface réactive : composants ergonomiques avec Tailwind CSS et DaisyUI.',
      'Communication temps réel : notifications et alertes instantanées avec WebSockets.',
      'Backend Node.js : architecture Express robuste avec base de données relationnelle SQL.',
    ],
    featuresEn: [
      'Medical management: tracking consultations, patient files, and pharmacy stocks.',
      'Responsive UI: ergonomic component design using Tailwind CSS and DaisyUI.',
      'Real-time communication: instant alerts and notifications with WebSockets.',
      'Node.js backend: robust Express architecture with relational SQL persistence.',
    ],
    additionalInfo:
      'Projet réalisé en juin–juillet 2026 pour optimiser la prise en charge clinique et la traçabilité des soins.',
    additionalInfoEn:
      'Developed in June–July 2026 to optimize clinical care workflows and medication traceability.',
    tags: ['React', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'WebSockets', 'SQL'],
    link: 'https://github.com/ntem04',
    github: 'https://github.com/ntem04',
    stickerEmoji: '🏥',
    stickerSvg: 'gateway',
    accentColor: '#10b981',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'BEAC Santé — Interface médicale',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'BEAC Santé — Démo temps réel',
        url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  {
    id: 'p2pshare',
    number: '02',
    title: 'P2PShare (Rust)',
    titleEn: 'P2PShare (Rust)',
    category: 'RÉSEAUX & SYSTÈMES (RUST)',
    categoryEn: 'NETWORKING & SYSTEMS (RUST)',
    status: 'In production',
    description:
      "Application de transfert de fichiers client-serveur ultra-rapide développée en Rust, exploitant les protocoles réseau bas-niveau pour une sécurité et une vitesse optimales.",
    descriptionEn:
      'High-performance client-server file transfer application written in Rust, leveraging low-level network protocols for maximum speed and integrity.',
    features: [
      'Performance Rust : sécurité mémoire sans garbage collector et débit réseau maximal.',
      'Protocoles réseau : négociation de sockets TCP, découpage de paquets et accusés de réception.',
      'Contrôle d’intégrité : vérification par hash cryptographique SHA-256 à l’arrivée.',
      'Gestion concurrente : traitement asynchrone des transferts multi-clients simultanés.',
    ],
    featuresEn: [
      'Rust performance: zero-cost abstractions, memory safety, and maximum socket throughput.',
      'Network protocols: custom TCP socket framing, packet chunking, and acknowledgments.',
      'Integrity verification: cryptographic SHA-256 hash checks upon transfer completion.',
      'High concurrency: non-blocking asynchronous handling of simultaneous multi-client streams.',
    ],
    additionalInfo:
      'Projet réalisé entre avril et juin 2026 combinant rigueur algorithmique et maîtrise des réseaux informatiques.',
    additionalInfoEn:
      'Built in April–June 2026 uniting algorithmic rigor and low-level computer networking.',
    tags: ['Rust', 'TCP/IP', 'Sockets', 'Linux', 'Concurrency', 'Git'],
    link: 'https://github.com/ntem04',
    github: 'https://github.com/ntem04',
    stickerEmoji: '⚡',
    stickerSvg: 'box',
    accentColor: '#f97316',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'P2PShare — Architecture réseau',
        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'P2PShare — Démonstration de transfert',
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  {
    id: 'suivi-energie',
    number: '03',
    title: 'Suivi Énergie Foyers',
    titleEn: 'Home Energy Monitor',
    category: 'APPLICATION WEB & ANALYTICS',
    categoryEn: 'WEB ANALYTICS & ENERGY',
    status: 'In production',
    description:
      'Application web de suivi de la consommation électrique dans différents foyers, permettant de visualiser les métriques d’énergie en direct et d’optimiser les factures.',
    descriptionEn:
      'Web application for monitoring and analyzing household electrical consumption, providing visual energy metrics to optimize efficiency.',
    features: [
      'Tableau de bord analytique : graphiques de consommation journalière, hebdomadaire et mensuelle.',
      'Interface intuitive : réalisée avec React, Tailwind CSS et les composants DaisyUI.',
      'Estimation des coûts : calcul automatisé des tarifs et alertes de dépassement de seuil.',
      'Backend Node.js & Express : requêtes SQL optimisées pour les séries temporelles.',
    ],
    featuresEn: [
      'Analytics dashboard: daily, weekly, and monthly power consumption curves.',
      'Modern UI: built with React, Tailwind CSS, and DaisyUI components.',
      'Cost estimations: automated tariff calculations and consumption threshold alerts.',
      'Node.js & Express API: fast SQL queries tailored for time-series metrics.',
    ],
    additionalInfo:
      'Conçu en septembre–octobre 2026 pour sensibiliser à l’efficacité énergétique des ménages.',
    additionalInfoEn:
      'Engineered in September–October 2026 to improve household energy awareness and cost efficiency.',
    tags: ['React', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'MySQL'],
    link: 'https://github.com/ntem04',
    github: 'https://github.com/ntem04',
    stickerEmoji: '💡',
    stickerSvg: 'taskflow',
    accentColor: '#3b82f6',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'Suivi Énergie — Tableau de bord',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'Suivi Énergie — Vidéo de présentation',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  {
    id: 'logivite',
    number: '04',
    title: 'Logivite',
    titleEn: 'Logivite',
    category: 'WEB SAAS',
    categoryEn: 'WEB SAAS',
    status: 'In development',
    description:
      'Plateforme SaaS moderne conçue pour les entreprises de livraison et de logistique, regroupant tous les outils nécessaires à la coordination quotidienne des opérations.',
    descriptionEn:
      'Modern SaaS platform designed for delivery and courier companies, combining essential tools to coordinate daily operations.',
    features: [
      'Gestion des commandes : centralisation des requêtes et suivi de la création à la livraison.',
      'Gestion clients : centralisation des coordonnées et historique des commandes.',
      'Gestion de flotte : coordination des équipes de coursiers et assignation intelligente des courses.',
      'Application mobile : synchronisation en direct des missions pour les livreurs.',
    ],
    featuresEn: [
      'Order management: centralize orders and track status from pickup to delivery.',
      'Customer CRM: unified contact records, notes, and delivery history.',
      'Fleet operations: coordinate courier teams and assign delivery tasks smartly.',
      'Dedicated mobile app: live job notifications and earnings dashboard for drivers.',
    ],
    additionalInfo:
      'Une solution complète combinant un tableau de bord web et une application mobile réactive.',
    additionalInfoEn:
      'An end-to-end suite combining a responsive web administration panel with courier mobile apps.',
    tags: ['Next.js', 'React Native', 'TypeScript', 'Supabase', 'Node.js', 'Google Maps API'],
    link: 'https://logivite.com',
    github: 'https://github.com/ntem04',
    stickerEmoji: '📦',
    stickerSvg: 'box',
    accentColor: '#f97316',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'Logivite — Dashboard Opérations',
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'Logivite — Démo Vidéo Interactive',
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  {
    id: 'cleanpro',
    number: '05',
    title: 'CleanPro Vitrine',
    titleEn: 'CleanPro Showcase',
    category: 'SITE VITRINE & COMMERCE',
    categoryEn: 'SHOWCASE & BOOKING PLATFORM',
    status: 'In production',
    description:
      'Création d’un site vitrine complet pour une entreprise de nettoyage professionnel avec formulaire de devis interactif et présentation des prestations de services.',
    descriptionEn:
      'Creation of a complete showcase website for a professional cleaning company with interactive quotation forms and service catalog.',
    features: [
      'Identité visuelle moderne : mise en valeur des services avec un design épuré et rassurant.',
      'Formulaire de devis : calcul dynamique des tarifs selon les surfaces et fréquences.',
      'Optimisation SEO & Mobile : temps de chargement ultra-rapides et score Google PageSpeed 98+.',
    ],
    featuresEn: [
      'Modern visual identity: premium service showcase with crisp typography and imagery.',
      'Interactive quote calculator: dynamic estimates based on surface area and frequency.',
      'SEO & Mobile optimization: lightning-fast loading speeds and 98+ Google PageSpeed score.',
    ],
    additionalInfo:
      'Projet académique développé pour une entreprise tierce en respectant le cahier des charges client.',
    additionalInfoEn:
      'Academic project engineered for an external business adhering strictly to client requirements.',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'SQL'],
    link: 'https://github.com/ntem04',
    github: 'https://github.com/ntem04',
    stickerEmoji: '✨',
    stickerSvg: 'commerce',
    accentColor: '#0284c7',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'CleanPro — Accueil & Services',
        url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'CleanPro — Navigation interactive',
        url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
  {
    id: 'portfolio-promoteur',
    number: '06',
    title: 'Portfolio NTEM Studio',
    titleEn: 'Portfolio NTEM Studio',
    category: 'DESIGN INTERACTIF & WEB',
    categoryEn: 'INTERACTIVE DESIGN & WEB',
    status: 'In production',
    description:
      'Portfolio interactif sur mesure conçu pour NTEM Dilane La Victoire, alliant typographie monumentale, classeurs de projets 3D avec Framer Motion et bascule bilingue instantanée.',
    descriptionEn:
      'Custom interactive portfolio built for NTEM Dilane La Victoire, blending monumental typography, 3D project folders with Framer Motion, and instant bilingual toggle.',
    features: [
      'Dossiers 3D interactifs : animation réaliste de documents et panneau de détail coulissant.',
      'Lecteur média & Lightbox : affichage haute définition des captures et lecteur vidéo intégré.',
      'Bilingue français/anglais : bascule dynamique et instantanée de l’ensemble du portfolio.',
      'Performance 60fps : architecture React 19 et Tailwind CSS v4 sans concessions.',
    ],
    featuresEn: [
      'Interactive 3D folders: realistic paper documents with Framer Motion layout animations.',
      'Media Lightbox & Video Player: high-resolution preview and embedded HTML5 video controls.',
      'Instant French/English bilingual: dynamic language switching throughout the application.',
      '60fps performance: streamlined React 19 and Tailwind CSS v4 architecture.',
    ],
    additionalInfo:
      'Vitrine complète d’ingénierie logicielle et de design numérique pour la recherche de stage.',
    additionalInfoEn:
      'A complete software engineering and interactive design showcase built for internship recruitment.',
    tags: ['React 19', 'Tailwind v4', 'Framer Motion', 'TypeScript', 'Vite'],
    link: '#',
    github: 'https://github.com/ntem04',
    stickerEmoji: '🚀',
    stickerSvg: 'portfolio',
    accentColor: '#6a3c20',
    year: '2026',
    previews: [
      {
        type: 'image',
        title: 'Portfolio Promoteur — Accueil',
        url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=85',
      },
      {
        type: 'video',
        title: 'Portfolio Promoteur — Démo vidéo',
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
      },
    ],
  },
]

export const techStackData: TechCategoryData[] = [
  {
    id: 'frontend',
    title: 'Frontend & UI',
    subtitle: 'Conception d’interfaces fluides, réactives et visuellement marquantes.',
    skills: ['React', 'Next.js', 'Vite.js', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'JavaScript ES6+'],
    iconName: 'Layout',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Architecture serveur robuste, sécurisée et scalable.',
    skills: ['Node.js', 'Express.js', 'Rust', 'WebSockets', 'REST APIs', 'TCP/IP Sockets'],
    iconName: 'Server',
  },
  {
    id: 'database',
    title: 'Bases de Données',
    subtitle: 'Gestion structurée et requêtage performant de données critiques.',
    skills: ['SQL / MySQL', 'PostgreSQL', 'Prisma', 'SQLite', 'Redis'],
    iconName: 'Database',
  },
  {
    id: 'tools',
    title: 'Réseaux & Outils',
    subtitle: 'Administration réseau, protocoles et environnement de développement moderne.',
    skills: ['Réseaux LAN/WAN', 'DHCP & DNS', 'Pare-feu', 'Wireshark', 'Packet Tracer', 'Git/GitHub', 'Linux / Ubuntu', 'VS Code'],
    iconName: 'Wrench',
  },
]
