'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import CarruselHorizontal from '@/components/foto/CarruselHorizontal'
import GaleriaHoverZoom from '@/components/foto/GaleriaHoverZoom'
import LightboxModal from '@/components/foto/LightboxModal'
import Slideshow from '@/components/foto/Slideshow'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', alt: 'Retrato 1', aspect: 'portrait' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Retrato 2', aspect: 'portrait' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Retrato 3', aspect: 'landscape' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Retrato 4', aspect: 'portrait' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Retrato 5', aspect: 'landscape' },
  { id: 6, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Retrato 6', aspect: 'portrait' },
  { id: 7, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', alt: 'Retrato 7', aspect: 'portrait' },
  { id: 8, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80', alt: 'Retrato 8', aspect: 'landscape' },
  { id: 9, src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80', alt: 'Retrato 9', aspect: 'portrait' },
  { id: 10, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Retrato 10', aspect: 'portrait' },
  { id: 11, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Retrato 11', aspect: 'landscape' },
  { id: 12, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Retrato 12', aspect: 'portrait' },
  { id: 13, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', alt: 'Retrato 13', aspect: 'portrait' },
  { id: 14, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Retrato 14', aspect: 'landscape' },
  { id: 15, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Retrato 15', aspect: 'portrait' },
]

export default function GaleriaPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
              Galería
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explora mi colección completa de trabajos. Cada imagen cuenta una historia única.
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {imagenes.map((imagen, index) => (
              <motion.div
                key={imagen.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid mb-4 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className={`relative ${
                  imagen.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}>
                  <Image
                    src={imagen.src}
                    alt={imagen.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de componentes especiales */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl space-y-20">
          {/* Carrusel Horizontal */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Carrusel Horizontal Automático
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <CarruselHorizontal />
            </div>
          </div>

          {/* Galería con Hover Zoom */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Galería con Hover Zoom
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <GaleriaHoverZoom />
            </div>
          </div>

          {/* Lightbox Modal */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Lightbox Modal
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <LightboxModal />
            </div>
          </div>

          {/* Slideshow */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Slideshow con Transición Suave
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Slideshow />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

