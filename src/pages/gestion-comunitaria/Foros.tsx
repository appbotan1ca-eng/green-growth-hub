import { MessageSquare, Send, Loader2, User, Clock, RotateCcw, ArrowRight, ArrowLeft, Eye, AlertCircle } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured, type ForumTopic, type ForumReply } from "@/lib/supabase";

const initialTopics: ForumTopic[] = [
  {
    id: "1",
    title: "¿Qué especies nativas han encontrado en el colegio?",
    content: "Hemos estado documentando la flora del ITMA y queremos saber qué especies han encontrado ustedes. Compartan fotos y ubicaciones.",
    author_name: "Juan Felipe Contreras",
    author_role: "Estudiante 11° - Investigación",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    replies_count: 12,
    views_count: 89,
    tags: ["Flora local", "Biodiversidad", "Ciencia ciudadana"],
  },
  {
    id: "2",
    title: "Propuesta: Crear un herbario digital colaborativo",
    content: "Propongo que entre todos creemos un herbario digital con las especies que documentemos. Podríamos usar iNaturalist como base y agregar fichas técnicas propias.",
    author_name: "Prof. Carlos Mendoza",
    author_role: "Docente Tecnología e Informática",
    created_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    replies_count: 8,
    views_count: 156,
    tags: ["Propuesta", "Herbario", "Colaborativo"],
  },
  {
    id: "3",
    title: "Dudas sobre separación de residuos en los baños",
    content: "¿Qué contenedor usan para el papel higiénico usado? En la guía dice que va en no aprovechables, pero algunos compañeros lo ponen en reciclables.",
    author_name: "Estudiante 10°B",
    author_role: "Estudiante",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    replies_count: 5,
    views_count: 67,
    tags: ["Residuos", "Duda", "Baños"],
  },
  {
    id: "4",
    title: "Experiencia usando iNaturalist para el proyecto",
    content: "Les cuento mi experiencia usando iNaturalist para identificar las plantas del colegio. La app es muy útil pero a veces falla con especies muy locales. ¿A ustedes les pasa?",
    author_name: "Samira Alexandra",
    author_role: "Estudiante 11° - Multimedia",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    replies_count: 15,
    views_count: 203,
    tags: ["iNaturalist", "Tutorial", "Experiencia"],
  },
];

export default function Foros() {
  const [topics, setTopics] = useState<ForumTopic[]>(initialTopics);
  const [showForm, setShowForm] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [replies, setReplies] = useState<ForumReply[]>([]);
  const [newTopic, setNewTopic] = useState({ title: "", content: "", author: "", role: "", tags: "" });
  const [newReply, setNewReply] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");
  const [replyRole, setReplyRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);
  const [supabaseReady] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (selectedTopic) {
      loadReplies(selectedTopic.id);
      incrementViews(selectedTopic.id);
    }
  }, [selectedTopic]);

  const loadReplies = async (topicId: string) => {
    setIsLoadingReplies(true);
    try {
      if (supabaseReady && supabase) {
        const { data, error } = await supabase
          .from('forum_replies')
          .select('*')
          .eq('topic_id', topicId)
          .order('created_at', { ascending: true });

        if (error) {
          console.log('Supabase error, using local:', error.message);
          setReplies([]);
        } else {
          setReplies(data || []);
        }
      } else {
        setReplies([]);
      }
    } catch {
      setReplies([]);
    } finally {
      setIsLoadingReplies(false);
    }
  };

  const incrementViews = async (topicId: string) => {
    if (!supabaseReady || !supabase) return;
    try {
      await supabase.rpc('increment_views', { topic_id: topicId });
      setTopics(topics.map(t => t.id === topicId ? { ...t, views_count: t.views_count + 1 } : t));
    } catch {
      console.log('Could not increment views');
    }
  };

  const handleNewTopic = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTopic.title.trim() || !newTopic.content.trim() || !newTopic.author.trim()) return;
    setIsLoading(true);
    try {
      const topic: ForumTopic = {
        id: supabaseReady ? crypto.randomUUID() : Date.now().toString(),
        title: newTopic.title,
        content: newTopic.content,
        author_name: newTopic.author,
        author_role: newTopic.role || "Comunidad",
        created_at: new Date().toISOString(),
        replies_count: 0,
        views_count: 1,
        tags: newTopic.tags.split(",").map(t => t.trim()).filter(Boolean),
      };

      if (supabaseReady && supabase) {
        const { error } = await supabase.from('forum_topics').insert({
          id: topic.id,
          title: topic.title,
          content: topic.content,
          author_name: topic.author_name,
          author_role: topic.author_role,
          tags: topic.tags,
        });
        if (error) throw error;
      }

      setTopics([topic, ...topics]);
      setNewTopic({ title: "", content: "", author: "", role: "", tags: "" });
      setShowForm(false);
      toast.success("Tema creado en el foro");
    } catch (err) {
      console.error(err);
      toast.error("Error al crear tema");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReply = async (e: FormEvent) => {
    e.preventDefault();
    if (!newReply.trim() || !replyAuthor.trim() || !selectedTopic) return;
    setIsLoading(true);
    try {
      const reply: ForumReply = {
        id: supabaseReady ? crypto.randomUUID() : Date.now().toString(),
        topic_id: selectedTopic.id,
        content: newReply,
        author_name: replyAuthor,
        author_role: replyRole || "Comunidad",
        created_at: new Date().toISOString(),
      };

      if (supabaseReady && supabase) {
        const { error } = await supabase.from('forum_replies').insert({
          id: reply.id,
          topic_id: reply.topic_id,
          content: reply.content,
          author_name: reply.author_name,
          author_role: reply.author_role,
        });
        if (error) throw error;
      }

      setReplies([...replies, reply]);
      setTopics(topics.map(t => t.id === selectedTopic.id ? { ...t, replies_count: t.replies_count + 1 } : t));
      setNewReply("");
      toast.success("Respuesta publicada");
    } catch (err) {
      console.error(err);
      toast.error("Error al responder");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (iso: string) => {
    const date = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);
    if (days > 0) return `Hace ${days} día${days > 1 ? 's' : ''}`;
    if (hours > 0) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
    return "Ahora mismo";
  };

  return (
    <PageLayout>
<PageHero
        icon={MessageSquare}
        eyebrow="Gestión Comunitaria"
        title="Foros de la comunidad"
        subtitle={supabaseReady
          ? "Espacio de discusión e interacción sobre temas del proyecto. Conectado a Supabase."
          : "Espacio de discusión (modo local - configura Supabase para persistencia)"}
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          {!selectedTopic ? (
            <>
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
                  <form onSubmit={handleNewTopic} className="space-y-4">
                    <div>
                      <label htmlFor="author" className="block font-body text-sm text-muted-foreground mb-1">Tu nombre</label>
                      <input
                        id="author"
                        required
                        value={newTopic.author}
                        onChange={(e) => setNewTopic({ ...newTopic, author: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tu nombre o seudónimo"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block font-body text-sm text-muted-foreground mb-1">Tu rol (opcional)</label>
                      <input
                        id="role"
                        value={newTopic.role}
                        onChange={(e) => setNewTopic({ ...newTopic, role: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Ej: Estudiante 11°, Docente, Padre de familia"
                      />
                    </div>
                    <div>
                      <label htmlFor="title" className="block font-body text-sm text-muted-foreground mb-1">Título del tema</label>
                      <input
                        id="title"
                        required
                        value={newTopic.title}
                        onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Ej: ¿Cómo mejorar la compostera del colegio?"
                      />
                    </div>
                    <div>
                      <label htmlFor="content" className="block font-body text-sm text-muted-foreground mb-1">Contenido / Pregunta</label>
                      <textarea
                        id="content"
                        required
                        rows={4}
                        value={newTopic.content}
                        onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
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
                        onClick={() => { setShowForm(false); setNewTopic({ title: "", content: "", author: "", role: "", tags: "" }); }}
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
                  <SectionCard key={topic.id} className="p-6 cursor-pointer hover:shadow-card-hover transition-all" onClick={() => setSelectedTopic(topic)}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-emerald to-green-bright flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0">
                        {topic.author_name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-foreground mb-1">{topic.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2 flex-wrap">
                          <span className="font-body">{topic.author_name}</span>
                          <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary">{topic.author_role}</span>
                          <span className="font-body">{formatTime(topic.created_at)}</span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-2">{topic.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.tags.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                        <span className="flex items-center gap-1"><MessageSquare size={14} /> {topic.replies_count}</span>
                        <span className="flex items-center gap-1"><Eye size={14} /> {topic.views_count}</span>
                        <ArrowRight className="text-primary" size={18} />
                      </div>
                    </div>
                  </SectionCard>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <button
                onClick={() => setSelectedTopic(null)}
                className="inline-flex items-center gap-2 text-primary hover:underline font-body text-sm"
              >
                <ArrowLeft size={18} /> Volver a temas
              </button>

              <SectionCard className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-emerald to-green-bright flex items-center justify-center text-lg font-bold text-primary-foreground shrink-0">
                    {selectedTopic.author_name.split(" ").map(n => n[0]).join("").slice(0,2).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl text-foreground mb-1">{selectedTopic.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2 flex-wrap">
                      <span className="font-body">{selectedTopic.author_name}</span>
                      <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary">{selectedTopic.author_role}</span>
                      <span className="font-body">{formatTime(selectedTopic.created_at)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedTopic.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="font-body text-muted-foreground">{selectedTopic.content}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                    <MessageSquare className="text-primary" size={22} /> Respuestas ({replies.length})
                  </h3>
                  {isLoadingReplies ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="animate-spin text-primary" size={24} />
                    </div>
                  ) : replies.length === 0 ? (
                    <p className="font-body text-sm text-muted-foreground text-center py-8">No hay respuestas aún. Sé el primero en responder.</p>
                  ) : (
                    <div className="space-y-4">
                      {replies.map((reply) => (
                        <div key={reply.id} className="p-4 rounded-xl bg-card border border-border">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className="font-display font-bold text-sm text-foreground">{reply.author_name}</span>
                            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-secondary text-primary">{reply.author_role}</span>
                            <span className="font-body text-xs text-muted-foreground">{formatTime(reply.created_at)}</span>
                          </div>
                          <p className="font-body text-sm text-foreground">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 border-t border-border pt-6">
                    <h4 className="font-display font-semibold text-foreground mb-3">Responder</h4>
                    <form onSubmit={handleReply} className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <input
                          required
                          value={replyAuthor}
                          onChange={(e) => setReplyAuthor(e.target.value)}
                          placeholder="Tu nombre"
                          className="px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        <input
                          value={replyRole}
                          onChange={(e) => setReplyRole(e.target.value)}
                          placeholder="Tu rol (opcional)"
                          className="px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <textarea
                        required
                        rows={3}
                        value={newReply}
                        onChange={(e) => setNewReply(e.target.value)}
                        placeholder="Escribe tu respuesta..."
                        className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !newReply.trim() || !replyAuthor.trim()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
                      >
                        {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                        {isLoading ? "Publicando..." : "Publicar respuesta"}
                      </button>
                    </form>
                  </div>
                </div>
              </SectionCard>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
