import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './About.module.css'

function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className={styles.about}>
      <SectionHeading number="01" title={t.about.heading} />
      <p>{t.about.paragraph1}</p>
      <p>{t.about.paragraph2}</p>
      <p>{t.about.paragraph3}</p>
    </section>
  )
}

export default About
