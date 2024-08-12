import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Danny Xu
        </Link>
        <ul className={styles.navList}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li>
          <a
            href="https://drive.google.com/file/d/1Fm4OEJE5yuMae_Xwfs-WM4eIiQ5-2ny4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        </ul>
      </nav>
    </header>
  )
}