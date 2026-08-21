import { useEffect, useRef } from 'react'
import styles from './Spotlight.module.css'

function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    const handleMove = (event) => {
      node.style.setProperty('--x', `${event.clientX}px`)
      node.style.setProperty('--y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return <div ref={ref} className={styles.spotlight} aria-hidden="true" />
}

export default Spotlight
