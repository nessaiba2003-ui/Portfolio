export interface Experience {
  company: string
  role: string
  location?: string
  start: string
  end?: string
  description: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Club Galilée Astronomie',
    role: 'Vice-Présidente',
    location: 'Marrakech, Maroc',
    start: '2022', 
    end: '2025',
    description: [
      "Gestion d'une équipe passionnée par l'astronomie et organisation d'événements d'observation.",
      "Conception du site web Astro-School pour la vulgarisation scientifique.",
      "Animation d'ateliers sur l'astrophysique et l'utilisation d'outils d'observation."
    ],
    tags: ['Leadership', 'Astronomie', 'Communication', 'Web Development'],
  },
  {
    company: 'Association Aljawarih',
    role: 'Stagiaire Développeuse Web',
    location: 'Maroc',
    start: '2025',
    end: '2025',
    description: [
      "Développement full-stack du site web officiel de la salle de sport.",
      "Implémentation d'un système de gestion des inscriptions et suivi des membres.",
      "Optimisation de l'interface utilisateur pour une meilleure expérience sur mobile."
    ],
    tags: ['React', 'Node.js', 'UI/UX', 'Base de données'],
  },
{
  company: 'Cité de l’Innovation (CIM) - UCA',
  role: 'Stagiaire Développeuse Full-Stack',
  location: 'Marrakech, Maroc',
  start: '2026',
  end: '2026',
  description: [
    "Conception et développement d'une plateforme web immersive pour la gestion de la Cité de l’Innovation.",
    "Développement des fonctionnalités de réservation, gestion des événements, annonces et tableau de bord administrateur.",
    "Collaboration avec l'équipe projet pour optimiser les performances, l'expérience utilisateur et l'intégration des services."
  ],
  tags: ['Spring Boot', 'React', 'MySQL', 'Hibernate', 'Docker', 'Tailwind CSS']
},
{
  company: 'Association Maroc Sphere',
  role: 'Développeuse Web & UI/UX Designer',
  location: 'Maroc',
  start: '2026',
  end: '2026',
  description: [
    "Conception et développement du site web officiel de l'association dédié à la promotion du tourisme marocain.",
    "Création d'une interface moderne, responsive et accessible offrant une expérience utilisateur intuitive.",
    "Participation à la définition de l'identité visuelle, à l'intégration du contenu et à l'optimisation des performances du site."
  ],
  tags: ['React', 'Tailwind CSS', 'UI/UX', 'Figma', 'Responsive Design']
}
];
