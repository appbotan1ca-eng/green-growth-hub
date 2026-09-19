import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import leafMascot from "@/assets/leaf-mascot.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

const gestionItems = [
  {
    label: "Gestión Estratégica",
    items: [
      { label: "Documentos", to: "/gestion-estrategica/documentos" },
      { label: "Presentaciones", to: "/gestion-estrategica/presentaciones" },
      { label: "Infografía", to: "/gestion-estrategica/infografia" },
      { label: "Videos", to: "/gestion-estrategica/videos" },
      { label: "Pódcast", to: "/gestion-estrategica/podcast" },
      { label: "Biblioteca Virtual", to: "/gestion-estrategica/biblioteca-virtual" },
    ],
  },
  {
    label: "Gestión Directiva",
    items: [
      { label: "Tutoriales y guías", to: "/gestion-directiva/tutoriales-guias" },
      { label: "Foro de discusión", to: "/gestion-directiva/foro" },
      { label: "Capacitación", to: "/gestion-directiva/capacitacion" },
    ],
  },
  {
    label: "Gestión Organizacional",
    items: [
      { label: "Orientación académica", to: "/gestion-organizacional/orientacion-academica" },
      { label: "Apoyo Profesional", to: "/gestion-organizacional/apoyo-profesional" },
    ],
  },
  {
    label: "Gestión Comunitaria",
    items: [
      { label: "Chat", to: "/gestion-comunitaria/chat" },
      { label: "Encuestas", to: "/gestion-comunitaria/encuestas" },
      { label: "Foros", to: "/gestion-comunitaria/foros" },
    ],
  },
];

const mainNavItems = [
  { label: "Inicio", to: "/" },
  { label: "Evidencias", to: "/evidencias" },
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
            <img src={leafMascot} alt="FloraQuest mascota" className="h-9 w-9" />
            <span className="font-display text-xl font-bold text-gradient-green">FloraQuest</span>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-primary hover:bg-secondary ${
                  pathname === item.to ? "text-primary bg-secondary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {gestionItems.map((gestion, index) => (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:text-primary hover:bg-secondary ${
                      pathname.startsWith(gestion.items[0].to.split('/')[1]) ? "text-primary bg-secondary" : "text-foreground/70"
                    }`}
                  >
                    {gestion.label}
                    <ChevronDown size={16} className="transition-transform" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" sideOffset={8}>
                  <DropdownMenuLabel className="px-2 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {gestion.label}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {gestion.items.map((item, itemIndex) => (
                    <DropdownMenuItem
                      key={itemIndex}
                      asChild
                      className={`focus:bg-secondary ${
                        pathname === item.to ? "bg-secondary text-primary" : ""
                      }`}
                    >
                      <Link
                        to={item.to}
                        className="flex w-full items-center px-2 py-1.5 text-sm"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
              {mainNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-secondary transition-all"
                >
                  {item.label}
                </Link>
              ))}
              {gestionItems.map((gestion, index) => (
                <div key={index} className="pt-2 pb-1 px-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {gestion.label}
                  </p>
                  {gestion.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="block pl-6 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
