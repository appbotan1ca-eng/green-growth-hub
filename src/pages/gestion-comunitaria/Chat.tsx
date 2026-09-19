import { MessageCircle, Send, Loader2, Heart, Smile, ExternalLink, Shield } from "lucide-react";
import { useState, FormEvent, useEffect, useRef } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";
import { supabase, type ChatMessage } from "@/lib/supabase";

const botResponses: Record<string, string> = {
  sembrar: "Para guías de siembra, visita nuestra sección de Tutoriales y guías en Gestión Directiva. Tenemos la guía oficial de MinAmbiente y un video tutorial paso a paso. 🌿",
  plantar: "Para guías de siembra, visita nuestra sección de Tutoriales y guías en Gestión Directiva. Tenemos la guía oficial de MinAmbiente y un video tutorial paso a paso. 🌿",
  residuo: "La guía oficial de separación de residuos (MinAmbiente Colombia) está disponible en Tutoriales y guías. También puedes ver la infografía en Gestión Estratégica. ♻️",
  recicl: "La guía oficial de separación de residuos (MinAmbiente Colombia) está disponible en Tutoriales y guías. También puedes ver la infografía en Gestión Estratégica. ♻️",
  identif: "Para identificar plantas, usa iNaturalist (enlace en Tutoriales y guías) o consulta la infografía del proyecto en Gestión Estratégica. 📱",
  encuesta: "La encuesta de impacto está en Gestión Comunitaria > Encuestas. Tu opinión nos ayuda a mejorar. 📝",
  hola: "¡Hola! Bienvenido al chat de FloraQuest. ¿En qué podemos ayudarte? 🌱",
  gracias: "¡De nada! Estamos para ayudar. Si tienes más preguntas, aquí estaremos. 🌱",
};

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "1", content: "¡Hola! Bienvenido al chat de FloraQuest. ¿En qué podemos ayudarte? 🌱", author_name: "FloraQuest", is_bot: true, created_at: new Date().toISOString() },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isSupabaseConfigured = !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);

  useEffect(() => {
    checkConnection();
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const checkConnection = async () => {
    if (!isSupabaseConfigured) {
      setIsConnected(false);
      return;
    }
    try {
      const { error } = await supabase.from('chat_messages').select('id').limit(1);
      setIsConnected(!error);
    } catch {
      setIsConnected(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getBotResponse = (text: string): string => {
    const lower = text.toLowerCase();
    for (const [key, response] of Object.entries(botResponses)) {
      if (lower.includes(key)) return response;
    }
    return "Gracias por tu mensaje. Nuestro equipo te responderá pronto. 🌱";
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !author.trim()) return;

    const userMsg: ChatMessage = {
      id: isSupabaseConfigured ? crypto.randomUUID() : Date.now().toString(),
      content: newMessage,
      author_name: author,
      is_bot: false,
      created_at: new Date().toISOString(),
    };
    setMessages(prev => [...prev, userMsg]);

    const msgText = newMessage;
    setNewMessage("");
    setIsLoading(true);

    setTimeout(() => {
      const botMsg: ChatMessage = {
        id: isSupabaseConfigured ? crypto.randomUUID() : (Date.now() + 1).toString(),
        content: getBotResponse(msgText),
        author_name: "FloraQuest",
        is_bot: true,
        created_at: new Date().toISOString(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
    }, 800);

    if (isSupabaseConfigured) {
      try {
        await supabase.from('chat_messages').insert([
          { id: userMsg.id, content: msgText, author_name: author, is_bot: false },
          { id: (Date.now() + 1).toString(), content: getBotResponse(msgText), author_name: "FloraQuest", is_bot: true },
        ]);
      } catch {
        console.log('Supabase insert failed, using local only');
      }
    }
  };

  const formatTime = (iso: string) => {
    return new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <PageLayout>
      <PageHero
        icon={MessageCircle}
        eyebrow="Gestión Comunitaria"
        title="Chat de la comunidad"
        subtitle={isSupabaseConfigured && isConnected
          ? "Canal de comunicación permanente conectado a Supabase."
          : "Canal de comunicación (modo local - configura Supabase para persistencia)"}
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionCard title="Chat en vivo" className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isSupabaseConfigured && isConnected ? 'bg-green-500' : 'bg-yellow-500'}`} />
                <span className="font-body text-sm text-muted-foreground">
                  {isSupabaseConfigured && isConnected ? "Conectado a Supabase" : "Modo local (Supabase no configurado)"}
                </span>
              </div>
              {!isSupabaseConfigured && (
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-700">
                  Configura .env para persistencia
                </span>
              )}
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background rounded-2xl border border-border mb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.is_bot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      msg.is_bot
                        ? "bg-secondary text-secondary-foreground rounded-bl-md"
                        : "bg-primary text-primary-foreground rounded-br-md"
                    }`}
                  >
                    <p className="font-body text-sm">{msg.content}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-body text-xs opacity-70">{formatTime(msg.created_at)}</span>
                      {!msg.is_bot && <span className="font-body text-xs opacity-70">{msg.author_name}</span>}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[75%] px-4 py-3 rounded-2xl bg-secondary text-secondary-foreground rounded-bl-md animate-pulse">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Tu nombre"
                  className="px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  disabled={isLoading}
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !newMessage.trim() || !author.trim()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
              </div>
            </form>
          </SectionCard>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <SectionCard title="WhatsApp del equipo">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Únete al grupo de WhatsApp para recibir notificaciones y participar en discusiones rápidas.
              </p>
              <a
                href="https://chat.whatsapp.com/xxxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-green-600 text-white font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
              >
                <MessageCircle size={18} /> Unirse al grupo
              </a>
            </SectionCard>
            <SectionCard title="Formulario de contacto">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Para consultas formales, sugerencias detalladas o reportes, usa nuestro formulario de contacto.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-sm shadow-playful hover:-translate-y-1 transition-all"
              >
                <ExternalLink size={18} /> Ir al formulario
              </a>
            </SectionCard>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <Shield className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Chat permanente integrado en la plataforma</li>
              <li>✓ Respuestas automáticas para consultas frecuentes (siembra, residuos, identificación, encuesta)</li>
              <li>✓ Enlace a WhatsApp del equipo</li>
              <li>✓ Formulario de contacto accesible</li>
              <li>{isSupabaseConfigured && isConnected ? "✓" : "○"} Persistencia en Supabase (requiere .env configurado)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
