'use client'

import Image from 'next/image'

const imagenes = [
  { id: 1, src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80', alt: 'Retrato 1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80', alt: 'Retrato 2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', alt: 'Retrato 3' },
  { id: 4, src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', alt: 'Retrato 4' },
  { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80', alt: 'Retrato 5' },
  { id: 6, src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Retrato 6' },
]

export default function CarruselHorizontal() {
  // Duplicamos las imágenes para crear un loop infinito
  const duplicatedImages = [...imagenes, ...imagenes]

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedImages.map((imagen, index) => (
          <div key={`${imagen.id}-${index}`} className="min-w-[300px] h-64 relative mx-2 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={imagen.src}
              alt={imagen.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

