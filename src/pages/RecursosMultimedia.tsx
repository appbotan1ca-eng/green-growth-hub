import { Clapperboard, Presentation, Image as ImageIcon, Youtube, Mic, PlayCircle, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import infografia from "@/assets/infografia-proyecto.png";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";
const PODCAST_ID = "1Jfm7yKoWqV92UTk-n8YirWidpsqoHD_Q";
const CANVA_URL = "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view";
const CANVA_EMBED = `${CANVA_URL}?embed`;

export default function RecursosMultimedia() {
  return (
    <PageLayout>
      <PageHero
        icon={Clapperboard}
        eyebrow="Recursos multimedia"
        title="Contenidos digitales del proyecto"
        subtitle="Presentación, infografía, video explicativo y podcast de FloraQuest."
      />

      <section className="py-16 space-y-14">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Presentation} title="Presentación del proyecto">
            <p>
              Presentación en Canva con el problema, la solución, el proceso de implementación y el
              impacto esperado.
            </p>
            <div className="mt-4 aspect-video rounded-2xl bg-secondary border border-border overflow-hidden">
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
              className="mt-3 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
            >
              Abrir presentación en Canva <ExternalLink size={15} />
            </a>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={ImageIcon} title="Infografía">
            <p>Explica visualmente el problema ambiental, la solución tecnológica y el impacto.</p>
            <div className="mt-4 rounded-2xl bg-secondary border border-border overflow-hidden">
              <img
                src={infografia}
                alt="Infografía del proyecto"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Youtube} title="Video del proyecto (5 a 10 min)">
            <p>Video explicativo alojado en Google Drive con todo el proceso del proyecto.</p>
            <div className="mt-4 aspect-video rounded-2xl bg-black border border-border overflow-hidden">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Video del proyecto"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <a
              href={`https://drive.google.com/file/d/${VIDEO_ID}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
            >
              Abrir video en Google Drive <ExternalLink size={15} />
            </a>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <PlayCircle className="text-primary" size={26} />
              <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">
                Video Pitch
              </span>
            </div>
            <h2 className="text-3xl font-display font-black text-gradient-green">Pitch de FloraQuest</h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-card border-4 border-primary/20">
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Video Pitch FloraQuest"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Mic className="text-primary" size={28} /> Nuestro podcast
          </h2>

          <div className="rounded-3xl overflow-hidden shadow-card bg-card border border-border">
            <div className="p-6 sm:p-8">
              <p className="font-display font-bold text-lg text-foreground mb-1">
                FloraQuest en voz alta
              </p>
              <p className="font-body text-sm text-muted-foreground mb-5">
                Un podcast largo de nuestro proyecto que se divide en 6 episodios, disponible en
                Google Drive.
              </p>
              <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${PODCAST_ID}/preview`}
                  title="Podcast de FloraQuest"
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
                className="mt-3 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Escuchar en Google Drive <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
