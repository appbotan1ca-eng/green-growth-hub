import { MessageCircle, Send, Loader2, CheckCircle, Smile } from "lucide-react";
import { useState, FormEvent } from "react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import { toast } from "sonner";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Bienvenido al chat de BotaniApp. ¿En qué podemos ayudarte?", sender: "bot", time: "10:00" },
    { id: 2, text: "¿Cómo puedo descargar la app?", sender: "user", time: "10:01" },
    { id: 3, text: "Actualmente BotaniApp es una plataforma web. Puedes acceder desde cualquier navegador en: botaniapp.com. Próximamente tendremos app nativa.", sender: "bot", time: "10:01" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const userMsg = { id: Date.now(), text: newMessage, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    const msgText = newMessage;
    setNewMessage("");
    setIsLoading(true);
    setTimeout(() => {
      let botReply = "Gracias por tu mensaje. Nuestro equipo te responderá pronto. 🌱";
      if (msgText.toLowerCase().includes("sembrar") || msgText.toLowerCase().includes("plantar")) {
        botReply = "Para guías de siembra, visita nuestra sección de Tutoriales y guías en Gestión Directiva. Tenemos videos paso a paso. 🌿";
      } else if (msgText.toLowerCase().includes("residuo") || msgText.toLowerCase().includes("recicl")) {
        botReply = "La guía de separación de residuos está disponible en Tutoriales y guías. También puedes ver la infografía en Gestión Estratégica. ♻️";
      } else if (msgText.toLowerCase().includes("identif")) {
        botReply = "Para identificar plantas, usa el tutorial interactivo de iNaturalist en Tutoriales y guías. 📱";
      } else if (msgText.toLowerCase().includes("encuesta") || msgText.toLowerCase().includes("opin")) {
        botReply = "La encuesta de impacto está en Gestión Comunitaria > Encuestas. Tu opinión nos ayuda a mejorar. 📝";
      }
      const botMsg = { id: Date.now() + 1, text: botReply, sender: "bot", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
    }, 800);
  };

  return (
    <PageLayout>
      <PageHero
        icon={MessageCircle}
        eyebrow="Gestión Comunitaria"
        title="Chat de la comunidad"
        subtitle="Canal de comunicación permanente para consultas, sugerencias e interacción con el equipo de BotaniApp."
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <SectionCard title="Chat en vivo" className="mb-8">
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-background rounded-2xl border border-border mb-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    <p className="font-body text-sm">{msg.text}</p>
                    <p className="font-body text-xs opacity-70 mt-1 text-right">{msg.time}</p>
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
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
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
                disabled={isLoading || !newMessage.trim()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              </button>
            </form>
          </SectionCard>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <SectionCard title="WhatsApp del equipo">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Únete al grupo de WhatsApp para recibir notificaciones, actualizaciones y participar en discusiones rápidas.
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
                <Send size={18} /> Ir al formulario
              </a>
            </SectionCard>
          </div>

          <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
            <h3 className="font-display font-bold text-foreground mb-3 flex items-center gap-2">
              <MessageCircle className="text-primary" size={22} /> Cumplimiento de requisitos
            </h3>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li>✓ Chat permanente integrado en la plataforma</li>
              <li>✓ Enlace a WhatsApp del equipo/empresa</li>
              <li>✓ Formulario de contacto accesible</li>
              <li>✓ Respuestas automáticas para consultas frecuentes (siembra, residuos, identificación, encuesta)</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}