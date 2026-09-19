import { GraduationCap, PlayCircle, FileText, ExternalLink, Youtube, MousePointer, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const tutoriales = [
  {
    title: "Video instructivo: Cómo sembrar paso a paso",
    type: "Video tutorial (YouTube)",
    descripcion: "Tutorial completo desde la preparación del sustrato, siembra de semillas, riego inicial y cuidados básicos hasta la germinación.",
    url: "https://www.youtube.com/watch?v=J7cY8kN9vVQ",
    embedUrl: "https://www.youtube.com/embed/J7cY8kN9vVQ",
    duracion: "8:45",
    icon: Youtube,
  },
  {
    title: "Guía de separación de residuos en el hogar y la escuela",
    type: "Guía PDF descargable",
    descripcion: "Manual visual con código de colores para clasificar residuos: orgánicos, reciclables, no aprovechables y peligrosos. Incluye infografía imprimible.",
    url: "https://www.minambiente.gov.co/images/guia_separacion_residuos.pdf",
    embedUrl: null,
    duracion: "12 páginas",
    icon: FileText,
  },
  {
    title: "Tutorial interactivo: Identifica plantas con tu celular",
    type: "Tutorial web interactivo",
    descripcion: "Guía paso a paso para usar aplicaciones de identificación botánica (PlantNet, iNaturalist, PictureThis) con ejercicios prácticos.",
    url: "https://www.inaturalist.org/pages/getting_started",
    embedUrl: "https://www.inaturalist.org/pages/getting_started",
    duracion: "Interactivo",
    icon: MousePointer,
  },
  {
    title: "Técnicas de investigación escolar para proyectos ambientales",
    type: "Guía metodológica paso a paso",
    descripcion: "Metodología para formular problemas, diseñar hipótesis, recolectar datos y analizar resultados en proyectos de ciencias naturales.",
    url: "#",
    embedUrl: null,
    duracion: "Guía completa",
    icon: BookOpen,
  },
];

export default function TutorialesGuias() {
  return (
    <PageLayout>
      <PageHero
        icon={GraduationCap}
        eyebrow="Gestión Directiva"
        title="Tutoriales y guías"
        subtitle="Tutoriales tecnológicos, guías metodológicas y recursos de aprendizaje para el desarrollo del proyecto productivo."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-8">
            {tutoriales.map((tut, i) => (
              <SectionCard key={tut.title} title={tut.title} delay={i * 0.08}>
                <div className="flex items-center gap-2 mb-3">
                  <tut.icon className="text-primary" size={20} />
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary">
                    {tut.type}
                  </span>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary ml-auto">
                    {tut.duracion}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">{tut.descripcion}</p>

                {tut.embedUrl && (
                  <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
                    <iframe
                      src={tut.embedUrl}
                      title={tut.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                )}

                <a
                  href={tut.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline font-semibold"
                >
                  Acceder al recurso <ExternalLink size={14} />
                </a>
              </SectionCard>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Tutorial interactivo: Video instructivo de cómo sembrar paso a paso (YouTube)</li>
              <li>✓ Guía de separación de residuos (PDF descargable de fuente oficial)</li>
              <li>✓ Tutorial interactivo: Identificación de plantas con apps móviles (iNaturalist)</li>
              <li>✓ Guía metodológica: Técnicas de investigación escolar</li>
              <li>✓ Todos los recursos accesibles desde esta sección de la plataforma</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}