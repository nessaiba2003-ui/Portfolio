export interface Education {
  school: string
  degree: string
  field?: string
  location?: string
  courses?: string[]
  highlights?: string[]
}

export const education: Education[] = [
     {
        school: 'Lycée Mohamad 5 Taroudannt',
        degree: 'BAC Science Math A Biof',
        location: 'Taroudannt',
      },
  {
    school: 'Université Cadi Ayyad - FST Marrakech',
    degree: 'Licence Sciences et Techniques (LST)',
    field: 'Systèmes Informatiques Répartis (SIR)',
    location: 'Marrakech',
    courses: ['Java JEE', 'Réseaux CISCO', 'UML & Design Patterns', 'SQL/NoSQL'],
    highlights: ['Projet Gestion de Bibliothèque', 'PORTFOLIO'],
  },
  {
    school: 'Université Cadi Ayyad - FST Marrakech',
    degree: 'DEUST',
    field: 'Mathématiques, Informatique, Physique et Chimie (MIPC)',
    location: 'Marrakech',
    courses: ['Algorithmique & C', 'Structure de données', 'Électronique', 'Analyse'],
    highlights: ['Bases solides en programmation et logique mathématique'],
  },
];
