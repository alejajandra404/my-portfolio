import styles from './SectionHeading.module.css'

function SectionHeading({ number, title }) {
  return (
    <h2 className={styles.heading}>
      <span className={styles.number}>{number}.</span>
      {title}
    </h2>
  )
}

export default SectionHeading
