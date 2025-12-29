'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SobreMi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Quién Soy
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
              alt="Fotógrafo profesional"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Mi Historia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Con más de 10 años de experiencia en fotografía profesional, he dedicado mi carrera a 
                capturar la esencia única de cada persona. Mi pasión por la fotografía comenzó cuando 
                descubrí el poder de una imagen para contar historias y preservar momentos irrepetibles.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Mi Enfoque Artístico
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creo en la fotografía como una forma de arte que va más allá de simplemente tomar fotos. 
                Cada sesión es una colaboración creativa donde trabajo contigo para crear imágenes que 
                reflejen tu personalidad, tus emociones y tu historia única.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Mi Experiencia
              </h3>
              <p className="text-gray-600 leading-relaxed">
                He trabajado con cientos de clientes en diversos proyectos, desde retratos íntimos hasta 
                sesiones de estilo de vida. Mi experiencia abarca diferentes estilos y técnicas, siempre 
                adaptándome a las necesidades y visiones de cada cliente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

