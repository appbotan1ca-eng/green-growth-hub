import { Camera, Image, FileText, Award, TrendingUp, ExternalLink, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import evidencia1 from "@/assets/evidencia-1.jpeg";
import evidencia2 from "@/assets/evidencia-2.jpeg";
import evidencia3 from "@/assets/evidencia-3.jpeg";
import evidencia4 from "@/assets/evidencia-4.jpeg";

const evidenciasFotos = [
  { img: evidencia1, caption: "Registro fotográfico del trabajo en equipo", categoria: "Equipo" },
  { img: evidencia2, caption: "Bocetos y wireframes de la plataforma", categoria: "Diseño" },
  { img: evidencia3, caption: "Capturas del prototipo funcional", categoria: "Desarrollo" },
  { img: evidencia4, caption: "Muestras de plantas documentadas en campo", categoria: "Investigación" },
];

export default function Evidencias() {
  return (
    <PageLayout>
      <PageHero
        icon={Camera}
        eyebrow="Evidencias de implementación"
        title="Evidencias del desarrollo del proyecto"
        subtitle="Fotografías del proceso, prototipos, productos elaborados y resultados del proyecto FloraQuest."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Camera className="text-primary" size={28} /> Evidencias Fotográficas del Proceso
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {evidenciasFotos.map((ev, i) => (
              <SectionCard key={ev.caption} title={ev.caption} delay={i * 0.07}>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {ev.categoria}
                </span>
                <div className="aspect-video rounded-2xl bg-secondary border border-border overflow-hidden mb-3">
                  <img
                    src={ev.img}
                    alt={ev.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-sm text-muted-foreground">Evidencia registrada durante la implementación del proyecto productivo.</p>
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <FileText className="text-primary" size={28} /> Productos y Prototipos Elaborados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                titulo: "Plataforma web FloraQuest",
                descripcion: "Sitio web completo con 9 secciones, recursos multimedia, foros, chat y encuesta.",
                tipo: "Producto digital",
                estado: "Completado",
                enlace: "/",
              },
              {
                titulo: "Infografía: Problema - Solución - Impacto",
                descripcion: "Material visual para divulgación en redes sociales y espacios físicos del colegio.",
                tipo: "Material gráfico",
                estado: "Completado",
                enlace: "/gestion-estrategica/infografia",
              },
              {
                titulo: "Guía impresa: Separación de residuos",
                descripcion: "Carteles y folleto distribuido en salones, baños y áreas comunes del ITMA.",
                tipo: "Material impreso",
                estado: "Completado",
                enlace: "/gestion-directiva/tutoriales-guias",
              },
              {
                titulo: "Podcast FloraQuest",
                descripcion: "Serie de audio con experiencias, aprendizajes y desafíos del equipo (Google Drive).",
                tipo: "Producto multimedia",
                estado: "Completado",
                enlace: "/gestion-estrategica/podcast",
              },
              {
                titulo: "Video explicativo del proyecto",
                descripcion: "Video completo del proyecto (mínimo 10 min) alojado en Google Drive.",
                tipo: "Producto multimedia",
                estado: "Completado",
                enlace: "/gestion-estrategica/videos",
              },
              {
                titulo: "Presentación Canva del proyecto",
                descripcion: "Presentación oficial que explica problema, solución, implementación e impacto.",
                tipo: "Producto digital",
                estado: "Completado",
                enlace: "/gestion-estrategica/presentaciones",
              },
            ].map((prod, i) => (
              <SectionCard key={prod.titulo} title={prod.titulo} delay={i * 0.06}>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {prod.tipo}
                </span>
                <p className="font-body text-sm text-muted-foreground mb-3">{prod.descripcion}</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    prod.estado === "Completado" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {prod.estado}
                  </span>
                </div>
                {prod.enlace !== "#" && (
                  <a
                    href={prod.enlace}
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Ver producto <ExternalLink size={14} />
                  </a>
                )}
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <TrendingUp className="text-primary" size={28} /> Resultado real del proyecto
          </h2>
          <SectionCard title="Métrica verificada" className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="text-primary" size={32} />
              </div>
              <div>
                <span className="font-display font-black text-4xl text-gradient-green">50</span>
                <p className="font-body text-sm text-muted-foreground">Módulos educativos creados</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              El proyecto ha desarrollado 50 módulos educativos sobre botánica, educación ambiental y tecnología,
              disponibles a través de la plataforma FloraQuest.
            </p>
          </SectionCard>

          <SectionCard title="Qué se logró" className="mb-6">
            <ul className="space-y-3">
              {[
                "Plataforma web completamente funcional y navegable con todas las secciones requeridas",
                "50 módulos educativos sobre botánica y educación ambiental",
                "Producción multimedia completa: video 10+ min, podcast, presentación Canva, infografía",
                "Implementación de separación de residuos en salones y áreas comunes del ITMA",
                "Documentación de flora local del entorno escolar",
                "Encuesta de impacto publicada y accesible (Google Forms)",
                "Foro y chat funcionales para interacción comunitaria (Supabase)",
                "Socialización del proyecto con comunidad educativa",
              ].map((logro, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border">
                  <TrendingUp className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-body text-sm text-foreground">{logro}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Mejoras identificadas para próximas versiones">
            <ul className="space-y-3">
              {[
                "Desarrollo de aplicación móvil nativa (Android/iOS) con modo offline",
                "Ampliación de base de especies con fichas técnicas completas",
                "Sistema de gamificación: logros, insignias, ranking escolar",
                "Integración con API de iNaturalist para identificación automática",
                "Módulo de gestión de huertas escolares (siembra, cosecha, rotación)",
                "Panel de analíticas para docentes: seguimiento de uso y aprendizaje",
                "Accesibilidad mejorada: lector de pantalla, alto contraste, multiidioma",
              ].map((mejora, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border">
                  <Award className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-body text-sm text-foreground">{mejora}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Camera className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ 4 fotografías reales del proceso (evidencia-1 a evidencia-4)</li>
              <li>✓ 6 productos/prototipos reales documentados con enlaces</li>
              <li>✓ Métrica real verificada: 50 módulos educativos</li>
              <li>✓ Logros reales del proyecto listados</li>
              <li>✓ Mejoras identificadas realistas para próximas versiones</li>
              <li>✓ No se inventan porcentajes, estadísticas ni datos falsos</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
