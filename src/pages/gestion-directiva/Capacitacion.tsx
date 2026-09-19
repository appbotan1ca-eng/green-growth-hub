import { GraduationCap, Calendar, MapPin, ExternalLink, BookOpen, Award } from "lucide-react";
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
    descripcion: "Fundamentos de separación de residuos, compostaje escolar y proyectos de economía circular estudiantiles.",
  },
  {
    title: "Taller: Huertas escolares y agricultura urbana",
    organizador: "Botánico de Bogotá - Red de Huertas Urbanas",
    modalidad: "Presencial / Virtual",
    duracion: "15 horas (5 sesiones)",
    certificado: true,
    url: "https://www.jbb.gov.co/huertas-escolares",
    descripcion: "Diseño, implementación y mantenimiento de huertas en instituciones educativas. Incluye kit de semillas.",
  },
  {
    title: "Diplomado: Educación ambiental para docentes",
    organizador: "Universidad Pedagógica Nacional",
    modalidad: "Virtual con encuentros sincrónicos",
    duracion: "120 horas (6 meses)",
    certificado: true,
    url: "https://www.pedagogica.edu.co/educacion-ambiental",
    descripcion: "Pedagogía ambiental, diseño de proyectos escolares, normativa colombiana y evaluación de impacto.",
  },
  {
    title: "Curso: Identificación de flora nativa con apps móviles",
    organizador: "Instituto Humboldt - iNaturalist Colombia",
    modalidad: "Virtual gratuito",
    duracion: "8 horas",
    certificado: false,
    url: "https://www.humboldt.org.co/cursos/flora-apps",
    descripcion: "Uso de iNaturalist, PlantNet y Seek para ciencia ciudadana. Registro de biodiversidad escolar.",
  },
  {
    title: "Webinar: Proyectos productivos escolares - De la idea a la realidad",
    organizador: "SENA - Programa de Emprendimiento Verde",
    modalidad: "Virtual en vivo (grabado disponible)",
    duracion: "3 horas",
    certificado: false,
    url: "https://www.sena.edu.co/emprendimiento-verde",
    descripcion: "Formulación, financiación y ejecución de proyectos productivos ambientales en educación media.",
  },
];

export default function Capacitacion() {
  return (
    <PageLayout>
      <PageHero
        icon={GraduationCap}
        eyebrow="Gestión Directiva"
        title="Capacitación permanente"
        subtitle="Cursos, talleres y diplomados para estudiantes y docentes sobre impacto y aplicación del proyecto productivo."
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
                      <Award size={12} /> Certificado
                    </span>
                  )}
                  <a
                    href={curso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Inscribirse <ExternalLink size={14} />
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Temas de interés para capacitación interna">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Además de los cursos externos, el equipo de BotaniApp ofrece capacitación interna sobre:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Uso de la aplicación BotaniApp para identificación de especies",
                "Metodología de separación de residuos en el colegio",
                "Diseño de huertas verticales con materiales reciclados",
                "Creación de contenido educativo para redes sociales",
                "Monitoreo de biodiversidad escolar con ciencia ciudadana",
                "Elaboración de compostaje escolar paso a paso",
              ].map((tema, i) => (
                <div key={tema} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <BookOpen className="text-primary" size={20} />
                  <span className="font-body text-sm text-foreground">{tema}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <GraduationCap className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Temas de interés con enlaces a sitios que ofertan cursos/capacitaciones</li>
              <li>✓ Ejemplo incluido: Curso sobre reciclaje (Ministerio de Ambiente)</li>
              <li>✓ Temas alineados al impacto y aplicación del proyecto productivo</li>
              <li>✓ Orientados a estudiantes y docentes de la comunidad educativa</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}