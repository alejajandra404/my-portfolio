import SectionHeading from '../../SectionHeading/SectionHeading'
import { useLanguage } from '../../../i18n/LanguageContext'
import styles from './Stack.module.css'

function Stack() {
  const { t } = useLanguage()

  return (
    <section id="stack" className={styles.stack}>
      <SectionHeading number="03" title={t.stack.heading} />
      <div className={styles.grid}>
        {t.stack.categories.map((category) => (
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
