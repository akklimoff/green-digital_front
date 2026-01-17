import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaLeaf, FaLaptop } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const { t, i18n } = useTranslation('common')
  const location = useLocation()

  // Extract language from URL path
  const pathParts = location.pathname.split('/').filter(part => part !== '')
  const lang = pathParts[0] && ['ru', 'en', 'kg'].includes(pathParts[0]) ? pathParts[0] : 'ru'

  // Закрытие меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  const menuItems = [
    { path: '', label: t('header.nav.home') },
    { path: 'about', label: t('header.nav.about') },
    { path: 'mission', label: t('header.nav.mission') },
    { path: 'structure', label: t('header.nav.structure') },
    { path: 'projects', label: t('header.nav.projects') },
    { path: 'news', label: t('header.nav.news') },
    { path: 'events', label: t('header.nav.events') },
    { path: 'partners', label: t('header.nav.partners') },
    { path: 'contact', label: t('header.nav.contact') },
  ]

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={`/${lang || 'ru'}`} className="flex items-center space-x-3 cursor-pointer">
            <div className="flex items-center">
              <FaLeaf className="text-green-500 text-2xl" />
              <FaLaptop className="text-primary-500 text-2xl -ml-2" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-700 leading-tight">
                {t('header.logo.title')}
              </h1>
              <p className="text-xs text-gray-600">{t('header.logo.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={`/${lang}${item.path ? '/' + item.path : ''}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher for Desktop */}
            <div className="ml-4">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-2 pb-4">
            {menuItems.map((item, index) => (
              <Link
                key={item.path}
                to={`/${lang}${item.path ? '/' + item.path : ''}`}
                onClick={handleMenuClose}
                className="px-4 py-3 text-left text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 30}ms` : '0ms'
                }}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher for Mobile */}
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
