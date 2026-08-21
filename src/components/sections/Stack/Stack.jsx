import SectionHeading from '../../SectionHeading/SectionHeading'
import styles from './Stack.module.css'

const STACK_CATEGORIES = [
  { title: 'Frontend', items: ['React.js', 'HTML5', 'Web Design'] },
  { title: 'Backend', items: ['Python', 'FastAPI'] },
  { title: 'Mobile', items: ['Kotlin', 'Jetpack Compose'] },
  { title: 'Data / Infra', items: ['Firebase', 'Linux'] },
  { title: 'Testing', items: ['Robot Framework'] },
  { title: 'Herramientas', items: ['Git', 'Android Studio'] },
]

function Stack() {
  return (
    <section id="stack" className={styles.stack}>
      <SectionHeading number="03" title="Stack Técnico" />
      <div className={styles.grid}>
        {STACK_CATEGORIES.map((category) => (
          <div key={category.title} className={styles.category}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>
                  <span className={styles.bullet}>▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stack
