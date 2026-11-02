import React, { createContext, useContext, useState, useEffect } from 'react'

export type Language = 'FR' | 'EN'

export interface Translations {
  nav: {
    projects: string
    about: string
    stack: string
    contact: string
    cv: string
    workTogether: string
    workTogetherShort: string
  }
  hero: {
    role: string
    title1: string
    title2: string
    pitch: string
    exploreProjects: string
    seekingInternship: string
    strip1: string
    strip2: string
    strip3: string
    readyToCode: string
  }
  projects: {
    tag: string
    title: string
    count: string
    watermark: string
    ignoredProjects: string
    discover: string
    inProduction: string
    inDevelopment: string
    featuresTitle: string
    previewMockup: string
    videoDemo: string
    zoomImage: string
    playVideo: string
    modalHd: string
    modalTip: string
  }
  about: {
    tag: string
    headline: string
    bio1: string
    bio2: string
    card1Title: string
    card1Desc: string
    card2Title: string
    card2Desc: string
    card3Title: string
    card3Desc: string
    statusBadge: string
    educationTitle: string
    school: string
    stageInfo: string
    stageDates: string
    skillsPill: string
  }
  stack: {
    tag: string
    title: string
    viewAll: string
    showMarquee: string
    frontend: string
    backend: string
    services: string
    collaboration: string
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    emailLabel: string
    emailPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    sendBtn: string
    sending: string
    successMsg: string
    captchaError: string
    captchaVerifying: string
    captchaSuccess: string
    captchaPrompt: string
  }
  footer: {
    rights: string
    backToTop: string
    explorer: string
    socials: string
    projects: string
    about: string
    stack: string
    contact: string
  }
}

export const translations: Record<Language, Translations> = {
  FR: {
    nav: {
      projects: 'Projets',
      about: 'À propos',
      stack: 'Pile technologique',
      contact: 'Contact',
      cv: 'CV',
      workTogether: 'Travaillons ensemble',
      workTogetherShort: 'Contact',
    },
    hero: {
      role: 'ÉLÈVE INGÉNIEUR EN GÉNIE LOGICIEL',
      title1: 'FULLSTACK',
      title2: 'PROMOTEUR',
      pitch:
        "Élève ingénieur à Polytechnique de Douala, passionné par le développement d'applications web modernes et de solutions réseau performantes. Je recherche un stage de 4 à 5 mois à Douala à partir de février 2027.",
      exploreProjects: 'Explorer les projets',
      seekingInternship: 'RECHERCHE STAGE FÉV. 2027',
      strip1: 'DÉVELOPPEMENT CRÉATIF',
      strip2: 'GÉNIE LOGICIEL & RÉSEAU',
      strip3: 'SOUTIEN AUX PROJETS',
      readyToCode: 'NTEM DILANE LA VICTOIRE • Prêt à coder',
    },
    projects: {
      tag: '02 / EXCLUSIF',
      title: 'Les projets',
      count: '06',
      watermark: 'PROJETS',
      ignoredProjects: 'PROJETS IGNORÉS',
      discover: 'Découvrir',
      inProduction: 'En production',
      inDevelopment: 'En développement',
      featuresTitle: 'Fonctionnalités clés :',
      previewMockup: "Aperçu de l'interface",
      videoDemo: 'Vidéo Démo',
      zoomImage: 'Agrandir ↗',
      playVideo: 'Lire la vidéo',
      modalHd: 'Haute Définition',
      modalTip:
        '💡 Astuce : Dès que vous insérez le fichier vidéo de votre projet, il se lancera directement dans ce lecteur.',
    },
    about: {
      tag: '03 / PARCOURS & FORMATION',
      headline: 'Rigueur d’ingénieur, passion du code et des réseaux.',
      bio1:
        "Actuellement en cycle ingénieur en génie logiciel à l'École Nationale Supérieure Polytechnique de Douala (diplôme prévu en 2027), je conçois des applications web robustes et des architectures réseau sur mesure.",
      bio2:
        "Mes projets m'ont permis de maîtriser React, Tailwind CSS, DaisyUI, Node.js, Express, WebSockets ainsi que Rust. Je recherche un stage à Douala à partir du 2 février 2027 pour une durée de 4 à 5 mois.",
      card1Title: 'Code Propre & Rigueur',
      card1Desc: 'Typage strict, architecture modulaire et maintenabilité éprouvée.',
      card2Title: 'Systèmes & Réseaux',
      card2Desc: 'Protocoles LAN/WAN, sockets en temps réel, DNS, DHCP et pare-feu.',
      card3Title: 'Engagement & Stage',
      card3Desc: 'Disponible 4 à 5 mois dès fév. 2027 pour des défis d’ingénierie concrets.',
      statusBadge: 'STAGE DOUALA • FÉV. 2027',
      educationTitle: 'Polytechnique de Douala (2024–2027)',
      school: 'École Nationale Supérieure Polytechnique',
      stageInfo: 'Stage ingénieur recherché (4 à 5 mois)',
      stageDates: 'À partir du 2 février 2027 • Douala',
      skillsPill: 'Génie Logiciel / React, Node.js & Rust',
    },
    stack: {
      tag: '04 / THE TOOLKIT',
      title: 'Techstack',
      viewAll: 'Voir tout',
      showMarquee: 'Mode défilement',
      frontend: 'Frontend',
      backend: 'Backend',
      services: 'Services & Cloud',
      collaboration: 'Outils & Systèmes',
    },
    contact: {
      tag: '05 / CONTACT',
      title: 'Parlons-en',
      subtitle: 'Une opportunité de stage, un projet ou une question ? Écrivez-moi directement.',
      emailLabel: 'Votre courriel',
      emailPlaceholder: 'votre.nom@exemple.com',
      messageLabel: 'Votre message',
      messagePlaceholder: 'Bonjour Dilane, discutons de votre stage ou d’un projet...',
      sendBtn: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successMsg: 'Merci ! Votre message a bien été envoyé. Je vous répondrai sous 24h.',
      captchaError: 'Veuillez valider la vérification anti-robot Cloudflare.',
      captchaVerifying: 'Vérification...',
      captchaSuccess: 'Succès !',
      captchaPrompt: 'Cliquer pour vérifier',
    },
    footer: {
      rights: 'Tous droits réservés.',
      backToTop: 'Retour en haut de page',
      explorer: 'EXPLORER',
      socials: 'RÉSEAUX SOCIAUX',
      projects: 'Projets',
      about: 'À propos',
      stack: 'Pile technologique',
      contact: 'Contact',
    },
  },
  EN: {
    nav: {
      projects: 'Projects',
      about: 'About',
      stack: 'Tech Stack',
      contact: 'Contact',
      cv: 'CV',
      workTogether: "Let's work together",
      workTogetherShort: 'Contact',
    },
    hero: {
      role: 'SOFTWARE ENGINEERING STUDENT',
      title1: 'FULLSTACK',
      title2: 'DEVELOPER',
      pitch:
        'Software engineering student at Polytechnique Douala, building modern web applications and robust network solutions. Seeking a 4 to 5 months internship in Douala starting February 2027.',
      exploreProjects: 'Explore projects',
      seekingInternship: 'INTERNSHIP FEB. 2027',
      strip1: 'CREATIVE DEVELOPMENT',
      strip2: 'SOFTWARE & NETWORK ENGINEERING',
      strip3: 'PROJECT LEADERSHIP',
      readyToCode: 'NTEM DILANE LA VICTOIRE • Ready to code',
    },
    projects: {
      tag: '02 / EXCLUSIVE',
      title: 'Projects',
      count: '06',
      watermark: 'PROJECTS',
      ignoredProjects: 'OTHER PROJECTS',
      discover: 'Discover',
      inProduction: 'In production',
      inDevelopment: 'In development',
      featuresTitle: 'Key features:',
      previewMockup: 'Interface Preview',
      videoDemo: 'Video Demo',
      zoomImage: 'Expand ↗',
      playVideo: 'Play video',
      modalHd: 'High Definition',
      modalTip: '💡 Tip: When you insert your project video file, it will play directly in this player.',
    },
    about: {
      tag: '03 / BACKGROUND & EDUCATION',
      headline: 'Engineering rigor, passion for code and network systems.',
      bio1:
        'Currently pursuing a Software Engineering degree at École Nationale Supérieure Polytechnique de Douala (graduating in 2027), I build dependable web applications and tailor-made network architectures.',
      bio2:
        'Through academic and real-world projects, I have mastered React, Tailwind CSS, DaisyUI, Node.js, Express, WebSockets and Rust. I am seeking an internship in Douala starting February 2, 2027 for 4 to 5 months.',
      card1Title: 'Clean Code & Rigor',
      card1Desc: 'Strict typing, modular architecture and solid maintainability.',
      card2Title: 'Systems & Networks',
      card2Desc: 'LAN/WAN protocols, real-time sockets, DNS, DHCP, and firewalls.',
      card3Title: 'Commitment & Internship',
      card3Desc: 'Available for 4-5 months starting Feb. 2027 for tangible software challenges.',
      statusBadge: 'DOUALA INTERNSHIP • FEB. 2027',
      educationTitle: 'Polytechnique Douala (2024–2027)',
      school: 'École Nationale Supérieure Polytechnique',
      stageInfo: 'Software Engineering Internship (4 to 5 months)',
      stageDates: 'Starting February 2, 2027 • Douala, Cameroon',
      skillsPill: 'Software Engineering / React, Node.js & Rust',
    },
    stack: {
      tag: '04 / THE TOOLKIT',
      title: 'Techstack',
      viewAll: 'View all',
      showMarquee: 'Show marquee',
      frontend: 'Frontend',
      backend: 'Backend',
      services: 'Services & Cloud',
      collaboration: 'Tools & Systems',
    },
    contact: {
      tag: '05 / CONTACT',
      title: "Let's Talk",
      subtitle: 'An internship opportunity, a project, or a question? Reach out directly.',
      emailLabel: 'Your Email',
      emailPlaceholder: 'your.name@example.com',
      messageLabel: 'Your Message',
      messagePlaceholder: 'Hi Dilane, let’s discuss an internship or a project...',
      sendBtn: 'Send Message',
      sending: 'Sending...',
      successMsg: 'Thank you! Your message has been sent. I will reply within 24 hours.',
      captchaError: 'Please complete the Cloudflare anti-bot check.',
      captchaVerifying: 'Verifying...',
      captchaSuccess: 'Success!',
      captchaPrompt: 'Click to verify',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top of page',
      explorer: 'EXPLORE',
      socials: 'SOCIAL NETWORKS',
      projects: 'Projects',
      about: 'About',
      stack: 'Tech stack',
      contact: 'Contact',
    },
  },
}

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang')
    return saved === 'EN' ? 'EN' : 'FR'
  })

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('portfolio_lang', newLang)
  }

  const toggleLang = () => {
    setLang(lang === 'FR' ? 'EN' : 'FR')
  }

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase()
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext

