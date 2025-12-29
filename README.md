# Sitio Web de Fotógrafo Profesional

Un sitio web moderno y elegante construido con Next.js 14, Tailwind CSS y Framer Motion para un fotógrafo profesional especializado en retratos y sesiones personalizadas.

## 🚀 Características

- **Diseño Moderno y Responsive**: Interfaz elegante que se adapta a todos los dispositivos
- **Animaciones Suaves**: Transiciones fluidas con Framer Motion
- **Galería Interactiva**: Múltiples formas de mostrar fotografías
- **Formulario de Contacto**: Sistema de contacto funcional
- **Optimización de Imágenes**: Uso de Next.js Image para mejor rendimiento
- **Accesibilidad**: Código accesible siguiendo mejores prácticas

## 📋 Requisitos Previos

- Node.js 18.0 o superior
- npm, yarn o pnpm

## 🛠️ Instalación

1. Clona el repositorio o navega al directorio del proyecto:
```bash
cd /ruta/al/proyecto
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

## 🏃 Ejecutar el Proyecto

### Modo Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el sitio.

### Modo Producción

```bash
npm run build
npm start
# o
yarn build
yarn start
# o
pnpm build
pnpm start
```

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx             # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── galeria/
│   │   └── page.tsx         # Página de galería
│   └── contacto/
│       └── page.tsx         # Página de contacto
├── components/
│   ├── Header.tsx           # Componente de navegación
│   ├── Footer.tsx           # Componente de pie de página
│   ├── Hero.tsx             # Sección hero
│   ├── SobreMi.tsx          # Sección "Quién soy"
│   ├── Servicios.tsx        # Sección de servicios
│   ├── GaleriaDestacada.tsx # Galería destacada
│   ├── Testimonios.tsx      # Testimonios de clientes
│   ├── Carrusel.tsx         # Carrusel de imágenes
│   ├── Estadisticas.tsx     # Estadísticas
│   ├── InstagramFeed.tsx    # Feed de Instagram
│   ├── Newsletter.tsx       # Suscripción a newsletter
│   ├── CTA.tsx              # Call to action
│   └── foto/
│       ├── CarruselHorizontal.tsx  # Carrusel horizontal automático
│       ├── GaleriaHoverZoom.tsx    # Galería con zoom al hover
│       ├── LightboxModal.tsx       # Modal lightbox
│       └── Slideshow.tsx           # Slideshow con transiciones
├── public/                  # Archivos estáticos
└── package.json
```

## 🎨 Páginas

### Home (/)
- Hero con imagen de fondo
- Sección "Quién soy" (historia, enfoque artístico, experiencia)
- Servicios ofrecidos
- Galería destacada
- Carrusel de trabajos recientes
- Testimonios
- Estadísticas
- Feed de Instagram
- Newsletter
- Call to action

### Galería (/galeria)
- Grid estilo masonry con todas las fotografías
- Scroll infinito (preparado para implementación)
- Muestra de los 4 componentes especiales de visualización

### Contacto (/contacto)
- Formulario de contacto completo
- Campos: nombre, email, tipo de sesión, mensaje
- Información de contacto
- Validación de formulario

## 🖼️ Componentes Especiales de Visualización

1. **Carrusel Horizontal Automático**: Carrusel que se desplaza automáticamente
2. **Galería con Hover Zoom**: Efecto de zoom al pasar el mouse sobre las imágenes
3. **Lightbox Modal**: Modal fullscreen al hacer clic en una imagen
4. **Slideshow**: Presentación con transiciones suaves y barra de progreso

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Personaliza tus colores aquí
  }
}
```

### Fuentes
Las fuentes se configuran en `app/layout.tsx`. Actualmente usa:
- Inter (sans-serif)
- Playfair Display (serif)

### Imágenes
Las imágenes de ejemplo usan Unsplash. Para usar tus propias imágenes:
1. Colócalas en la carpeta `public/`
2. Actualiza las rutas en los componentes

## 📧 Integración de Email

El formulario de contacto actualmente usa `console.log` para mostrar los datos. Para integrar un servicio de email real:

1. **Opción 1: Mailto** (ya comentado en el código)
2. **Opción 2: API Route de Next.js** con servicios como:
   - SendGrid
   - Resend
   - Nodemailer
   - Formspree

Ejemplo de integración con API Route:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Enviar email aquí
  return Response.json({ success: true })
}
```

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Despliega con un clic

### Otros Proveedores
El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## 📝 Notas

- Las imágenes de ejemplo provienen de Unsplash
- El formulario de contacto necesita integración con un servicio de email para producción
- El feed de Instagram es simulado (puede integrarse con la API de Instagram)
- El newsletter usa `console.log` (puede integrarse con servicios como Mailchimp)

## 🛠️ Tecnologías Utilizadas

- **Next.js 14**: Framework de React
- **React 18**: Biblioteca de UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Framer Motion**: Animaciones
- **Lucide React**: Iconos

## 📄 Licencia

Este proyecto es de uso personal/profesional.

## 👤 Autor

Creado para fotógrafo profesional.

---

¿Preguntas o sugerencias? ¡No dudes en contactar!

# Prueba-Foto
