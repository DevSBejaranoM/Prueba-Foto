'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const estadisticas = [
  { numero: '10+', label: 'Años de Experiencia' },
  { numero: '500+', label: 'Clientes Felices' },
  { numero: '2000+', label: 'Fotos Capturadas' },
  { numero: '50+', label: 'Sesiones al Año' },
]

function Counter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const numero = parseInt(value.replace('+', ''))
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 segundos
      const steps = 60
      const increment = numero / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= numero) {
          setCount(numero)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, numero])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-serif font-bold text-gray-900 mb-2">
        {count}+
      </div>
      <p className="text-gray-600 text-lg">{label}</p>
    </motion.div>
  )
}

export default function Estadisticas() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {estadisticas.map((stat) => (
            <Counter key={stat.label} value={stat.numero} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

