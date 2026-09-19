## Plan: Expansión multi-página de FloraQuest

La landing page actual (`/`) queda intacta. Agrego nuevas rutas en `src/App.tsx` con un layout compartido (Navbar + Footer ya existentes, ampliando Navbar con menú a las nuevas páginas).

### Estructura de menú final (según plantilla)
- Inicio → `/`
- Sobre el proyecto → `/sobre-el-proyecto`
- Equipo de trabajo → `/equipo`
- Implementación → `/implementacion`
- Recursos multimedia → `/recursos-multimedia`
- Biblioteca digital → `/biblioteca`
- Impacto ambiental → `/impacto-ambiental`
- Participación → `/participacion`
- Contacto → `/contacto`

### Páginas nuevas (cada una en `src/pages/`)

1. **SobreProyecto.tsx** — Problema identificado, objetivos (general/específicos), justificación, impacto esperado (ambiental, social, educativo), principios del proyecto.
2. **Equipo.tsx** — Tarjetas con nombre, rol y avatar de cada integrante + sección Elevator Pitch (reusa video Drive).
3. **Implementacion.tsx** — Etapas (investigación, diseño, elaboración, prueba), evidencias (galería de placeholders), resultados preliminares.
4. **RecursosMultimedia.tsx** — Embeds: presentación Canva/Genially (placeholder iframe), infografía (imagen), video del proyecto (YouTube placeholder), podcast (8 episodios placeholders con reproductor), video pitch Drive.
5. **Biblioteca.tsx** — Documentos descargables (placeholders) y enlaces a Open Library, Project Gutenberg, DPLA.
6. **ImpactoAmbiental.tsx** — Problema ambiental, solución propuesta, beneficios (reducción de residuos, reciclaje, uso responsable) con iconografía.
7. **Participacion.tsx** — Foro/comentarios (placeholder estático), tutoriales y guías, encuesta de impacto (link a Google Forms placeholder), capacitación, apoyo profesional.
8. **Contacto.tsx** — Formulario de contacto (frontend solo, sin backend), correo, WhatsApp, redes sociales.

### Cambios a archivos existentes
- **src/App.tsx**: registrar las 8 rutas nuevas antes del catch-all.
- **src/components/Navbar.tsx**: reemplazar los anchors `#...` por `<Link>` de react-router. En la home conservar acceso rápido a las secciones existentes (Quiénes somos, Misión, Equipo, Elevator Pitch) como anchors `/#...`. Menú principal apuntará a las 9 rutas. Mobile menu adaptado.
- **src/components/Footer.tsx**: añadir columna de navegación con las nuevas rutas.

### Componentes auxiliares
- **PageLayout.tsx**: wrapper que renderiza `<Navbar />`, `<main>` con `pt-16`, y `<Footer />`. Cada página nueva lo usa.
- **PageHero.tsx**: encabezado animado reutilizable (título + subtítulo + ícono Lucide) en estilo Duolingo verde.

### Diseño
- Mantener tokens semánticos verdes ya definidos en `index.css` y `tailwind.config.ts`.
- Animaciones `framer-motion` consistentes (fade-in + slide-up al hacer scroll).
- Todo el contenido es placeholder editable; los estudiantes podrán reemplazar textos, imágenes y URLs reales después.

### Fuera de alcance
- Sin backend (sin Lovable Cloud). Formulario de contacto y foro son solo UI.
- Sin contenidos reales del proyecto (se dejan placeholders claramente marcados).