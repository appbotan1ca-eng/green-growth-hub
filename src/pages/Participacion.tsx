import { MessagesSquare, GraduationCap, ClipboardList, LifeBuoy, ExternalLink, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

export default function Participacion() {
  return (
    <PageLayout>
      <PageHero
        icon={MessagesSquare}
        eyebrow="Participación"
        title="Participación de la comunidad"
        subtitle="Accede a los espacios de interacción: foros, tutoriales, encuesta y capacitación."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <SectionCard icon={MessagesSquare} title="Foros de discusión">
              <p className="mb-4">
                Espacio para que la comunidad educativa comparta ideas, realice preguntas y discuta
                temas relacionados con el impacto del proyecto.
              </p>
              <a
                href="/gestion-comunitaria/foros"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline font-semibold"
              >
                Ir a foros <ArrowRight size={14} />
              </a>
            </SectionCard>

            <SectionCard icon={ClipboardList} title="Encuesta de impacto">
              <p className="mb-4">
                Formulario para recopilar opinión sobre el proyecto y su impacto en la comunidad educativa.
              </p>
              <a
                href="/gestion-comunitaria/encuestas"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
              >
                Responder encuesta
              </a>
            </SectionCard>

            <SectionCard icon={GraduationCap} title="Tutoriales y guías">
              <p className="mb-4">
                Recursos educativos externos: guía oficial de residuos (MinAmbiente), iNaturalist y tutorial de siembra.
              </p>
              <a
                href="/gestion-directiva/tutoriales-guias"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline font-semibold"
              >
                Ver tutoriales <ArrowRight size={14} />
              </a>
            </SectionCard>

            <SectionCard icon={LifeBuoy} title="Capacitación">
              <p className="mb-4">
                Cursos y diplomados oficiales de entidades reconocidas (MinAmbiente, UPN, Humboldt).
              </p>
              <a
                href="/gestion-directiva/capacitacion"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline font-semibold"
              >
                Ver capacitación <ArrowRight size={14} />
              </a>
            </SectionCard>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <MessagesSquare className="text-primary" size={22} /> Nota
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Las secciones completas de Foros, Encuestas, Tutoriales y Capacitación están disponibles
              en el menú principal bajo "Gestión Comunitaria" y "Gestión Directiva".
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
