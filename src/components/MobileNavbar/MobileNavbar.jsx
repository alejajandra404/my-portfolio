import LanguageToggle from '../LanguageToggle/LanguageToggle'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useLanguage } from '../../i18n/LanguageContext'
import { NAV_LINKS } from '../../navLinks'
import styles from './MobileNavbar.module.css'

function MobileNavbar() {
  const activeSection = useActiveSection(NAV_LINKS)
  const { t } = useLanguage()

  return (
    <header className={styles.navbar}>
      <a href="#hero" className={styles.logo}>
        Alejandra
      </a>
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
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageToggle className={styles.languageToggle} />
    </header>
  )
}

export default MobileNavbar
