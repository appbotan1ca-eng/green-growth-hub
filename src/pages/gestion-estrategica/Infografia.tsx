import { Image, Grid3x3, MousePointerClick, ExternalLink, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import InfografiaCard from "@/components/InfografiaCard";
import { infografias } from "@/lib/recursos";
import infografia from "@/assets/infografia-proyecto.png";

const CANVA_URL = "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view";

export default function Infografia() {
  return (
    <PageLayout>
      <PageHero
        icon={Image}
        eyebrow="Gestión Estratégica"
        title="Infografías del proyecto"
        subtitle="Las infografías se muestran directamente en la página. Haz clic en cualquiera para verla en pantalla completa."
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/50 border border-border mb-10">
            <MousePointerClick className="text-primary shrink-0 mt-0.5" size={20} />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Cada infografía se carga desde Google Drive y se muestra dentro de la plataforma, sin
              necesidad de abrir el sitio de Drive. Al hacer clic se abre en pantalla completa, y
              desde ahí puedes descargarla en su máxima resolución.
            </p>
          </div>

          {/* Infografía principal (contenido previo) */}
          <SectionCard
            title="Infografía principal: FloraQuest - Innovación ambiental educativa"
            className="mb-12"
          >
            <p className="mb-6">Esta infografía diseñada en Canva/Genially explica de forma visual:</p>
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
                alt="Infografía del proyecto FloraQuest"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={CANVA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline"
              >
                Ver en Canva <ExternalLink size={15} />
              </a>
              <a
                href={infografia}
                download="infografia-floraquest.png"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 font-body text-sm transition-colors"
              >
                <Download size={16} /> Descargar imagen
              </a>
            </div>
          </SectionCard>

          <div className="grid sm:grid-cols-2 gap-6">
            {infografias.map((inf) => (
              <InfografiaCard key={inf.id} infografia={inf} />
            ))}
          </div>

          <SectionCard title="Otras infografías relacionadas" className="mt-12">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Infografías adicionales sobre contenidos temáticos de las disciplinas académicas del
              proyecto.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Ciclo de vida de las plantas",
                  desc: "Infografía educativa sobre germinación, crecimiento y reproducción.",
                },
                {
                  title: "Tipos de residuos y su clasificación",
                  desc: "Guía visual para separación correcta: orgánicos, reciclables, peligrosos.",
                },
                {
                  title: "Beneficios de las zonas verdes escolares",
                  desc: "Impacto en calidad de aire, bienestar estudiantil y biodiversidad.",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-display font-bold text-foreground mb-1">{item.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border mt-12">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Grid3x3 className="text-primary" size={22} /> Material gráfico disponible
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Infografía principal del proyecto (Problema, Solución e Impacto)</li>
              <li>✓ {infografias.length} infografías con vista previa integrada</li>
              {infografias.map((inf) => (
                <li key={inf.id}>✓ {inf.titulo}</li>
              ))}
              <li>✓ Vista ampliada, descarga en alta resolución y enlace directo a Drive</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}