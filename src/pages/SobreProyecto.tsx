import { AlertTriangle, Target, HeartHandshake, Sparkles, ListChecks } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const objetivosEspecificos = [
  "Diseñar contenidos interactivos sobre botánica y cuidado ambiental.",
  "Fomentar hábitos sostenibles en estudiantes de la institución.",
  "Documentar especies vegetales del entorno escolar.",
  "Medir el impacto del aprendizaje mediante retos y logros.",
];

const principios = [
  { title: "Sostenibilidad", text: "Cada decisión del proyecto busca reducir el impacto ambiental." },
  { title: "Educación activa", text: "Aprender haciendo, jugando y compartiendo con la comunidad." },
  { title: "Trabajo colaborativo", text: "El equipo construye en conjunto con docentes y estudiantes." },
  { title: "Responsabilidad social", text: "El conocimiento se devuelve a la comunidad educativa." },
];

export default function SobreProyecto() {
  return (
    <PageLayout>
      <PageHero
        icon={Sparkles}
        eyebrow="Sobre el proyecto"
        title="Nuestro proyecto productivo"
        subtitle="Problema identificado, objetivos, justificación e impacto esperado de FloraQuest."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          <SectionCard icon={AlertTriangle} title="Problema identificado">
            <p>
              En la comunidad educativa existe poco conocimiento sobre la flora local y escasas
              prácticas de cuidado ambiental. La información disponible es dispersa, poco atractiva
              y no motiva a los estudiantes a involucrarse con su entorno natural.
            </p>
          </SectionCard>

          <SectionCard icon={Target} title="Objetivo general" delay={0.1}>
            <p>
              Desarrollar una plataforma digital interactiva que enseñe botánica y educación
              ambiental de forma divertida, promoviendo la sensibilización y el cuidado del entorno
              en la comunidad educativa.
            </p>
          </SectionCard>

          <SectionCard icon={ListChecks} title="Objetivos específicos" delay={0.15}>
            <ul className="space-y-2">
              {objetivosEspecificos.map((o) => (
                <li key={o} className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard icon={HeartHandshake} title="Justificación" delay={0.2}>
            <p>
              La crisis ambiental exige ciudadanos informados. FloraQuest acerca el conocimiento
              botánico a los jóvenes con un lenguaje digital y cercano, ayudando a solucionar el
              desinterés y la desinformación ambiental dentro y fuera del aula.
            </p>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-8 grid gap-8 md:grid-cols-3">
          {[
            { t: "Impacto ambiental", d: "Mayor conciencia sobre el cuidado de plantas, suelos y residuos." },
            { t: "Impacto social", d: "Comunidad educativa participativa y sensibilizada." },
            { t: "Impacto educativo", d: "Aprendizaje significativo apoyado en tecnología." },
          ].map((x, i) => (
            <SectionCard key={x.t} title={x.t} delay={i * 0.1}>
              <p>{x.d}</p>
            </SectionCard>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-8 grid gap-8 sm:grid-cols-2">
          {principios.map((p, i) => (
            <SectionCard key={p.title} title={p.title} delay={i * 0.08}>
              <p>{p.text}</p>
            </SectionCard>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
