import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LanguageRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language')

    if (savedLanguage && ['ru', 'en', 'kg'].includes(savedLanguage)) {
      navigate(`/${savedLanguage}`, { replace: true })
      return
    }

    // Detect browser language
    const browserLang = navigator.language.toLowerCase()
    let detectedLang = 'ru' // default

    if (browserLang.startsWith('en')) {
      detectedLang = 'en'
    } else if (browserLang.startsWith('ky') || browserLang.startsWith('kg')) {
      detectedLang = 'kg'
    } else if (browserLang.startsWith('ru')) {
      detectedLang = 'ru'
    }

    navigate(`/${detectedLang}`, { replace: true })
  }, [navigate])

  return null
}

export default LanguageRedirect
