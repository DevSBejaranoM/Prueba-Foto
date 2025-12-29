'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Mail size={48} className="text-gray-900 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Mantente al Día
          </h2>
          <p className="text-gray-600 mb-8">
            Suscríbete a mi newsletter para recibir ofertas especiales, consejos de fotografía y 
            ver mis últimos trabajos antes que nadie.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="flex-1 px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              {submitted ? '¡Gracias!' : 'Suscribirse'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

