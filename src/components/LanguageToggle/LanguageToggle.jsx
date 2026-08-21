import { useLanguage } from '../../i18n/LanguageContext'
import styles from './LanguageToggle.module.css'

function LanguageToggle({ className }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={className ? `${styles.toggle} ${className}` : styles.toggle}
      aria-label="Switch language"
    >
      <span className={language === 'es' ? styles.active : undefined}>ES</span>
      <span className={styles.divider}>/</span>
      <span className={language === 'en' ? styles.active : undefined}>EN</span>
    </button>
  )
}

export default LanguageToggle
