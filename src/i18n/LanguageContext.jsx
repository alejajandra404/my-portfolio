import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem('language')
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // localStorage unavailable, fall through to browser detection
  }
  return navigator.language?.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem('language', language)
    } catch {
      // ignore write failures (private browsing, storage disabled)
    }
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'))
  }

  const value = {
    language,
    toggleLanguage,
    t: translations[language],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
