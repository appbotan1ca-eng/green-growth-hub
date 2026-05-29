import { motion } from "framer-motion";
import { Recycle, Droplets, TreePine, Globe2 } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const benefits = [
  { icon: Recycle, title: "Reducción de residuos", text: "Promueve el consumo responsable y prácticas sostenibles." },
  { icon: TreePine, title: "Conservación de flora", text: "Sensibiliza sobre la importancia de las plantas locales." },
  { icon: Droplets, title: "Uso responsable de recursos", text: "Fomenta el cuidado del agua, suelo y biodiversidad." },
  { icon: Globe2, title: "Conciencia global", text: "Forma ciudadanos comprometidos con el medio ambiente." },
];

export default function EnvironmentalImpactSection() {
  return (
    <section id="impacto-ambiental" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-7xl opacity-10"
            style={{ top: `${10 + i * 18}%`, left: `${5 + i * 18}%` }}
            animate={{ y: [0, -15, 0], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
          >
            🌍
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-primary-foreground mb-4">
            Impacto Ambiental
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/85 font-body max-w-2xl mx-auto">
            Nuestro compromiso con la sensibilización y el cuidado del planeta.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          <motion.div variants={fadeUp} custom={1} className="p-7 rounded-3xl bg-card/95 backdrop-blur-sm shadow-xl">
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">Problema ambiental</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              La pérdida de biodiversidad y el desconocimiento de la flora local limitan la capacidad
              de las nuevas generaciones para proteger su entorno natural.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} className="p-7 rounded-3xl bg-card/95 backdrop-blur-sm shadow-xl">
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">Solución propuesta</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              BotaniApp acerca el conocimiento botánico a estudiantes mediante una experiencia
              digital interactiva, generando conciencia y acción ambiental.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              variants={fadeUp}
              custom={i + 1}
              className="p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              <b.icon className="text-primary-foreground mb-3" size={32} />
              <h4 className="font-display font-bold text-primary-foreground text-lg mb-1">{b.title}</h4>
              <p className="text-sm text-primary-foreground/80 font-body">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}