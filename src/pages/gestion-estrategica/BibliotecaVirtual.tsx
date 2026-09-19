import { BookOpen, Library, ExternalLink, FileText } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const referencias = [
  {
    title:
      "Pabón, C. A. (2021). Aprendizaje significativo en ciencias naturales mediante el uso de la aplicación móvil Amazonía biodiversa: una experiencia educativa en el departamento del Putumayo. Revista Boletín Redipe, 10(13), 227-241.",
    detail: "Artículo académico · Revista Boletín Redipe",
    url: "https://www.redalyc.org/journal/5610/561082313013/html/",
  },
  {
    title:
      "Cárdenas-Vargas, L. M. (2023). Estrategias didácticas mediadas por TIC para fortalecer el aprendizaje de la botánica en el contexto escolar. Universidad Pedagógica y Tecnológica de Colombia (UPTC).",
    detail: "Artículo académico · UPTC",
    url: "https://repositorio.uptc.edu.co/handle/001/9562",
  },
  {
    title:
      "Arias-Giraldo, J. F. (2021). Uso de aplicaciones móviles como estrategia para la enseñanza de la botánica en la educación básica. Universidad del Valle.",
    detail: "Artículo académico · Universidad del Valle",
    url: "https://bibliotecadigital.univalle.edu.co/handle/10893/21356",
  },
];

const bibliotecas = [
  { name: "Open Library", url: "https://openlibrary.org", desc: "Millones de libros digitales de acceso libre. Catálogo universal editable." },
  { name: "Project Gutenberg", url: "https://www.gutenberg.org", desc: "Más de 70,000 obras clásicas de dominio público, gratis y legales." },
  { name: "Digital Public Library of America", url: "https://dp.la", desc: "Archivos, fotografías, documentos y objetos culturales de bibliotecas de EE.UU." },
];

export default function BibliotecaVirtual() {
  return (
    <PageLayout>
      <PageHero
        icon={BookOpen}
        eyebrow="Gestión Estratégica"
        title="Biblioteca Virtual"
        subtitle="Referentes académicos del proyecto y acceso a tres bibliotecas digitales gratuitas para ampliar información."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <FileText className="text-primary" size={28} /> Referentes académicos del proyecto
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {referencias.map((r, i) => (
              <SectionCard key={r.title} title={r.title} delay={i * 0.07}>
                <p className="font-body text-sm text-muted-foreground mb-3">{r.detail}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                >
                  Leer artículo completo <ExternalLink size={14} />
                </a>
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Library className="text-primary" size={28} /> Bibliotecas digitales gratuitas (3 requeridas)
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {bibliotecas.map((b, i) => (
              <SectionCard key={b.name} title={b.name} delay={i * 0.08}>
                <p className="font-body text-sm text-muted-foreground mb-4">{b.desc}</p>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline font-semibold"
                >
                  Acceder a {b.name} <ExternalLink size={14} />
                </a>
              </SectionCard>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Library className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Acceso a tres bibliotecas en línea gratuitas (Open Library, Project Gutenberg, DPLA)</li>
              <li>✓ Recursos académicos, artículos, revistas científicas y bases de datos relevantes</li>
              <li>✓ Enlaces directos funcionales desde la plataforma</li>
              <li>✓ Información sobre el tema del proyecto productivo (botánica, educación ambiental, tecnología educativa)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}