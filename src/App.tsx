import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import SobreProyecto from "./pages/SobreProyecto.tsx";
import Equipo from "./pages/Equipo.tsx";
import Implementacion from "./pages/Implementacion.tsx";
import RecursosMultimedia from "./pages/RecursosMultimedia.tsx";
import Biblioteca from "./pages/Biblioteca.tsx";
import ImpactoAmbiental from "./pages/ImpactoAmbiental.tsx";
import Participacion from "./pages/Participacion.tsx";
import Contacto from "./pages/Contacto.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-el-proyecto" element={<SobreProyecto />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/implementacion" element={<Implementacion />} />
          <Route path="/recursos-multimedia" element={<RecursosMultimedia />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/impacto-ambiental" element={<ImpactoAmbiental />} />
          <Route path="/participacion" element={<Participacion />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
