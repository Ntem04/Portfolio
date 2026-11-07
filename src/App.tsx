import { useState, useEffect } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import TechStack from './sections/TechStack/TechStack'
import Contact from './sections/Contact/Contact'
import WelcomeScreen from './components/WelcomeScreen'

export function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  // Vérifier si l'utilisateur a déjà vu l'accueil lors de cette session
  useEffect(() => {
    const hasSeen = sessionStorage.getItem('portfolio_welcomed')
    if (hasSeen === 'true') {
      setShowWelcome(false)
    }
  }, [])

  const handleCloseWelcome = () => {
    setShowWelcome(false)
    sessionStorage.setItem('portfolio_welcomed', 'true')
  }

  const handleReopenWelcome = () => {
    setShowWelcome(true)
  }

  return (
    <LanguageProvider>
      {/* Page d'accueil mobile immersive avec animations fluides & photo pro */}
      <WelcomeScreen
        isOpen={showWelcome}
        onClose={handleCloseWelcome}
        // customPhotoUrl="/assets/images/ma-photo-pro.jpg" // Décommentez et renseignez votre photo dès que vous l'aurez !
      />

      <div className="min-h-screen bg-[#6a3c20] font-sans text-[#161a1d] selection:bg-[#161a1d] selection:text-white">
        {/* Global Fixed Navbar avec barre segmentée | FR | CV | */}
        <Navbar />

        {/* Section 01: Hero / Fullstack Promoteur */}
        <Hero />

        {/* Section 02: Projects Carousel (Dossiers 3D interactifs) */}
        <Projects />

        {/* Section 03: About & Formation (Polytechnique Douala) */}
        <About />

        {/* Section 04: Tech Stack (Toolbox avec Marquee) */}
        <TechStack />

        {/* Section 05: Contact Form */}
        <Contact />

        {/* Global Footer */}
        <Footer />

        {/* Bouton discret flottant pour revoir la page d'accueil d'introduction à tout moment */}
        {!showWelcome && (
          <button
            type="button"
            onClick={handleReopenWelcome}
            className="fixed bottom-4 right-4 z-40 px-3 py-1.5 rounded-full bg-[#160903]/85 text-[#e5a86d] text-xs font-semibold border border-[#d97736]/40 shadow-xl backdrop-blur-md hover:bg-[#250e06] active:scale-95 transition-all flex items-center gap-1.5"
            title="Revoir l'écran de bienvenue"
          >
            <span className="w-2 h-2 rounded-full bg-[#d97736] animate-pulse" />
            <span>Accueil Intro</span>
          </button>
        )}
      </div>
    </LanguageProvider>
  )
}

export default App
