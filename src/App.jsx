import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate'
import Loading from './components/Loading'
import LanguageRedirect from './components/LanguageRedirect'
import LanguageLayout from './components/LanguageLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MissionPage from './pages/MissionPage'
import StructurePage from './pages/StructurePage'
import ProjectsPage from './pages/ProjectsPage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import ResourcesPage from './pages/ResourcesPage'
import PartnersPage from './pages/PartnersPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Имитация загрузки
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen">
        <Header scrolled={scrolled} />
        <main>
          <Routes>
            {/* Root redirect */}
            <Route path="/" element={<LanguageRedirect />} />

            {/* Language-prefixed routes */}
            <Route path="/:lang" element={<LanguageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="mission" element={<MissionPage />} />
              <Route path="structure" element={<StructurePage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="events" element={<EventsPage />} />
              <Route path="resources" element={<ResourcesPage />} />
              <Route path="partners" element={<PartnersPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>

            {/* 404 fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
