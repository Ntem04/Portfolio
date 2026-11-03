import React from 'react'
import ContactForm from './ContactForm'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../../components/Reveal'

export const Contact: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#eeede7] text-[#161a1d] py-16 sm:py-32 px-4 sm:px-12 lg:px-24 flex flex-col justify-center border-t border-[#6a3c20]/25 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
          {/* Left Column: Heading, description & icon */}
          <Reveal direction="right" delay={0.1}>
            <div className="flex flex-col">
              {/* Tag */}
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#161a1d]/80 uppercase mb-5 sm:mb-8">
                {t.contact.tag}
              </span>

              {/* Main Title with square colored dot */}
              <h2 className="text-4xl xs:text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#161a1d] leading-none mb-5 sm:mb-6 font-['Cabinet_Grotesk',sans-serif]">
                {t.contact.title}
                <span
                  className="inline-block w-3 h-3 sm:w-4 sm:h-4 lg:w-4.5 lg:h-4.5 bg-[#f65f19] ml-1 align-baseline"
                  aria-hidden="true"
                />
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#161a1d]/75 max-w-sm mb-10 leading-relaxed font-sans">
                {t.contact.subtitle}
              </p>

              {/* Overlapping Chat Bubbles Icon */}
              <div className="w-14 h-14 text-[#f65f19]">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full stroke-current"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Upper bubble */}
                  <path d="M6 8H30C32.2 8 34 9.8 34 12V24C34 26.2 32.2 28 30 28H14L6 34V12C6 9.8 7.8 8 10 8" />
                  {/* Lower overlapping bubble */}
                  <path d="M18 32H38L44 38V20C44 17.8 42.2 16 40 16" />
                </svg>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Minimalist Contact Form */}
          <div className="w-full">
            <Reveal direction="left" delay={0.2} width="full">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
