import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ResumePage from './pages/ResumePage'
import GalleryPage from './pages/GalleryPage'
import MathPage from './pages/MathPage'
import TermsPage from './pages/TermsPage'

function LangLayout() {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()

  useEffect(() => {
    const validLang = lang === 'es' ? 'es' : 'en'
    if (i18n.language !== validLang) {
      i18n.changeLanguage(validLang)
    }
    document.documentElement.lang = validLang
  }, [lang, i18n])

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="projects/gallery" element={<GalleryPage />} />
        <Route path="projects/math" element={<MathPage />} />
        <Route path="terms-of-use" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="" replace />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:lang/*" element={<LangLayout />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
