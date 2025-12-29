'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonios = [
  {
    id: 1,
    nombre: 'María González',
    texto: 'Una experiencia increíble. Las fotos capturaron perfectamente mi personalidad y quedé encantada con los resultados.',
    rating: 5,
  },
  {
    id: 2,
    nombre: 'Carlos Rodríguez',
    texto: 'Profesional, creativo y con un ojo excepcional para los detalles. Las sesiones fueron relajadas y divertidas.',
    rating: 5,
  },
  {
    id: 3,
    nombre: 'Ana Martínez',
    texto: 'Las mejores fotos que he tenido. El proceso fue muy cómodo y los resultados superaron todas mis expectativas.',
    rating: 5,
  },
]

export default function Testimonios() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Testimonios
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <Quote size={32} className="text-gray-400 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonio.texto}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{testimonio.nombre}</span>
                <div className="flex gap-1">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

