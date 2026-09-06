export interface Social {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  email: string;
  socials: Social[];
  about: string;
  skills: string[];
}

export const profile: Profile = {
  name: 'NESSAIBA MESSAADIYENE',
  role: 'Diplômée en Systèmes Informatiques Répartis | Développeuse Full-Stack | Intelligence Artificielle | Astronomie',
  location: 'Maroc',
  email: 'nessaiba2003@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/nessaiba2003-ui' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/messaadiyene-nessa%C3%AFba-b4bb96353' },
  ],
  about:
    "Diplômée en Systèmes Informatiques Répartis, je conçois des applications web et mobiles modernes en utilisant Spring Boot, React et React Native. Passionnée par l'intelligence artificielle, le DevOps et les architectures distribuées, je recherche des opportunités pour contribuer à des projets innovants.",
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'Docker',
    'Python',
    'JSP',
    'Linux',
    'JDBC',
    'SQL',
    'SGBD',
    'UML',
    'Réseau',
    'Développement Web',
    'Artificial Intelligence',
    'Astronomie Data Analysis',
  ],
};
