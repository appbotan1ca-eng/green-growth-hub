import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Instagram, Facebook, Youtube, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos, te responderemos pronto. 🌱",
    });
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-4xl sm:text-5xl font-display font-black text-foreground mb-4">
            <span className="text-gradient-green">Contacto</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground font-body max-w-2xl mx-auto">
            ¿Tienes preguntas, ideas o sugerencias? Estamos para escucharte.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl bg-card border border-border shadow-card space-y-4"
          >
            <div>
              <label className="block font-display font-semibold text-foreground mb-2 text-sm">Nombre</label>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none font-body"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block font-display font-semibold text-foreground mb-2 text-sm">Correo</label>
              <input
                type="email"
                required
                value={form.correo}
                onChange={(e) => setForm({ ...form, correo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none font-body"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label className="block font-display font-semibold text-foreground mb-2 text-sm">Mensaje</label>
              <textarea
                required
                rows={4}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none font-body resize-none"
                placeholder="Cuéntanos tu idea..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-0.5 transition-transform"
            >
              <Send size={18} /> Enviar mensaje
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div className="p-6 rounded-3xl bg-gradient-hero text-primary-foreground">
              <Mail className="mb-3" size={28} />
              <h4 className="font-display font-bold text-lg mb-1">Correo del proyecto</h4>
              <a href="mailto:botaniapp@itma.edu.co" className="font-body underline opacity-90 hover:opacity-100">
                botaniapp@itma.edu.co
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border shadow-card">
              <MapPin className="text-primary mb-3" size={28} />
              <h4 className="font-display font-bold text-foreground text-lg mb-1">Ubicación</h4>
              <p className="text-muted-foreground font-body text-sm">
                Instituto Técnico Mercedes Abrego<br/>Media Técnica · Tecnología e Informática
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border shadow-card">
              <h4 className="font-display font-bold text-foreground text-lg mb-4">Síguenos</h4>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, url: "https://instagram.com" },
                  { Icon: Facebook, url: "https://facebook.com" },
                  { Icon: Youtube, url: "https://youtube.com" },
                ].map(({ Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}