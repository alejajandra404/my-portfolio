import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import avatar from '../../../assets/avatar.png'
import styles from './About.module.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className={styles.about}>
      <SectionHeading number="01" title={t.about.heading} />
      <div className={styles.layout}>
        <div className={styles.avatarFrame}>
          <img src={avatar} alt="Ilustración de Alejandra" className={styles.avatar} />
        </div>
        <div className={styles.text}>
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
        </div>
      </div>
    </section>
  )
}

export default About
