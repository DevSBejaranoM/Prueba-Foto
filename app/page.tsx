import Hero from '@/components/Hero'
import SobreMi from '@/components/SobreMi'
import Servicios from '@/components/Servicios'
import GaleriaDestacada from '@/components/GaleriaDestacada'
import Testimonios from '@/components/Testimonios'
import Carrusel from '@/components/Carrusel'
import Estadisticas from '@/components/Estadisticas'
import InstagramFeed from '@/components/InstagramFeed'
import Newsletter from '@/components/Newsletter'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMi />
      <Servicios />
      <GaleriaDestacada />
      <Carrusel />
      <Testimonios />
      <Estadisticas />
      <InstagramFeed />
      <Newsletter />
      <CTA />
    </>
  )
}

