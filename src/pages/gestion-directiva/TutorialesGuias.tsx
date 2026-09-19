import { GraduationCap, FileText, ExternalLink, Youtube, MousePointer, BookOpen, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const tutoriales = [
  {
    title: "Guía oficial: Separación de residuos en Colombia (MinAmbiente)",
    type: "Guía PDF oficial",
    descripcion: "Guía nacional para la adecuada gestión de residuos en Colombia 2022. Incluye código de colores, clasificación y manejo.",
    url: "https://economiacircular.minambiente.gov.co/wp-content/uploads/2022/06/guia-nacional-para-la-adecuada-gestion-de-residuos-colombia-2022.pdf",
    embedUrl: null,
    icon: FileText,
  },
  {
    title: "iNaturalist - Identificación de plantas y especies",
    type: "Plataforma web / App",
    descripcion: "Comunidad de ciencia ciudadana para registrar, identificar y compartir observaciones de biodiversidad. App móvil disponible.",
    url: "https://www.inaturalist.org/",
    embedUrl: "https://www.inaturalist.org/",
    icon: MousePointer,
  },
  {
    title: "Tutorial de identificación de plantas – iNaturalist",
    type: "Guía oficial iNaturalist",
    descripcion: "Tutorial paso a paso para identificar plantas usando la plataforma iNaturalist. Incluye consejos para mejores observaciones.",
    url: "https://www.inaturalist.org/blog/126406",
    embedUrl: "https://www.inaturalist.org/blog/126406",
    icon: BookOpen,
  },
  {
    title: "Video tutorial: Cómo sembrar paso a paso (recurso educativo externo)",
    type: "Video YouTube educativo",
    descripcion: "Tutorial visual sobre preparación de sustrato, siembra de semillas, riego y cuidados básicos hasta la germinación.",
    url: "https://www.youtube.com/watch?v=gCngrSI7ai8",
    embedUrl: "https://www.youtube.com/embed/gCngrSI7ai8",
    icon: Youtube,
  },
];

export default function TutorialesGuias() {
  return (
    <PageLayout>
      <PageHero
        icon={GraduationCap}
        eyebrow="Gestión Directiva"
        title="Tutoriales y guías"
        subtitle="Recursos educativos externos para el desarrollo del proyecto: guías oficiales, plataformas de identificación y tutoriales."
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
                {tut.embedUrl === null && (
                  <a
                    href={tut.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 ml-4 font-body text-sm text-primary hover:underline"
                  >
                    <Download size={14} /> Descargar PDF
                  </a>
                )}
              </SectionCard>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Guía oficial de separación de residuos (MinAmbiente Colombia - PDF funcional)</li>
              <li>✓ Plataforma de identificación de plantas (iNaturalist - web/app)</li>
              <li>✓ Tutorial oficial de identificación en iNaturalist (blog iNaturalist)</li>
              <li>✓ Tutorial de siembra paso a paso (video YouTube funcional)</li>
              <li>✓ Todos los recursos son externos, reales y accesibles desde esta sección</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
