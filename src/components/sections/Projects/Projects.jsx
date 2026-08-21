import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Projects.module.css'

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className={styles.projects}>
      <SectionHeading number="04" title={t.projects.heading} />
      <div className={styles.grid}>
        {t.projects.items.map((project) => (
          <article key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tech}>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
