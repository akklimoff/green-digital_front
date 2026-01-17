import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaGlobe, FaUniversity, FaHandshake } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  const { t } = useTranslation('about')
  const { lang } = useParams()

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                {t('title')}
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="fade-right" delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-primary-700">{t('content.officeName')}</span> {t('content.paragraph1')}{' '}
                  <span className="font-semibold">
                    {t('content.projectName')}
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('content.paragraph2')}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <FaGlobe className="text-4xl text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">{t('cards.erasmus.title')}</h3>
                  <p className="text-gray-600">
                    {t('cards.erasmus.description')}
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <FaUniversity className="text-4xl text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{t('cards.consortium.title')}</h3>
                  <p className="text-gray-600">
                    {t('cards.consortium.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Goals */}
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-start space-x-4 mb-6">
                <FaHandshake className="text-4xl text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('goal.title')}</h3>
                  <p className="text-lg leading-relaxed text-primary-100">
                    {t('goal.description')}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">{t('goal.period.title')}</h4>
                  <p className="text-3xl font-bold text-green-300">{t('goal.period.years')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">{t('goal.format.title')}</h4>
                  <p className="text-lg">{t('goal.format.description')}</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About
