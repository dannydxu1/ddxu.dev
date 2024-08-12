import Image from 'next/image'
import styles from './page.module.css'

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product management, and order processing.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/ecommerce-project.jpg"
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing tasks and projects with real-time updates.",
      technologies: ["React", "Firebase", "Material-UI"],
      image: "/images/task-management-app.jpg"
    },
    // Add more projects as needed
  ];

  return (
    <div className={styles.container}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image src={project.image} alt={project.title} width={300} height={200} className={styles.projectImage} />
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.technologies}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}