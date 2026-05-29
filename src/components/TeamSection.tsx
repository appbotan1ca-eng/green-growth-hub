import { motion } from "framer-motion";
import { User } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const members = [
  { name: "Angelo Samir Rodríguez Zabala", initials: "AR", role: "Director de Proyecto" },
  { name: "Juan Felipe Contreras Velasco", initials: "JC", role: "Investigación" },
  { name: "Santiago Alejandro Castro Bautista", initials: "SC", role: "Diseño UX / UI" },
  { name: "Daniel Esteban Salcedo López", initials: "DS", role: "Desarrollo y Tecnología" },
  { name: "Samira Alexandra", initials: "SA", role: "Comunicación Digital" },
];

const colors = [
  "from-green-emerald to-green-bright",
  "from-green-deep to-green-emerald",
  "from-green-bright to-green-glow",
  "from-accent to-green-emerald",
  "from-green-light to-green-bright",
];

export default function TeamSection() {
  return (
    <section id="integrantes" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-display font-bold text-sm mb-4">
            👥 Nuestro Equipo
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-black text-foreground">
            <span className="text-gradient-green">Integrantes</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              custom={i + 1}
              className="group flex flex-col items-center p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl font-display font-black text-primary-foreground">{m.initials}</span>
              </div>
              <h4 className="font-display font-bold text-foreground text-center text-lg mb-1">{m.name}</h4>
              <p className="text-sm text-primary font-display font-bold">{m.role}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">Estudiante Media Técnica</p>
              <p className="text-xs text-muted-foreground/80 font-body">Inst. Técnico Mercedes Abrego</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
