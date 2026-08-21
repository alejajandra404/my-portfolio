import SocialIcons from '../../SocialIcons/SocialIcons'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>{t.footer.eyebrow}</p>
        <h2>{t.footer.heading}</h2>
        <p className={styles.description}>{t.footer.description}</p>
        <a href="mailto:alegarpre@gmail.com" className={styles.emailCta}>
          {t.footer.emailCta}
        </a>
        <a href="/curriculum.pdf" className={styles.cvLink} download>
          {t.footer.cvLink}
        </a>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.legal}>{t.footer.legal}</p>
        <SocialIcons className={styles.socialLinks} />
      </div>
    </footer>
  )
}

export default Footer
