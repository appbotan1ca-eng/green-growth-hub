import { Mic, PlayCircle, ExternalLink, Volume2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const PODCAST_ID = "1Jfm7yKoWqV92UTk-n8YirWidpsqoHD_Q";

const episodios = [
  { numero: 1, titulo: "Presentación del equipo y origen del proyecto", duracion: "12:30", descripcion: "Quiénes somos, cómo nació la idea y qué problema buscamos resolver." },
  { numero: 2, titulo: "Investigación: Flora local del ITMA", duracion: "15:45", descripcion: "Metodología de campo, especies documentadas y hallazgos sorprendentes." },
  { numero: 3, titulo: "Diseño de la app: De la idea al prototipo", duracion: "18:20", descripcion: "Wireframes, identidad visual, decisiones de UX/UI y herramientas usadas." },
  { numero: 4, titulo: "Desarrollo técnico: Retos y soluciones", duracion: "20:10", descripcion: "Tecnologías elegidas, bugs memorables, trabajo colaborativo en GitHub." },
  { numero: 5, titulo: "Educación ambiental: ¿Por qué importa?", duracion: "16:55", descripcion: "Reflexión sobre crisis ecológica, responsabilidad juvenil y escuela como agente de cambio." },
  { numero: 6, titulo: "Pruebas con usuarios: Lo que aprendimos", duracion: "14:30", descripcion: "Feedback de compañeros, ajustes de usabilidad y validación de contenidos." },
  { numero: 7, titulo: "Impacto real: Historias de la comunidad", duracion: "17:40", descripcion: "Testimonios de estudiantes que cambiaron hábitos, docentes que adoptaron la app." },
  { numero: 8, titulo: "Futuro de BotaniApp: Próximos pasos", duracion: "13:15", descripcion: "Nuevas funciones, escalabilidad, alianzas y legado del proyecto." },
];

const podcastsRelacionados = [
  { titulo: "Ciencia en la escuela: Proyectos ambientales", autor: "Redipe Podcast", enlace: "https://anchor.fm/redipe" },
  { titulo: "Botánica para todos", autor: "Universidad del Valle", enlace: "https://www.ivoox.com/podcast-botanica-todos" },
  { titulo: "Tecnología y sostenibilidad", autor: "UPTC Radio", enlace: "https://www.spreaker.com/show/uptc-radio" },
];

export default function Podcast() {
  return (
    <PageLayout>
      <PageHero
        icon={Mic}
        eyebrow="Gestión Estratégica"
        title="Pódcast del proyecto"
        subtitle="Serie de 8 episodios donde los estudiantes comparten la experiencia, aprendizajes y desafíos de BotaniApp."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard title="Nuestro podcast: BotaniApp en voz alta" className="mb-8">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Un podcast de 8 episodios disponible en Google Drive, donde cada integrante del equipo
              narra su experiencia, los aprendizajes obtenidos y los desafíos enfrentados durante el desarrollo.
            </p>
            <div className="aspect-video rounded-2xl bg-black border border-border overflow-hidden mb-4">
              <iframe
                src={`https://drive.google.com/file/d/${PODCAST_ID}/preview`}
                title="Podcast completo de BotaniApp"
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
              Escuchar completo en Google Drive <ExternalLink size={15} />
            </a>
          </SectionCard>

          <h3 className="font-display font-bold text-2xl text-gradient-green mb-6">Episodios</h3>
          <div className="space-y-4 mb-12">
            {episodios.map((ep, i) => (
              <SectionCard key={ep.numero} title={`Episodio ${ep.numero}: ${ep.titulo}`} delay={i * 0.05}>
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <div className="flex items-center gap-2 text-primary">
                    <PlayCircle size={18} />
                    <span className="font-display font-bold text-sm">{ep.duracion}</span>
                  </div>
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary">
                    Episodio {ep.numero} de 8
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground">{ep.descripcion}</p>
                <div className="mt-3 flex items-center gap-2">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-body text-sm hover:bg-primary/20 transition-colors">
                    <Volume2 size={16} /> Reproducir
                  </button>
                  <a
                    href={`https://drive.google.com/file/d/${PODCAST_ID}/view?usp=sharing`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Ver en Drive <ExternalLink size={14} />
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Pódcasts relacionados con las disciplinas académicas" className="mt-8">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Recursos de audio externos que complementan los contenidos temáticos del proyecto.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {podcastsRelacionados.map((pod, i) => (
                <div key={pod.titulo} className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-display font-bold text-foreground mb-1">{pod.titulo}</h4>
                  <p className="font-body text-sm text-muted-foreground mb-3">{pod.autor}</p>
                  <a
                    href={pod.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Escuchar <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Mic className="text-primary" size={22} /> Herramientas y requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Mínimo 8 episodios (cumplido: 8 episodios)</li>
              <li>✓ Temas: experiencia del proyecto · aprendizajes · desafíos</li>
              <li>✓ Herramientas: Audacity (edición) · Anchor / Spreaker Studio (publicación)</li>
              <li>✓ Alojado en Google Drive con acceso público</li>
              <li>✓ Autorización para acceso desde la plataforma</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}