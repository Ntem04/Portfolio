import React from 'react'
import PortraitCard from './PortraitCard'
import { Terminal, Network, Briefcase } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../../components/Reveal'

export const About: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="relative min-h-screen bg-white text-[#161a1d] py-24 px-6 sm:px-12 lg:px-20 flex flex-col justify-center border-t border-[#161a1d]/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Tag */}
        <Reveal direction="down" delay={0.1}>
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#6a3c20] uppercase">
            {t.about.tag}
          </span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-4">
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="up" delay={0.15}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#161a1d] leading-[1.05]">
                {t.about.headline}
              </h2>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <p className="text-base sm:text-lg text-[#161a1d]/85 leading-relaxed font-sans">
                {t.about.bio1}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-sm sm:text-base text-[#161a1d]/75 leading-relaxed font-sans">
                {t.about.bio2}
              </p>
            </Reveal>

            {/* Philosophy / Competencies cards */}
            <Reveal direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
                  <Terminal className="w-5 h-5 text-[#6a3c20] mb-2" />
                  <h4 className="font-bold text-sm mb-1">{t.about.card1Title}</h4>
                  <p className="text-xs text-[#161a1d]/70">{t.about.card1Desc}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
                  <Network className="w-5 h-5 text-[#6a3c20] mb-2" />
                  <h4 className="font-bold text-sm mb-1">{t.about.card2Title}</h4>
                  <p className="text-xs text-[#161a1d]/70">{t.about.card2Desc}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-shadow">
                  <Briefcase className="w-5 h-5 text-[#6a3c20] mb-2" />
                  <h4 className="font-bold text-sm mb-1">{t.about.card3Title}</h4>
                  <p className="text-xs text-[#161a1d]/70">{t.about.card3Desc}</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal direction="left" delay={0.2} width="full">
              <PortraitCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
