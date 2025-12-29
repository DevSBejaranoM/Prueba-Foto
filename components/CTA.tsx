'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            ¿Listo para tu Sesión?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Agendemos una sesión y creemos juntos recuerdos que durarán para siempre
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <Calendar size={20} />
            Agendar Sesión
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

