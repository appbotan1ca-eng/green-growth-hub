import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import leafMascot from "@/assets/leaf-mascot.png";

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Sobre el proyecto", to: "/sobre-el-proyecto" },
  { label: "Equipo", to: "/equipo" },
  { label: "Implementación", to: "/implementacion" },
  { label: "Multimedia", to: "/recursos-multimedia" },
  { label: "Biblioteca", to: "/biblioteca" },
  { label: "Impacto", to: "/impacto-ambiental" },
  { label: "Participación", to: "/participacion" },
  { label: "Contacto", to: "/contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={leafMascot} alt="BotaniApp mascota" className="h-9 w-9" />
            <span className="font-display text-xl font-bold text-gradient-green">BotaniApp</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-2.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-primary hover:bg-secondary ${
                  pathname === item.to ? "text-primary bg-secondary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-secondary transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
