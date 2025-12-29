'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80', alt: 'Retrato 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80', alt: 'Retrato 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Retrato 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80', alt: 'Retrato 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', alt: 'Retrato 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80', alt: 'Retrato 6' },
]

export default function GaleriaHoverZoom() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {imagenes.map((imagen, index) => (
        <motion.div
          key={imagen.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative aspect-[4/5] rounded-lg overflow-hidden group cursor-pointer"
        >
          <Image
            src={imagen.src}
            alt={imagen.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="font-semibold">{imagen.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

