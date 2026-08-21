import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Projects.module.css'

function Projects() {
  const { t } = useLanguage()

  return (
    <section id="proyectos" className={styles.projects}>
      <SectionHeading number="04" title={t.projects.heading} />
      <div className={styles.grid}>
        {t.projects.items.map((project) => {
          const CardTag = project.link ? 'a' : 'div'
          const linkProps = project.link
            ? { href: project.link, target: '_blank', rel: 'noreferrer' }
            : {}

          return (
            <CardTag key={project.title} className={styles.card} {...linkProps}>
              <div className={styles.cardHeader}>
                <h3>{project.title}</h3>
                {project.badge && (
                  <span className={styles.badge}>{project.badge}</span>
                )}
              </div>
              <p>{project.description}</p>
              <ul className={styles.tech}>
                {project.tech.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardTag>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
