import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ icon: Icon, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-primary-foreground/10 blur-2xl" />
      <div className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground font-display font-bold text-sm mb-5"
        >
          <Icon size={18} />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-display font-black text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary-foreground/85 font-body text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
