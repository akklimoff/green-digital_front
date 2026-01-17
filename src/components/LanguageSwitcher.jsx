import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const LanguageSwitcher = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // Extract current language from URL
  const pathParts = location.pathname.split('/').filter(part => part !== '')
  const currentLang = pathParts[0] && ['ru', 'en', 'kg'].includes(pathParts[0]) ? pathParts[0] : 'ru'

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'kg', label: 'KG' },
  ]

  const handleLanguageChange = (newLang) => {
    // Get current path without language prefix
    const pathParts = location.pathname.split('/').filter(part => part !== '')
    const currentPath = pathParts.slice(1).join('/') // Remove language code

    // Navigate to same route with new language
    const newPath = currentPath ? `/${newLang}/${currentPath}` : `/${newLang}`
    navigate(newPath)
  }

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            currentLang === language.code
              ? 'bg-primary-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-primary-600 hover:bg-white'
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
