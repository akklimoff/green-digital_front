import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaHandshake, FaUniversity, FaGlobeEurope, FaUsers } from 'react-icons/fa'

const Partners = () => {
  const { t } = useTranslation('partners')
  const { lang } = useParams()

  const nationalPartners = t('nationalPartners.list', { returnObjects: true })
  const internationalPartners = t('internationalPartners.list', { returnObjects: true })

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FaHandshake className="text-5xl text-primary-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700">{t('title')}</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* National Partners */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-primary-600 rounded-xl mr-4">
                  <FaUniversity className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-700">{t('nationalPartners.title')}</h3>
              </div>
              <ul className="space-y-4">
                {nationalPartners.map((partner, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">{partner}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* International Partners */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-green-600 rounded-xl mr-4">
                  <FaGlobeEurope className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-700">{t('internationalPartners.title')}</h3>
              </div>
              <ul className="space-y-4">
                {internationalPartners.map((partner, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">{partner}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cooperation Call */}
          <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <FaUsers className="text-6xl mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold mb-4">{t('cooperation.title')}</h3>
            <p className="text-lg text-primary-100 max-w-3xl mx-auto leading-relaxed">
              {t('cooperation.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
