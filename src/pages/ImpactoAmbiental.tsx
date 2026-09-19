import { Globe2, AlertCircle, Lightbulb, Recycle, Droplets, TreePine } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const beneficios = [
  { icon: Recycle, title: "Reducción de residuos", text: "Promovemos el reciclaje y la separación adecuada en la institución." },
  { icon: Droplets, title: "Uso responsable del agua", text: "Enseñamos riego eficiente y cuidado de recursos naturales." },
  { icon: TreePine, title: "Más zonas verdes", text: "Impulsamos la siembra y el mantenimiento de plantas en el colegio." },
];

export default function ImpactoAmbiental() {
  return (
    <PageLayout>
      <PageHero
        icon={Globe2}
        eyebrow="Impacto ambiental"
        title="Sensibilización que transforma"
        subtitle="El problema ambiental, nuestra solución y los beneficios que genera FloraQuest."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2">
          <SectionCard icon={AlertCircle} title="Problema ambiental">
            <p>
              El desconocimiento de la flora local, el manejo inadecuado de residuos y la falta de
              cultura ecológica deterioran los espacios verdes de la comunidad y reducen la
              biodiversidad de nuestro entorno.
            </p>
          </SectionCard>
          <SectionCard icon={Lightbulb} title="Solución propuesta" delay={0.1}>
            <p>
              FloraQuest convierte la educación ambiental en una experiencia interactiva: contenidos
              claros, retos prácticos y divulgación digital que motivan a cuidar las plantas y el
              entorno todos los días.
            </p>
          </SectionCard>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-8 grid gap-8 sm:grid-cols-3">
          {beneficios.map((b, i) => (
            <SectionCard key={b.title} icon={b.icon} title={b.title} delay={i * 0.08}>
              <p>{b.text}</p>
            </SectionCard>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
