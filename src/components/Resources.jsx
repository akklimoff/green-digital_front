import React from 'react'
import { FaBook, FaFileAlt, FaTools, FaVideo } from 'react-icons/fa'

const Resources = () => {
  const resources = [
    {
      icon: FaFileAlt,
      title: 'Методические материалы',
      description: 'Руководства и методички по устойчивому развитию и экологическому менеджменту',
      color: 'primary'
    },
    {
      icon: FaBook,
      title: 'Рекомендации по экологии',
      description: 'Практические советы по внедрению экологических практик в университете',
      color: 'green'
    },
    {
      icon: FaTools,
      title: 'Цифровые инструменты',
      description: 'Руководства по использованию цифровых технологий в образовании',
      color: 'blue'
    },
    {
      icon: FaVideo,
      title: 'Видеоматериалы',
      description: 'Записи лекций, презентации и видео с мероприятий офиса',
      color: 'red'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-500 hover:bg-primary-600',
      green: 'bg-green-500 hover:bg-green-600',
      blue: 'bg-blue-500 hover:bg-blue-600',
      red: 'bg-red-500 hover:bg-red-600'
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <FaBook className="text-5xl text-primary-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700">Образовательные ресурсы</h2>
            </div>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Материалы предназначены для студентов, преподавателей и сотрудников университета
            </p>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`${getColorClasses(resource.color)} p-8 transition-all duration-300 flex items-center justify-center`}>
                    <Icon className="text-6xl text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{resource.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white rounded-full shadow-lg">
                  <FaBook className="text-4xl text-primary-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Доступ к материалам</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  В разделе представлены методические материалы по устойчивому развитию, рекомендации по экологическому
                  менеджменту, цифровые инструменты и руководства, а также презентации и видеоматериалы мероприятий.
                  Все материалы доступны для студентов, преподавателей и сотрудников университета.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
