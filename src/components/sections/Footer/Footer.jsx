import styles from './Footer.module.css'

function Footer() {
  return (
    <footer id="contacto" className={styles.footer}>
      <p className={styles.eyebrow}>05. Contacto</p>
      <h2>Trabajemos juntos</h2>
      <p className={styles.description}>{/* Placeholder: breve invitación a contactar */}</p>
      <a href="mailto:" className={styles.emailCta}>
        Escríbeme
      </a>
      <ul className={styles.links}>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="/curriculum.pdf" download>
            Descargar CV
          </a>
        </li>
      </ul>
      <p className={styles.legal}>Alejandra · Portafolio personal</p>
    </footer>
  )
}

export default Footer
