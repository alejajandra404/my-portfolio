import SectionHeading from '../../SectionHeading/SectionHeading'
import styles from './About.module.css'

function About() {
  return (
    <section id="sobre-mi" className={styles.about}>
      <SectionHeading number="01" title="Sobre mí" />
      <p>{/* Placeholder: historia — formación en ITSON + experiencia real en AW IT */}</p>
      <p>{/* Placeholder: hacia dónde vas — metas remotas, interés en empresas grandes */}</p>
    </section>
  )
}

export default About
