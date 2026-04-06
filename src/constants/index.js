// =======================
// PROJECTS
// =======================

export const myProjects = [
  {
    id: 1,
    title: "Credit Risk & Fraud Detection",
    image: import.meta.env.BASE_URL + "assets/projects/credit-risk.png",
    description:
      "A machine learning project using Random Forest and XGBoost to detect fraudulent transactions on a 50K+ record imbalanced dataset.",
    subDescription: [
      "Built classification models (Random Forest, XGBoost) on an imbalanced dataset of 50K+ records for fraud detection.",
      "Improved recall by ~18% using SMOTE, cross-validation, and hyperparameter tuning.",
      "Evaluated models using ROC-AUC, precision-recall, achieving AUC > 0.90 on validation data.",
    ],
    tags: [
      { id: 1, name: "Python", path: import.meta.env.BASE_URL + "assets/logos/python.png" },
      { id: 2, name: "Scikit-learn", path: import.meta.env.BASE_URL + "assets/logos/python.png" },
      { id: 3, name: "Pandas", path: import.meta.env.BASE_URL + "assets/logos/python.png" },
      { id: 4, name: "ML", path: import.meta.env.BASE_URL + "assets/logos/ai.png" },
    ],
    href: "",
    github: "https://github.com/naman-bachhawat",
  },

  {
    id: 2,
    title: "ResumeAI – AI-Powered Resume Builder",
    image: import.meta.env.BASE_URL + "assets/projects/resumeai.png",
    description:
      "A full-stack MERN resume builder with real-time editing, dynamic templates, PDF export, and AI-powered content generation via Gemini API.",
    subDescription: [
      "Built a full-stack resume builder with real-time editing, dynamic templates, and PDF export.",
      "Integrated Gemini API to generate summaries, improve job descriptions, and suggest relevant skills.",
      "Developed a scalable Node.js/Express backend with MongoDB and a responsive React frontend.",
    ],
    tags: [
      { id: 1, name: "React", path: import.meta.env.BASE_URL + "assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
      { id: 3, name: "MongoDB", path: import.meta.env.BASE_URL + "assets/logos/database.png" },
      { id: 4, name: "GenAI", path: import.meta.env.BASE_URL + "assets/logos/ai.png" },
    ],
    href: "",
    github: "https://github.com/naman-bachhawat",
  },

  {
    id: 3,
    title: "Library Management System",
    image: import.meta.env.BASE_URL + "assets/projects/library.png",
    description:
      "A database-driven library management system with a normalized MySQL schema, C++ CRUD interface, and optimized SQL queries.",
    subDescription: [
      "Designed a normalized MySQL database (10+ tables) with stored procedures, triggers, and views.",
      "Developed a C++ CRUD interface for managing books, users, and transactions.",
      "Optimized SQL queries to reduce data retrieval latency by ~25%.",
    ],
    tags: [
      { id: 1, name: "C++", path: import.meta.env.BASE_URL + "assets/logos/python.png" },
      { id: 2, name: "MySQL", path: import.meta.env.BASE_URL + "assets/logos/database.png" },
      { id: 3, name: "SQL", path: import.meta.env.BASE_URL + "assets/logos/database.png" },
    ],
    href: "",
    github: "https://github.com/naman-bachhawat",
  },

  {
    id: 4,
    title: "Algorithm Visualizer",
    image: import.meta.env.BASE_URL + "assets/projects/algo-viz.png",
    description:
      "An interactive React.js-based web app to visualize sorting and graph algorithms with real-time Canvas animations.",
    subDescription: [
      "Built a React.js-based algorithm visualizer for sorting and graph algorithms (Merge Sort, Dijkstra, A*).",
      "Visualized time complexity and step-by-step execution using real-time Canvas animations.",
      "Designed an intuitive UI for users to control speed, array size, and algorithm selection.",
    ],
    tags: [
      { id: 1, name: "React", path: import.meta.env.BASE_URL + "assets/logos/react.svg" },
      { id: 2, name: "JavaScript", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
      { id: 3, name: "Canvas", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
    ],
    href: "",
    github: "https://github.com/naman-bachhawat",
  },

  {
    id: 5,
    title: "Food Delivery Platform – Nashttoo",
    image: import.meta.env.BASE_URL + "assets/projects/nashtto.png",
    description:
      "A full-scale cross-platform food delivery application with dedicated apps for customers, restaurant partners, and delivery partners.",
    subDescription: [
      "Built and launched a cross-platform food delivery application with dedicated apps for customers, restaurant partners, and delivery partners.",
      "Implemented real-time order tracking and delivery assignment, along with authentication and push notifications using Firebase.",
      "Developed and integrated REST APIs using Node.js and MongoDB, and deployed services on AWS and Vercel.",
      "Improved delivery coordination and order flow efficiency by ~30% through automation and real-time updates.",
    ],
    tags: [
      { id: 1, name: "Node.js", path: import.meta.env.BASE_URL + "assets/logos/javascript.svg" },
      { id: 2, name: "Firebase", path: import.meta.env.BASE_URL + "assets/logos/firebase.svg" },
      { id: 3, name: "MongoDB", path: import.meta.env.BASE_URL + "assets/logos/database.png" },
      { id: 4, name: "AWS", path: import.meta.env.BASE_URL + "assets/logos/api.png" },
    ],
    href: "",
    github: "https://github.com/naman-bachhawat",
  },
];

// =======================
// SOCIAL LINKS
// =======================

export const mySocials = [
  {
    id: 1,
    name: "GitHub",
    href: "https://github.com/naman-bachhawat",
    icon: "/assets/logos/github.svg",
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://linkedin.com/in/naman-bachhawat",
    icon: "/assets/logos/linkedIn.svg",
  },
  {
    id: 3,
    name: "LeetCode",
    href: "https://leetcode.com/u/naman-bachhawat",
    icon: "/assets/logos/leetcode.svg",
  },
  {
    id: 4,
    name: "Email",
    href: "mailto:namanbachhawatjain@gmail.com",
    icon: "/assets/logos/email.svg",
  },
];

// =======================
// EXPERIENCE & ACHIEVEMENTS
// =======================

export const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Nashttoo – Food Delivery Startup",
    duration: "Sep 2025 – Feb 2026",
    points: [
      "Built and launched a cross-platform food delivery application with dedicated apps for customers, restaurant partners, and delivery partners.",
      "Implemented real-time order tracking and delivery assignment, along with authentication and push notifications using Firebase.",
      "Developed and integrated REST APIs using Node.js and MongoDB, and deployed services on AWS and Vercel.",
      "Improved delivery coordination and order flow efficiency by ~30% through automation and real-time updates.",
    ],
  },

  {
    id: 2,
    role: "Research – Brain Disorder Classification",
    company: "Collaborative with Auburn University, USA",
    duration: "2025",
    points: [
      "Developed a Graph-based Diffusion Generative Model for Brain Disorder Classification using Neuroimaging.",
      "Applied a graph-based diffusion model on neuroimaging data for classification of ADHD and Autism.",
      "Compared performance with classical ML models (SVM, Random Forest) and Graph Neural Networks (GCN, GAT).",
      "Achieved ~85% classification accuracy, outperforming GNNs (~80%) and classical models (~75%) by 5–10%.",
    ],
  },

  {
    id: 3,
    role: "Bachelor of Technology – Computer Science",
    company: "PES University, Bangalore",
    duration: "2022 – 2026",
    points: [
      "Final year B.Tech Computer Science student specializing in data analysis, machine learning, and statistical modeling.",
      "Skilled in Python, SQL, and advanced data visualization.",
      "Passionate about deriving actionable insights from data and applying predictive analytics to solve real-world business problems.",
      "Completed courses: Introduction to Machine Learning (PESU IO), Mastering Data Structures & Algorithms (Udemy), Education for Sustainable Development (IIT Kharagpur).",
    ],
  },
];


// =======================
// REVIEWS (OPTIONAL)
// =======================

export const reviews = [];
