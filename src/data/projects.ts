export interface Project {
  title: string
  period?: string
  tags: string[]
  summary: string
  link?: string
  repo?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Architecture Réseau Multi-Site',
    period: '2025',
    tags: ['Cisco Packet Tracer', 'Routage RIP/VLSM', 'VLAN', 'Sécurité'],
    summary: "Conception d'une infrastructure réseau hiérarchique reliant un siège et deux agences distantes via un FAI. Configuration des services DNS, HTTP, DHCP et sécurisation des accès (Core/Access).",
    repo: 'https://github.com',
  },
  {
    title: "Système de Gestion d'Hôtel",
    period: '2024',
    tags: ['Java JEE', 'JDBC', 'MySQL', 'UML'],
    summary: "Application de gestion hôtelière complète utilisant l'architecture JEE et JDBC pour la persistance des données. Modélisation via diagrammes de classes et de séquences.",
  },
  {
    title: 'Bibliothèque Universitaire Cadi Ayyad',
    period: '2024',
    tags: ['Java', 'SQL', 'UML', 'Gestion de Données'],
    summary: "Automatisation de la gestion documentaire de l'UCAM. Implémentation d'une base de données robuste pour le suivi des emprunts et des stocks.",
  },
  {
    title: 'Plateforme Astro-School',
    period: '2023',
    tags: ['React', 'Tailwind CSS', 'API NASA', 'Astronomie'],
    summary: "Interface web interactive pour l'apprentissage de l'astronomie, utilisant React pour une expérience utilisateur fluide et l'intégration de données spatiales réelles.",
  },
  {
    title: 'Site Web Al Jawarih Fitness',
    period: '2023',
    tags: ['React', 'Node.js', 'Frontend Development'],
    summary: "Développement du site vitrine et de l'interface membre pour la salle de sport Aljawarih, optimisant la visibilité locale et l'inscription en ligne.",
  },
  {
    title: 'Plateforme ALJAWARIH GYM Taroudant',
    period: '2026',
    tags: ['JavaScript', 'CSS', 'PWA', 'Responsive Design'],
    summary: "Conception d'une plateforme digitale complète pour une salle de sport à Taroudant, réunissant abonnements, planning, réservations, suivi des présences et espace communautaire dans une expérience moderne et responsive.",
    link: 'https://sport-seven-sooty.vercel.app/',
  },
  {
    title: 'VELŌRA — Atelier de Café Personnalisé',
    period: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'UI/UX'],
    summary: "Création d'une expérience web immersive dédiée au café artisanal, permettant de composer son propre café, d'en découvrir le profil aromatique et de suivre chaque étape de sa création.",
    link: 'https://coffee-shop-beige-gamma.vercel.app/',
  },
  {
    title: 'Espace Mémoire et Notes Familiales',
    period: '2026',
    tags: ['JavaScript', 'CSS', 'Local Storage', 'RTL'],
    summary: "Développement d'un espace personnel en arabe conçu pour préserver les souvenirs familiaux : journal intime, récits, messages, notes et enregistrements vocaux réunis dans une interface chaleureuse et accessible.",
    link: 'https://gift-dad-rose.vercel.app/#dad',
  },
  {
    title: "The Writer's Room — Espace d'Écriture",
    period: '2026',
    tags: ['React', 'TypeScript', 'Vite', 'Écriture Créative'],
    summary: "Conception d'un espace numérique privé consacré à l'écriture, offrant un environnement calme et inspirant pour organiser des histoires, conserver des souvenirs et développer de nouveaux textes.",
    link: 'https://book-six-steel-76.vercel.app/',
  },
  {
    title: 'Portfolio Créatif pour Photographe',
    period: '2026',
    tags: ['Next.js', 'React', 'Responsive Design', 'Portfolio'],
    summary: "Réalisation d'un portfolio sur mesure pour un photographe et vidéaste passionné d'astronomie, valorisant son univers visuel, ses réalisations, ses projets et ses certifications dans une interface élégante.",
    link: 'https://h-portfolio-sepia.vercel.app/#work',
  },
  {
    title: 'ABDOMESS 24 — Personal Trainer',
    period: '2026',
    tags: ['JavaScript', 'CSS', 'Multilingue', 'Responsive Design'],
    summary: "Création d'un site vitrine multilingue pour un coach sportif, présentant ses services de coaching, musculation, boxe, mobilité et récupération, avec une prise de contact directe via WhatsApp.",
    link: 'https://vitrine-ashy-three.vercel.app/',
  },
  {
    title: 'LUMEN ASTRA — Studio Photo & Vidéo',
    period: '2026',
    tags: ['React', 'Vite', 'SEO', 'Responsive Design'],
    summary: "Développement d'un site professionnel pour un photographe, vidéaste et monteur basé à Rabat, mettant en valeur ses prestations, son portfolio cinématographique et ses solutions pour événements, portraits et marques.",
    link: 'https://photo-five-delta.vercel.app/',
  },
{
  title: 'Plateforme Web Immersive et Dynamique pour la Gestion Intelligente de la Cité de l’Innovation (Projet de Fin d’Études)',
  period: '2026',
  tags: [
    'Spring Boot',
    'React',
    'Hibernate',
    'MySQL',
    'Docker',
    'Tailwind CSS',
    'REST API'
  ],
  summary: "Conception et développement d'une plateforme web immersive centralisant la gestion des utilisateurs, événements, réservations, annonces, tableaux de bord, statistiques et espaces collaboratifs de la Cité de l'Innovation de l'Université Cadi Ayyad."
},
{
  title: 'Application Mobile de la Cité de l’Innovation',
  period: '2026',
  tags: [
    'React Native',
    'Spring Boot',
    'REST API',
    'MySQL',
    'Mobile Development'
  ],
  summary: "Application mobile synchronisée avec la plateforme web offrant la gestion des réservations, des événements, des notifications, des profils utilisateurs et un accès simplifié aux services de la Cité de l'Innovation."
},
{
  title: 'AI Galaxy Classification',
  period: '2026',
  tags: ['Python', 'TensorFlow', 'Computer Vision', 'Astronomy', 'Deep Learning'],
  summary: "Développement d'un modèle d'intelligence artificielle pour la classification automatique des galaxies à partir d'images astronomiques, avec analyse des performances et visualisation des résultats."
},
{
  title: 'InnoBot - AI Assistant',
  period: '2026',
  tags: ['Spring AI', 'OpenAI API', 'RAG', 'React', 'Spring Boot'],
  summary: "Assistant intelligent permettant de répondre aux questions des utilisateurs, guider les visiteurs et faciliter l'accès aux services de la Cité de l'Innovation."
},
{
  title: 'Tourism Platform',
  period: '2026',
  tags: ['React', 'Tailwind CSS', 'Spring Boot', 'REST API'],
  summary: "Plateforme web moderne dédiée à la promotion du tourisme marocain avec une interface responsive et une expérience utilisateur optimisée."
},
{
  title: 'DevOps Monitoring Dashboard',
  period: '2026',
  tags: ['Docker', 'Prometheus', 'Grafana', 'Linux'],
  summary: "Déploiement d'une infrastructure DevOps permettant la supervision en temps réel des applications et des serveurs grâce à Prometheus et Grafana."
},
{
  title: 'Smart Event Management',
  period: '2026',
  tags: ['Spring Boot', 'React', 'MySQL', 'Docker'],
  summary: "Plateforme de gestion intelligente des événements avec réservations, notifications, statistiques et tableau de bord administrateur."
},
];
