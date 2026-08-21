import SocialIcons from '../../SocialIcons/SocialIcons'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Footer.module.css'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contacto" className={styles.footer}>
      <p className={styles.eyebrow}>{t.footer.eyebrow}</p>
      <h2>{t.footer.heading}</h2>
      <p className={styles.description}>{t.footer.description}</p>
      <a href="mailto:alegarpre@gmail.com" className={styles.emailCta}>
        {t.footer.emailCta}
      </a>
      <SocialIcons className={styles.socialLinks} />
      <a href="/curriculum.pdf" className={styles.cvLink} download>
        {t.footer.cvLink}
      </a>
      <p className={styles.legal}>{t.footer.legal}</p>
    </footer>
  )
}

export default Footer
