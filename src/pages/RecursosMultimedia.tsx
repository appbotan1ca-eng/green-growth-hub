import { motion } from "framer-motion";
import { Clapperboard, Presentation, Image as ImageIcon, Youtube, Mic, PlayCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";

const episodios = [
  "Ep. 1 — Cómo nació BotaniApp",
  "Ep. 2 — El problema ambiental de nuestro entorno",
  "Ep. 3 — Investigando la flora local",
  "Ep. 4 — Diseñando la plataforma",
  "Ep. 5 — Retos técnicos del equipo",
  "Ep. 6 — Aprendizajes del trabajo colaborativo",
  "Ep. 7 — Socialización con la comunidad",
  "Ep. 8 — Resultados y próximos pasos",
];

export default function RecursosMultimedia() {
  return (
    <PageLayout>
      <PageHero
        icon={Clapperboard}
        eyebrow="Recursos multimedia"
        title="Contenidos digitales del proyecto"
        subtitle="Presentación, infografía, video explicativo y podcast de BotaniApp."
      />

      <section className="py-16 space-y-14">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Presentation} title="Presentación del proyecto">
            <p>
              Presentación en Canva/Genially con el problema, la solución, el proceso de
              implementación y el impacto esperado.
            </p>
            <div className="mt-4 aspect-video rounded-2xl bg-secondary border border-border flex flex-col items-center justify-center gap-2">
              <Presentation className="text-primary/60" size={40} />
              <p className="text-sm">Pega aquí el enlace embebido de tu presentación</p>
            </div>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={ImageIcon} title="Infografía">
            <p>Explica visualmente el problema ambiental, la solución tecnológica y el impacto.</p>
            <div className="mt-4 aspect-[4/3] sm:aspect-[16/9] rounded-2xl bg-secondary border border-border flex flex-col items-center justify-center gap-2">
              <ImageIcon className="text-primary/60" size={40} />
              <p className="text-sm">Sube aquí la imagen de la infografía</p>
            </div>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={Youtube} title="Video del proyecto (5 a 10 min)">
            <p>Video explicativo alojado en YouTube con todo el proceso del proyecto.</p>
            <div className="mt-4 aspect-video rounded-2xl bg-secondary border border-border flex flex-col items-center justify-center gap-2">
              <Youtube className="text-primary/60" size={40} />
              <p className="text-sm">Reemplaza este bloque por el iframe de YouTube</p>
            </div>
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
            <h2 className="text-3xl font-display font-black text-gradient-green">Pitch de BotaniApp</h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-card border-4 border-primary/20">
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Video Pitch BotaniApp"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Mic className="text-primary" size={28} /> Podcast · 8 episodios
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {episodios.map((ep, i) => (
              <motion.div
                key={ep}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card"
              >
                <span className="w-11 h-11 rounded-full bg-gradient-hero flex items-center justify-center shrink-0">
                  <Mic className="text-primary-foreground" size={20} />
                </span>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{ep}</p>
                  <p className="font-body text-xs text-muted-foreground">Próximamente disponible</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}