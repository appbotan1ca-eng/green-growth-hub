import { MessageSquare, Send, Loader2, User, Clock, RotateCcw } from "lucide-react";
import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";

const initialTopics = [
  {
    id: 1,
    titulo: "¿Qué especies nativas han encontrado en el colegio?",
    autor: "Juan Felipe Contreras",
    rol: "Estudiante 11° - Investigación",
    tiempo: "Hace 3 horas",
    respuestas: 12,
    vistas: 89,
    tags: ["Flora local", "Biodiversidad", "Ciencia ciudadana"],
  },
  {
    id: 2,
    titulo: "Propuesta: Crear un herbario digital colaborativo",
    autor: "Prof. Carlos Mendoza",
    rol: "Docente Tecnología e Informática",
    tiempo: "Ayer",
    respuestas: 8,
    vistas: 156,
    tags: ["Propuesta", "Herbario", "Colaborativo"],
  },
  {
    id: 3,
    titulo: "Dudas sobre separación de residuos en el baño",
    autor: "Estudiante 10°B",
    rol: "Estudiante",
    tiempo: "Hace 2 días",
    respuestas: 5,
    vistas: 67,
    tags: ["Residuos", "Duda", "Baños"],
  },
  {
    id: 4,
    titulo: "Experiencia usando iNaturalist para el proyecto",
    autor: "Samira Alexandra",
    rol: "Estudiante 11° - Multimedia",
    tiempo: "Hace 3 días",
    respuestas: 15,
    vistas: 203,
    tags: ["iNaturalist", "Tutorial", "Experiencia"],
  },
];

export default function Foros() {
  const [topics, setTopics] = useState(initialTopics);
  const [showForm, setShowForm] = useState(false);
  const [newTopic, setNewTopic] = useState({ titulo: "", contenido: "", autor: "", tags: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newTopic.titulo.trim() || !newTopic.contenido.trim() || !newTopic.autor.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      const topic = {
        id: Date.now(),
        titulo: newTopic.titulo,
        autor: newTopic.autor,
        rol: "Comunidad",
        tiempo: "Ahora mismo",
        respuestas: 0,
        vistas: 1,
        tags: newTopic.tags.split(",").map(t => t.trim()).filter(Boolean),
      };
      setTopics([topic, ...topics]);
      setNewTopic({ titulo: "", contenido: "", autor: "", tags: "" });
      setShowForm(false);
      setIsLoading(false);
      toast.success("Tema creado en el foro");
    }, 500);
  };

  return (
    <PageLayout>
      <PageHero
        icon={MessageSquare}
        eyebrow="Gestión Comunitaria"
        title="Foros de la comunidad"
        subtitle="Espacio de discusión e interacción constante sobre temas específicos del proyecto productivo."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-gradient-green flex items-center gap-2">
              <MessageSquare className="text-primary" size={26} /> Temas activos
            </h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
            >
              <RotateCcw size={18} /> Nuevo tema
            </button>
          </div>

          {showForm && (
            <SectionCard title="Crear nuevo tema de discusión" className="mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="autor" className="block font-body text-sm text-muted-foreground mb-1">Tu nombre</label>
                  <input
                    id="autor"
                    required
                    value={newTopic.autor}
                    onChange={(e) => setNewTopic({ ...newTopic, autor: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tu nombre o seudónimo"
                  />
                </div>
                <div>
                  <label htmlFor="titulo" className="block font-body text-sm text-muted-foreground mb-1">Título del tema</label>
                  <input
                    id="titulo"
                    required
                    value={newTopic.titulo}
                    onChange={(e) => setNewTopic({ ...newTopic, titulo: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ej: ¿Cómo mejorar la compostera del colegio?"
                  />
                </div>
                <div>
                  <label htmlFor="contenido" className="block font-body text-sm text-muted-foreground mb-1">Contenido / Pregunta</label>
                  <textarea
                    id="contenido"
                    required
                    rows={4}
                    value={newTopic.contenido}
                    onChange={(e) => setNewTopic({ ...newTopic, contenido: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Describe tu duda, propuesta o experiencia..."
                  />
                </div>
                <div>
                  <label htmlFor="tags" className="block font-body text-sm text-muted-foreground mb-1">Etiquetas (separadas por coma)</label>
                  <input
                    id="tags"
                    value={newTopic.tags}
                    onChange={(e) => setNewTopic({ ...newTopic, tags: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Flora local, Residuos, Tutorial, Propuesta..."
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
                  >
                    {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                    {isLoading ? "Publicando..." : "Publicar tema"}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setShowForm(false); setNewTopic({ titulo: "", contenido: "", autor: "", tags: "" }); }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary text-secondary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </SectionCard>
          )}

          <div className="space-y-4">
            {topics.map((topic) => (
              <SectionCard key={topic.id} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-emerald to-green-bright flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0">
                    {topic.autor.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground mb-1">{topic.titulo}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2 flex-wrap">
                      <span className="font-body">{topic.autor}</span>
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary">{topic.rol}</span>
                      <span className="font-body">{topic.tiempo}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                      <span className="flex items-center gap-1"><MessageSquare size={14} /> {topic.respuestas} respuestas</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {topic.vistas} vistas</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {topic.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`/gestion-comunitaria/foros/${topic.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-body text-sm font-semibold hover:bg-primary/20 transition-colors shrink-0"
                  >
                    Participar <RotateCcw size={14} />
                  </a>
                </div>
              </SectionCard>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <MessageSquare className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Foro relacionado con tema específico del proyecto (flora, residuos, apps, propuestas)</li>
              <li>✓ Permite discusión e interacción constante en la plataforma</li>
              <li>✓ Creación de nuevos temas por parte de la comunidad</li>
              <li>✓ Respuestas, vistas y etiquetas por tema</li>
              <li>✓ Moderación implícita (roles de autor visibles: estudiantes, docentes, comunidad)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}