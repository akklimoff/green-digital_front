import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaUserTie, FaUsers, FaLaptop, FaLeaf, FaBuilding, FaHandsHelping } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'

const Structure = () => {
  const { t } = useTranslation('structure')
  const { lang } = useParams()

  const structureTitles = t('structure', { returnObjects: true })

  const structureItems = [
    { icon: FaUserTie, title: structureTitles[0], color: 'primary' },
    { icon: FaLeaf, title: structureTitles[1], color: 'green' },
    { icon: FaLaptop, title: structureTitles[2], color: 'blue' },
    { icon: FaBuilding, title: structureTitles[3], color: 'indigo' },
    { icon: FaHandsHelping, title: structureTitles[4], color: 'purple' }
  ]

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-700 border-primary-300',
      green: 'bg-green-100 text-green-700 border-green-300',
      blue: 'bg-blue-100 text-blue-700 border-blue-300',
      indigo: 'bg-indigo-100 text-indigo-700 border-indigo-300',
      purple: 'bg-purple-100 text-purple-700 border-purple-300'
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="structure" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                {t('title')}
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t('description')}
              </p>
            </div>
          </ScrollAnimation>

          {/* Overview */}
          <ScrollAnimation animation="fade-up" delay={100}>
            <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 md:p-12 mb-12">
              <div className="flex items-start space-x-4">
                <FaUsers className="text-4xl text-primary-600 flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {t('overview.paragraph1')}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t('overview.paragraph2')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Structure Cards */}
          <ScrollAnimation animation="scale" delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {structureItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`${getColorClasses(item.color)} rounded-xl p-6 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-white rounded-full shadow-md">
                        <Icon className="text-4xl" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollAnimation>

          {/* Cooperation */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="bg-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('cooperation.title')}</h3>
              <p className="text-lg text-primary-100 leading-relaxed">
                {t('cooperation.description')}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default Structure
