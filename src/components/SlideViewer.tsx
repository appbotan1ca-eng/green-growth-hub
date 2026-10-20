import { useState } from "react";
import { ExternalLink, Download, Presentation as PresentationIcon, Loader2, AlertTriangle } from "lucide-react";
import { presentacionLinks, type Presentacion } from "@/lib/recursos";

export default function SlideViewer({ presentacion }: { presentacion: Presentacion }) {
  const { view, download } = presentacionLinks(presentacion.driveId);
  const embed = presentacion.embedUrl ?? presentacionLinks(presentacion.driveId).embed;
  const [cargando, setCargando] = useState(true);
  const [fallo, setFallo] = useState(false);

  return (
    <article className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
      <header className="p-5 sm:p-6 border-b border-border bg-secondary/40">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <span className="inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
              <PresentationIcon size={20} />
            </span>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-foreground leading-tight break-words">
                {presentacion.titulo}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                {presentacion.descripcion}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
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
              <ExternalLink size={14} /> Abrir
            </a>
          </div>
        </div>
      </header>

      <div className="relative aspect-video bg-black">
        {cargando && presentacion.embedHabilitado && !fallo && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-primary-foreground/70">
            <Loader2 size={28} className="animate-spin" />
            <p className="font-body text-sm">Cargando presentación…</p>
          </div>
        )}

        {!presentacion.embedHabilitado ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center bg-secondary">
            <AlertTriangle size={28} className="text-yellow-accent" />
            <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
              Google Drive todavía no logra convertir este archivo a Presentaciones, así que no se
              puede mostrar incrustado. Puedes abrirlo o descargarlo desde aquí.
            </p>
            <a
              href={view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-body text-sm font-semibold"
            >
              <ExternalLink size={15} /> Abrir en Google Drive
            </a>
          </div>
        ) : fallo ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center bg-secondary">
            <AlertTriangle size={28} className="text-yellow-accent" />
            <p className="font-body text-sm text-muted-foreground">
              No se pudo cargar la vista previa. Es posible que el archivo no esté compartido
              públicamente o que tu navegador haya bloqueado el visor.
            </p>
            <a
              href={view}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-body text-sm font-semibold"
            >
              <ExternalLink size={15} /> Abrir en Google Drive
            </a>
          </div>
        ) : (
          <iframe
            src={embed}
            title={presentacion.titulo}
            className="w-full h-full"
            allowFullScreen
            allow="autoplay"
            onLoad={() => setCargando(false)}
            onError={() => {
              setFallo(true);
              setCargando(false);
            }}
          />
        )}
      </div>

      {presentacion.embedHabilitado ? (
          <p className="px-5 py-3 font-body text-xs text-muted-foreground bg-secondary/30 border-t border-border">
            Usa las flechas del visor para moverte entre las diapositivas, o activa el modo
            presentación con el botón de pantalla completa.
          </p>
        ) : (
          <p className="px-5 py-3 font-body text-xs text-muted-foreground bg-secondary/30 border-t border-border">
            Para incrustar esta presentación en la página, vuelve a subir el archivo a Drive o
            ábrelo con Presentaciones de Google y comparte el enlace con acceso público.
          </p>
        )}
    </article>
  );
}