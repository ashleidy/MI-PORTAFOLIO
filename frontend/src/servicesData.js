import { Code, Database, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Desarrollo de Aplicaciones",
    description: "Desarrollo completo de aplicaciones con Power Apps, AppSheets, Windows Forms, Python, Django, React, JavaScript, HTML, CSS y Node.js",
    technologies: ["Power Apps", "AppSheets", "Windows Forms", "Python", "Django", "React", "JavaScript", "HTML", "CSS", "Node.js"]
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: "Manejo de Bases de Datos",
    description: "Diseño, implementación y optimización de bases de datos MySQL para aplicaciones robustas y escalables",
    technologies: ["MySQL", "Diseño de BD", "Optimización", "Consultas SQL"]
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary" />,
    title: "Dashboards y Visualización",
    description: "Creación de dashboards interactivos y reportes visuales con Power BI y Looker Studio",
    technologies: ["Power BI", "Looker Studio", "Análisis de Datos", "Visualización"]
  }
];

export default services;