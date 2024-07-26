import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    tripguide,
    threejs,
    bankofamerica,
    headstarter,
    sipnnplay,
    golfplanner,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Fellow",
      company_name: "Headstarter",
      icon: headstarter,
      iconBg: "#121618",
      date: "July 2024 - Present",
      points: [
      ],
    },
    {
      title: "Technology Analyst Intern",
      company_name: "Bank of America",
      icon: bankofamerica,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Developed a Python script for real-time monitoring of image activities in a designated folder, enhancing operational efficiency and data control.",
        "Engineered a robust Python program automating email notifications for a predefined recipient list.",
        "Constructed a network graph illustrating diverse data, improving data visualization on the user interface.",
        "Collaborated with team members to conceptualize improvements, enhancing overall team productivity.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Sip and Play",
      description:
        "Website focusing on fun and engaging 3d elements that aligns with the purpose of Sip & Play. Located in Brooklyn, NY Sip & Play allows you to play your favorite board games while enjoying your favorite drink, boba!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sipnnplay,
    },
    {
      name: "Golf Planner",
      description:
        "Designed and developed for my brother, a golf fanatic and fellow coder, the site keeps track of all things golf related: tournaments, statistics, schedule, and past results. Take a look! ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: golfplanner,
      source_code_link: "",
    },
    {
      name: "Chatbot for PDF Based Questions",
      description:
        "Created an intelligent chatbot capable of processing PDF files and providing precise answers based on the content using Python, HuggingFace Transformers, and IBM Watson.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "IBM Watson",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, projects };