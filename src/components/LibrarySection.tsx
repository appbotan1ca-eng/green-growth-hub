import { motion } from "framer-motion";
import { BookOpen, FileText, ExternalLink, Library } from "lucide-react";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const documents = [
  { title: "Artículo: Educación ambiental en la escuela", type: "Artículo" },
  { title: "Informe: Biodiversidad local", type: "Informe" },
  { title: "Guía técnica: Identificación de plantas", type: "Documento" },
];

const libraries = [
  { name: "Open Library", desc: "Acceso a millones de libros digitales gratuitos.", url: "https://openlibrary.org" },
  { name: "Project Gutenberg", desc: "Biblioteca con más de 70.000 libros de dominio público.", url: "https://www.gutenberg.org" },
  { name: "Digital Public Library of America", desc: "Recursos académicos abiertos para investigación.", url: "https://dp.la" },
];

export default function LibrarySection() {
  return (
    <section id="biblioteca-digital" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            Biblioteca <span className="text-gradient-green">Digital</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            Documentos académicos y enlaces a bibliotecas digitales gratuitas.
          </motion.p>
        </motion.div>

        {/* Documentos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-5 flex items-center gap-2">
            <FileText className="text-primary" /> Documentos del proyecto
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {documents.map((d, i) => (
              <motion.div
                key={d.title}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-display font-bold mb-3">{d.type}</span>
                <p className="font-display font-semibold text-foreground">{d.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bibliotecas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 variants={fadeUp} custom={0} className="font-display font-bold text-2xl text-foreground mb-5 flex items-center gap-2">
            <Library className="text-primary" /> Bibliotecas digitales gratuitas
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {libraries.map((lib, i) => (
              <motion.a
                key={lib.name}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i + 1}
                className="group p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <BookOpen className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-display font-bold text-foreground text-lg mb-2">{lib.name}</h4>
                <p className="text-sm text-muted-foreground font-body mb-4">{lib.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary font-display font-semibold text-sm">
                  Visitar <ExternalLink size={14} />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}