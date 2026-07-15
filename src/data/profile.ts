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
  role: 'Étudiante en Systèmes Informatiques Répartis & DevOps',
  location: 'Maroc',
  email: 'nessaiba2003@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/nessaiba2003-ui' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/messaadiyene-nessa%C3%AFba-b4bb96353' },
  ],
  about:
    "Passionnée par l'Intelligence Artificielle, le développement web et les Systèmes Informatiques Répartis. Je m'intéresse vivement à l'automatisation DevOps et à l'exploration des mystères de l'astronomie.",
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
