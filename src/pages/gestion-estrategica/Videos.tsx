import { Video, PlayCircle, ExternalLink, HardDrive } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";

export default function Videos() {
  return (
    <PageLayout>
      <PageHero
        icon={Video}
        eyebrow="Gestión Estratégica"
        title="Video del proyecto"
        subtitle="Video explicativo del proyecto productivo (mínimo 10 min) alojado en Google Drive."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Video} title="Video explicativo de FloraQuest" className="mb-8">
            <p className="mb-4">
              Video completo del proyecto productivo que cubre: problema identificado, propuesta de solución,
              proceso de implementación e impacto ambiental/social. Duración mínima 10 minutos.
            </p>
            <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Video del proyecto FloraQuest"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <a
              href={`https://drive.google.com/file/d/${VIDEO_ID}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
            >
              <ExternalLink size={15} /> Abrir en Google Drive
            </a>
          </SectionCard>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <HardDrive className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Video explicativo del proyecto productivo (mínimo 10 minutos)</li>
              <li>✓ Incluye: problema identificado · propuesta de solución · proceso de implementación · impacto ambiental o social</li>
              <li>✓ Alojado en Google Drive e integrado en la plataforma</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
