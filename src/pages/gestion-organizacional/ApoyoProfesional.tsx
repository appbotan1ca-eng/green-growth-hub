import { Building, Globe, ExternalLink, BookOpen, Shield } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const organizaciones = [
  {
    nombre: "Ministerio de Ambiente y Desarrollo Sostenible (MinAmbiente)",
    descripcion: "Entidad rectora de la política ambiental en Colombia. Publica guías oficiales de gestión de residuos, normativa y recursos educativos.",
    url: "https://www.minambiente.gov.co",
    tipo: "Entidad gubernamental",
  },
  {
    nombre: "Instituto de Investigación de Recursos Biológicos Alexander von Humboldt",
    descripcion: "Instituto de investigación de biodiversidad en Colombia. Plataforma de datos abiertos de especies, ciencia ciudadana y recursos para educación ambiental.",
    url: "https://www.humboldt.org.co",
    tipo: "Instituto de investigación",
  },
  {
    nombre: "iNaturalist / iNaturalist Colombia",
    descripcion: "Plataforma global de ciencia ciudadana para registro e identificación de biodiversidad. Comunidad activa en Colombia con expertos validadores.",
    url: "https://www.inaturalist.org/",
    tipo: "Plataforma ciencia ciudadana",
  },
  {
    nombre: "Biblioteca Digital - Open Library",
    descripcion: "Catálogo universal de libros digitales de acceso libre. Millones de obras disponibles para consulta y préstamo digital.",
    url: "https://openlibrary.org",
    tipo: "Biblioteca digital",
  },
  {
    nombre: "Project Gutenberg",
    descripcion: "Colección de más de 70,000 libros de dominio público, gratuitos y legales. Clásicos de literatura, ciencia y educación.",
    url: "https://www.gutenberg.org",
    tipo: "Biblioteca digital",
  },
  {
    nombre: "Digital Public Library of America (DPLA)",
    descripcion: "Agregador de colecciones digitales de bibliotecas, archivos y museos de EE.UU. Recursos históricos, culturales y científicos.",
    url: "https://dp.la",
    tipo: "Biblioteca digital",
  },
];

export default function ApoyoProfesional() {
  return (
    <PageLayout>
      <PageHero
        icon={Building}
        eyebrow="Gestión Organizacional"
        title="Recursos y referencias institucionales"
        subtitle="Organizaciones y entidades reales como fuentes de información, normativa y herramientas para proyectos ambientales y educativos."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <p className="font-body text-muted-foreground mb-8 max-w-3xl">
            Estas organizaciones son referencias y fuentes de información utilizadas en el proyecto.
            No se afirma alianza, colaboración ni respaldo institucional directo salvo donde exista convenio formal.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {organizaciones.map((org, i) => (
              <SectionCard key={org.nombre} title={org.nombre} delay={i * 0.07}>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {org.tipo}
                </span>
                <p className="font-body text-sm text-muted-foreground mb-3">{org.descripcion}</p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                >
                  <Globe size={14} /> Sitio web oficial
                </a>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Recursos técnicos y normativos recomendados">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Herramientas y plataformas de consulta para desarrollo de proyectos de investigación ambiental:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { nombre: "Guía nacional gestión de residuos (MinAmbiente)", url: "https://economiacircular.minambiente.gov.co/wp-content/uploads/2022/06/guia-nacional-para-la-adecuada-gestion-de-residuos-colombia-2022.pdf" },
                { nombre: "Catálogo Nacional de Biodiversidad (Humboldt)", url: "https://catalogo.biodiversidad.co" },
                { nombre: "IDEAM - Datos ambientales oficiales", url: "https://www.ideam.gov.co" },
                { nombre: "Google Scholar - Literatura científica", url: "https://scholar.google.com" },
                { nombre: "Redalyc - Revistas latinoamericanas", url: "https://www.redalyc.org" },
                { nombre: "SciELO Colombia - Publicaciones acceso abierto", url: "https://www.scielo.org.co" },
              ].map((rec, i) => (
                <a
                  key={rec.nombre}
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all group flex items-center gap-3"
                >
                  <Globe className="text-primary group-hover:scale-110 transition-transform" size={22} />
                  <span className="font-body text-sm text-foreground">{rec.nombre}</span>
                </a>
              ))}
            </div>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Shield className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Solo organizaciones reales como referencias/fuentes de información</li>
              <li>✓ No se afirma alianza ni colaboración sin convenio formal</li>
              <li>✓ Entidades gubernamentales (MinAmbiente, Humboldt, IDEAM)</li>
              <li>✓ Plataformas de ciencia ciudadana (iNaturalist)</li>
              <li>✓ Bibliotecas digitales gratuitas (Open Library, Gutenberg, DPLA)</li>
              <li>✓ Recursos normativos y técnicos con enlaces oficiales</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}