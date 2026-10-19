import { Presentation, HardDrive, Layers, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SlideViewer from "@/components/SlideViewer";
import { presentaciones } from "@/lib/recursos";

const CANVA_URL = "https://www.canva.com/design/DAHSFcgyl2k/rcHUF3Jn9ALw0ViSgxh8zQ/view";
const CANVA_EMBED = `${CANVA_URL}?embed`;

export default function Presentaciones() {
  return (
    <PageLayout>
      <PageHero
        icon={Presentation}
        eyebrow="Gestión Estratégica"
        title="Presentaciones del proyecto"
        subtitle="Las presentaciones del proyecto se ven directamente aquí, con navegación entre diapositivas, sin salir de la plataforma."
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/50 border border-border mb-10">
            <Layers className="text-primary shrink-0 mt-0.5" size={20} />
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Cada presentación está incrustada con su propio visor, por lo que puedes avanzar y
              retroceder entre diapositivas, usar el modo presentación y consultar el material
              completo sin salir de FloraQuest. Si un archivo no cargara, siempre puedes abrirlo o
              descargarlo desde su botón.
            </p>
          </div>

          {/* Presentación principal en Canva (contenido previo) */}
          <article className="rounded-3xl bg-card border border-border shadow-card overflow-hidden mb-12">
            <header className="p-5 sm:p-6 border-b border-border bg-secondary/40">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
                    <Presentation size={20} />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display font-bold text-foreground leading-tight">
                      Presentación principal: FloraQuest
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Presentación en Canva que explica el problema identificado, la solución
                      propuesta, el proceso de implementación y el impacto esperado del proyecto.
                    </p>
                  </div>
                </div>
                <a
                  href={CANVA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border hover:border-primary font-body text-xs font-semibold text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <ExternalLink size={14} /> Abrir en Canva
                </a>
              </div>
            </header>

            <div className="aspect-video bg-black">
              <iframe
                src={CANVA_EMBED}
                title="Presentación del proyecto en Canva"
                allowFullScreen
                allow="fullscreen"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </article>

          <div className="space-y-8">
            {presentaciones.map((p) => (
              <div key={p.id} id={p.id} className="scroll-mt-24">
                <SlideViewer presentacion={p} />
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border mt-12">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <HardDrive className="text-primary" size={22} /> Contenido del material
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Presentación principal del proyecto en Canva, con vista previa integrada</li>
              <li>
                ✓ {presentaciones.length} presentaciones adicionales con vista previa integrada
              </li>
              {presentaciones.map((p) => (
                <li key={p.id}>✓ {p.titulo}</li>
              ))}
              <li>✓ Navegación entre diapositivas, modo presentación y descarga individual</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}