import SectionHeading from '../../SectionHeading/SectionHeading'
import styles from './Projects.module.css'

const PROJECTS = [
  // Placeholder: proyecto 1
  // Placeholder: proyecto 2
  // Placeholder: proyecto 3
  // Placeholder: proyecto 4 (opcional)
]

function Projects() {
  return (
    <section id="proyectos" className={styles.projects}>
      <SectionHeading number="04" title="Proyectos Destacados" />
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <article key={project.title} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className={styles.tech}>
              {project.tech?.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
