import { Leaf } from "lucide-react";
import leafMascot from "@/assets/leaf-mascot.png";

export default function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <img src={leafMascot} alt="BotaniApp" className="h-8 w-8" />
            <span className="font-display text-xl font-bold text-primary-foreground">BotaniApp</span>
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
