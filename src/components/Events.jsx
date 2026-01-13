import React from 'react'
import { FaCalendarCheck, FaChalkboardTeacher, FaComments, FaUsers, FaLightbulb } from 'react-icons/fa'

const Events = () => {
  const eventTypes = [
    {
      icon: FaChalkboardTeacher,
      title: 'Обучающие семинары и тренинги',
      description: 'Практические занятия по экологическому менеджменту и цифровым технологиям',
      color: 'blue'
    },
    {
      icon: FaUsers,
      title: 'Лекции международных экспертов',
      description: 'Встречи с ведущими специалистами в области устойчивого развития',
      color: 'purple'
    },
    {
      icon: FaComments,
      title: 'Круглые столы и дискуссии',
      description: 'Обсуждение актуальных вопросов экологии и цифровизации образования',
      color: 'green'
    },
    {
      icon: FaLightbulb,
      title: 'Студенческие инициативы',
      description: 'Поддержка проектов и идей студентов по устойчивому развитию',
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
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700">Мероприятия и услуги</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Green and Digital Office регулярно организует и поддерживает различные образовательные и научные мероприятия
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Календарь мероприятий</h3>
            <p className="text-lg text-primary-100 leading-relaxed">
              Календарь мероприятий обновляется на постоянной основе. Следите за актуальной информацией о предстоящих
              семинарах, тренингах и встречах.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
