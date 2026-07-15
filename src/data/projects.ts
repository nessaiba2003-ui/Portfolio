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
];
