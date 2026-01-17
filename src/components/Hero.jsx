import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaLeaf, FaLaptopCode, FaGlobeAmericas, FaArrowDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation('home')
  const { lang } = useParams()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 py-20 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icons */}
          <div className="flex justify-center items-center space-x-6 mb-8 animate-fade-in">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300">
              <FaLeaf className="text-5xl text-green-300" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300">
              <FaLaptopCode className="text-5xl text-white" />
            </div>
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300">
              <FaGlobeAmericas className="text-5xl text-blue-300" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
            {t('hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-primary-100 mb-4 animate-slide-up delay-100">
            {t('hero.university')}
          </p>

          <p className="text-lg md:text-xl text-primary-100 mb-12 animate-slide-up delay-200">
            {t('hero.universityShort')}
          </p>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up delay-300">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              {t('hero.description')}
            </p>
            <p className="text-base md:text-lg text-primary-200">
              {t('hero.project')}{' '}
              <span className="font-semibold">{t('hero.projectName')}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-500">
            <Link
              to={`/${lang}/about`}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              {t('hero.buttons.learnMore')}
            </Link>
            <Link
              to={`/${lang}/contact`}
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              {t('hero.buttons.contact')}
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <Link
          to={`/${lang}/about`}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-green-300 transition-colors"
        >
          <FaArrowDown size={32} />
        </Link>
      </div>
    </section>
  )
}

export default Hero
