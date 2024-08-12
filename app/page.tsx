'use client'

import { useEffect, useRef } from 'react'
import styles from './page.module.css'

interface JobExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  const jobExperiences: JobExperience[] = [
    {
      title: "Software Engineering Intern",
      company: "Tech Company A",
      period: "Summer 2023",
      description: "Worked on developing new features for the company's main product using React and Node.js."
    },
    {
      title: "Junior Developer",
      company: "Startup B",
      period: "Fall 2022",
      description: "Assisted in building a new mobile app using React Native and Firebase."
    },
    // Add more job experiences as needed
  ];

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>Im a passionate software engineer with a focus on web development.</p>
      </section>
      
      <section className={styles.timeline} ref={timelineRef}>
        <h2>My Job History</h2>
        {jobExperiences.map((job, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <p className={styles.period}>{job.period}</p>
              <p>{job.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}