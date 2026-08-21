import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Experience.module.css'

function Experience() {
  const { t } = useLanguage()
  const { role, company, period, achievements } = t.experience

  return (
    <section id="experiencia" className={styles.experience}>
      <SectionHeading number="02" title={t.experience.heading} />
      <article className={styles.job}>
        <p className={styles.period}>{period}</p>
        <h3 className={styles.role}>
          {role} <span className={styles.company}>@ {company}</span>
        </h3>
        <ul>
          {achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Experience
