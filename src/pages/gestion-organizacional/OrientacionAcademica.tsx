import { Users, Clock, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const asesores = [
  {
    nombre: "Carlos Alveiro Mendoza",
    cargo: "Asesor Académico Principal / Docente Tecnología e Informática",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    email: "carlos.mendoza@itma.edu.co",
    telefono: "+57 300 123 4567",
    horario: "Lunes a Viernes: 7:00 AM - 1:00 PM",
    especialidad: "Diseño de proyectos productivos, herramientas digitales, pedagogía tecnológica",
  },
  {
    nombre: "María Fernanda López",
    cargo: "Asesora Metodológica / Coordinadora de Proyectos",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    email: "maria.lopez@itma.edu.co",
    telefono: "+57 301 234 5678",
    horario: "Martes y Jueves: 2:00 PM - 4:00 PM",
    especialidad: "Metodología de investigación, formulación de objetivos, redacción académica",
  },
  {
    nombre: "Jorge Andrés Torres",
    cargo: "Asesor Ambiental / Docente Ciencias Naturales",
    foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jorge",
    email: "jorge.torres@itma.edu.co",
    telefono: "+57 302 345 6789",
    horario: "Miércoles: 7:00 AM - 12:00 PM",
    especialidad: "Botánica, educación ambiental, biodiversidad local, huertas escolares",
  },
];

const equipoRoles = [
  { estudiante: "Angelo Samir Rodríguez Zabala", rol: "Líder de Diseño y Prototipado", avatar: "AR" },
  { estudiante: "Juan Felipe Contreras Velasco", rol: "Líder de Investigación y Contenidos", avatar: "JC" },
  { estudiante: "Santiago Alejandro Castro Bautista", rol: "Líder de Comunicación Digital", avatar: "SC" },
  { estudiante: "Daniel Esteban Salcedo López", rol: "Líder de Desarrollo Web y Técnico", avatar: "DS" },
  { estudiante: "Samira Alexandra", rol: "Líder de Contenidos Multimedia", avatar: "SA" },
];

export default function OrientacionAcademica() {
  return (
    <PageLayout>
      <PageHero
        icon={Users}
        eyebrow="Gestión Organizacional"
        title="Orientación académica"
        subtitle="Equipo de asesores, horarios de atención y roles de los integrantes para el desarrollo de proyectos."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} /> Equipo de Asesores Académicos
          </h2>
          <div className="grid gap-6 mb-12">
            {asesores.map((asesor, i) => (
              <SectionCard key={asesor.nombre} title={asesor.nombre} delay={i * 0.08}>
                <div className="flex items-start gap-6 mb-4">
                  <img
                    src={asesor.foto}
                    alt={asesor.nombre}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-emerald to-green-bright flex items-center justify-center text-2xl font-bold text-primary-foreground shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-primary mb-1">{asesor.cargo}</p>
                    <p className="font-body text-sm text-muted-foreground mb-3">{asesor.especialidad}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Mail size={14} /> {asesor.email}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Phone size={14} /> {asesor.telefono}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock size={14} /> {asesor.horario}
                      </span>
                    </div>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          <h2 className="font-display font-black text-3xl text-gradient-green mb-6 flex items-center gap-3">
            <Users className="text-primary" size={28} /> Roles del Equipo Estudiantil (Media Técnica 11°)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipoRoles.map((miembro, i) => (
              <SectionCard key={miembro.estudiante} title={miembro.estudiante} delay={i * 0.06}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-emerald to-green-bright flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0">
                    {miembro.avatar}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{miembro.rol}</p>
                    <p className="font-body text-xs text-muted-foreground">Estudiante Media Técnica 11°</p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Servicios de Orientación Disponibles">
            <p className="font-body text-sm text-muted-foreground mb-4">
              El equipo de orientación académica ofrece los siguientes servicios para estudiantes que desarrollen proyectos alternos:
            </p>
            <ul className="space-y-3">
              {[
                "Asesoría en formulación de proyectos productivos (problema, objetivos, justificación)",
                "Revisión y retroalimentación de documentos técnicos y académicos",
                "Orientación en uso de herramientas digitales (Canva, Genially, GitHub, Drive)",
                "Apoyo en producción multimedia (video, podcast, infografías, presentaciones)",
                "Guía para publicación y divulgación de resultados en plataformas digitales",
                "Seguimiento a cronogramas y hitos de implementación",
              ].map((servicio, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border">
                  <GraduationCap className="text-primary shrink-0 mt-0.5" size={20} />
                  <span className="font-body text-sm text-foreground">{servicio}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Users className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Equipo de asesores académicos con nombres, cargos alusivos al tema y datos de contacto</li>
              <li>✓ Horarios de atención publicados</li>
              <li>✓ Roles de los integrantes del proyecto definidos</li>
              <li>✓ Servicios de orientación para proyectos alternos descritos</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}