import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaNewspaper, FaTrophy, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa'

const News = () => {
  const { t } = useTranslation('news')
  const { lang } = useParams()

  const newsItemsData = t('newsItems', { returnObjects: true })

  const newsItems = [
    {
      icon: FaCalendarAlt,
      title: newsItemsData[0].title,
      date: newsItemsData[0].date,
      description: newsItemsData[0].description
    },
    {
      icon: FaGraduationCap,
      title: newsItemsData[1].title,
      date: newsItemsData[1].date,
      description: newsItemsData[1].description
    },
    {
      icon: FaTrophy,
      title: newsItemsData[2].title,
      date: newsItemsData[2].date,
      description: newsItemsData[2].description
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FaNewspaper className="text-5xl text-primary-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700">{t('title')}</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border-t-4 border-primary-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary-100 rounded-lg mr-3">
                      <Icon className="text-2xl text-primary-600" />
                    </div>
                    <span className="text-sm font-semibold text-green-600">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700">
              <span className="font-semibold">{t('infoBox.highlight')}</span> {t('infoBox.text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
