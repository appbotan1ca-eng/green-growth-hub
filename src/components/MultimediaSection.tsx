import { motion } from "framer-motion";
import { Presentation, Image as ImageIcon, Youtube, Mic, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const resources = [
  {
    icon: Presentation,
    title: "Presentación",
    desc: "Diapositivas del proyecto en Canva / Genially: problema, solución, implementación e impacto.",
    cta: "Ver presentación",
    url: "https://www.canva.com/",
  },
  {
    icon: ImageIcon,
    title: "Infografía",
    desc: "Resumen visual del problema ambiental, la solución tecnológica y su impacto.",
    cta: "Ver infografía",
    url: "https://www.canva.com/",
  },
  {
    icon: Youtube,
    title: "Video del proyecto",
    desc: "Video explicativo de 5 a 10 minutos sobre BotaniApp alojado en YouTube.",
    cta: "Ver en YouTube",
    url: "https://www.youtube.com/",
  },
];

const episodes = [
  "Ep. 1 — Origen del proyecto",
  "Ep. 2 — Importancia de la botánica",
  "Ep. 3 — Diseño de la app",
  "Ep. 4 — Investigación de plantas locales",
  "Ep. 5 — Desafíos del desarrollo",
  "Ep. 6 — Pruebas con estudiantes",
  "Ep. 7 — Aprendizajes del equipo",
  "Ep. 8 — Impacto y futuro",
];

export default function MultimediaSection() {
  return (
    <section id="recursos-multimedia" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            Recursos <span className="text-gradient-green">Multimedia</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Contenidos digitales que explican y difunden el proyecto productivo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              custom={i + 1}
              className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4">
                <r.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm mb-5 flex-1">{r.desc}</p>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity self-start"
              >
                {r.cta} <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Podcast */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 rounded-3xl bg-secondary/50 border border-border"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
              <Mic className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-2xl">Podcast BotaniApp</h3>
              <p className="text-sm text-muted-foreground font-body">8 episodios sobre nuestra experiencia, desafíos y aprendizajes.</p>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {episodes.map((ep, i) => (
              <motion.div
                key={ep}
                variants={fadeUp}
                custom={i + 1}
                className="p-4 rounded-2xl bg-card border border-border hover:border-primary transition-colors"
              >
                <p className="font-body font-semibold text-sm text-foreground">{ep}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}