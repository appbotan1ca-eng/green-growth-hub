import { FileText, Download, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const documentos = [
  {
    title: "Artículo: Aprendizaje significativo en ciencias naturales",
    detail: "Pabón, C. A. (2021). Revista Boletín Redipe, 10(13), 227-241.",
    category: "Artículo académico",
    url: "https://www.redalyc.org/journal/5610/561082313013/html/",
  },
  {
    title: "Estrategias didácticas mediadas por TIC para botánica",
    detail: "Cárdenas-Vargas, L. M. (2023). Universidad Pedagógica y Tecnológica de Colombia.",
    category: "Artículo académico",
    url: "https://repositorio.uptc.edu.co/handle/001/9562",
  },
  {
    title: "Uso de aplicaciones móviles para enseñanza de botánica",
    detail: "Arias-Giraldo, J. F. (2021). Universidad del Valle.",
    category: "Artículo académico",
    url: "https://bibliotecadigital.univalle.edu.co/handle/10893/21356",
  },
  {
    title: "Informe de diagnóstico ambiental institucional",
    detail: "Análisis de residuos, zonas verdes y consumo de recursos en el ITMA.",
    category: "Informe técnico",
    url: "#",
  },
  {
    title: "Plan de acción proyecto productivo 2025-2026",
    detail: "Documento de formulación con objetivos, cronograma y responsables.",
    category: "Documento de planificación",
    url: "#",
  },
  {
    title: "Manual de separación de residuos escolares",
    detail: "Guía práctica para implementar separación en la institución.",
    category: "Guía metodológica",
    url: "#",
  },
];

export default function Documentos() {
  return (
    <PageLayout>
      <PageHero
        icon={FileText}
        eyebrow="Gestión Estratégica"
        title="Documentos del proyecto"
        subtitle="Artículos académicos, informes técnicos y documentos de planificación relacionados con las disciplinas del proyecto productivo."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documentos.map((doc, i) => (
              <SectionCard key={doc.title} title={doc.title} delay={i * 0.07}>
                <p className="font-body text-sm text-muted-foreground mb-2">{doc.detail}</p>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {doc.category}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    Ver documento <ExternalLink size={14} />
                  </a>
                  {doc.url !== "#" && (
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                      aria-label="Descargar"
                    >
                      <Download size={16} className="text-foreground" />
                    </a>
                  )}
                </div>
              </SectionCard>
            ))}
          </div>
          <p className="mt-6 text-xs font-body text-muted-foreground text-center">
            Los documentos de autoría propia respetan políticas de propiedad intelectual y derechos de autor.
            Los enlaces externos dirigen a fuentes académicas verificadas.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}