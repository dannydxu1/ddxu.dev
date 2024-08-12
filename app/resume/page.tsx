import styles from './page.module.css'

export default function Resume() {
  return (
    <div className={styles.container}>
      <h2>My Resume</h2>
      <section className={styles.section}>
        <h3>Education</h3>
        <div className={styles.item}>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>University Name, Expected Graduation: May 2025</p>
        </div>
      </section>
      <section className={styles.section}>
        <h3>Skills</h3>
        <ul className={styles.skillsList}>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Python</li>
          <li>Java</li>
          <li>Git</li>
          <li>SQL</li>
        </ul>
      </section>
      {/* Add more sections as needed */}
    </div>
  )
}