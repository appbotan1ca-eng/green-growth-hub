import { Link } from "react-router-dom";
import leafMascot from "@/assets/leaf-mascot.png";

const links = [
  { label: "Inicio", to: "/" },
  { label: "Sobre el proyecto", to: "/sobre-el-proyecto" },
  { label: "Equipo de trabajo", to: "/equipo" },
  { label: "Implementación", to: "/implementacion" },
  { label: "Recursos multimedia", to: "/recursos-multimedia" },
  { label: "Biblioteca digital", to: "/biblioteca" },
  { label: "Impacto ambiental", to: "/impacto-ambiental" },
  { label: "Participación", to: "/participacion" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-3 mb-10 max-w-3xl mx-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors text-center sm:text-left"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <img src={leafMascot} alt="FloraQuest" className="h-8 w-8" />
            <span className="font-display text-xl font-bold text-primary-foreground">FloraQuest</span>
          </div>
          <p className="text-primary-foreground/60 font-body text-sm mb-2">
            🌱 Aprende, Crece, Protege 🌍
          </p>
          <p className="text-primary-foreground/40 font-body text-xs">
            Instituto Técnico Mercedes Abrego · Media Técnica · 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
