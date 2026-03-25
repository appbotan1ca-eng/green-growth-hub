import { motion } from "framer-motion";
import { Compass, Eye, Lightbulb, Users, Globe, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const principles = [
  { icon: Lightbulb, text: "Aprendizaje significativo a través de la tecnología" },
  { icon: Users, text: "Trabajo colaborativo y multidisciplinario" },
  { icon: Globe, text: "Conciencia ambiental y sostenibilidad" },
  { icon: Leaf, text: "Preservación de la biodiversidad local" },
];

export default function MissionVisionSection() {
  return (
    <section id="mision-vision" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            Misión y <span className="text-gradient-green">Visión</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Misión */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="relative p-8 rounded-3xl bg-card border border-border shadow-card overflow-hidden group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero" />
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
              <Compass className="text-primary-foreground" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Misión</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Desarrollar una aplicación educativa innovadora sobre botánica que permita a los estudiantes 
              y la comunidad educativa del Instituto Técnico Mercedes Abrego fortalecer sus conocimientos 
              en educación ambiental, utilizando herramientas tecnológicas interactivas que fomenten el 
              aprendizaje significativo y el compromiso con la sostenibilidad.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="relative p-8 rounded-3xl bg-card border border-border shadow-card overflow-hidden group hover:shadow-card-hover transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero" />
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
              <Eye className="text-accent-foreground" size={28} />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Visión</h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ser un referente en la integración de tecnología y educación ambiental, inspirando a futuras 
              generaciones a valorar y proteger la biodiversidad a través de herramientas digitales accesibles, 
              creativas y de impacto social positivo en la comunidad educativa.
            </p>
          </motion.div>
        </motion.div>

        {/* Objetivos y Principios */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-center text-foreground mb-10">
            Objetivos y <span className="text-gradient-green">Principios</span>
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <p.icon size={20} className="text-primary" />
                </div>
                <p className="text-foreground font-body font-semibold pt-1.5">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
