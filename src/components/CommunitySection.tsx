import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, MessagesSquare, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function CommunitySection() {
  return (
    <section id="participacion" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            <span className="text-gradient-green">Participación</span> Comunitaria
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Espacios de interacción con la comunidad educativa para escuchar, debatir y mejorar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Chat */}
          <motion.div variants={fadeUp} custom={1} className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4">
              <MessageCircle className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-2">Chat / WhatsApp</h3>
            <p className="text-sm text-muted-foreground font-body mb-5 flex-1">
              Canal directo con el equipo de BotaniApp para preguntas y sugerencias.
            </p>
            <a
              href="https://wa.me/573000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Abrir WhatsApp <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Encuesta */}
          <motion.div variants={fadeUp} custom={2} className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4">
              <ClipboardList className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-2">Encuesta de impacto</h3>
            <p className="text-sm text-muted-foreground font-body mb-5 flex-1">
              Formulario en Google Forms para conocer la opinión de los usuarios sobre BotaniApp.
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Responder encuesta <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Foro */}
          <motion.div variants={fadeUp} custom={3} className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4">
              <MessagesSquare className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display font-bold text-foreground text-xl mb-2">Foro de discusión</h3>
            <p className="text-sm text-muted-foreground font-body mb-5 flex-1">
              Comparte ideas y debate sobre educación ambiental y el impacto del proyecto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Unirme al foro
            </a>
          </motion.div>
        </motion.div>

        {/* Resultados encuesta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-7 rounded-3xl bg-card border border-border shadow-card"
        >
          <h3 className="font-display font-bold text-foreground text-xl mb-4">📊 Resultados preliminares de la encuesta</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { value: "92%", label: "considera la app útil" },
              { value: "88%", label: "aprendió sobre plantas locales" },
              { value: "95%", label: "la recomendaría a otros" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-secondary">
                <p className="font-display font-black text-4xl text-gradient-green mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}