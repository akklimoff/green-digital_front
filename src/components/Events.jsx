import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaCalendarCheck, FaChalkboardTeacher, FaComments, FaUsers, FaLightbulb } from 'react-icons/fa'

const Events = () => {
  const { t } = useTranslation('events')
  const { lang } = useParams()

  const eventTypesData = t('eventTypes', { returnObjects: true })

  const eventTypes = [
    {
      icon: FaChalkboardTeacher,
      title: eventTypesData[0].title,
      description: eventTypesData[0].description,
      color: 'blue'
    },
    {
      icon: FaUsers,
      title: eventTypesData[1].title,
      description: eventTypesData[1].description,
      color: 'purple'
    },
    {
      icon: FaComments,
      title: eventTypesData[2].title,
      description: eventTypesData[2].description,
      color: 'green'
    },
    {
      icon: FaLightbulb,
      title: eventTypesData[3].title,
      description: eventTypesData[3].description,
      color: 'yellow'
    }
  ]

  const getGradientClasses = (color) => {
    const gradients = {
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600'
    }
    return gradients[color] || gradients.blue
  }

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FaCalendarCheck className="text-5xl text-primary-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700">{t('title')}</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Event Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {eventTypes.map((event, index) => {
              const Icon = event.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-r ${getGradientClasses(event.color)} p-6`}>
                    <Icon className="text-4xl text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Calendar Notice */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <FaCalendarCheck className="text-5xl mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('calendar.title')}</h3>
            <p className="text-lg text-primary-100 leading-relaxed">
              {t('calendar.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
