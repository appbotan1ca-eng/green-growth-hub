import { motion } from "framer-motion";
import { MessagesSquare, GraduationCap, ClipboardList, LifeBuoy, PlaySquare } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const tutoriales = [
  { title: "Cómo sembrar en casa paso a paso", type: "Video instructivo" },
  { title: "Guía de separación de residuos", type: "Guía PDF" },
  { title: "Identifica plantas con tu celular", type: "Tutorial interactivo" },
  { title: "Técnicas de investigación escolar", type: "Guía paso a paso" },
];

const comentarios = [
  { name: "Docente de Ciencias", text: "Excelente iniciativa, los estudiantes se ven muy motivados con el tema ambiental." },
  { name: "Estudiante 10°", text: "Me gustó la idea de aprender sobre plantas con retos y contenido digital." },
  { name: "Coordinación académica", text: "El proyecto aporta a la cultura ecológica de toda la institución." },
];

export default function Participacion() {
  return (
    <PageLayout>
      <PageHero
        icon={MessagesSquare}
        eyebrow="Participación"
        title="La comunidad también construye"
        subtitle="Foro, tutoriales, capacitación, encuesta de impacto y apoyo profesional."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <MessagesSquare className="text-primary" size={28} /> Foro de discusión
          </h2>
          <div className="space-y-4">
            {comentarios.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 rounded-3xl bg-card border border-border shadow-card"
              >
                <p className="font-display font-bold text-foreground text-sm mb-1">{c.name}</p>
                <p className="font-body text-muted-foreground text-sm">{c.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            Espacio de opiniones de la comunidad educativa. Nuevas participaciones se recogen por el
            formulario de contacto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-14">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <PlaySquare className="text-primary" size={28} /> Tutoriales y guías
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {tutoriales.map((t, i) => (
              <SectionCard key={t.title} icon={GraduationCap} title={t.title} delay={i * 0.07}>
                <p>{t.type}</p>
              </SectionCard>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-14 grid gap-8 md:grid-cols-2">
          <SectionCard icon={ClipboardList} title="Encuesta de impacto">
            <p>
              Ayúdanos a mejorar respondiendo la encuesta de opinión sobre el proyecto y su impacto
              en la comunidad educativa.
            </p>
            <a
              href="https://docs.google.com/forms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
            >
              Responder encuesta
            </a>
          </SectionCard>
          <SectionCard icon={LifeBuoy} title="Capacitación y apoyo profesional" delay={0.1}>
            <p>
              Talleres de sensibilización ambiental para estudiantes y docentes, además de
              acompañamiento del docente de Tecnología e Informática para el diseño e implementación
              de proyectos de investigación.
            </p>
          </SectionCard>
        </div>
      </section>
    </PageLayout>
  );
}