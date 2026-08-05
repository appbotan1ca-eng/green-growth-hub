import { motion } from "framer-motion";
import { Hammer, Search, PenTool, Wrench, FlaskConical, Camera, TrendingUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const etapas = [
  { icon: Search, title: "1. Investigación", text: "Diagnóstico del entorno, encuestas y revisión de fuentes sobre flora local." },
  { icon: PenTool, title: "2. Diseño", text: "Bocetos de la plataforma, identidad visual verde y estructura de contenidos." },
  { icon: Wrench, title: "3. Elaboración", text: "Construcción del sitio, producción de textos, imágenes y multimedia." },
  { icon: FlaskConical, title: "4. Prueba", text: "Validación con compañeros y docentes, ajustes de usabilidad y contenido." },
];

const evidencias = [
  "Registro fotográfico del trabajo en equipo",
  "Bocetos y wireframes de la plataforma",
  "Capturas del prototipo funcional",
  "Muestras de plantas documentadas",
  "Sesiones de socialización en el aula",
  "Pruebas de navegación con usuarios",
];

export default function Implementacion() {
  return (
    <PageLayout>
      <PageHero
        icon={Hammer}
        eyebrow="Implementación"
        title="Cómo lo estamos construyendo"
        subtitle="Proceso de desarrollo, evidencias del trabajo y resultados preliminares."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-8 sm:grid-cols-2">
          {etapas.map((e, i) => (
            <SectionCard key={e.title} icon={e.icon} title={e.title} delay={i * 0.08}>
              <p>{e.text}</p>
            </SectionCard>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-12">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Camera className="text-primary" size={28} /> Evidencias
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evidencias.map((ev, i) => (
              <motion.div
                key={ev}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-3xl overflow-hidden bg-card border border-border shadow-card"
              >
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <Camera className="text-primary/50" size={36} />
                </div>
                <p className="p-4 font-body text-sm text-muted-foreground">{ev}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            Espacios reservados: reemplaza cada recuadro por las fotografías reales del proyecto.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-12 grid gap-8 sm:grid-cols-2">
          <SectionCard icon={TrendingUp} title="Qué se logró">
            <p>
              Un prototipo navegable de la plataforma, contenidos educativos base y la
              socialización del proyecto con estudiantes de la institución.
            </p>
          </SectionCard>
          <SectionCard icon={TrendingUp} title="Mejoras identificadas" delay={0.1}>
            <p>
              Ampliar la base de especies documentadas, incorporar retos gamificados y mejorar la
              accesibilidad en dispositivos móviles.
            </p>
          </SectionCard>
        </div>
      </section>
    </PageLayout>
  );
}