import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaGlobe, FaRecycle, FaBolt, FaLaptop, FaSeedling } from 'react-icons/fa'

const Projects = () => {
  const { t } = useTranslation('projects')
  const { lang } = useParams()

  const mainProjectData = t('mainProject', { returnObjects: true })
  const initiativesData = t('initiatives', { returnObjects: true })

  const mainProject = {
    icon: FaGlobe,
    title: mainProjectData.title,
    description: mainProjectData.description,
    goals: mainProjectData.goals
  }

  const initiatives = [
    {
      icon: FaRecycle,
      title: initiativesData[0].title,
      description: initiativesData[0].description,
      color: 'green'
    },
    {
      icon: FaBolt,
      title: initiativesData[1].title,
      description: initiativesData[1].description,
      color: 'yellow'
    },
    {
      icon: FaLaptop,
      title: initiativesData[2].title,
      description: initiativesData[2].description,
      color: 'blue'
    },
    {
      icon: FaSeedling,
      title: initiativesData[3].title,
      description: initiativesData[3].description,
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
              {t('title')}
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
              {t('initiativesTitle')}
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
