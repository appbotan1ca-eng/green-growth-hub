import { motion } from "framer-motion";
import { BookOpen, Target, Heart, Shield } from "lucide-react";
import heroBotanical from "@/assets/hero-botanical.jpg";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const values = [
  { icon: BookOpen, title: "Educación", desc: "Fomentar el aprendizaje activo sobre botánica y medio ambiente." },
  { icon: Target, title: "Innovación", desc: "Usar tecnología como herramienta para la transformación educativa." },
  { icon: Heart, title: "Compromiso", desc: "Cultivar el respeto y amor por la naturaleza en cada estudiante." },
  { icon: Shield, title: "Responsabilidad", desc: "Promover la sostenibilidad y el cuidado del planeta." },
];

export default function WelcomeSection() {
  return (
    <section id="quienes-somos" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bienvenida */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-display font-bold text-sm mb-4">
            👋 ¡Bienvenidos!
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-6">
            ¿Quiénes <span className="text-gradient-green">Somos</span>?
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
            Somos estudiantes de Media Técnica del <strong className="text-foreground">Instituto Técnico Mercedes Abrego</strong>, 
            apasionados por la educación ambiental y la tecnología. Creamos <strong className="text-primary">FloraQuest</strong>, 
            una aplicación educativa sobre botánica que busca fortalecer los conocimientos ambientales de nuestra comunidad 
            de manera interactiva y divertida.
          </motion.p>
        </motion.div>

        {/* Image + Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-10 items-center mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="rounded-3xl overflow-hidden shadow-card">
            <img src={heroBotanical} alt="Jardín botánico" className="w-full h-72 object-cover" loading="lazy" width={960} height={288} />
          </motion.div>
          <motion.div variants={fadeUp} custom={1}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Sobre el Proyecto</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Esta plataforma digital tiene como objetivo socializar, divulgar y sensibilizar a la comunidad educativa 
              sobre el impacto de nuestro proyecto productivo. A través de herramientas tecnológicas y recursos multimedia, 
              buscamos acercar el mundo de la botánica a todos.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              <strong className="text-foreground">Beneficios:</strong> Aprendizaje interactivo, concientización ambiental, 
              uso responsable de la tecnología y fortalecimiento de competencias en educación ambiental.
            </p>
          </motion.div>
        </motion.div>

        {/* Valores */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={fadeUp} custom={0} className="text-3xl font-display font-bold text-center text-foreground mb-10">
            Nuestros <span className="text-gradient-green">Valores</span>
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                custom={i + 1}
                className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <v.icon size={24} />
                </div>
                <h4 className="font-display font-bold text-foreground mb-2">{v.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
