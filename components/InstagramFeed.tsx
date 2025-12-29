'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80' },
  { id: 2, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80' },
  { id: 3, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { id: 4, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { id: 5, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80' },
  { id: 6, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram size={32} className="text-gray-900" />
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900">
              Sígueme en Instagram
            </h2>
          </div>
          <p className="text-gray-600">@fotografo_profesional</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {imagenes.map((imagen, index) => (
            <motion.a
              key={imagen.id}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={imagen.src}
                alt={`Instagram post ${imagen.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Instagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

