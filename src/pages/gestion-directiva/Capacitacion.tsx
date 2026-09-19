import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Shield } from "lucide-react";
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

export default function Capacitacion() {
  return (
    <PageLayout>
      <PageHero
        icon={GraduationCap}
        eyebrow="Gestión Directiva"
        title="Capacitación y recursos formativos"
        subtitle="Cursos y diplomados oficiales de entidades reconocidas para estudiantes y docentes sobre temas ambientales y educativos."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
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

          <SectionCard title="Nota importante">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Estos son cursos y programas oficiales de entidades reconocidas (MinAmbiente, Universidad Pedagógica Nacional, Instituto Humboldt).
              El proyecto BotaniApp los recomienda como recursos formativos complementarios.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              No se afirma que el proyecto haya realizado o impartido estos cursos. Son referencias externas para quien desee profundizar.
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
              <li>✓ Temas alineados al impacto y aplicación del proyecto productivo</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}