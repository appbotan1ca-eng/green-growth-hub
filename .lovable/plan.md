
## Estado actual vs. Plantilla

### Ya cumplido ✅
- **Inicio** — Hero con bienvenida, slogan, mascota.
- **¿Quiénes Somos?** — Misión, Visión, Valores, Objetivos y Principios.
- **Equipo de trabajo** — Integrantes con avatares.
- **Elevator Pitch** — Sección narrativa.
- **Video Pitch** — Iframe embebido de Google Drive.
- Diseño coherente (paleta verde, tipografías, animaciones).

### Faltante según la plantilla ❌
La plantilla exige este menú final: **Inicio · Sobre el proyecto · Equipo de trabajo · Implementación · Recursos multimedia · Biblioteca digital · Impacto ambiental · Participación · Contacto**, además de Gestión Directiva y Gestión Organizacional.

Faltan estas secciones/contenidos:
1. **Sobre el proyecto** (problema, solución, justificación, impacto esperado, frase del proyecto).
2. **Implementación** (proceso: investigación → diseño → elaboración → prueba; evidencias; resultados preliminares).
3. **Recursos multimedia** (presentación Canva/Genially, infografía, video del proyecto en YouTube, podcast 8 episodios).
4. **Biblioteca digital** (documentos + 3 bibliotecas: Open Library, Project Gutenberg, DPLA).
5. **Impacto ambiental** (problema ambiental, solución, beneficios).
6. **Gestión Directiva** (tutoriales y guías, foro de discusión, capacitación).
7. **Gestión Organizacional** (orientación académica con roles, apoyo profesional).
8. **Participación / Gestión Comunitaria** (chat/WhatsApp, encuesta Google Forms, foro).
9. **Contacto** (correo, formulario, redes).
10. **Roles dentro del equipo** (falta agregar rol a cada integrante).
11. **Frase del proyecto** ("Aprende, Crece, Protege" ya existe pero conviene destacarla).

---

## Plan de construcción

### 1. Nuevos componentes (`src/components/`)

| Componente | Contenido |
|---|---|
| `AboutProjectSection.tsx` | id `sobre-proyecto`. Tarjetas: Problema · Solución · Justificación · Impacto esperado (ambiental, social, educativo). Frase destacada. |
| `ImplementationSection.tsx` | id `implementacion`. Timeline 4 pasos (Investigación, Diseño, Elaboración, Prueba) + grid de evidencias (placeholders de fotos) + resultados preliminares. |
| `MultimediaSection.tsx` | id `recursos-multimedia`. Tarjetas con enlaces/embeds: Presentación (Canva placeholder), Infografía, Video YouTube (placeholder embed), Podcast (lista 8 episodios). |
| `LibrarySection.tsx` | id `biblioteca-digital`. Documentos descargables (placeholders) + 3 cards con enlace a Open Library, Gutenberg, DPLA. |
| `EnvironmentalImpactSection.tsx` | id `impacto-ambiental`. Problema ambiental, solución BotaniApp, lista de beneficios (reducción residuos, reciclaje, uso responsable). |
| `ManagementSection.tsx` | id `gestion`. Dos subsecciones en tabs/cards: **Directiva** (tutoriales, foro, capacitación) y **Organizacional** (orientación académica con roles de los 5 integrantes, apoyo profesional). |
| `CommunitySection.tsx` | id `participacion`. Botón WhatsApp, embed Google Forms placeholder, área de foro (estática con call-to-action). |
| `ContactSection.tsx` | id `contacto`. Formulario (nombre, correo, mensaje — solo UI), correo del proyecto, íconos redes sociales. |

### 2. Actualizar componentes existentes
- **`TeamSection.tsx`**: añadir un **rol** a cada integrante (Diseño, Investigación, Comunicación, Desarrollo, Contenido).
- **`Navbar.tsx`**: reemplazar items por el menú oficial de la plantilla:
  `Inicio · Sobre el proyecto · Equipo · Implementación · Multimedia · Biblioteca · Impacto · Participación · Contacto`. Convertir a menú colapsable en desktop si no caben todos (usar tamaño reducido).
- **`Index.tsx`**: nuevo orden:
  Hero → PitchVideo → AboutProject → Welcome (¿Quiénes Somos / Misión-Visión) → Team → Implementation → Multimedia → Library → EnvironmentalImpact → Management → Community → ElevatorPitch → Contact → Footer.

### 3. Recursos
- No requiere nuevas dependencias.
- Placeholders para enlaces externos (YouTube, Canva, Genially, Google Forms, WhatsApp) marcados claramente como "Reemplazar con enlace real" para que el equipo los sustituya.
- Íconos de `lucide-react` ya disponibles.
- Mantener paleta verde + Fredoka/Nunito + animaciones `framer-motion`.

### 4. Notas técnicas
- Todos los componentes con animaciones `whileInView` consistentes.
- Mobile-first; navbar móvil con scroll vertical si la lista crece.
- Sin backend (Lovable Cloud no necesario por ahora; el formulario de contacto será solo UI hasta que se pida persistencia).

¿Procedo a implementar todo esto?
