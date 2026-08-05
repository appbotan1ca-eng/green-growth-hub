import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Library } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const documentos = [
  { title: "Artículo: Educación ambiental en la escuela", type: "PDF · Artículo académico" },
  { title: "Informe de diagnóstico del entorno escolar", type: "PDF · Informe" },
  { title: "Guía técnica de cuidado de plantas", type: "DOC · Documento técnico" },
  { title: "Referencias bibliográficas del proyecto", type: "PDF · Bibliografía" },
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
          <h2 className="font-display font-black text-3xl text-gradient-green mb-6">Documentos del proyecto</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {documentos.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
              >
                <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                  <FileText size={22} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-foreground">{d.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{d.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-xs font-body text-muted-foreground">
            Reemplaza cada tarjeta por el enlace de descarga del documento real.
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