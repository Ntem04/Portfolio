import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import TechStack from './sections/TechStack/TechStack'
import Contact from './sections/Contact/Contact'

export function App() {
  return (
    <LanguageProvider>
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
      </div>
    </LanguageProvider>
  )
}

export default App
