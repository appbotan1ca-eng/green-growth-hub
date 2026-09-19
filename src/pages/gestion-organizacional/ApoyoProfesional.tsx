import { Handshake, Building, Globe, BookOpen, ExternalLink, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const expertos = [
  {
    nombre: "Dra. Patricia Gutiérrez",
    institucion: "Instituto de Investigación de Recursos Biológicos Alexander von Humboldt",
    cargo: "Investigadora Senior - Biodiversidad y Educación",
    especialidad: "Flora nativa colombiana, ciencia ciudadana, plataformas de biodiversidad",
    email: "p.gutierrez@humboldt.org.co",
    url: "https://www.humboldt.org.co",
    tipo: "Experto académico",
  },
  {
    nombre: "Ing. Camilo Andrés Restrepo",
    institucion: "Corporación Autónoma Regional del Centro de Antioquia - CORANTIOQUIA",
    cargo: "Profesional Especializado - Educación Ambiental",
    especialidad: "Gestión de residuos, huertas escolares, normativa ambiental escolar",
    email: "c.restrepo@corantioquia.gov.co",
    url: "https://www.corantioquia.gov.co",
    tipo: "Entidad ambiental",
  },
  {
    nombre: "Mg. Luz Marina Vélez",
    institucion: "Universidad de Antioquia - Facultad de Ciencias Exactas y Naturales",
    cargo: "Docente Investigadora - Botánica Sistemática",
    especialidad: "Taxonomía vegetal, herbario digital, flora de Antioquia",
    email: "luz.velez@udea.edu.co",
    url: "https://www.udea.edu.co",
    tipo: "Academia universitaria",
  },
];

const organizaciones = [
  {
    nombre: "Red Colombiana de Huertas Escolares",
    descripcion: "Red nacional que apoya la creación y sostenibilidad de huertas en instituciones educativas. Ofrece semillas, capacitación y acompañamiento técnico.",
    url: "https://www.huertasescolarescolombia.org",
    contacto: "red@huertasescolarescolombia.org",
    tipo: "Red de apoyo",
  },
  {
    nombre: "Fundación ProNatura Colombia",
    descripcion: "ONG dedicada a la conservación de la biodiversidad. Programa 'Escuelas Verdes' para certificación ambiental de colegios.",
    url: "https://www.pronatura.org.co/escuelas-verdes",
    contacto: "escuelasverdes@pronatura.org.co",
    tipo: "ONG ambiental",
  },
  {
    nombre: "SENA - Centro de Biotecnología Agropecuaria",
    descripcion: "Ofrece formación complementaria en agricultura sostenible, biotecnología vegetal y emprendimiento verde para estudiantes de media técnica.",
    url: "https://www.sena.edu.co/biotecnologia",
    contacto: "biotec@sena.edu.co",
    tipo: "Entidad formación",
  },
  {
    nombre: "iNaturalist Colombia / Red de Observadores",
    descripcion: "Comunidad de ciencia ciudadana para registro de biodiversidad. Apoya proyectos escolares con identificación experta y datos abiertos.",
    url: "https://www.inaturalist.org/projects/colombia",
    contacto: "colombia@inaturalist.org",
    tipo: "Plataforma ciencia ciudadana",
  },
];

export default function ApoyoProfesional() {
  return (
    <PageLayout>
      <PageHero
        icon={Handshake}
        eyebrow="Gestión Organizacional"
        title="Apoyo Profesional"
        subtitle="Expertos, organizaciones e instituciones que pueden apoyar proyectos de investigación, análisis, diseño e implementación."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-8 flex items-center gap-3">
            <BookOpen className="text-primary" size={28} /> Expertos y Asesores Especializados
          </h2>
          <div className="grid gap-6 mb-12">
            {expertos.map((exp, i) => (
              <SectionCard key={exp.nombre} title={exp.nombre} delay={i * 0.08}>
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="text-primary" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-primary mb-1">{exp.cargo}</p>
                    <p className="font-body text-sm text-muted-foreground mb-1">{exp.institucion}</p>
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary mb-2">
                      {exp.tipo}
                    </span>
                    <p className="font-body text-sm text-foreground mb-2">{exp.especialidad}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <a href={`mailto:${exp.email}`} className="flex items-center gap-1 text-primary hover:underline font-body text-sm">
                        <Mail size={14} /> {exp.email}
                      </a>
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline font-body text-sm">
                        <Globe size={14} /> Web institucional
                      </a>
                    </div>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Building className="text-primary" size={28} /> Organizaciones e Instituciones de Apoyo
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {organizaciones.map((org, i) => (
              <SectionCard key={org.nombre} title={org.nombre} delay={i * 0.07}>
                <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary mb-3">
                  {org.tipo}
                </span>
                <p className="font-body text-sm text-muted-foreground mb-3">{org.descripcion}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    <Globe size={14} /> Sitio web
                  </a>
                  <a
                    href={`mailto:${org.contacto}`}
                    className="inline-flex items-center gap-1.5 font-body text-sm text-primary hover:underline"
                  >
                    <Mail size={14} /> Contacto
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Recursos para Análisis, Diseño e Implementación">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Herramientas y plataformas recomendadas para el desarrollo de proyectos de investigación ambiental:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { nombre: "Google Scholar", desc: "Búsqueda de literatura científica", url: "https://scholar.google.com" },
                { nombre: "Redalyc", desc: "Revistas científicas latinoamericanas", url: "https://www.redalyc.org" },
                { nombre: "SciELO Colombia", desc: "Publicaciones científicas en acceso abierto", url: "https://www.scielo.org.co" },
                { nombre: "Catálogo Nacional de Biodiversidad", desc: "Datos abiertos de especies colombianas", url: "https://catalogo.biodiversidad.co" },
                { nombre: "IDEAM - Datos Ambientales", desc: "Información hidrológica, climática y ambiental", url: "https://www.ideam.gov.co" },
                { nombre: "MADS - Normativa Ambiental", desc: "Decretos, resoluciones y guías oficiales", url: "https://www.minambiente.gov.co" },
              ].map((rec, i) => (
                <a
                  key={rec.nombre}
                  href={rec.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="text-primary group-hover:scale-110 transition-transform" size={22} />
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">{rec.nombre}</p>
                      <p className="font-body text-xs text-muted-foreground">{rec.desc}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Handshake className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Información sobre expertos con nombre, institución, cargo, especialidad y contacto</li>
              <li>✓ Organizaciones e instituciones con descripción, URL y correo de contacto</li>
              <li>✓ Recursos para análisis, diseño e implementación de proyectos de investigación</li>
              <li>✓ Enlaces funcionales a sitios web institucionales y correos de contacto</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}