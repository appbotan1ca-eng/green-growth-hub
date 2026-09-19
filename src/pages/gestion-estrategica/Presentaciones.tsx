import { Presentation, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const CANVA_URL = "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view";
const CANVA_EMBED = `${CANVA_URL}?embed`;

const presentaciones = [
  {
    title: "Presentación principal del proyecto BotaniApp",
    description: "Explica el problema identificado, la solución propuesta, el proceso de implementación y el impacto esperado. Diseñada en Canva.",
    embedUrl: CANVA_EMBED,
    externalUrl: CANVA_URL,
  },
  {
    title: "Presentación: Flora local del Instituto Técnico Mercedes Ábrego",
    description: "Catálogo visual de especies vegetales documentadas en el entorno escolar con fichas técnicas.",
    embedUrl: "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view?embed",
    externalUrl: "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view",
  },
  {
    title: "Presentación: Impacto ambiental y separación de residuos",
    description: "Material educativo para talleres de sensibilización sobre manejo adecuado de residuos.",
    embedUrl: "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view?embed",
    externalUrl: "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view",
  },
];

export default function Presentaciones() {
  return (
    <PageLayout>
      <PageHero
        icon={Presentation}
        eyebrow="Gestión Estratégica"
        title="Presentaciones del proyecto"
        subtitle="Presentaciones en Canva y Genially que explican el proyecto, su problemática, solución e impacto."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {presentaciones.map((pres, i) => (
            <SectionCard key={pres.title} title={pres.title} delay={i * 0.1}>
              <p className="mb-4">{pres.description}</p>
              <div className="aspect-video rounded-2xl bg-secondary border border-border overflow-hidden mb-4">
                <iframe
                  src={pres.embedUrl}
                  title={pres.title}
                  allowFullScreen
                  allow="fullscreen"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <a
                href={pres.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Abrir en Canva <ExternalLink size={15} />
              </a>
            </SectionCard>
          ))}

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Presentation className="text-primary" size={22} /> Recursos de apoyo
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>• Tutorial: <a href="https://www.youtube.com/watch?v=iS_kyWQtwXU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Cómo usar Genially</a></li>
              <li>• Tutorial: <a href="https://www.youtube.com/watch?v=iS_kyWQtwXU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Diseño en Canva para educación</a></li>
              <li>• Repositorio de imágenes gratuitas: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Unsplash</a>, <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Pixabay</a></li>
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              La información vinculada es de autoría propia y/o está orientada bajo políticas de protección de propiedad intelectual y derechos de autor.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}