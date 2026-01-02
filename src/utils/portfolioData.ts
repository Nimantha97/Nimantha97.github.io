export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'hackathon' | 'research' | 'certification' | 'award';
}

export const personalInfo = {
  name: "Nimantha Gayan",
  title: "AI Software Engineer | Data Scientist | Cloud Enthusiast",
  tagline: "Building scalable full-stack and ML/AI solutions across production environments",
  email: "nimanthagayan0309@gmail.com",
  linkedin: "https://www.linkedin.com/in/nimantha-gayan/",
  github: "https://github.com/Nimantha97",
  phone: "0713377806",
  location: "Sri Lanka",
  cvPath: "/Nimantha_Gayan_CV.pdf"
};

export const aboutMe = {
  intro: "Proactive Software Engineer and Data Scientist with 2.5+ years of experience building scalable full-stack and ML/AI solutions across production environments. Experienced in developing robust applications using Java Spring Boot, React, TypeScript, and Python, and delivering end-to-end ML workflows from data preprocessing to deployment using TensorFlow, Docker, and AWS CI/CD pipelines.",
  highlights: [
    "2.5+ years experience in AI/ML & full-stack development",
    "Expert in React, Spring Boot, TensorFlow & cloud technologies",
    "Published researcher in AI and computer vision",
    "Strong background in RESTful APIs & containerized deployments",
    "Agile team collaboration & high-quality code delivery"
  ]
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Dialog Axiata PLC",
    position: "Software Engineer",
    duration: "January 2025 – Present",
    description: [
      "Developed and maintained the admin dashboard for the IdeaBiz platform using React, TypeScript, Redux Toolkit, Axios, and TailwindCSS",
      "Ensured fully responsive UI/UX compatible with dark and light modes, implementing role-based access control (RBAC) for secure multi-tenant operations",
      "Built RESTful APIs with Java Spring Boot, JPA repositories, and MySQL, achieving 98% code coverage with Mockito and JUnit",
      "Collaborated in Agile sprints, contributing to code reviews, CI/CD pipelines with Jenkins and Bitbucket"
    ],
    technologies: ["React", "TypeScript", "Redux Toolkit", "Spring Boot", "MySQL", "Jenkins", "TailwindCSS"]
  },
  {
    id: 2,
    company: "Softvil Technologies",
    position: "AI-Computer Vision Engineer Trainee",
    duration: "February 2024 – January 2025",
    description: [
      "Developed production-grade face recognition system using Python and TensorFlow",
      "Optimized deep learning models (FACENet, VGG16, MobileNet) for high accuracy with minimal data",
      "Deployed via Flask-based APIs for real-time processing",
      "Optimized data preprocessing pipelines using Pandas and NumPy, reducing processing time through efficient vectorization"
    ],
    technologies: ["Python", "TensorFlow", "FACENet", "Flask", "Pandas", "NumPy", "OpenCV"]
  },
  {
    id: 3,
    company: "MAS Capital (Private) Limited",
    position: "Data Science Intern",
    duration: "January 2023 – June 2023",
    description: [
      "Automated data processing scripts in Python, integrating with Excel for Power BI",
      "Implemented forecasting models (ARIMA, Exponential Smoothing) improving RFM score accuracy by 25%",
      "Developed Power BI dashboards with DAX queries and automated alert systems using Microsoft Power Automate",
      "Enhanced accounts receivable analytics through predictive models"
    ],
    technologies: ["Python", "Power BI", "DAX", "Excel", "Power Automate", "ARIMA"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "IdeaBiz Platform Admin Dashboard",
    description: "Enterprise-grade admin dashboard with complete frontend using React, TypeScript, Redux Toolkit for state management, and TailwindCSS for modern UI design. Currently serving in live production.",
    technologies: ["React", "TypeScript", "Redux", "Java Spring Boot", "MySQL", "Jenkins"],
    imageUrl: "/images/dashboard.png",
    highlights: [
      "Role-based access control (RBAC)",
      "Dark/light theme switching",
      "Fully responsive design",
      "98% code coverage with JUnit"
    ]
  },
  {
    id: 2,
    title: "Production-Ready Face Recognition System",
    description: "Production-grade face recognition system using Python and TensorFlow, optimizing deep learning models (FACENet, VGG16, MobileNet) for high accuracy with minimal data.",
    technologies: ["Python", "TensorFlow", "FACENet", "VGG16", "Flask", "PostgreSQL"],
    imageUrl: "/images/facenet.png",
    highlights: [
      "High accuracy with minimal data",
      "Real-time processing via Flask APIs",
      "Optimized deep learning models",
      "Efficient batch processing"
    ]
  },
  {
    id: 3,
    title: "Real-time Yoga Pose Estimation System",
    description: "CNN-based system for Tadasana pose alignment feedback using MediaPipe pose estimation. Published research abstract at 8th International Research Conference, Uva Wellassa University.",
    technologies: ["Python", "Flask", "CNN", "MediaPipe", "TensorFlow"],
    imageUrl: "/images/yoga.png",
    highlights: [
      "Real-time pose correction feedback",
      "Live video processing with Flask",
      "Published research paper",
      "MediaPipe pose estimation"
    ]
  },
  {
    id: 4,
    title: "Production-Ready E-commerce Chatbot",
    description: "Intelligent chatbot using Flask and LangChain for personalized product recommendations and customer inquiries. Deployed containerized application on AWS EC2.",
    technologies: ["Python", "Flask", "LangChain", "OpenAI", "AstraDB", "AWS", "Docker"],
    imageUrl: "/images/chatbot.png",
    highlights: [
      "RAG pipeline with OpenAI embeddings",
      "AstraDB vector store integration",
      "Automated CI/CD pipeline",
      "AWS EC2 deployment"
    ]
  },
  {
    id: 5,
    title: "Multimodal Sight & Sound AI Agent",
    description: "Multimodal AI agent capable of answering user questions based on audio, image, and video inputs using a unified FastAPI backend with Whisper and BLIP integration.",
    technologies: ["Python", "FastAPI", "Whisper", "BLIP", "Groq LLaMA", "MLflow"],
    imageUrl: "/images/neural-optimizer.png",
    highlights: [
      "Speech-to-text with Groq Whisper",
      "Image captioning using BLIP",
      "MLflow experiment tracking",
      "Unified multimodal backend"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "Programming & Development",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL", "HTML5", "CSS3"]
  },
  {
    category: "Frontend Technologies",
    items: ["React", "Redux Toolkit", "Next.js", "TailwindCSS", "Bootstrap", "Responsive Design"]
  },
  {
    category: "Backend & APIs",
    items: ["Java Spring Boot", "Flask", "FastAPI", "RESTful APIs", "JPA/Hibernate"]
  },
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "CNN", "RNN", "LSTM", "Transformers", "RAG Pipelines"]
  },
  {
    category: "Data Science & NLP",
    items: ["Pandas", "NumPy", "Matplotlib", "NLP", "Feature Engineering", "Data Preprocessing"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "AstraDB", "ChromaDB"]
  },
  {
    category: "DevOps & Cloud",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Jenkins", "GitHub Actions", "CI/CD Pipelines"]
  },
  {
    category: "Testing & Tools",
    items: ["JUnit", "Mockito", "Postman", "Git", "Bitbucket", "Agile/Scrum"]
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Published Research Paper",
    description: "CNN-powered pose estimation systems published at 8th International Research Conference, Uva Wellassa University",
    date: "2024",
    type: "research"
  },
  {
    id: 2,
    title: "4th Place - Junior Hackathon 2021",
    description: "Developed data-driven solution for real-world problem at Junior Hackathon",
    date: "2021",
    type: "hackathon"
  },
  {
    id: 3,
    title: "Organizing Committee - RealHack",
    description: "Organizing Committee Member for RealHack 3.0, 4.0, 5.0 - Software Engineering Students Association",
    date: "2022-2024",
    type: "award"
  },
  {
    id: 4,
    title: "IEEE Student Branch Committee Member",
    description: "Active Committee Member of IEEE Student Branch, University of Kelaniya (2022-2024)",
    date: "2022-2024",
    type: "award"
  }
];

export const education = {
  degree: "Bachelor of Science (Honours) in Software Engineering",
  university: "University of Kelaniya",
  gpa: "3.55/4.0",
  duration: "2020 – 2024",
  highlights: [
    "Specialized in AI, Machine Learning & Full-Stack Development",
    "G.C.E. Advanced Level (2018): Combined Mathematics - A, Physics - B, Chemistry - B",
    "Published research on CNN-powered pose estimation systems",
    "Active member of IEEE Student Branch & SESA"
  ]
};
