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
    'BCA graduate (CGPA 8.48, completed April 2026) with hands-on experience in Python, JavaScript, React, REST APIs, FastAPI and PostgreSQL. Seeking a Software Engineer / Fullstack Developer role.',
  degree: 'Bachelor of Computer Applications (BCA)',
  degreeNote: 'CGPA: 8.48 · Completed April 2026',
  skills: [
    {
      title: 'Languages',
      icon: 'terminal',
      skills: ['Python', 'JavaScript', 'SQL'],
      featured: true,
    },
    {
      title: 'Backend',
      icon: 'braces',
      skills: ['FastAPI', 'REST APIs'],
      featured: false,
    },
    {
      title: 'Frontend',
      icon: 'panels',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      featured: false,
    },
    {
      title: 'Databases',
      icon: 'database',
      skills: ['PostgreSQL', 'MySQL'],
      featured: false,
    },
    {
      title: 'Tools',
      icon: 'terminal',
      skills: ['Git', 'GitHub', 'VS Code', 'Swagger'],
      featured: false,
    },
  ],
  projects: [
    {
      id: 'student-wellbeing',
      number: '01',
      title: 'Student Wellbeing & Grooming Checker',
      description:
        "AI-based app that analyzes students' emotional wellbeing and grooming compliance from uploaded images, with a React frontend connected to a FastAPI backend.",
      technologies: ['FastAPI', 'React', 'JavaScript'],
      githubUrl: '',
      liveDemoUrl: '',
    },
    {
      id: 'rag-system',
      number: '02',
      title: 'RAG (Retrieval-Augmented Generation) System',
      description:
        'Document processing, text chunking, and a retrieval and answer-generation workflow.',
      technologies: ['Python', 'RAG'],
      githubUrl: '',
      liveDemoUrl: '',
    },
    {
      id: 'subject-management-api',
      number: '03',
      title: 'Subject Management API',
      description:
        'REST API with full CRUD operations, tested with Swagger.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL'],
      githubUrl: '',
      liveDemoUrl: '',
    },
  ],
  experience: [
    {
      id: 'bright-infonet',
      role: 'Python Backend Developer Intern (7 Months)',
      company: 'Bright Infonet',
      description:
        'Built REST APIs and CRUD operations with Python, database integration, API testing and debugging.',
    },
    {
      id: 'thinknext-technologies',
      role: 'AI/ML Intern (6 weeks)',
      company: 'THINKNEXT Technologies',
      description:
        'Data processing and manipulation with Pandas and NumPy, basic AI/ML concepts.',
    },
  ],
  certifications: [
    'Blackbird Software Engineering Job Simulation, Forage (Oct 2026)',
    'AI/ML Using Python, THINKNEXT Technologies',
    'ADCA, I-MAS Computer Education',
  ],
  resumeUrl: '/resume.pdf',
  contact: {
    email: 'kumarimadhubala822@gmail.com',
    linkedin: 'https://www.linkedin.com/in/madhubala-kumari-386815319',
    linkedinLabel: 'linkedin.com/in/madhubala-kumari-386815319',
    github: 'https://github.com/MADHUBALAKUMARI',
    githubLabel: 'github.com/MADHUBALAKUMARI',
  },
} as const;
