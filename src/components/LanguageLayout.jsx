import { useEffect } from 'react'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LanguageLayout = () => {
  const { lang } = useParams()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    // Validate language
    const supportedLanguages = ['ru', 'en', 'kg']

    if (!lang || !supportedLanguages.includes(lang)) {
      // Redirect to root if invalid, which will trigger language detection
      navigate('/', { replace: true })
      return
    }

    // Update i18next language
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }

    // Save to localStorage
    localStorage.setItem('language', lang)
  }, [lang, i18n, navigate])

  return <Outlet />
}

export default LanguageLayout
