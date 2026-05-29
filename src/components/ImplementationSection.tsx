import { motion } from "framer-motion";
import { Search, PencilRuler, Hammer, FlaskConical, Camera, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const steps = [
  { icon: Search, title: "Investigación", text: "Recolección de información sobre flora local y necesidades educativas." },
  { icon: PencilRuler, title: "Diseño", text: "Bocetos, prototipos UI y diseño de la experiencia educativa." },
  { icon: Hammer, title: "Elaboración", text: "Desarrollo de la aplicación con contenidos interactivos y multimedia." },
  { icon: FlaskConical, title: "Prueba", text: "Pruebas con compañeros, ajustes y validación pedagógica." },
];

const results = [
  "Prototipo funcional de BotaniApp con módulos interactivos.",
  "Plataforma web de divulgación publicada en línea.",
  "Retroalimentación positiva de estudiantes y docentes.",
  "Mejora identificada: ampliar catálogo de plantas locales.",
];

export default function ImplementationSection() {
  return (
    <section id="implementacion" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            <span className="text-gradient-green">Implementación</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Etapas del proceso, evidencias y resultados preliminares del proyecto productivo.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i + 1}
              className="relative p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-2 w-9 h-9 rounded-full bg-primary text-primary-foreground font-display font-black flex items-center justify-center shadow-playful">
                {i + 1}
              </div>
              <s.icon className="text-primary mb-3" size={28} />
              <h4 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h4>
              <p className="text-sm text-muted-foreground font-body">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Evidencias */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
            <Camera className="text-primary" /> Evidencias del proceso
          </motion.h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n, i) => (
              <motion.div
                key={n}
                variants={fadeUp}
                custom={i + 1}
                className="aspect-square rounded-2xl bg-gradient-to-br from-green-pale to-secondary border border-border flex flex-col items-center justify-center text-center p-4"
              >
                <Camera className="text-primary/40 mb-2" size={36} />
                <p className="text-xs text-muted-foreground font-body">Evidencia {n}<br/><span className="opacity-70">(Reemplazar con foto real)</span></p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resultados */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="p-8 rounded-3xl bg-card border border-border shadow-card"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-5">
            Resultados preliminares
          </motion.h3>
          <ul className="space-y-3">
            {results.map((r, i) => (
              <motion.li
                key={r}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-3 text-foreground font-body"
              >
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                <span>{r}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}