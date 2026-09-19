import { Presentation, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const CANVA_URL = "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view";
const CANVA_EMBED = `${CANVA_URL}?embed`;

export default function Presentaciones() {
  return (
    <PageLayout>
      <PageHero
        icon={Presentation}
        eyebrow="Gestión Estratégica"
        title="Presentación del proyecto"
        subtitle="Presentación en Canva del proyecto productivo FloraQuest."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Presentation} title="Presentación principal: FloraQuest">
            <p className="mb-4">
              Presentación en Canva que explica el problema identificado, la solución propuesta,
              el proceso de implementación y el impacto esperado del proyecto.
            </p>
            <div className="aspect-video rounded-2xl bg-secondary border border-border overflow-hidden mb-4">
              <iframe
                src={CANVA_EMBED}
                title="Presentación del proyecto en Canva"
                allowFullScreen
                allow="fullscreen"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <a
              href={CANVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
            >
              <ExternalLink size={15} /> Abrir presentación en Canva
            </a>
          </SectionCard>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Presentation className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Presentación única del proyecto en Canva</li>
              <li>✓ Explica: problema · solución · implementación · impacto</li>
              <li>✓ Integrada en la plataforma (embed + enlace)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
