import React, { useState } from 'react'
import { Mail, Check, Loader2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export const ContactForm: React.FC = () => {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // =========================================================================
  // GESTION DU CAPTCHA / CLOUDFLARE TURNSTILE (À connecter ultérieurement)
  // Lorsque vous ajouterez votre clé de site Cloudflare (sitekey) :
  // 1. Remplacez ce bloc factice par le composant Turnstile officiel
  // 2. Transmettez le token généré à votre API backend pour validation finale.
  // =========================================================================
  const [captchaVerified, setCaptchaVerified] = useState(true)
  const [isVerifying, setIsVerifying] = useState(false)

  // Simulation interactive pour tester avant intégration backend
  const handleToggleCaptcha = () => {
    if (!captchaVerified) {
      setIsVerifying(true)
      setTimeout(() => {
        setIsVerifying(false)
        setCaptchaVerified(true)
      }, 600)
    } else {
      setCaptchaVerified(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaVerified) {
      alert(t.contact.captchaError)
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail('')
      setMessage('')
    }, 700)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col p-6 sm:p-10 border-2 border-[#6a3c20] rounded-2xl bg-white/40 backdrop-blur-sm shadow-sm"
    >
      {submitted ? (
        <div className="p-6 bg-white border border-[#6a3c20]/30 rounded-xl text-emerald-800 flex items-center gap-3 animate-in fade-in">
          <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <p className="text-sm font-medium">
            {t.contact.successMsg}
          </p>
        </div>
      ) : (
        <>
          {/* Champ 1: Votre courriel */}
          <div className="mb-8">
            <label
              htmlFor="contact-email"
              className="block text-sm font-semibold text-[#161a1d] mb-3"
            >
              {t.contact.emailLabel}
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder={t.contact.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[#6a3c20]/30 focus:border-[#6a3c20] focus:outline-none pb-3 text-sm text-[#161a1d] placeholder-[#161a1d]/40 transition-colors font-sans"
            />
          </div>

          {/* Champ 2: Votre message */}
          <div className="mb-8">
            <label
              htmlFor="contact-message"
              className="block text-sm font-semibold text-[#161a1d] mb-3"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border-b-2 border-[#6a3c20]/30 focus:border-[#6a3c20] focus:outline-none pb-3 text-sm text-[#161a1d] placeholder-[#161a1d]/40 transition-colors font-sans resize-y"
            />
          </div>

          {/* Badge Cloudflare Turnstile */}
          <div className="bg-white border border-[#6a3c20]/35 p-4 rounded-xl flex items-center justify-between mb-4 shadow-sm select-none">
            {/* Partie gauche : Coche verte interactive */}
            <div
              onClick={handleToggleCaptcha}
              className="flex items-center gap-3 cursor-pointer group"
              title="Cliquez pour simuler l'état de validation"
            >
              <div
                className={`w-7 h-7 rounded-full text-white flex items-center justify-center shadow-sm flex-shrink-0 transition-colors ${
                  captchaVerified
                    ? 'bg-[#1ea853]'
                    : isVerifying
                    ? 'bg-amber-500'
                    : 'bg-slate-200 border border-slate-400 text-slate-400'
                }`}
              >
                {isVerifying ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : captchaVerified ? (
                  <Check className="w-4 h-4 stroke-[3]" />
                ) : null}
              </div>
              <span className="text-sm font-medium text-[#161a1d]">
                {isVerifying
                  ? t.contact.captchaVerifying
                  : captchaVerified
                  ? t.contact.captchaSuccess
                  : t.contact.captchaPrompt}
              </span>
            </div>

            {/* Partie droite : Logo Cloudflare cliquable vers le site officiel */}
            <div className="flex flex-col items-end">
              <a
                href="https://www.cloudflare.com/products/turnstile/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                title="Découvrir Cloudflare Turnstile (Site officiel)"
              >
                <svg
                  className="w-6 h-4"
                  viewBox="0 0 56 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.4 15.6C43.5 9.8 38.5 5.3 32.4 5.3C27.6 5.3 23.3 8.1 21.3 12.3C20.1 11.7 18.7 11.4 17.2 11.4C11.9 11.4 7.6 15.5 7.3 20.7C3.2 21.2 0 24.7 0 29C0 33.7 3.8 37.5 8.5 37.5H44.3C49.1 37.5 53 33.6 53 28.8C53 24.2 49.5 20.4 45 20.1"
                    fill="#F6821F"
                  />
                  <path
                    d="M44.3 36.5H8.5C4.3 36.5 1 33.2 1 29C1 25.1 3.9 21.9 7.7 21.5L9.2 21.4L9.3 19.8C9.5 15.1 13.4 11.4 18.2 11.4C19.6 11.4 20.9 11.7 22.1 12.3L23.4 13L24.1 11.8C25.9 8.2 29.6 5.8 33.7 5.8C39.2 5.8 43.8 9.8 44.6 15.2L44.9 17L46.6 17.2C50.6 17.6 53.7 21 53.7 25.1C53.7 29.4 50.2 33 45.8 33"
                    fill="#F6821F"
                  />
                </svg>
                <span className="text-[10px] font-black tracking-wider text-[#161a1d] font-mono">
                  CLOUDFLARE
                </span>
              </a>

              {/* Liens légaux officiels */}
              <div className="text-[9px] text-[#161a1d]/60 font-mono mt-0.5">
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#161a1d]"
                >
                  Privacy
                </a>
                <span className="mx-1">•</span>
                <a
                  href="https://support.cloudflare.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-[#161a1d]"
                >
                  Help
                </a>
              </div>
            </div>
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            disabled={loading || !captchaVerified}
            className="w-full bg-[#161a1d] hover:bg-black text-white px-6 py-4 rounded-xl flex items-center justify-between text-sm font-semibold transition-all active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed border border-[#6a3c20]/40 hover:border-[#6a3c20]"
          >
            <span>{loading ? t.contact.sending : t.contact.sendBtn}</span>
            <Mail className="w-4 h-4 stroke-[2]" />
          </button>
        </>
      )}
    </form>
  )
}

export default ContactForm
