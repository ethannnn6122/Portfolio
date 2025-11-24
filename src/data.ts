export const resume = {
  name: 'Ethan Gruenemeier',
  contact: {
    phone: '623-777-9245',
    email: 'ethan@techtlc.com',
    linkedin: 'https://www.linkedin.com/in/ethan-gruenemeier',
  },
  summary: 'Highly motivated Cybersecurity graduate with hands-on experience in network security, system administration, and data center operations. Proven ability in critical thinking, complex problem-solving, and active learning, with a strong foundation in various computing tools and operating systems including Linux and VMware. Seeking to leverage comprehensive cybersecurity knowledge and practical skills in a challenging role.',
  education: {
    degree: 'Bachelors of Science in Cybersecurity',
    university: 'Northern Arizona University',
    graduation: 'Graduated May 2025',
  },
  coursework: [
    'Secure Design',
    'Network Security',
    'Malware Analysis',
    'Computing Tools',
    'Database Systems',
    'Admin IT Security & Assurance',
  ],
  skills: [
    {
      category: 'Cybersecurity & IT Operations',
      list: 'Network Security, Systems Analysis, Data Center Operations, Server Configuration, IT Security & Assurance, Linux Systems, VMware',
    },
    {
      category: 'Technical Proficiency',
      list: 'Programming, Database Systems, Computing Tools',
    },
    {
      category: 'Problem-Solving & Analysis',
      list: 'Critical Thinking, Complex Problem Solving, Active Learning, Malware Analysis',
    },
    {
      category: 'Infrastructure',
      list: 'Fiber Optic Cabling, Copper Cross Connections',
    },
  ],
  experience: [
    {
      title: 'Data Center Technician',
      company: 'Flexential',
      dates: 'Aug. 2024 – Current',
      description: 'Conduct routine inspections of data center facilities, identifying and addressing equipment alarms. Perform comprehensive audits to ensure operational compliance and system integrity. Install and configure server equipment for diverse customer requirements. Manage fiber and copper cross connections, ensuring robust network connectivity.',
    },
    {
      title: 'Team Member',
      company: 'Target',
      dates: 'Jun. 2023 – Aug. 2024',
      description: 'Locating/Gathering items across the store for online orders and assisting customers around the store.',
    },
    {
      title: "Teacher's Assistant",
      company: 'NAU CS 105/205/305',
      dates: 'Jan. 2022 - Dec 2022',
      description: 'Grading course work for the three levels of the computing tools at Northern Arizona University. Including giving feedback to students based on their work. The computing tools classes cover useful computing concepts and software, such as VMware and Linux systems.',
    },
  ],
  projects: [
    {
      name: 'Persona Panel',
      description: 'This is a Python-based application that simulates a debate between three AI "philosophers" with distinct personas. The application takes an ethical question from the user and orchestrates a three-phase debate. The AI responses are generated using the Ollama API, allowing you to use different local language models for each persona.',
      technologies: ['Python', 'AIOllama', 'Sqlite', 'Streamlit', 'LLM', 'ChromaDB'],
      link:  'https://github.com/ethannnn6122/persona-panel'
    },
    {
      name: 'Portfolio RAG Bot',
      description: 'A privacy-focused, AI-powered portfolio assistant that answers questions about my skills and experience. This project demonstrates a Hybrid RAG (Retrieval-Augmented Generation) architecture where the "brain" (LLM) runs entirely in the users browser, while the "memory" (context retrieval) is handled by a lightweight Python backend. An OpenAI API version of this is available below or on the feature/api-cloud-compute branch.',
      technologies: ['Webgpu', 'Fastapi', 'LLM', 'Langchain', 'RAG', 'ChromaDB'],
      link:  'https://github.com/ethannnn6122/portfolio-RAG-bot'
    },
    {
      name: 'Web Vulnerability Scanner',
      description: 'A tool to identify common security flaws in web applications. The scanner is capable of spidering a target website to discover pages, and then performing tests for Reflected Cross-Site Scripting (XSS) and Error-Based SQL Injection (SQLi) vulnerabilities.',
      technologies: ['Python', 'JSON', 'Beautiful Soup', 'Requests', 'XSS', 'SQLi' ],
      link: 'https://github.com/ethannnn6122/Web-Vulnerability-Scanner?tab=readme-ov-file'
    },
    {
      name: 'Phishing Email Detector',
      description: 'A machine learning model trained to detect phishing attempts in emails. Analyzes email headers, body content, and URLs to classify threats.',
      technologies: ['Scikit-learn', 'Natural Language Toolkit (NLTK)', 'Pandas'],
      link:  'https://github.com/ethannnn6122/Phish-Detector'
    },
    {
      name: 'More Coming Soon!',
      description: 'Check back later for more projects.',
      technologies: []
    }
  ]
};