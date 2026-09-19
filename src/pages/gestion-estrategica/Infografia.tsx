import { Image, ExternalLink, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import infografia from "@/assets/infografia-proyecto.png";

export default function Infografia() {
  return (
    <PageLayout>
      <PageHero
        icon={Image}
        eyebrow="Gestión Estratégica"
        title="Infografía del proyecto"
        subtitle="Representación visual del problema ambiental, la solución tecnológica y el impacto del proyecto BotaniApp."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <SectionCard title="Infografía principal: BotaniApp - Innovación ambiental educativa">
            <p className="mb-6">
              Esta infografía diseñada en Canva/Genially explica de forma visual:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">1</span>
                </span>
                <span className="font-body text-muted-foreground"><strong>Problema ambiental:</strong> Desconocimiento de flora local, manejo inadecuado de residuos y falta de cultura ecológica.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">2</span>
                </span>
                <span className="font-body text-muted-foreground"><strong>Solución tecnológica:</strong> Aplicación educativa interactiva con contenidos botánicos, retos prácticos y divulgación digital.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">3</span>
                </span>
                <span className="font-body text-muted-foreground"><strong>Impacto del proyecto:</strong> Mayor conciencia ambiental, comunidad participativa, aprendizaje significativo apoyado en tecnología.</span>
              </li>
            </ul>

            <div className="rounded-2xl bg-secondary border border-border overflow-hidden mb-6">
              <img
                src={infografia}
                alt="Infografía del proyecto BotaniApp"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Ver en Canva <ExternalLink size={15} />
              </a>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 font-body text-sm transition-colors">
                <Download size={16} /> Descargar imagen
              </button>
            </div>
          </SectionCard>

          <SectionCard title="Otras infografías relacionadas" className="mt-8">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Infografías adicionales sobre contenidos temáticos de las disciplinas académicas del proyecto.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Ciclo de vida de las plantas", desc: "Infografía educativa sobre germinación, crecimiento y reproducción." },
                { title: "Tipos de residuos y su clasificación", desc: "Guía visual para separación correcta: orgánicos, reciclables, peligrosos." },
                { title: "Beneficios de las zonas verdes escolares", desc: "Impacto en calidad de aire, bienestar estudiantil y biodiversidad." },
              ].map((inf, i) => (
                <div key={inf.title} className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-display font-bold text-foreground mb-1">{inf.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{inf.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>
    </PageLayout>
  );
}