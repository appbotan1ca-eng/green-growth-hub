import { motion } from "framer-motion";
import { PlayCircle, ExternalLink } from "lucide-react";

const VIDEO_ID = "1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_";

export default function PitchVideoSection() {
  return (
    <section id="video-pitch" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PlayCircle className="text-primary" size={28} />
            <span className="text-primary font-display font-bold text-sm uppercase tracking-widest">
              Video Pitch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-gradient-green mb-4">
            Conoce BotaniApp en video
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Mira nuestro pitch y descubre cómo estamos transformando la educación ambiental 🌱
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-card bg-card border-4 border-primary/20"
        >
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src={`https://drive.google.com/file/d/${VIDEO_ID}/preview`}
              title="Video Pitch BotaniApp"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://drive.google.com/file/d/${VIDEO_ID}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-display font-bold shadow-playful hover:-translate-y-1 transition-all duration-200"
          >
            <ExternalLink size={18} />
            Abrir en Google Drive
          </a>
          <p className="text-xs text-muted-foreground font-body text-center max-w-sm">
            Si la vista previa no carga, asegúrate de que el video esté compartido como
            "Cualquier persona con el enlace".
          </p>
        </motion.div>
      </div>
    </section>
  );
}