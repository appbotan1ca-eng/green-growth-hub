import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Library } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

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
    url: "https://www.google.com/search?q=https://bibliotecadigital.univalle.edu.co/handle/10893/21356",
  },
];

const bibliotecas = [
  { name: "Open Library", url: "https://openlibrary.org", desc: "Millones de libros digitales de acceso libre." },
  { name: "Project Gutenberg", url: "https://www.gutenberg.org", desc: "Obras clásicas de dominio público." },
  { name: "Digital Public Library of America", url: "https://dp.la", desc: "Archivos, fotografías y documentos históricos." },
];

export default function Biblioteca() {
  return (
    <PageLayout>
      <PageHero
        icon={BookOpen}
        eyebrow="Biblioteca digital"
        title="Documentos y fuentes"
        subtitle="Material académico del proyecto y enlaces a bibliotecas digitales gratuitas."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6">Referentes académicos</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {referencias.map((r, i) => (
              <motion.a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                  <FileText size={22} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-2">{r.detail}</p>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm text-primary">
                    Leer el artículo <ExternalLink size={14} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            Haz clic en cada tarjeta para abrir el texto completo del artículo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-14">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Library className="text-primary" size={28} /> Bibliotecas digitales gratuitas
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {bibliotecas.map((b, i) => (
              <motion.a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="block p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <h3 className="font-display font-bold text-foreground flex items-center gap-2 mb-2">
                  {b.name} <ExternalLink size={16} className="text-primary" />
                </h3>
                <p className="font-body text-sm text-muted-foreground">{b.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
