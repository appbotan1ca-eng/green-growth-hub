import { FileText, FileText as FileTextIcon, ExternalLink, Library, BookOpen } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const bibliotecas = [
  {
    name: "Open Library – Botany",
    url: "https://openlibrary.org/subjects/botany",
    desc: "Colección de libros digitales sobre botánica de acceso libre. Catálogo universal editable."
  },
  {
    name: "Open Library – Botany & Plant Sciences",
    url: "https://openlibrary.org/subjects/botany__plant_sciences",
    desc: "Libros sobre botánica y ciencias de las plantas. Miles de títulos disponibles para préstamo digital."
  },
  {
    name: "Project Gutenberg – Botany",
    url: "https://www.gutenberg.org/ebooks/subject/539",
    desc: "Obras clásicas de botánica de dominio público, gratis y legales. Más de 70,000 libros en total."
  },
  {
    name: "Project Gutenberg – Plants",
    url: "https://www.gutenberg.org/ebooks/subject/973",
    desc: "Libros sobre plantas y flora de dominio público. Acceso gratuito sin restricciones."
  },
  {
    name: "Digital Public Library of America (DPLA)",
    url: "https://dp.la/",
    desc: "Agregador de colecciones digitales de bibliotecas, archivos y museos de EE.UU. Recursos históricos, culturales y científicos."
  },
];

export default function Documentos() {
  return (
    <PageLayout>
      <PageHero
        icon={FileTextIcon}
        eyebrow="Gestión Estratégica"
        title="Biblioteca Virtual"
        subtitle="Bibliotecas digitales gratuitas y recursos de referencia especializados en botánica y ciencias de las plantas."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Library className="text-primary" size={28} /> Bibliotecas digitales gratuitas (especializadas en botánica)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
              <li>✓ Acceso a bibliotecas en línea gratuitas con contenidos de botánica y ciencias de las plantas</li>
              <li>✓ Enlaces directos funcionales a secciones temáticas específicas</li>
              <li>✓ Recursos para ampliar información sobre el tema del proyecto productivo</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
