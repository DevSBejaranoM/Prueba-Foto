'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', alt: 'Retrato 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Retrato 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Retrato 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Retrato 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Retrato 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Retrato 6' },
]

export default function GaleriaDestacada() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Galería Destacada
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una selección de mis trabajos favoritos que representan mi estilo y visión artística
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {imagenes.map((imagen, index) => (
            <motion.div
              key={imagen.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={imagen.src}
                alt={imagen.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all"
          >
            Ver Galería Completa
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

