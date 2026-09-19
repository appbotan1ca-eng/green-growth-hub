import { motion } from "framer-motion";
import { Rocket, Leaf, Smartphone, GraduationCap } from "lucide-react";
import leafMascot from "@/assets/leaf-mascot.png";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ElevatorPitchSection() {
  return (
    <section id="elevator-pitch" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl opacity-10"
            style={{ top: `${20 + i * 20}%`, right: `${5 + i * 12}%` }}
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          >
            🌿
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0} className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-primary-foreground" size={28} />
            <span className="text-primary-foreground/80 font-display font-bold text-sm uppercase tracking-widest">Elevator Pitch</span>
          </motion.div>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-black text-primary-foreground mb-8">
            ¿Por qué FloraQuest?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img
              variants={fadeUp}
              custom={1}
              src={leafMascot}
              alt="Mascota FloraQuest"
              className="w-32 h-32 animate-wiggle flex-shrink-0"
            />
            <motion.div variants={fadeUp} custom={2}>
              <p className="text-foreground font-body text-lg leading-relaxed mb-4">
                <strong className="text-primary font-display">¿Sabías que</strong> muchos estudiantes desconocen las plantas que los rodean 
                y su importancia para el medio ambiente? En el Instituto Técnico Mercedes Abrego identificamos esta necesidad 
                y creamos <strong className="text-primary">FloraQuest</strong>.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Nuestra aplicación educativa hace que aprender botánica sea tan divertido como un juego: 
                quizzes interactivos, identificación de plantas, datos curiosos y retos ambientales. 
                Todo diseñado para que la educación ambiental sea accesible, entretenida y significativa.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Con FloraQuest no solo aprendes sobre plantas, <strong className="text-foreground">te conviertes en un 
                defensor del medio ambiente</strong>. 🌱
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            { icon: Smartphone, title: "Interactiva", desc: "Aprende con quizzes, retos y exploración visual." },
            { icon: Leaf, title: "Ecológica", desc: "Fomenta la conciencia y acción ambiental." },
            { icon: GraduationCap, title: "Educativa", desc: "Contenido alineado con competencias ambientales." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i + 1}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <item.icon className="mx-auto text-primary-foreground mb-3" size={32} />
              <h4 className="font-display font-bold text-primary-foreground text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-primary-foreground/75 font-body">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
