import { MessageSquare, Send, Loader2, RotateCcw, ArrowRight, ArrowLeft, Eye, AlertCircle, RefreshCw } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";
import { supabase, isSupabaseConfigured, type ForumTopic, type ForumReply } from "@/lib/supabase";

const isValidUuid = (id: string) =>
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);

const normalizeTopic = (topic: ForumTopic): ForumTopic => ({
  id: topic.id,
  title: topic.title,
  content: topic.content,
  author_name: topic.author_name,
  author_role: topic.author_role || "Comunidad",
  created_at: topic.created_at,
  replies_count: topic.replies_count ?? 0,
  views_count: topic.views_count ?? 0,
  tags: topic.tags ?? [],
});

const normalizeReply = (reply: ForumReply): ForumReply => ({
  id: reply.id,
  topic_id: reply.topic_id,
  content: reply.content,
  author_name: reply.author_name,
  author_role: reply.author_role || "Comunidad",
  created_at: reply.created_at,
});

export default function Foros() {
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [isLoadingTopics, setIsLoadingTopics] = useState(true);
  const [topicsError, setTopicsError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [replies, setReplies] = useState<ForumReply[]>([]);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);
  const [repliesError, setRepliesError] = useState<string | null>(null);
  const [newTopic, setNewTopic] = useState({ title: "", content: "", author: "", role: "", tags: "" });
  const [newReply, setNewReply] = useState("");
  const [replyAuthor, setReplyAuthor] = useState("");
  const [replyRole, setReplyRole] = useState("");
  const [isPublishingTopic, setIsPublishingTopic] = useState(false);
  const [isPublishingReply, setIsPublishingReply] = useState(false);

  const loadTopics = async () => {
    setIsLoadingTopics(true);
    setTopicsError(null);
    try {
      if (!supabase || !isSupabaseConfigured) {
        setTopics([]);
        return;
      }
      const { data, error } = await supabase
        .from('forum_topics')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTopics((data ?? []).map(normalizeTopic));
    } catch (err) {
      console.error('❌ Error cargando temas:', err);
      setTopicsError("No se pudieron cargar los temas. Intenta de nuevo.");
      setTopics([]);
      toast.error("Error al cargar los temas");
    } finally {
      setIsLoadingTopics(false);
    }
  };

  useEffect(() => {
    loadTopics();
  }, []);

  const loadReplies = async (topicId: string) => {
    setIsLoadingReplies(true);
    setRepliesError(null);
    try {
      if (!supabase || !isSupabaseConfigured || !isValidUuid(topicId)) {
        setReplies([]);
        return;
      }
      const { data, error } = await supabase
        .from('forum_replies')
        .select('*')
        .eq('topic_id', topicId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setReplies((data ?? []).map(normalizeReply));
    } catch (err) {
      console.error('❌ Error cargando respuestas:', err);
      setRepliesError("No se pudieron cargar las respuestas.");
      setReplies([]);
    } finally {
      setIsLoadingReplies(false);
    }
  };

  const incrementViews = async (topicId: string) => {
    if (!supabase || !isSupabaseConfigured || !isValidUuid(topicId)) return;
    try {
      await supabase.rpc('increment_views', { topic_id: topicId });
      setTopics(prev => prev.map(t => t.id === topicId ? { ...t, views_count: (t.views_count ?? 0) + 1 } : t));
    } catch {
      console.log('No se pudo incrementar las vistas');
    }
  };

  const incrementRepliesCount = async (topicId: string) => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase
        .from('forum_topics')
        .select('replies_count')
        .eq('id', topicId)
        .single();
      if (error) throw error;
      const next = (data?.replies_count ?? 0) + 1;
      const { error: updateError } = await supabase
        .from('forum_topics')
        .update({ replies_count: next })
        .eq('id', topicId);
      if (updateError) throw updateError;
      setTopics(prev => prev.map(t => t.id === topicId ? { ...t, replies_count: next } : t));
    } catch (err) {
      console.error('No se pudo actualizar replies_count:', err);
    }
  };

  useEffect(() => {
    if (selectedTopic) {
      loadReplies(selectedTopic.id);
      incrementViews(selectedTopic.id);
    }
  }, [selectedTopic]);

  const handleNewTopic = async (e: FormEvent) => {
    e.preventDefault();
    if (!newTopic.title.trim() || !newTopic.content.trim() || !newTopic.author.trim()) return;
    if (!supabase || !isSupabaseConfigured) {
      toast.error("Supabase no está configurado. No se puede publicar el tema.");
      return;
    }
    setIsPublishingTopic(true);
    try {
      const { data, error } = await supabase
        .from('forum_topics')
        .insert({
          id: crypto.randomUUID(),
          title: newTopic.title.trim(),
          content: newTopic.content.trim(),
          author_name: newTopic.author.trim(),
          author_role: newTopic.role.trim() || "Comunidad",
          replies_count: 0,
          views_count: 0,
          tags: newTopic.tags.split(",").map(t => t.trim()).filter(Boolean),
        })
        .select()
        .single();

      if (error) throw error;
      setTopics(prev => [normalizeTopic(data as ForumTopic), ...prev]);
      setNewTopic({ title: "", content: "", author: "", role: "", tags: "" });
      setShowForm(false);
      toast.success("Tema creado en el foro");
    } catch (err) {
      console.error('❌ Error creando tema:', err);
      toast.error("Error al crear el tema. Intenta de nuevo.");
    } finally {
      setIsPublishingTopic(false);
    }
  };

  const handleReply = async (e: FormEvent) => {
    e.preventDefault();
    if (!newReply.trim() || !replyAuthor.trim() || !selectedTopic) return;
    if (!supabase || !isSupabaseConfigured) {
      toast.error("Supabase no está configurado. No se puede publicar la respuesta.");
      return;
    }
    if (!isValidUuid(selectedTopic.id)) {
      toast.error("Tema inválido. No se puede responder.");
      return;
    }
    setIsPublishingReply(true);
    try {
      const { data, error } = await supabase
        .from('forum_replies')
        .insert({
          id: crypto.randomUUID(),
          topic_id: selectedTopic.id,
          content: newReply.trim(),
          author_name: replyAuthor.trim(),
          author_role: replyRole.trim() || "Comunidad",
        })
        .select()
        .single();

      if (error) throw error;
      const reply = normalizeReply(data as ForumReply);
      setReplies(prev => [...prev, reply]);
      setTopics(prev => prev.map(t => t.id === selectedTopic.id ? { ...t, replies_count: (t.replies_count ?? 0) + 1 } : t));
      setNewReply("");
      await incrementRepliesCount(selectedTopic.id);
      toast.success("Respuesta publicada");
    } catch (err) {
      console.error('❌ Error al responder:', err);
      toast.error("Error al publicar la respuesta. Intenta de nuevo.");
    } finally {
      setIsPublishingReply(false);
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
        subtitle={isSupabaseConfigured
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
                        disabled={isPublishingTopic}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
                      >
                        {isPublishingTopic ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                        {isPublishingTopic ? "Publicando..." : "Publicar tema"}
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

              {isLoadingTopics ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3">
                  <Loader2 className="animate-spin text-primary" size={28} />
                  <p className="font-body text-sm text-muted-foreground">Cargando temas...</p>
                </div>
              ) : topicsError ? (
                <div className="p-8 rounded-3xl bg-card border border-border shadow-card text-center">
                  <AlertCircle className="text-destructive mx-auto mb-3" size={28} />
                  <p className="font-body text-sm text-muted-foreground mb-4">{topicsError}</p>
                  <button
                    onClick={loadTopics}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
                  >
                    <RefreshCw size={16} /> Reintentar
                  </button>
                </div>
              ) : topics.length === 0 ? (
                <div className="p-8 rounded-3xl bg-card border border-border shadow-card text-center">
                  <MessageSquare className="text-primary mx-auto mb-3" size={28} />
                  <p className="font-body text-sm text-muted-foreground">
                    No hay temas todavía. Sé el primero en iniciar una conversación.
                  </p>
                </div>
              ) : (
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
              )}
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
                  ) : repliesError ? (
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                      <AlertCircle className="text-destructive" size={24} />
                      <p className="font-body text-sm text-muted-foreground">{repliesError}</p>
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
                        disabled={isPublishingReply || !newReply.trim() || !replyAuthor.trim()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
                      >
                        {isPublishingReply ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                        {isPublishingReply ? "Publicando..." : "Publicar respuesta"}
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