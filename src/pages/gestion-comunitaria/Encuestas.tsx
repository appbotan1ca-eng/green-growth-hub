import { ClipboardList, ExternalLink, Loader2 } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdewSZbwgW6tZIHo5vjKDg3Ucf3ETw3rKfqN37sD68oeQwAJQ/viewform?usp=dialog";

const preguntasEncuesta = [
  "¿Conocías el proyecto FloraQuest antes de visitar esta plataforma?",
  "¿Qué tan útil consideras la información presentada en la plataforma?",
  "¿Crees que FloraQuest contribuye al cuidado del medio ambiente?",
  "¿Recomendarías la plataforma a otros estudiantes o docentes?",
  "¿Qué funcionalidad te gustaría que se agregara a futuro?",
  "¿Has aplicado algún aprendizaje de la plataforma en tu vida diaria?",
  "Califica tu experiencia general con la plataforma (1-5)",
  "Comentarios o sugerencias adicionales",
];

export default function Encuestas() {
  return (
    <PageLayout>
      <PageHero
        icon={ClipboardList}
        eyebrow="Gestión Comunitaria"
        title="Encuesta de impacto"
        subtitle="Formulario para recopilar opinión sobre el impacto del proyecto en la comunidad educativa."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={ClipboardList} title="Encuesta de Impacto - FloraQuest" className="mb-8">
            <p className="mb-6">
              Ayúdanos a mejorar respondiendo esta encuesta de opinión sobre el proyecto y su impacto
              en la comunidad educativa. Tus respuestas son anónimas.
            </p>
            <div className="space-y-3 mb-6">
              {preguntasEncuesta.map((preg, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-body text-sm text-foreground">{preg}</span>
                </div>
              ))}
            </div>
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-lg shadow-playful hover:-translate-y-1 transition-all"
            >
              <ClipboardList size={22} /> Responder encuesta en Google Forms
            </a>
            <p className="mt-4 text-xs font-body text-muted-foreground text-center">
              Se abrirá en una nueva pestaña. La encuesta está alojada en Google Forms.
            </p>
          </SectionCard>

          <SectionCard title="Resultados">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Actualmente no hay respuestas reales suficientes para mostrar resultados.
              La encuesta está preparada para que los resultados puedan analizarse y publicarse
              cuando existan datos reales de la comunidad.
            </p>
            <p className="font-body text-xs text-muted-foreground">
              Los resultados se analizarán y publicarán en esta sección una vez se recopilen
              respuestas significativas.
            </p>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <ClipboardList className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Encuesta construida con Google Forms (enlace real proporcionado)</li>
              <li>✓ Accesible desde esta sección de la plataforma</li>
              <li>✓ Preguntas sobre opinión, impacto y mejoras</li>
              <li>✓ Preparada para análisis y publicación de resultados reales futuros</li>
              <li>✓ Enlace: https://docs.google.com/forms/d/e/1FAIpQLSdewSZbwgW6tZIHo5vjKDg3Ucf3ETw3rKfqN37sD68oeQwAJQ/viewform?usp=dialog</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
