import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Shield, Leaf, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const recursosComplementarios = [
  {
    title: "Observatorio Ambiental de Barranquilla – Educación Ambiental",
    descripcion: "Recursos pedagógicos, guías didácticas, indicadores ambientales y materiales para proyectos escolares de educación ambiental.",
    url: "https://observatorio.barranquillaverde.gov.co/educacion-ambiental",
    tipo: "Observatorio ambiental",
    icon: Leaf,
  },
  {
    title: "INCIVA – Gestión Ambiental",
    descripcion: "Programas de gestión ambiental, conservación del patrimonio natural y cultural del Valle del Cauca. Recursos para proyectos educativos.",
    url: "https://inciva.gov.co/v2/gestion-ambiental",
    tipo: "Instituto regional",
    icon: Building2,
  },
  {
    title: "Ministerio de Ambiente – Recursos educativos",
    descripcion: "Guías, cartillas y materiales oficiales para educación ambiental escolar. Normativa y herramientas pedagógicas.",
    url: "https://www.minambiente.gov.co/",
    tipo: "Entidad gubernamental",
    icon: Shield,
  },
];

export default function Capacitacion() {
  return (
    <PageLayout>
      <PageHero
        icon={GraduationCap}
        eyebrow="Gestión Directiva"
        title="Capacitación y recursos formativos"
        subtitle="Recursos complementarios oficiales de entidades reconocidas para estudiantes y docentes sobre temas ambientales y educativos."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl text-gradient-green mb-6 flex items-center gap-2">
            <Leaf className="text-primary" size={24} /> Recursos de capacitación complementarios
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {recursosComplementarios.map((rec, i) => (
              <SectionCard key={rec.title} title={rec.title} delay={i * 0.07}>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {rec.tipo}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <rec.icon className="text-primary" size={20} />
                </div>
                <p className="font-body text-sm text-muted-foreground mb-4">{rec.descripcion}</p>
                <a
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                >
                  Acceder <ExternalLink size={14} />
                </a>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Nota importante">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Estos son recursos externos de entidades oficiales (Observatorio Ambiental de Barranquilla, INCIVA, Ministerio de Ambiente).
              El proyecto FloraQuest los recomienda como materiales de apoyo complementarios.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              No se afirma que el proyecto haya realizado o impartido capacitaciones propias. Son referencias externas para quien desee profundizar.
            </p>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Solo recursos de entidades reales y funcionales (Observatorio Ambiental, INCIVA, MinAmbiente)</li>
              <li>✓ Enlaces directos verificados y funcionando</li>
              <li>✓ No se inventan capacitaciones realizadas por el proyecto</li>
              <li>✓ Temas alineados al impacto y aplicación del proyecto productivo</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
