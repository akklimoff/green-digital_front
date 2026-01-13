import React from 'react'
import { FaLeaf, FaLaptop, FaFacebook, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Главная', id: 'hero' },
    { label: 'О проекте', id: 'about' },
    { label: 'Миссия', id: 'mission' },
    { label: 'Проекты', id: 'projects' },
    { label: 'Новости', id: 'news' },
    { label: 'Контакты', id: 'contact' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaLeaf className="text-3xl text-green-400" />
              <FaLaptop className="text-3xl text-blue-400 -ml-2" />
            </div>
            <h3 className="text-xl font-bold mb-3">Green & Digital Office</h3>
            <p className="text-primary-200 leading-relaxed">
              Университетская площадка для продвижения принципов устойчивого развития и цифровой трансформации
              КГТУ им. И. Раззакова.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-200 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <div className="space-y-3 text-primary-200">
              <p>г. Бишкек, пр-т Ч. Айтматова, 66</p>
              <p>Главный корпус КГТУ, 1/234</p>
              <p>
                <a href="mailto:burul.japakova@kstu.kg" className="hover:text-white transition-colors">
                  burul.japakova@kstu.kg
                </a>
              </p>
              <p>
                <a href="tel:+996703323710" className="hover:text-white transition-colors">
                  +996 703 323 710
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 mt-4">
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200">
                <FaFacebook className="text-xl" />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200">
                <FaInstagram className="text-xl" />
              </button>
              <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200">
                <FaYoutube className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-primary-300">
          <p className="flex items-center justify-center mb-2">
            Сделано с <FaHeart className="text-red-500 mx-2 animate-pulse" /> для устойчивого будущего
          </p>
          <p>© {currentYear} Green and Digital Office, КГТУ им. И. Раззакова</p>
          <p className="text-sm mt-2">Erasmus+ GREENKG Project</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
