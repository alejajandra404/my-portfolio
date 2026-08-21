import Sidebar from './components/Sidebar/Sidebar'
import MobileNavbar from './components/MobileNavbar/MobileNavbar'
import Spotlight from './components/Spotlight/Spotlight'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import Experience from './components/sections/Experience/Experience'
import Stack from './components/sections/Stack/Stack'
import Projects from './components/sections/Projects/Projects'
import Footer from './components/sections/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <>
      <Spotlight />
      <MobileNavbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          <Hero />
          <About />
          <Experience />
          <Stack />
          <Projects />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
