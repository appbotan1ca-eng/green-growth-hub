import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, FileText, TrendingUp, Quote } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const cards = [
  {
    icon: AlertTriangle,
    title: "Problema",
    text: "Muchos estudiantes desconocen la flora local y la importancia ecológica de las plantas, lo que debilita la educación ambiental y la conciencia sobre la biodiversidad.",
  },
  {
    icon: Lightbulb,
    title: "Solución",
    text: "BotaniApp, una aplicación educativa interactiva que enseña botánica mediante quizzes, retos y exploración visual, haciendo el aprendizaje divertido y significativo.",
  },
  {
    icon: FileText,
    title: "Justificación",
    text: "Integrar tecnología y educación ambiental permite formar ciudadanos responsables, fortalecer competencias digitales y promover el cuidado del entorno desde las aulas.",
  },
  {
    icon: TrendingUp,
    title: "Impacto esperado",
    text: "Beneficios ambientales (mayor conciencia ecológica), sociales (participación comunitaria) y educativos (aprendizaje activo de la botánica).",
  },
];

export default function AboutProjectSection() {
  return (
    <section id="sobre-proyecto" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-display font-bold text-sm mb-4">
            🌱 Sobre el Proyecto
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            Conoce <span className="text-gradient-green">BotaniApp</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Un proyecto productivo para fortalecer la educación ambiental a través de la tecnología.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              custom={i + 1}
              className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <c.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-bold text-foreground text-xl">{c.title}</h3>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 rounded-3xl bg-gradient-hero text-center overflow-hidden"
        >
          <Quote className="absolute top-4 left-4 text-primary-foreground/20" size={64} />
          <p className="relative font-display font-bold text-2xl sm:text-3xl text-primary-foreground italic">
            "Aprender botánica hoy es proteger el planeta mañana."
          </p>
          <p className="relative mt-3 text-primary-foreground/80 font-body">— Frase del proyecto BotaniApp</p>
        </motion.div>
      </div>
    </section>
  );
}