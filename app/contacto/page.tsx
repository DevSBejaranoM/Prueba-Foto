'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const tiposSesion = [
  'Retrato Profesional',
  'Sesión de Estilo de Vida',
  'Sesión Personalizada',
  'Evento Especial',
  'Otro',
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoSesion: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Aquí puedes integrar con una API de email o usar mailto
    console.log('Formulario enviado:', formData)
    
    // Opción con mailto (descomentar si prefieres)
    // const mailtoLink = `mailto:contacto@fotografo.com?subject=Solicitud de Sesión: ${formData.tipoSesion}&body=Nombre: ${formData.nombre}%0AEmail: ${formData.email}%0A%0AMensaje:%0A${formData.mensaje}`
    // window.location.href = mailtoLink
    
    setSubmitted(true)
    setFormData({
      nombre: '',
      email: '',
      tipoSesion: '',
      mensaje: '',
    })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-4">
              Contacto
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Me encantaría escucharte y trabajar contigo para crear algo increíble.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail size={24} className="text-gray-900 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:contacto@fotografo.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                        contacto@fotografo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="text-gray-900 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="text-gray-900 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Ubicación</p>
                      <p className="text-gray-600">
                        Ciudad, País
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="tipoSesion" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tipo de Sesión *
                  </label>
                  <select
                    id="tipoSesion"
                    name="tipoSesion"
                    value={formData.tipoSesion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all bg-white"
                  >
                    <option value="">Selecciona un tipo de sesión</option>
                    {tiposSesion.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-900 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg"
                  >
                    ¡Gracias! Tu mensaje ha sido enviado. Te contactaré pronto.
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

