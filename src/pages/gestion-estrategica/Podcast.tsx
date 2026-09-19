import { Mic, ExternalLink, Volume2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const PODCAST_ID = "1Jfm7yKoWqV92UTk-n8YirWidpsqoHD_Q";

export default function Podcast() {
  return (
    <PageLayout>
      <PageHero
        icon={Mic}
        eyebrow="Gestión Estratégica"
        title="Pódcast del proyecto"
        subtitle="Podcast del proyecto BotaniApp alojado en Google Drive."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard title="Podcast BotaniApp" className="mb-8">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Podcast del proyecto con conversaciones sobre la experiencia, aprendizajes y desafíos.
              Contenido en videos largos de aproximadamente 1 hora.
            </p>
            <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
              <iframe
                src={`https://drive.google.com/file/d/${PODCAST_ID}/preview`}
                title="Podcast de BotaniApp"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <a
              href={`https://drive.google.com/file/d/${PODCAST_ID}/view?usp=sharing`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
            >
              <ExternalLink size={15} /> Escuchar en Google Drive
            </a>
          </SectionCard>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Mic className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Podcast del proyecto alojado en Google Drive</li>
              <li>✓ Contenido: experiencia del proyecto · aprendizajes · desafíos</li>
              <li>✓ Accesible desde esta sección de la plataforma</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}