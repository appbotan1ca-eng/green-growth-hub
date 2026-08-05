import { FormEvent, useState } from "react";
import { Mail, MessageCircle, Instagram, Send, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { toast } from "sonner";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("¡Gracias! Recibimos tu mensaje 🌱");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <PageLayout>
      <PageHero
        icon={Mail}
        eyebrow="Contacto"
        title="Hablemos de BotaniApp"
        subtitle="Escríbenos tus dudas, ideas o comentarios sobre el proyecto."
      />

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-4"
          >
            <h2 className="font-display font-bold text-xl text-foreground">Formulario de contacto</h2>
            <div>
              <label htmlFor="nombre" className="block font-body text-sm text-muted-foreground mb-1">Nombre</label>
              <input
                id="nombre"
                required
                className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm text-muted-foreground mb-1">Correo</label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="block font-body text-sm text-muted-foreground mb-1">Mensaje</label>
              <textarea
                id="mensaje"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-2xl bg-background border border-input font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Cuéntanos tu idea o pregunta"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all"
            >
              <Send size={18} /> Enviar mensaje
            </button>
            {sent && (
              <p className="font-body text-sm text-primary">
                Mensaje registrado. Te responderemos al correo del proyecto.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-card border border-border shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <Mail size={22} />
              </span>
              <div>
                <h3 className="font-display font-bold text-foreground">Correo del proyecto</h3>
                <p className="font-body text-sm text-muted-foreground">botaniapp.proyecto@gmail.com</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <MessageCircle size={22} />
              </span>
              <div>
                <h3 className="font-display font-bold text-foreground">WhatsApp</h3>
                <p className="font-body text-sm text-muted-foreground">Canal de comunicación del equipo</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <Instagram size={22} />
              </span>
              <div>
                <h3 className="font-display font-bold text-foreground">Redes sociales</h3>
                <p className="font-body text-sm text-muted-foreground">@botaniapp</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-card border border-border shadow-card flex items-start gap-4">
              <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="font-display font-bold text-foreground">Institución</h3>
                <p className="font-body text-sm text-muted-foreground">
                  Instituto Técnico Mercedes Ábrego · Media Técnica 11°
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}