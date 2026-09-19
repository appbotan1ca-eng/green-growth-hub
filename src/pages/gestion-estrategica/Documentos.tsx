import { FileText, FileText as FileTextIcon, ExternalLink, Library, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const bibliotecas = [
  { name: "Open Library", url: "https://openlibrary.org", desc: "Millones de libros digitales de acceso libre. Catálogo universal editable." },
  { name: "Project Gutenberg", url: "https://www.gutenberg.org", desc: "Más de 70,000 obras clásicas de dominio público, gratis y legales." },
  { name: "Digital Public Library of America", url: "https://dp.la", desc: "Archivos, fotografías, documentos y objetos culturales de bibliotecas de EE.UU." },
];

export default function Documentos() {
  return (
    <PageLayout>
      <PageHero
        icon={FileTextIcon}
        eyebrow="Gestión Estratégica"
        title="Documentos y referencias"
        subtitle="Bibliotecas digitales gratuitas y recursos de referencia para el proyecto."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Library className="text-primary" size={28} /> Bibliotecas digitales gratuitas
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
              <BookOpen className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Acceso a tres bibliotecas en línea gratuitas (Open Library, Project Gutenberg, DPLA)</li>
              <li>✓ Enlaces directos funcionales desde la plataforma</li>
              <li>✓ Recursos para ampliar información sobre botánica, educación ambiental, tecnología</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}