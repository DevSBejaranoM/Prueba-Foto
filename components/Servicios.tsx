'use client'

import { motion } from 'framer-motion'
import { Camera, Heart, Sparkles } from 'lucide-react'

const servicios = [
  {
    icon: Camera,
    title: 'Retratos Profesionales',
    description: 'Sesiones de retrato que capturan tu personalidad y esencia única en un ambiente cómodo y profesional.',
  },
  {
    icon: Heart,
    title: 'Sesiones de Estilo de Vida',
    description: 'Fotografías naturales que documentan momentos auténticos y espontáneos de tu vida cotidiana.',
  },
  {
    icon: Sparkles,
    title: 'Sesiones Personalizadas',
    description: 'Creamos juntos una sesión única adaptada a tus necesidades, estilo y visión personal.',
  },
]

export default function Servicios() {
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
            Servicios
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon
            return (
              <motion.div
                key={servicio.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {servicio.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {servicio.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

