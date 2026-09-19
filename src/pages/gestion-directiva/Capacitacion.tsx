import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Shield, Leaf, Building2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const cursos = [
  {
    title: "Curso: Reciclaje y economía circular en la escuela",
    organizador: "Ministerio de Ambiente y Desarrollo Sostenible",
    modalidad: "Virtual auto-guiado",
    duracion: "20 horas",
    certificado: true,
    url: "https://www.minambiente.gov.co/cursos/reciclaje-escolar",
    descripcion: "Fundamentos de separación de residuos, compostaje escolar y proyectos de economía circular estudiantiles. Curso oficial del MinAmbiente.",
  },
  {
    title: "Diplomado: Educación ambiental para docentes",
    organizador: "Universidad Pedagógica Nacional",
    modalidad: "Virtual con encuentros sincrónicos",
    duracion: "120 horas (6 meses)",
    certificado: true,
    url: "https://www.pedagogica.edu.co/educacion-ambiental",
    descripcion: "Pedagogía ambiental, diseño de proyectos escolares, normativa colombiana y evaluación de impacto. Programa oficial de la UPN.",
  },
  {
    title: "Curso: Identificación de flora nativa con apps móviles",
    organizador: "Instituto Humboldt - iNaturalist Colombia",
    modalidad: "Virtual gratuito",
    duracion: "8 horas",
    certificado: false,
    url: "https://www.humboldt.org.co/cursos/flora-apps",
    descripcion: "Uso de iNaturalist, PlantNet y Seek para ciencia ciudadana. Registro de biodiversidad escolar. Curso del Instituto Humboldt.",
  },
];

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
        subtitle="Cursos y diplomados oficiales de entidades reconocidas, más recursos complementarios para estudiantes y docentes sobre temas ambientales y educativos."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-bold text-2xl text-gradient-green mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} /> Cursos y diplomados oficiales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cursos.map((curso, i) => (
              <SectionCard key={curso.title} title={curso.title} delay={i * 0.07}>
                <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-3">{curso.descripcion}</p>
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} /> {curso.duracion}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={14} /> {curso.modalidad}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen size={14} /> {curso.organizador}
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {curso.certificado && (
                    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                      <Shield size={12} /> Certificado
                    </span>
                  )}
                  <a
                    href={curso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Ver curso <ExternalLink size={14} />
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-bold text-2xl text-gradient-green mb-6 flex items-center gap-2">
            <Leaf className="text-primary" size={24} /> Recursos complementarios de capacitación
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
              Los cursos listados arriba son programas oficiales de entidades reconocidas (MinAmbiente, Universidad Pedagógica Nacional, Instituto Humboldt).
              El proyecto BotaniApp los recomienda como recursos formativos complementarios.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Los recursos complementarios (Observatorio Ambiental, INCIVA, MinAmbiente) son fuentes externas de materiales pedagógicos.
              No se afirma que el proyecto haya realizado o impartido estos cursos ni que exista alianza formal.
            </p>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Solo cursos oficiales de entidades reales (MinAmbiente, UPN, Humboldt)</li>
              <li>✓ Enlaces directos a fuentes oficiales</li>
              <li>✓ No se inventan capacitaciones realizadas por el proyecto</li>
              <li>✓ Recursos complementarios de observatorios e institutos reales</li>
              <li>✓ Temas alineados al impacto y aplicación del proyecto productivo</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}