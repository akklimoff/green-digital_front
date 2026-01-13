import React from 'react'
import { FaGlobe, FaUniversity, FaHandshake } from 'react-icons/fa'
import ScrollAnimation from './ScrollAnimation'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
                О проекте
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
          </ScrollAnimation>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollAnimation animation="fade-right" delay={100}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-primary-700">Green and Digital Office КГТУ им. И. Раззакова</span> создан
                  в рамках международного проекта программы Erasmus+{' '}
                  <span className="font-semibold">
                    «Green and Digital Universities for Sustainable Development of Kyrgyzstan (GREENKG)»
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Проект реализуется консорциумом ведущих университетов Кыргызской Республики и высших учебных заведений
                  стран Европейского союза и направлен на укрепление институционального потенциала вузов Кыргызстана в
                  сфере устойчивого развития, экологического менеджмента и цифровой трансформации.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="grid grid-cols-1 gap-6">
                <div className="p-6 bg-primary-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <FaGlobe className="text-4xl text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold text-primary-700 mb-2">Erasmus+</h3>
                  <p className="text-gray-600">
                    Международная программа поддержки образования и академической мобильности
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <FaUniversity className="text-4xl text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Консорциум университетов</h3>
                  <p className="text-gray-600">
                    Партнёрство ведущих вузов Кыргызстана и Европейского союза
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Основная цель проекта GREENKG</h3>
                  <p className="text-lg leading-relaxed text-primary-100">
                    Формирование системного подхода к внедрению принципов «зелёного» и цифрового университета, интеграция
                    устойчивых практик в образовательную, научную и управленческую деятельность, а также повышение роли
                    университетов в достижении целей устойчивого развития.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Период реализации</h4>
                  <p className="text-3xl font-bold text-green-300">2023–2026</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-2">Формат</h4>
                  <p className="text-lg">Создание Green and Digital Offices в университетах-партнёрах</p>
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
