'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80', alt: 'Retrato 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80', alt: 'Retrato 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80', alt: 'Retrato 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80', alt: 'Retrato 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=80', alt: 'Retrato 5' },
]

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagenes.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagenes.length)
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0"
        >
          <Image
            src={imagenes[currentIndex].src}
            alt={imagenes[currentIndex].alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors z-10"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} className="text-gray-900" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors z-10"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} className="text-gray-900" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          key={currentIndex}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'linear' }}
          className="h-full bg-white"
        />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {imagenes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

