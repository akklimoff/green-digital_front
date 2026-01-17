import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaBullseye, FaCheckCircle, FaTasks } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'

const Mission = () => {
  const { t } = useTranslation('mission')
  const { lang } = useParams()

  const goals = t('goals', { returnObjects: true })
  const tasks = t('tasks', { returnObjects: true })

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Mission */}
          <ScrollAnimation animation="fade-up">
            <div className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <FaBullseye className="text-5xl text-primary-600 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-primary-700">{t('missionTitle')}</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-l-8 border-green-500">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {t('missionText')}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Strategic Goals */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                  {t('goalsTitle')}
                </h3>
                <div className="w-24 h-1 bg-green-500 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Tasks */}
          <ScrollAnimation animation="fade-up" delay={200}>
            <div>
              <div className="flex items-center justify-center mb-12">
                <FaTasks className="text-4xl text-green-600 mr-4" />
                <h3 className="text-3xl md:text-4xl font-bold text-primary-700">{t('tasksTitle')}</h3>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-4">
                  {tasks.map((task, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{task}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Mission
