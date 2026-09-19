import { MessagesSquare, Send, User, Clock, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";

const initialMessages = [
  { id: 1, author: "Docente Carlos Mendoza", text: "Excelente iniciativa. Los estudiantes demuestran gran compromiso ambiental.", time: "Hace 2 horas", role: "docente" },
  { id: 2, author: "Estudiante 11°A", text: "Me encantó la app. Ahora puedo identificar las plantas del colegio.", time: "Hace 5 horas", role: "estudiante" },
  { id: 3, author: "Coordinación Académica", text: "El proyecto será presentado en la feria de ciencias institucional.", time: "Ayer", role: "admin" },
];

export default function ForoDiscusion() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !author.trim()) return;
    setIsLoading(true);
    setTimeout(() => {
      const msg = {
        id: Date.now(),
        author,
        text: newMessage,
        time: "Ahora mismo",
        role: "visitante",
      };
      setMessages([msg, ...messages]);
      setNewMessage("");
      setAuthor("");
      setIsLoading(false);
      toast.success("Mensaje publicado en el foro");
    }, 500);
  };

  return (
    <PageLayout>
      <PageHero
        icon={MessagesSquare}
        eyebrow="Gestión Directiva"
        title="Foro de discusión"
        subtitle="Espacio para que la comunidad educativa comparta ideas, realice preguntas y discuta temas relacionados con el impacto del proyecto."
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionCard title="Nuevo mensaje" className="mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="author" className="block font-body text-sm text-muted-foreground mb-1">
                  Tu nombre / Rol
                </label>
                <input
                  id="author"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Ej: Estudiante 10°, Docente, Padre de familia"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-body text-sm text-muted-foreground mb-1">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Comparte tu opinión, pregunta o idea sobre BotaniApp..."
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                {isLoading ? "Publicando..." : "Publicar mensaje"}
              </button>
            </form>
          </SectionCard>

          <SectionCard title="Conversación">
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {messages.map((msg) => (
                <div key={msg.id} className="p-4 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-display font-bold text-sm text-foreground">{msg.author}</span>
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                      msg.role === "docente" ? "bg-blue-100 text-blue-700" :
                      msg.role === "admin" ? "bg-purple-100 text-purple-700" :
                      msg.role === "estudiante" ? "bg-green-100 text-green-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {msg.role}
                    </span>
                    <span className="font-body text-xs text-muted-foreground ml-auto">{msg.time}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground">{msg.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-body text-muted-foreground text-center">
              Foro moderado. Los mensajes inapropiados serán removidos.
            </p>
          </SectionCard>
        </div>
      </section>
    </PageLayout>
  );
}