export const portfolio = {
  name: 'Madhubala Kumari',
  monogram: 'MK',
  role: 'Full-stack developer',
  heroLine: 'Thoughtful software.\\nBuilt to be useful.',
  introduction:
    'I build practical web experiences with Python, FastAPI, REST APIs, and SQL. I enjoy turning a clear problem into a system that feels simple to use and makes sense under the hood.',
  aboutHeadline:
    'Curious by nature. Focused on building <em>things that work.</em>',
  about:
    'I am a BCA graduate developing my craft across the full stack. My work leans toward useful tools, clear API design, and thoughtful data handling. I value steady learning, readable code, and products that solve a real need.',
  degree: 'Bachelor of Computer Applications (BCA)',
  degreeNote: 'Undergraduate degree',
  skills: [
    {
      title: 'Backend',
      icon: 'braces',
      skills: ['Python', 'FastAPI', 'REST APIs'],
      featured: true,
    },
    {
      title: 'Data',
      icon: 'database',
      skills: ['SQL', 'Relational data', 'API integration'],
      featured: false,
    },
    {
      title: 'Frontend',
      icon: 'panels',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
      featured: false,
    },
    {
      title: 'Workflow',
      icon: 'terminal',
      skills: ['Git', 'Problem solving', 'Iterative development'],
      featured: false,
    },
  ],
  projects: [
    {
      id: 'careerpilot-ai',
      number: '01',
      title: 'CareerPilot AI',
      description:
        'A career guidance concept designed to help people move from broad ambitions to a clearer next step. A focused interface puts personalized direction and useful actions at the center.',
      technologies: ['Python', 'AI', 'Career guidance'],
      url: '',
    },
    {
      id: 'rag-document-assistant',
      number: '02',
      title: 'RAG Document Assistant',
      description:
        'A document question-and-answer assistant that makes long-form information easier to explore. Retrieval-augmented responses keep the experience grounded in the material provided.',
      technologies: ['Python', 'RAG', 'Document search'],
      url: '',
    },
    {
      id: 'student-wellbeing',
      number: '03',
      title: 'Student Wellbeing & Grooming Checker',
      description:
        'A student-focused checker concept bringing wellbeing and personal presentation prompts together in one approachable experience, with guidance designed to feel practical rather than judgmental.',
      technologies: ['Python', 'Student wellbeing', 'Web app'],
      url: '',
    },
  ],
  resumeUrl: '/resume.pdf',
  contact: {
    email: '',
    linkedin: '',
    github: '',
  },
} as const;
