import SectionHeading from '../../SectionHeading/SectionHeading'
import styles from './Experience.module.css'

const EXPERIENCE = [
  {
    role: 'Junior Web Developer',
    company: 'AW IT',
    period: '2024 — Presente',
    achievements: [
      // Placeholder: ~8 sitios web entregados a clientes reales, de brief a producción.
      // Placeholder: stack usado, rol específico, resultados (tiempos de entrega, retención de clientes, etc.)
    ],
  },
]

function Experience() {
  return (
    <section id="experiencia" className={styles.experience}>
      <SectionHeading number="02" title="Experiencia" />
      {EXPERIENCE.map((job) => (
        <article key={job.company} className={styles.job}>
          <p className={styles.period}>{job.period}</p>
          <h3 className={styles.role}>
            {job.role} <span className={styles.company}>@ {job.company}</span>
          </h3>
          <ul>
            {job.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}

export default Experience
