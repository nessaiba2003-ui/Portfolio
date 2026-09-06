export interface Certification {
  title: string
  issuer: string
  issueDate: string 
  expiryDate?: string
  credentialId?: string
  credentialUrl?: string
  skills?: string[]
  tags?: string[]
  image?: string 
  imageAlt?: string 
  status?: 'active' | 'expired' | 'revoked'
}

export const certifications: Certification[] = [
  {
    title: 'Certification en Astronomie Africaine',
    issuer: 'African Astronomical Society (AfAS)',
    issueDate: '2024-04',
    skills: ['Astrophysique', 'Data Analysis', 'Collaboration Internationale'],
    tags: ['Astronomie', 'Science'],
    image: '/images/cert-1.jpg',
    status: 'active',
  },
  {
    title: 'Expert React & Développement Moderne',
    issuer: 'MLIAEdu',
    issueDate: '2026-03',
    image: '/images/react-cert.jpg',
    skills: ['React', 'Hooks', 'State Management', 'Frontend Architecture'],
    tags: ['Web', 'React'],
    status: 'active',
  },
  {
    title: 'Hibernate & JPA Persistence Framework',
    issuer: 'MLIAEdu',
    issueDate: '2026-03',
    image: '/images/hibernate-cert.jpg',
    status: 'active',
  },
{
    title: 'Développement JakartaEE Spring ',
    issuer: 'MLIAEdu',
    issueDate: '2026-03',
    image: '/images/JakartaEE-certif.jpg',
    status: 'active',
  },
{
    title: 'Dev4Day Competition ',
    issuer: 'HEEC ET FSTG',
    issueDate: '2026-05',
    image: '/images/competition-certif.jpg',
    status: 'active',
  },
{
    title: 'Innovation week UCA 2026',
    issuer: 'CIM UCA',
    issueDate: '2026-04',
    image: '/images/innov-certif.jpg',
    status: 'active',
  },
  {
    title: "Certificat de Participation - Festival d'Astronomie d'Ifrane",
    issuer: 'Association Al Akhawayn',
    issueDate: '2023-06',
    skills: ['Vulgarisation Scientifique', 'Observation Céleste'],
    tags: ['Astronomie', 'Événementiel'],
    status: 'active',
  },
  {
    title: 'Formation Intensive en Intelligence Artificielle',
    issuer: 'YOUTH SPACE',
    issueDate: '2025-03',
    skills: ['Machine Learning', 'Python', 'Neural Networks'],
    tags: ['AI', 'Data Science'],
    status: 'active',
  },
];
