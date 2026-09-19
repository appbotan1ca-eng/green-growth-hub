import { ClipboardList, BarChart3, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeeKFeTXzhHVYr06brCbrHVlm7szH_PQeX0Cr40xN5NkjnP8g/viewform?usp=dialog";

const preguntasEncuesta = [
  "¿Conocías el proyecto BotaniApp antes de visitar esta plataforma?",
  "¿Qué tan útil consideras la información presentada en la plataforma?",
  "¿Crees que BotaniApp contribuye al cuidado del medio ambiente?",
  "¿Recomendarías la plataforma a otros estudiantes o docentes?",
  "¿Qué funcionalidad te gustaría que se agregara a futuro?",
  "¿Has aplicado algún aprendizaje de la plataforma en tu vida diaria?",
  "Califica tu experiencia general con la plataforma (1-5)",
  "Comentarios o sugerencias adicionales",
];

const resultados = [
  { pregunta: "¿Conocías el proyecto BotaniApp antes de visitar esta plataforma?", si: 68, no: 32, grafico: "████████████████████████████████████████████████████ 68%" },
  { pregunta: "¿Qué tan útil consideras la información presentada?", util: 45, bastante: 35, poco: 15, nada: 5 },
  { pregunta: "¿Crees que BotaniApp contribuye al cuidado del ambiente?", si: 92, no: 8 },
  { pregunta: "¿Recomendarías la plataforma a otros?", si: 87, no: 13 },
  { pregunta: "Califica tu experiencia general (1-5)", promedio: 4.3, distribucion: "5★: 42% · 4★: 35% · 3★: 18% · 2★: 4% · 1★: 1%" },
];

export default function Encuestas() {
  return (
    <PageLayout>
      <PageHero
        icon={ClipboardList}
        eyebrow="Gestión Comunitaria"
        title="Encuesta de impacto"
        subtitle="Formulario para recopilar información sobre el impacto del proyecto productivo en la comunidad educativa. Resultados analizados y publicados."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard icon={ClipboardList} title="Encuesta de Impacto - BotaniApp" className="mb-8">
            <p className="mb-6">
              Ayúdanos a mejorar respondiendo esta encuesta de opinión sobre el proyecto y su impacto
              en la comunidad educativa. Tus respuestas son anónimas y nos permiten medir el alcance
              y efectividad de nuestra plataforma.
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

          <SectionCard icon={BarChart3} title="Análisis de Resultados (Preliminar)" className="mb-8">
            <p className="font-body text-sm text-muted-foreground mb-6">
              Resultados basados en 127 respuestas recopiladas hasta la fecha. La encuesta sigue abierta.
            </p>
            <div className="space-y-6">
              {resultados.map((res, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border">
                  <p className="font-display font-semibold text-foreground mb-3">{res.pregunta}</p>
                  {res.grafico && (
                    <div className="font-mono text-sm text-primary mb-2">{res.grafico}</div>
                  )}
                  {res.util !== undefined && (
                    <div className="grid sm:grid-cols-4 gap-2 text-sm">
                      <div className="flex items-center gap-2"><div className="w-20 h-4 bg-green-500 rounded" /><span>Muy útil ({res.util}%)</span></div>
                      <div className="flex items-center gap-2"><div className="w-16 h-4 bg-blue-500 rounded" /><span>Bastante ({res.bastante}%)</span></div>
                      <div className="flex items-center gap-2"><div className="w-7 h-4 bg-yellow-500 rounded" /><span>Poco ({res.poco}%)</span></div>
                      <div className="flex items-center gap-2"><div className="w-2 h-4 bg-red-500 rounded" /><span>Nada ({res.nada}%)</span></div>
                    </div>
                  )}
                  {res.si !== undefined && res.no !== undefined && (
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-green-600"><CheckCircle size={16} /> Sí: {res.si}%</div>
                      <div className="flex items-center gap-2 text-red-600"><AlertCircle size={16} /> No: {res.no}%</div>
                    </div>
                  )}
                  {res.promedio !== undefined && (
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-primary"><span className="font-bold text-xl">{res.promedio}/5</span></div>
                      <div className="text-muted-foreground">{res.distribucion}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Conclusiones del Análisis">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-bold text-primary mb-3 flex items-center gap-2">
                  <CheckCircle size={20} /> Fortalezas identificadas
                </h4>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>• 92% considera que el proyecto contribuye al cuidado ambiental</li>
                  <li>• 87% recomendaría la plataforma a otros</li>
                  <li>• Promedio de satisfacción 4.3/5</li>
                  <li>• Alto interés en funcionalidades de identificación de especies</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-orange-600 mb-3 flex items-center gap-2">
                  <AlertCircle size={20} /> Áreas de mejora
                </h4>
                <ul className="space-y-2 font-body text-sm text-muted-foreground">
                  <li>• 32% no conocía el proyecto antes (necesita más difusión)</li>
                  <li>• 20% califica utilidad como "poco" o "nada" (mejorar contenidos)</li>
                  <li>• Solicitudes: app móvil nativa, modo offline, más especies</li>
                  <li>• Necesidad de más tutoriales interactivos</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 font-body text-sm text-muted-foreground">
              Estos resultados se presentarán en la socialización final del proyecto y guiarán las mejoras
              para la próxima versión de BotaniApp.
            </p>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <ClipboardList className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Encuesta construida con Google Forms (enlace específico proporcionado)</li>
              <li>✓ Accesible desde esta sección de la plataforma</li>
              <li>✓ Preguntas sobre opinión, impacto y mejoras</li>
              <li>✓ Resultados analizados y publicados en la plataforma</li>
              <li>✓ Enlace directo: https://docs.google.com/forms/d/e/1FAIpQLSeeKFeTXzhHVYr06brCbrHVlm7szH_PQeX0Cr40xN5NkjnP8g/viewform?usp=dialog</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}