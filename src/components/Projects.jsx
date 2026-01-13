import React from 'react'
import { FaGlobe, FaRecycle, FaBolt, FaLaptop, FaSeedling } from 'react-icons/fa'

const Projects = () => {
  const mainProject = {
    icon: FaGlobe,
    title: 'Erasmus+ GREENKG',
    description: 'Ключевой международный проект, направленный на устойчивое развитие университетов',
    goals: [
      'Формирование стратегии устойчивого развития университетов',
      'Развитие цифровых инструментов управления',
      'Внедрение ESG-подходов',
      'Создание Green and Digital Offices'
    ]
  }

  const initiatives = [
    {
      icon: FaRecycle,
      title: 'Экологические акции',
      description: 'Организация кампаний по сбору отходов, озеленению и экологическому просвещению',
      color: 'green'
    },
    {
      icon: FaBolt,
      title: 'Энергоэффективность',
      description: 'Проекты по энергосбережению и внедрению возобновляемых источников энергии',
      color: 'yellow'
    },
    {
      icon: FaLaptop,
      title: 'Цифровизация процессов',
      description: 'Внедрение цифровых решений в образовательную и управленческую деятельность',
      color: 'blue'
    },
    {
      icon: FaSeedling,
      title: 'Зелёные компетенции',
      description: 'Развитие экологических знаний и навыков у студентов и сотрудников',
      color: 'emerald'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      green: 'bg-green-500 hover:bg-green-600',
      yellow: 'bg-yellow-500 hover:bg-yellow-600',
      blue: 'bg-blue-500 hover:bg-blue-600',
      emerald: 'bg-emerald-500 hover:bg-emerald-600'
    }
    return colors[color] || colors.green
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
              Проекты и инициативы
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          {/* Main Project */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl mr-4">
                  <FaGlobe className="text-5xl" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{mainProject.title}</h3>
                  <p className="text-xl text-primary-100">{mainProject.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {mainProject.goals.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <p className="text-primary-50">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* University Initiatives */}
          <div>
            <h3 className="text-3xl font-bold text-primary-700 mb-8 text-center">
              Университетские инициативы
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`${getColorClasses(initiative.color)} p-6 transition-colors duration-300`}>
                      <Icon className="text-5xl text-white" />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{initiative.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
