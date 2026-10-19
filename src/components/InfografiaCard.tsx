import { useEffect, useState } from "react";
import { ExternalLink, Download, Image as ImageIcon, X, ZoomIn, AlertTriangle } from "lucide-react";
import { infografiaLinks, type Infografia } from "@/lib/recursos";

export default function InfografiaCard({ infografia }: { infografia: Infografia }) {
  const { image, view, download } = infografiaLinks(infografia.driveId);
  const [ampliada, setAmpliada] = useState(false);

  useEffect(() => {
    if (!ampliada) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAmpliada(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [ampliada]);

  return (
    <>
      <article className="group flex flex-col rounded-3xl bg-card border border-border shadow-card overflow-hidden hover:-translate-y-1 hover:shadow-card-hover transition-all">
        <div className="relative block w-full aspect-[4/3] bg-secondary overflow-hidden">
          {infografia.embedHabilitado ? (
            <>
              <button
                type="button"
                onClick={() => setAmpliada(true)}
                className="absolute inset-0 z-10 cursor-zoom-in"
                aria-label={`Ampliar ${infografia.titulo}`}
              />
              <img
                src={image}
                alt={infografia.titulo}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 z-20 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card/95 font-body text-sm font-semibold text-foreground shadow-card">
                  <ZoomIn size={16} /> Ver en grande
                </span>
              </span>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <AlertTriangle size={26} className="text-yellow-accent" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Este archivo todavía no está disponible de forma pública, por lo que no se puede
                mostrar incrustado.
              </p>
              <a
                href={view}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-body text-xs font-semibold"
              >
                <ExternalLink size={14} /> Abrir en Drive
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-start gap-3 mb-2">
            <span className="inline-flex w-9 h-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
              <ImageIcon size={17} />
            </span>
            <h3 className="font-display font-bold text-foreground leading-tight pt-1">
              {infografia.titulo}
            </h3>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
            {infografia.descripcion}
          </p>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            {infografia.embedHabilitado && (
              <button
                type="button"
                onClick={() => setAmpliada(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground font-body text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <ZoomIn size={14} /> Ver
              </button>
            )}
            <a
              href={download}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary hover:bg-secondary/80 font-body text-xs font-semibold text-foreground transition-colors"
            >
              <Download size={14} /> Descargar
            </a>
            <a
              href={view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-border hover:border-primary font-body text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={14} /> Drive
            </a>
          </div>
        </div>
      </article>

      {ampliada && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={infografia.titulo}
          className="fixed inset-0 z-50 flex flex-col bg-foreground/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setAmpliada(false)}
        >
          <div className="flex items-start justify-between gap-4 mb-4 shrink-0">
            <div className="min-w-0">
              <h3 className="font-display font-bold text-lg text-white leading-tight break-words">
                {infografia.titulo}
              </h3>
              <p className="font-body text-sm text-white/70 mt-0.5">
                {infografia.descripcion}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={download}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 font-body text-xs font-semibold text-white transition-colors"
              >
                <Download size={14} /> Descargar
              </a>
              <button
                type="button"
                onClick={() => setAmpliada(false)}
                aria-label="Cerrar"
                className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div
            className="flex-1 min-h-0 overflow-auto rounded-2xl bg-card/95 p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={infografia.titulo}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}