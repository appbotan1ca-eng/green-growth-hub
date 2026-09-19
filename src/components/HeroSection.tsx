import { motion } from "framer-motion";
import { Sprout, ArrowDown } from "lucide-react";
import leafMascot from "@/assets/leaf-mascot.png";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Decorative leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-foreground/10"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 14}%`,
              fontSize: `${40 + i * 10}px`,
            }}
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mb-6"
        >
          <img src={leafMascot} alt="FloraQuest mascota" className="mx-auto h-32 w-32 animate-float drop-shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl sm:text-7xl font-display font-black text-primary-foreground leading-tight mb-4"
        >
          FloraQuest
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl font-body font-semibold text-primary-foreground/90 mb-2"
        >
          🌱 Aprende, Crece, Protege 🌍
        </motion.p>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-base sm:text-lg text-primary-foreground/75 max-w-2xl mx-auto mb-8 font-body"
        >
          App educativa sobre botánica para fortalecer la educación ambiental
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#quienes-somos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary-foreground text-green-deep font-display font-bold text-lg shadow-playful hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200"
          >
            <Sprout size={22} />
            Conoce el Proyecto
          </a>
          <a
            href="#elevator-pitch"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/40 text-primary-foreground font-display font-bold text-lg hover:bg-primary-foreground/10 transition-all duration-200"
          >
            Elevator Pitch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <ArrowDown className="mx-auto text-primary-foreground/50 animate-bounce" size={28} />
        </motion.div>
      </div>
    </section>
  );
}
