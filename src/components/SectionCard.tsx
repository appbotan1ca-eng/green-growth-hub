import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionCardProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function SectionCard({ icon: Icon, title, children, delay = 0 }: SectionCardProps) {
  return (
    <motion.article
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className="p-8 rounded-3xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        {Icon && (
          <span className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-primary shrink-0">
            <Icon size={22} />
          </span>
        )}
        <h2 className="font-display font-bold text-xl text-foreground">{title}</h2>
      </div>
      <div className="font-body text-muted-foreground space-y-3 leading-relaxed">{children}</div>
    </motion.article>
  );
}
