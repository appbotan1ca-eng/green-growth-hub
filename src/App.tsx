import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Contacto from "./pages/Contacto.tsx";
import Evidencias from "./pages/Evidencias.tsx";
// Gestión Estratégica
import Documentos from "./pages/gestion-estrategica/Documentos.tsx";
import Presentaciones from "./pages/gestion-estrategica/Presentaciones.tsx";
import Infografia from "./pages/gestion-estrategica/Infografia.tsx";
import Videos from "./pages/gestion-estrategica/Videos.tsx";
import Podcast from "./pages/gestion-estrategica/Podcast.tsx";
import BibliotecaVirtual from "./pages/gestion-estrategica/BibliotecaVirtual.tsx";
// Gestión Directiva
import TutorialesGuias from "./pages/gestion-directiva/TutorialesGuias.tsx";
import ForoDiscusion from "./pages/gestion-directiva/ForoDiscusion.tsx";
import Capacitacion from "./pages/gestion-directiva/Capacitacion.tsx";
// Gestión Organizacional
import OrientacionAcademica from "./pages/gestion-organizacional/OrientacionAcademica.tsx";
import ApoyoProfesional from "./pages/gestion-organizacional/ApoyoProfesional.tsx";
// Gestión Comunitaria
import Chat from "./pages/gestion-comunitaria/Chat.tsx";
import Encuestas from "./pages/gestion-comunitaria/Encuestas.tsx";
import Foros from "./pages/gestion-comunitaria/Foros.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evidencias" element={<Evidencias />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Gestión Estratégica */}
          <Route path="/gestion-estrategica/documentos" element={<Documentos />} />
          <Route path="/gestion-estrategica/presentaciones" element={<Presentaciones />} />
          <Route path="/gestion-estrategica/infografia" element={<Infografia />} />
          <Route path="/gestion-estrategica/videos" element={<Videos />} />
          <Route path="/gestion-estrategica/podcast" element={<Podcast />} />
          <Route path="/gestion-estrategica/biblioteca-virtual" element={<BibliotecaVirtual />} />
          {/* Gestión Directiva */}
          <Route path="/gestion-directiva/tutoriales-guias" element={<TutorialesGuias />} />
          <Route path="/gestion-directiva/foro" element={<ForoDiscusion />} />
          <Route path="/gestion-directiva/capacitacion" element={<Capacitacion />} />
          {/* Gestión Organizacional */}
          <Route path="/gestion-organizacional/orientacion-academica" element={<OrientacionAcademica />} />
          <Route path="/gestion-organizacional/apoyo-profesional" element={<ApoyoProfesional />} />
          {/* Gestión Comunitaria */}
          <Route path="/gestion-comunitaria/chat" element={<Chat />} />
          <Route path="/gestion-comunitaria/encuestas" element={<Encuestas />} />
          <Route path="/gestion-comunitaria/foros" element={<Foros />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
