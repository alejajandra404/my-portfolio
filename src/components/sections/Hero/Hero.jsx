import styles from './Hero.module.css'

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <p className={styles.eyebrow}>Hola, soy</p>
      <h1 className={styles.title}>Alejandra.</h1>
      <h2 className={styles.subtitle}>Software Developer.</h2>
      <p className={styles.description}>
        Combino formación en ingeniería de software con experiencia real
        construyendo productos para clientes, desde web hasta mobile.
      </p>
      <div className={styles.actions}>
        <a href="#proyectos" className={styles.primaryCta}>
          Ver proyectos
        </a>
        <a href="/curriculum.pdf" className={styles.secondaryCta} download>
          Descargar CV
        </a>
      </div>
    </section>
  )
}

export default Hero
