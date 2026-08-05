import { motion } from "framer-motion";
import { Users, PlayCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";

const members = [
  { name: "Angelo Samir Rodríguez Zabala", initials: "AR", role: "Diseño del prototipo" },
  { name: "Juan Felipe Contreras Velasco", initials: "JC", role: "Investigación" },
  { name: "Santiago Alejandro Castro Bautista", initials: "SC", role: "Comunicación digital" },
  { name: "Daniel Esteban Salcedo López", initials: "DS", role: "Desarrollo web" },
  { name: "Samira Alexandra", initials: "SA", role: "Contenidos y multimedia" },
];

const colors = [
  "from-green-emerald to-green-bright",
  "from-green-deep to-green-emerald",
  "from-green-bright to-green-glow",
  "from-accent to-green-emerald",
  "from-green-light to-green-bright",
];

export default function Equipo() {
  return (
    <PageLayout>
      <PageHero
        icon={Users}
        eyebrow="Equipo de trabajo"
        title="Quiénes hacen BotaniApp"
        subtitle="Estudiantes de Media Técnica del Instituto Técnico Mercedes Ábrego, grado 11."
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl font-display font-black text-primary-foreground">{m.initials}</span>
              </div>
              <h2 className="font-display font-bold text-foreground text-center text-lg mb-1">{m.name}</h2>
              <p className="text-sm text-primary font-display font-semibold">{m.role}</p>
              <p className="text-xs text-muted-foreground font-body mt-1">Estudiante Media Técnica</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <PlayCircle className="text-primary" size={26} />
              <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">
                Elevator Pitch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-gradient-green">
              Nuestro proyecto en un minuto
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card bg-card border-4 border-primary/20">
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
                title="Elevator Pitch BotaniApp"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}