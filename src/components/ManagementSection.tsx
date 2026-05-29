import { motion } from "framer-motion";
import { BookOpen, MessagesSquare, GraduationCap, UserCog, Briefcase, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const directiva = [
  { icon: BookOpen, title: "Tutoriales y guías", text: "Videos instructivos y guías paso a paso sobre botánica, uso de la app y técnicas de investigación." },
  { icon: MessagesSquare, title: "Foro de discusión", text: "Espacio para que estudiantes y docentes compartan ideas y preguntas sobre el proyecto." },
  { icon: GraduationCap, title: "Capacitación", text: "Recursos y cursos recomendados sobre reciclaje, educación ambiental y sostenibilidad." },
];

const asesores = [
  { name: "Angelo S. Rodríguez", role: "Director de Proyecto" },
  { name: "Juan F. Contreras", role: "Coordinador de Investigación" },
  { name: "Santiago A. Castro", role: "Líder de Diseño UX" },
  { name: "Daniel E. Salcedo", role: "Desarrollo y Tecnología" },
  { name: "Samira Alexandra", role: "Comunicación y Contenidos" },
];

export default function ManagementSection() {
  return (
    <section id="gestion" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            <span className="text-gradient-green">Gestión</span> del Proyecto
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Recursos directivos y organizacionales que sostienen el desarrollo de BotaniApp.
          </motion.p>
        </motion.div>

        {/* Directiva */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-6">
            Gestión Directiva — Herramientas de apoyo
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {directiva.map((d, i) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                custom={i + 1}
                className="p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <d.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg mb-2">{d.title}</h4>
                <p className="text-sm text-muted-foreground font-body">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizacional */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-6">
            Gestión Organizacional — Servicios de apoyo
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} custom={1} className="p-7 rounded-3xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <UserCog className="text-primary" size={28} />
                <h4 className="font-display font-bold text-foreground text-xl">Orientación académica</h4>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-4">
                Equipo de asesores académicos y roles dentro del proyecto. Horario de atención: lunes a viernes, 8:00 a.m. – 2:00 p.m.
              </p>
              <ul className="space-y-2">
                {asesores.map((a) => (
                  <li key={a.name} className="flex justify-between gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                    <span className="font-display font-semibold text-foreground text-sm">{a.name}</span>
                    <span className="text-xs text-primary font-body">{a.role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} custom={2} className="p-7 rounded-3xl bg-card border border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-primary" size={28} />
                <h4 className="font-display font-bold text-foreground text-xl">Apoyo profesional</h4>
              </div>
              <p className="text-sm text-muted-foreground font-body mb-4">
                Contactos y recursos para asesoría en análisis, diseño e implementación de proyectos de investigación ambiental.
              </p>
              <ul className="space-y-2 text-sm font-body">
                <li className="flex items-center gap-2 text-foreground">
                  <ExternalLink size={14} className="text-primary"/> Jardín Botánico de Colombia
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <ExternalLink size={14} className="text-primary"/> Ministerio de Ambiente
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <ExternalLink size={14} className="text-primary"/> SENA – Programas ambientales
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}