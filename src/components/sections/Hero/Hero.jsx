import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Hero.module.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.eyebrow}>{t.hero.greeting}</p>
      <h1 className={styles.title}>{t.hero.name}</h1>
      <h2 className={styles.subtitle}>{t.hero.role}</h2>
      <p className={styles.description}>{t.hero.description}</p>
      <div className={styles.actions}>
        <a href="#proyectos" className={styles.primaryCta}>
          {t.hero.primaryCta}
        </a>
        <a href="/curriculum.pdf" className={styles.secondaryCta} download>
          {t.hero.secondaryCta}
        </a>
      </div>
    </section>
  )
}

export default Hero
