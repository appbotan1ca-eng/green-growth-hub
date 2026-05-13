## Objetivo
Agregar el video pitch alojado en Google Drive justo después de la sección de Inicio (Hero), con vista previa reproducible directamente en la página.

## Cambios

1. **Nuevo componente `src/components/PitchVideoSection.tsx`**
   - Sección con id `video-pitch`, fondo claro acorde al diseño verde existente.
   - Encabezado con título "Video Pitch" + subtítulo motivador y animaciones `framer-motion` consistentes con las demás secciones.
   - Tarjeta contenedora con `aspect-video`, bordes redondeados y `shadow-card` que embebe el video usando:
     ```
     https://drive.google.com/file/d/1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_/preview
     ```
     en un `<iframe>` con `allow="autoplay"` y `allowFullScreen`. Esta URL `/preview` es la oficial de Google Drive para vista previa embebida.
   - Botón secundario "Abrir en Google Drive" que enlaza al `/view` original en una pestaña nueva (fallback si el iframe es bloqueado por permisos del archivo).
   - Nota breve indicando que el video debe estar compartido como "Cualquier persona con el enlace" para que la vista previa cargue.

2. **`src/pages/Index.tsx`**
   - Importar `PitchVideoSection` y renderizarlo entre `HeroSection` y `WelcomeSection`.

3. **`src/components/Navbar.tsx`**
   - Agregar item de menú "Video Pitch" → `#video-pitch` después de "Inicio", para mantener navegación coherente (desktop y móvil).

## Notas técnicas
- No requiere dependencias nuevas ni backend.
- Usa solo tokens del design system (verdes, tipografías Fredoka/Nunito) ya definidos.
- Si el archivo de Drive no tiene permiso público, el iframe mostrará el aviso de Google; el botón "Abrir en Drive" sirve como respaldo.
