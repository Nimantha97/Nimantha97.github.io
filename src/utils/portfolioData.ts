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
  tagline: "Building intelligent solutions that bridge the gap between AI innovation and real-world impact",
  email: "nimantha.gayan@example.com",
  linkedin: "https://linkedin.com/in/nimantha-gayan",
  github: "https://github.com/nimantha-gayan",
  location: "Sri Lanka",
  cvPath: "/Nimantha_Gayan_CV.pdf"
};

export const aboutMe = {
  intro: "Passionate AI Software Engineer with expertise in machine learning, cloud computing, and full-stack development. I specialize in creating intelligent systems that solve complex real-world problems through innovative AI solutions.",
  highlights: [
    "5+ years experience in AI/ML development",
    "Expert in React, Spring Boot, and cloud technologies",
    "Published researcher in AI and computer vision",
    "Award-winning hackathon participant",
    "IEEE active member and community leader"
  ]
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Dialog Axiata PLC",
    position: "Software Engineer",
    duration: "2022 - Present",
    description: [
      "Developed scalable web applications using React.js and Spring Boot",
      "Implemented microservices architecture for telecom billing systems",
      "Optimized database performance resulting in 40% faster query execution",
      "Led a team of 3 developers in agile development processes"
    ],
    technologies: ["React", "Spring Boot", "Java", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: 2,
    company: "Softvil (Pvt) Ltd",
    position: "Computer Vision Engineer",
    duration: "2021 - 2022",
    description: [
      "Developed computer vision models for real-time object detection",
      "Implemented face recognition systems using deep learning",
      "Created automated quality control systems for manufacturing",
      "Achieved 95% accuracy in product defect detection"
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch", "Docker", "FastAPI"]
  },
  {
    id: 3,
    company: "MAS Capital (Pvt) Ltd",
    position: "Data Analyst",
    duration: "2020 - 2021",
    description: [
      "Built predictive models for financial forecasting",
      "Created interactive dashboards using Power BI",
      "Automated reporting processes reducing manual work by 60%",
      "Analyzed market trends and provided strategic insights"
    ],
    technologies: ["Power BI", "Python", "SQL", "Excel", "R", "Tableau"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Chatbot Platform",
    description: "Intelligent conversational AI system with natural language processing capabilities and multi-domain knowledge integration.",
    technologies: ["Python", "TensorFlow", "NLP", "React", "FastAPI", "PostgreSQL"],
    imageUrl: "/images/chatbot.png",
    videoUrl: "/videos/chatbot-demo.mp4",
    highlights: [
      "Processes 10K+ queries daily",
      "95% customer satisfaction rate",
      "Multi-language support",
      "Real-time sentiment analysis"
    ]
  },
  {
    id: 2,
    title: "FaceNet Recognition System",
    description: "Advanced facial recognition system using deep learning for security and attendance management applications.",
    technologies: ["PyTorch", "OpenCV", "Python", "Flask", "PostgreSQL", "AWS"],
    imageUrl: "/images/facenet.png",
    highlights: [
      "99.7% recognition accuracy",
      "Real-time processing",
      "GDPR compliant",
      "Scalable cloud deployment"
    ]
  },
  {
    id: 3,
    title: "Smart Yoga Pose Classifier",
    description: "Computer vision application that analyzes yoga poses in real-time and provides corrective feedback using pose estimation.",
    technologies: ["MediaPipe", "TensorFlow", "React Native", "Python", "Firebase"],
    imageUrl: "/images/yoga.png",
    highlights: [
      "20+ yoga poses supported",
      "Real-time pose correction",
      "Mobile app with 50K+ downloads",
      "AI-powered feedback system"
    ]
  },
  {
    id: 4,
    title: "Financial Analytics Dashboard",
    description: "Comprehensive business intelligence platform for financial data analysis and predictive modeling.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    videoUrl: "/videos/dashboard-demo.mp4",
    imageUrl: "/images/dashboard.png",
    highlights: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom KPI tracking",
      "Multi-tenant architecture"
    ]
  },
  {
    id: 5,
    title: "Neural Network Optimizer",
    description: "Advanced optimization framework for deep neural networks with automated hyperparameter tuning and performance enhancement.",
    technologies: ["Python", "PyTorch", "Optuna", "MLflow", "Docker", "Kubernetes"],
    imageUrl: "/images/neural-optimizer.png",
    highlights: [
      "30% faster training times",
      "Automated hyperparameter tuning",
      "Multi-GPU support",
      "Model versioning system"
    ]
  }
];

export const skills: Skill[] = [
  {
    category: "AI & Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Computer Vision", "Deep Learning", "MLOps"]
  },
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C++", "R", "SQL"]
  },
  {
    category: "Web Technologies",
    items: ["React", "Next.js", "Spring Boot", "FastAPI", "Node.js", "GraphQL", "REST APIs"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins", "GitLab"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Neo4j", "Elasticsearch"]
  },
  {
    category: "Tools & Frameworks",
    items: ["Git", "Jupyter", "Power BI", "Tableau", "Figma", "Postman", "VS Code"]
  }
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "1st Place - National AI Hackathon 2023",
    description: "Won first place for developing an AI-powered healthcare diagnosis system",
    date: "2023",
    type: "hackathon"
  },
  {
    id: 2,
    title: "IEEE Outstanding Member Award",
    description: "Recognized for exceptional contributions to IEEE student branch activities",
    date: "2022",
    type: "award"
  },
  {
    id: 3,
    title: "Research Publication - AI in Healthcare",
    description: "Published paper on 'Deep Learning Applications in Medical Image Analysis' in IEEE Conference",
    date: "2023",
    type: "research"
  },
  {
    id: 4,
    title: "AWS Solutions Architect Certification",
    description: "Achieved AWS Solutions Architect Associate certification",
    date: "2022",
    type: "certification"
  }
];

export const education = {
  degree: "B.Sc. (Hons) Software Engineering",
  university: "University of Colombo School of Computing",
  gpa: "3.55",
  duration: "2018 - 2022",
  highlights: [
    "Specialized in Artificial Intelligence and Machine Learning",
    "Final Year Project: AI-powered Code Review System",
    "Active member of IEEE Student Branch",
    "Dean's List for Academic Excellence (2021, 2022)"
  ]
};