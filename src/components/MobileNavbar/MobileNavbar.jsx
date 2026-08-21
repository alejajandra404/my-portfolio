import { useEffect, useState } from 'react'
import LanguageToggle from '../LanguageToggle/LanguageToggle'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/LanguageContext'
import { NAV_LINKS } from '../../navLinks'
import styles from './MobileNavbar.module.css'

function MobileNavbar() {
  const activeSection = useActiveSection(NAV_LINKS)
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [activeSection])

  return (
    <header className={styles.navbar}>
      <div className={styles.bar}>
        <a href="#hero" className={styles.logo}>
          Alejandra
        </a>
        <div className={styles.controls}>
          <LanguageToggle />
          <button
            type="button"
            className={styles.menuButton}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className={isOpen ? styles.iconOpen : styles.icon} />
          </button>
        </div>
      </div>

      <nav className={isOpen ? styles.menuOpen : styles.menu}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  activeSection === link.href ? styles.active : undefined
                }
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default MobileNavbar
