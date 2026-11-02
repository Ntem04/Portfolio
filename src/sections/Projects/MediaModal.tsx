import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Maximize2 } from 'lucide-react'

export interface MediaItem {
  type: 'image' | 'video'
  title: string
  url: string
  videoUrl?: string
}

interface MediaModalProps {
  media: MediaItem | null
  onClose: () => void
}

export const MediaModal: React.FC<MediaModalProps> = ({ media, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (media) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [media, onClose])

  if (!media) return null

  // Vidéo source : si le projet a un videoUrl, on l'utilise directement, sinon un flux vidéo d'exemple prêt pour le remplacement
  const resolvedVideoSrc =
    media.videoUrl ||
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 select-none">
        {/* Backdrop sombre avec flou artistique */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Contenu Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-[#161a1d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Barre supérieure */}
          <div className="h-12 bg-black/40 border-b border-white/10 px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs sm:text-sm font-semibold text-white/90 truncate max-w-[260px] sm:max-w-md">
                {media.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {media.url && (
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  title="Ouvrir dans un nouvel onglet"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Corps : Affichage Image ou Vidéo */}
          <div className="flex-1 bg-black/60 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-[300px] sm:min-h-[460px]">
            {media.type === 'image' ? (
              <div className="relative max-w-full max-h-[75vh] flex items-center justify-center group">
                <img
                  src={media.url}
                  alt={media.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
                />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono flex items-center gap-1.5 pointer-events-none">
                  <Maximize2 className="w-3 h-3" />
                  <span>Haute Définition</span>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center justify-center gap-3">
                <video
                  src={resolvedVideoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[72vh] rounded-lg shadow-2xl bg-black"
                >
                  Votre navigateur ne prend pas en charge la lecture vidéo HTML5.
                </video>
                {!media.videoUrl && (
                  <p className="text-[11px] font-mono text-white/40 text-center">
                    💡 Astuce : Dès que vous insérez le fichier vidéo de votre projet (ex: <code className="text-[#d88764]">videoUrl: "/videos/demo.mp4"</code>), il se lancera directement dans ce lecteur.
                  </p>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default MediaModal

