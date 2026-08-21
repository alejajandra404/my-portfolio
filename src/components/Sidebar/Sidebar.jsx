import { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'

const NAV_LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí', number: '01' },
  { href: '#experiencia', label: 'Experiencia', number: '02' },
  { href: '#stack', label: 'Stack', number: '03' },
  { href: '#proyectos', label: 'Proyectos', number: '04' },
]

const SOCIAL_LINKS = [
  { href: '#', label: 'GitHub' },
  { href: '#', label: 'LinkedIn' },
  { href: 'mailto:', label: 'Email' },
]

function Sidebar() {
  const [activeSection, setActiveSection] = useState(NAV_LINKS[0].href)

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={styles.sidebar}>
      <div>
        <a href="#hero" className={styles.logo}>
          Alejandra
        </a>
        <p className={styles.role}>Software Developer</p>
        <p className={styles.tagline}>
          Construyo productos web y mobile, de brief a producción.
        </p>
      </div>

      <nav className={styles.nav}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  activeSection === link.href ? styles.active : undefined
                }
              >
                <span className={styles.navNumber}>{link.number}.</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className={styles.social}>
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Sidebar
