import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBuilding, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Contact = () => {
  const { t } = useTranslation('contact')
  const { lang } = useParams()

  const contactInfo = [
    {
      icon: FaBuilding,
      title: t('contactInfo.location.title'),
      content: t('contactInfo.location.content'),
      color: 'primary'
    },
    {
      icon: FaMapMarkerAlt,
      title: t('contactInfo.address.title'),
      content: t('contactInfo.address.content'),
      color: 'green'
    },
    {
      icon: FaEnvelope,
      title: t('contactInfo.email.title'),
      content: t('contactInfo.email.content'),
      link: 'mailto:burul.japakova@kstu.kg',
      color: 'blue'
    },
    {
      icon: FaPhone,
      title: t('contactInfo.phone.title'),
      content: t('contactInfo.phone.content'),
      link: 'tel:+996703323710',
      color: 'purple'
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: FaInstagram, name: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: FaYoutube, name: 'YouTube', color: 'bg-red-600 hover:bg-red-700' }
  ]

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-500',
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500'
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">{t('title')}</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">{t('description')}</p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const content = item.link ? (
                <a href={item.link} className="text-gray-700 hover:text-primary-600 transition-colors">
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-700">{item.content}</p>
              )

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`${getColorClasses(item.color)} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  {content}
                </div>
              )
            })}
          </div>

          {/* Main Contact Box */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white mb-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">{t('mainBox.title')}</h3>
              <p className="text-xl text-primary-100">
                {t('mainBox.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <FaMapMarkerAlt className="text-3xl mb-3" />
                <p className="text-lg">{t('mainBox.address')}</p>
                <p className="text-primary-200">{t('mainBox.building')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <FaEnvelope className="text-2xl mr-3" />
                  <FaPhone className="text-2xl" />
                </div>
                <p className="text-lg mb-1">{t('contactInfo.email.content')}</p>
                <p className="text-primary-200">{t('contactInfo.phone.content')}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('social.title')}</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <button
                    key={index}
                    className={`${social.color} p-4 rounded-full text-white shadow-lg transform hover:scale-110 transition-all duration-300`}
                    aria-label={social.name}
                  >
                    <Icon className="text-2xl" />
                  </button>
                )
              })}
            </div>
            <p className="text-gray-600 mt-6">{t('social.description')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
