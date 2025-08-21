export const personalInfo = {
  name: "Saqhib Bilal",
  title: "Heavy Lifting at Scale",
  email: "saqhibbilal@gmail.com",
  location: "India",
  tagline: "Building digital experiences that matter",
  about: "Software Engineer with interest in Distributed ML and Low level systems.",
};

export const projects = [
  {
    id: 1,
    title: "Holiday Planning Agent",
    description: "Developed a conversational AI agent to assist users in planning personalized holiday trips through natural, interactive dialogue. Integrated OpenAI API for conversational intelligence and Vocode for real-time voice orchestration, enabling smooth voice-based interactions.",
    techStack: ["ElevenLabs","OpenAI", "Python", "Deepgram", "Vocode", "Twilio", "TripAdvisor API"],
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://ecommerce-demo.com",
    image: "/project1.jpg"
  },
  {
    id: 2,
    title: "Real Time Sign Language using LSTM",
    description: "Developed a real-time sign language recognition system using LSTM networks to accurately interpret sequential hand gestures.",
    techStack: ["Mediapipe", "Python", "Flask", "OpenCV"],
    githubLink: "https://github.com/yourusername/task-manager",
    liveLink: "https://task-manager-demo.com",
    image: "/project2.jpg"
  },
  {
    id: 3,
    title: "Call Analytics Dashboard",
    description: "Developed a dashboard to visualize AI voice agent call performance, tracking task completion and sales conversions.",
    techStack: ["Typescript", "DynamoDB", "Quicksight", "AWS Lambda"],
    githubLink: "https://github.com/yourusername/weather-app",
    liveLink: null,
    image: "/project3.jpg"
  },
  {
    id: 4,
    title: "Investment Agent",
    description: "Developed an AI-powered investment analysis tool leveraging Agno’s AI Agent framework and GPT-4o to compare the performance of two stocks and deliver actionable insights.",
    techStack: ["Agno", "GPT-4o", "Python", "Streamlit","Yahoo Finance API"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio.com",
    image: "/project4.jpg"
  }
];

export const workHistory = [
  {
    id: 1,
    company: "Sentiantal",
    role: "Software Engineer, MLOps",
    duration: "2025- Present",
    description: "Working on impacful projects which leverage AI and edge computing ",
    technologies: ["AWS", "Postgres", "TensorRT", "TypeScript", "DVC"]
  },
  {
    id: 2,
    company: "Optimum Solutions",
    role: "Software Engineer",
    duration: "2024-2025",
    description: "Worked on a Nutrition based meal service application. ",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"]
  },
  {
    id: 3,
    company: "DriverSpot",
    role: "Software Engineer",
    duration: "2024-2025",
    description: "Worked on a fleet service application",
    technologies: ["React", "Node.js", "React Native", "MongoDB","Websockets"]
  }
];

export const certificates = [
  {
    id: 1,
    title: "AZURE AI Fundamentals",
    issuer: "Microsoft Azure",
    date: "2023",
    link: "https://aws.amazon.com/certification/",
    credentialId: "AWS-DEV-123456"
  },
  {
    id: 2,
    title: "Devnet Associate",
    issuer: "Cisco",
    date: "2022",
    link: "https://www.meta.com/",
    credentialId: "META-REACT-789012"
  },
  {
    id: 3,
    title: "Linux unhatched",
    issuer: "Cisco",
    date: "2021",
    link: "https://www.freecodecamp.org/",
    credentialId: "FCC-JS-345678"
  },
  {
    id: 4,
    title: "Python",
    issuer: "Cisco",
    date: "2020",
    link: null,
    credentialId: "MONGODB-DBA-901234"
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
  frameworks: ["React", "Node.js", "Express", "Next.js", "Vue.js", "Angular"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
  tools: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma"],
  libraries: ["Tailwind CSS", "Framer Motion", "Redux", "Jest", "Cypress"]
};

export const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammed-saqhib-bilal-8a6aa1212/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/saqhibbilal",
    icon: "github"
  },
  {
    name: "Medium",
    url: "https://medium.com/@saqhibbilal",
    icon: "book-open"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/SaqhibBilal/",
    icon: "code"
  }
];

export const resumeUrl = "/resume.pdf"; // Add your resume PDF here 

export const education = [
  {
    id: 1,
    institution: "Osmania University",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "2019 - 2023",
    location: "Hyderabad, India",
    description: "Focused on software engineering, data structures, algorithms, and distributed systems.Active member of coding clubs and participated in various hackathons.",
    achievements: [
      "CGPA: 7.5/10",
      "Interned at Cisco and NSIC",
      "Core Team Member and App Dev Lead at GDSC(Google Developer Student Clubs)",
      "Participated in Hackathons"
    ],
    type: "college"
  },
  {
    id: 2,
    institution: "Middle East International School",
    degree: "Science Stream (PCM) + Computer Science",
    duration: "2017 - 2019",
    location: "Riyadh, Saudi Arabia",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills. Participated in science exhibitions and represented the school in various inter-school athletics and Football competitions.",
    achievements: [
      "Percentage: 80%",
      "Football Team Captain",
      "Science Exhibition Winner",
      "Sports Secretary"
    ],
    type: "school"
  }
]; 