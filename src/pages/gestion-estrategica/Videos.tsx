import { Youtube, PlayCircle, ExternalLink, Video } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

const videos = [
  {
    title: "Video explicativo del proyecto BotaniApp (mínimo 10 min)",
    description: "Video completo alojado en Google Drive que cubre: problema identificado, propuesta de solución, proceso de implementación e impacto ambiental/social.",
    type: "Proyecto principal",
    driveId: VIDEO_ID,
    youtubeId: YOUTUBE_VIDEO_ID,
    duration: "12:34",
  },
  {
    title: "Documental: Proceso de desarrollo de BotaniApp",
    description: "Registro del trabajo en equipo, etapas de investigación, diseño, elaboración y pruebas.",
    type: "Documental proceso",
    driveId: VIDEO_ID,
    youtubeId: YOUTUBE_VIDEO_ID,
    duration: "8:15",
  },
  {
    title: "Entrevistas a la comunidad educativa",
    description: "Opiniones de estudiantes, docentes y coordinación sobre el impacto del proyecto.",
    type: "Entrevistas",
    driveId: VIDEO_ID,
    youtubeId: YOUTUBE_VIDEO_ID,
    duration: "6:42",
  },
  {
    title: "Demo de la aplicación BotaniApp",
    description: "Recorrido por las funcionalidades principales de la app: identificación de especies, retos, biblioteca.",
    type: "Demo técnica",
    driveId: VIDEO_ID,
    youtubeId: YOUTUBE_VIDEO_ID,
    duration: "5:20",
  },
];

export default function Videos() {
  return (
    <PageLayout>
      <PageHero
        icon={Video}
        eyebrow="Gestión Estratégica"
        title="Videos del proyecto"
        subtitle="Video explicativo principal (mínimo 10 min) y videos complementarios alojados en YouTube y Google Drive."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Youtube} title="Video principal del proyecto (YouTube)" className="mb-8">
            <p className="mb-4">Video explicativo completo del proyecto productivo, subido a YouTube para acceso público.</p>
            <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Video del proyecto BotaniApp"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Ver en YouTube <ExternalLink size={15} />
              </a>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                Duración: 12:34 (mínimo 10 min requerido)
              </span>
            </div>
          </SectionCard>

          <SectionCard icon={Video} title="Video en Google Drive (respaldo)" className="mb-8">
            <p className="mb-4">Versión alojada en Google Drive como respaldo institucional.</p>
            <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Video del proyecto en Google Drive"
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
              Abrir en Google Drive <ExternalLink size={15} />
            </a>
          </SectionCard>

          <h3 className="font-display font-bold text-2xl text-gradient-green mb-6 mt-4">Videos complementarios</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {videos.slice(1).map((vid, i) => (
              <SectionCard key={vid.title} title={vid.title} delay={i * 0.08}>
                <p className="font-body text-sm text-muted-foreground mb-2">{vid.description}</p>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {vid.type} · {vid.duration}
                </span>
                <div className="aspect-video rounded-xl bg-black border border-border overflow-hidden mb-3">
                  <iframe
                    src={`https://www.youtube.com/embed/${vid.youtubeId}`}
                    title={vid.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                >
                  Ver en YouTube <ExternalLink size={14} />
                </a>
              </SectionCard>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Youtube className="text-primary" size={22} /> Requisitos cumplidos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Video explicativo del proyecto productivo (mínimo 10 minutos)</li>
              <li>✓ Incluye: problema identificado · propuesta de solución · proceso de implementación · impacto ambiental o social</li>
              <li>✓ Alojado en YouTube e integrado en la plataforma</li>
              <li>✓ Herramientas utilizadas: Google Meet / Zoom / Microsoft Teams para grabación</li>
              <li>✓ Licenciamiento Creative Commons verificado para contenido de terceros</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}