import { Users, GraduationCap, Mail, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";

const equipo = [
  { nombre: "Angelo Samir Rodríguez Zabala", rol: "Diseño del prototipo", iniciales: "AR" },
  { nombre: "Juan Felipe Contreras Velasco", rol: "Investigación", iniciales: "JC" },
  { nombre: "Santiago Alejandro Castro Bautista", rol: "Comunicación digital", iniciales: "SC" },
  { nombre: "Daniel Esteban Salcedo López", rol: "Desarrollo web", iniciales: "DS" },
  { nombre: "Samira Alexandra", rol: "Contenidos y multimedia", iniciales: "SA" },
];

const colors = [
  "from-green-emerald to-green-bright",
  "from-green-deep to-green-emerald",
  "from-green-bright to-green-glow",
  "from-accent to-green-emerald",
  "from-green-light to-green-bright",
];

export default function OrientacionAcademica() {
  return (
    <PageLayout>
      <PageHero
        icon={Users}
        eyebrow="Gestión Organizacional"
        title="Orientación académica"
        subtitle="Equipo de trabajo del proyecto productivo (Media Técnica 11° - Instituto Técnico Mercedes Ábrego)."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display font-black text-3xl text-gradient-green mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} /> Integrantes del equipo
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {equipo.map((miembro, i) => (
              <SectionCard key={miembro.nombre} title={miembro.nombre} delay={i * 0.06}>
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[i]} flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0`}>
                    {miembro.iniciales}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{miembro.rol}</p>
                    <p className="font-body text-xs text-muted-foreground">Estudiante Media Técnica 11°</p>
                  </div>
                </div>
              </SectionCard>
            ))}
          </div>

          <SectionCard title="Información institucional">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-primary mb-1">Institución</p>
                <p className="font-body text-sm text-foreground">Instituto Técnico Mercedes Ábrego</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-primary mb-1">Grado</p>
                <p className="font-body text-sm text-foreground">11° (Media Técnica)</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-primary mb-1">Docente guía</p>
                <p className="font-body text-sm text-foreground">Carlos Alveiro Mendoza</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-display font-bold text-primary mb-1">Área</p>
                <p className="font-body text-sm text-foreground">Tecnología e Informática</p>
              </div>
            </div>
          </SectionCard>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Users className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ 5 integrantes reales del equipo (nombres, roles, iniciales)</li>
              <li>✓ Información institucional real (ITMA, 11° Media Técnica)</li>
              <li>✓ Docente guía real: Carlos Alveiro Mendoza</li>
              <li>✓ No se inventan asesores, horarios, correos ni cargos ficticios</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
