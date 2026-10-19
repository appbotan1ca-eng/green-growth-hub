import { motion } from "framer-motion";
import {
  BookMarked,
  ExternalLink,
  FileText,
  Globe,
  Landmark,
  Library,
  PenLine,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionCard from "@/components/SectionCard";
import {
  infografias,
  infografiaLinks,
  presentaciones,
  presentacionLinks,
} from "@/lib/recursos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Referente = {
  id: string;
  autor: string;
  anio: string;
  pais: string;
  titulo: string;
  tipo: string;
  fuente: string;
  base: string;
  url: string;
  estudiante: string;
  problema: string;
  propuesta: string;
  metodologia: string;
  poblacion: string;
  instrumentos: string;
  resultados: string;
  otros: string;
  relacion: string;
  nota?: string;
};

const referentes: Referente[] = [
  {
    id: "pabon-2021",
    autor: "Pabón Galán, Carlos Antonio",
    anio: "2021",
    pais: "Colombia",
    titulo:
      "Enseñanza y aprendizaje de las ciencias naturales. Un análisis del contexto de educación básica primaria.",
    tipo: "Artículo de investigación",
    fuente: "Revista Boletín Redipe, 10(10), 223–236",
    base: "Boletín Redipe · Dialnet",
    url: "https://doi.org/10.36260/rbr.v10i10.1481",
    estudiante: "Juan Felipe Contreras Velasco",
    problema:
      "La práctica pedagógica en el área de ciencias naturales se centra en el docente, con un estudiante poco activo y limitado para actividades prácticas y de discusión. Las barreras identificadas son aulas con alto número de estudiantes, recursos y materiales insuficientes, falta de preparación y competencias del docente a nivel disciplinar y pedagógico, y ausencia de procesos de evaluación del aprendizaje.",
    propuesta:
      "El artículo no formula una hipótesis explícita: su objetivo fue describir el proceso de enseñanza y aprendizaje de las ciencias naturales en la básica primaria desde las opiniones de docentes y estudiantes.",
    metodologia:
      "Enfoque mixto, de tipo cuantitativo y cualitativo, mediante cuestionarios aplicados a docentes y estudiantes.",
    poblacion:
      "Secretaría de Educación de Cúcuta, dos instituciones educativas. Muestra: 15 docentes de ciencias naturales y 60 estudiantes de 5.º grado.",
    instrumentos:
      "Cuestionarios cerrados aplicados a docentes y estudiantes, con una tasa de respuesta docente del 37,5 %.",
    resultados:
      "La enseñanza de ciencias naturales es teórica y centrada en el docente, y la evaluación se usa para calificar en lugar de aprender. Faltan recursos didácticos, espacio en el aula y los docentes están sobrecargados de clases. Se recomienda fortalecer la formación en estrategias de indagación y promover actividades prácticas.",
    otros:
      "Los resultados se contrastan con los informes PISA, que muestran un bajo rendimiento de Colombia en ciencias.",
    relacion:
      "Sustenta el punto de partida de FloraQuest: si la enseñanza de ciencias naturales es teórica, centrada en el docente y evaluada solo para calificar, hace falta una estrategia digital que active al estudiante, ponga la práctica en el centro y sí evalúe el aprendizaje. Es el antecedente que describe el problema que el proyecto se propone resolver.",
    nota:
      "Corrección de verificación: en el cuadro de análisis original esta fila tenía el título y el enlace del artículo de Guerrero-Ortega et al. (2024). Se corrigieron título, volumen, número, páginas y DOI con la fuente verificada.",
  },
  {
    id: "cardenas-2023",
    autor: "Cárdenas-Vargas, L. M.",
    anio: "2023",
    pais: "Colombia",
    titulo:
      "Estrategias didácticas mediadas por TIC para fortalecer el aprendizaje de la botánica en el contexto escolar.",
    tipo: "Trabajo de grado institucional",
    fuente: "Universidad Pedagógica y Tecnológica de Colombia (UPTC)",
    base: "Repositorio institucional UPTC",
    url: "https://repositorio.uptc.edu.co/handle/001/9562",
    estudiante: "Santiago Alejandro Castro Bautista",
    problema:
      "Existe un fenómeno conocido como «ceguera vegetal» en los estudiantes, que no logran reconocer ni valorar las plantas de su entorno debido a métodos de enseñanza tradicionales que no utilizan herramientas tecnológicas actuales.",
    propuesta:
      "El uso de una estrategia pedagógica que integre herramientas digitales y aplicaciones móviles permitirá que los estudiantes de secundaria desarrollen competencias científicas y una mayor sensibilidad hacia la biodiversidad vegetal.",
    metodologia:
      "Investigación de tipo cualitativo con diseño de Investigación-Acción Pedagógica, estructurada en fases de diagnóstico, diseño, implementación y evaluación.",
    poblacion: "Estudiantes del Instituto Técnico Mercedes Ábrego.",
    instrumentos:
      "Cuestionarios estructurados, diarios de campo digitales y guías de observación mediadas por dispositivos móviles.",
    resultados:
      "Se comprobó que la mediación tecnológica eliminó la «ceguera vegetal» en los estudiantes, quienes lograron identificar las funciones ecológicas de las plantas y mejoraron su rendimiento académico en el área de biología.",
    otros:
      "Destaca que el uso de dispositivos móviles, el m-learning, convierte el patio del colegio en un laboratorio vivo y dinámico.",
    relacion:
      "Es el referente más cercano al proyecto porque fue realizado en la misma institución: valida científicamente que el uso de aplicaciones para combatir la «ceguera vegetal» es la tendencia más actual y efectiva en los colegios de Colombia (Cárdenas-Vargas, 2023).",
  },
  {
    id: "arias-2021",
    autor: "Arias-Giraldo, J. F.",
    anio: "2021",
    pais: "Colombia",
    titulo:
      "Uso de aplicaciones móviles como estrategia para la enseñanza de la botánica en la educación básica.",
    tipo: "Trabajo de grado institucional",
    fuente: "Universidad del Valle",
    base: "Biblioteca Digital Universidad del Valle",
    url: "https://bibliotecadigital.univalle.edu.co/handle/10893/21356",
    estudiante: "Angelo Samir Rodriguez Zabala",
    problema:
      "Los estudiantes presentan un bajo interés por el estudio de las plantas, fenómeno conocido como «ceguera vegetal», debido a que los métodos de enseñanza son puramente teóricos y no utilizan las herramientas tecnológicas que los jóvenes manejan diariamente.",
    propuesta:
      "La implementación de una secuencia didáctica apoyada en aplicaciones móviles de identificación botánica facilitará el reconocimiento de la flora local y mejorará la actitud de los estudiantes hacia la biología.",
    metodologia:
      "Investigación-Acción Pedagógica con enfoque cualitativo. Se diseñaron actividades prácticas de campo donde el celular era la herramienta principal de consulta.",
    poblacion:
      "Estudiantes de educación básica secundaria en una institución educativa pública.",
    instrumentos:
      "Diagnóstico inicial mediante encuesta, diarios de campo digitales y cuestionario de evaluación de la experiencia.",
    resultados:
      "Se logró que los estudiantes identificaran correctamente las especies vegetales de su colegio. Además, se reportó un incremento notable en la motivación y la participación activa en clase gracias al uso de dispositivos móviles.",
    otros:
      "El estudio resalta que el celular deja de ser un distractor en el aula para convertirse en un laboratorio de bolsillo.",
    relacion:
      "Valida técnica y pedagógicamente que el uso de software móvil en el colegio Mercedes Ábrego es la vía para combatir la falta de interés por la botánica (Arias-Giraldo, 2021), y sustenta el módulo de identificación de especies de FloraQuest.",
    nota:
      "Enlace corregido: la versión original apuntaba a una búsqueda de Google que envolvía la dirección real del repositorio.",
  },
  {
    id: "guerrero-2024",
    autor: "Guerrero-Ortega, L. R., Rodríguez-Hernández, A. A., & Avella Forero, F.",
    anio: "2024",
    pais: "Colombia",
    titulo:
      "Aprendizaje significativo en ciencias naturales mediante el uso de la aplicación móvil Amazonía biodiversa: una experiencia educativa en el departamento del Putumayo.",
    tipo: "Artículo de investigación",
    fuente:
      "Revista Interamericana de Investigación, Educación y Pedagogía (RIIEP), 17(1), 325–346",
    base: "RIIEP · DOI 10.15332/25005421.9490",
    url: "https://doi.org/10.15332/25005421.9490",
    estudiante: "Daniel Esteban Salcedo Lopez",
    problema:
      "Se necesita fortalecer el aprendizaje de las ciencias naturales y el reconocimiento de la biodiversidad local mediante estrategias educativas innovadoras, incorporando herramientas tecnológicas que permitan una mayor interacción de los estudiantes con los contenidos.",
    propuesta:
      "La integración de una aplicación móvil educativa como herramienta pedagógica puede favorecer el reconocimiento de la biodiversidad y fortalecer el aprendizaje de las ciencias naturales, haciendo los contenidos más dinámicos, contextualizados e interactivos.",
    metodologia:
      "Investigación con enfoque cualitativo, desarrollada en cuatro fases: identificación del potencial pedagógico de las aplicaciones móviles, diseño de la propuesta pedagógica, implementación de la aplicación y evaluación de los resultados.",
    poblacion:
      "Estudiantes de 3.º, 4.º y 5.º de básica primaria de la Institución Educativa Rural Quinapejo, en Puerto Guzmán, Putumayo, con edades entre 8 y 12 años.",
    instrumentos:
      "Prueba de entrada y prueba de salida, además de la aplicación de la estrategia pedagógica mediante la aplicación móvil.",
    resultados:
      "La integración de la aplicación móvil permitió fortalecer los conocimientos en ciencias naturales. Los resultados evidenciaron una mejor asimilación y permanencia de los conocimientos y un mayor nivel de atención durante las actividades que utilizaron la aplicación.",
    otros:
      "Demuestra que una aplicación móvil puede actuar como mediadora entre el estudiante y el conocimiento de la biodiversidad, combinando contenidos educativos con herramientas digitales.",
    relacion:
      "Respalda directamente el desarrollo de FloraQuest: ambas propuestas usan una aplicación móvil para acercar al usuario al conocimiento de la biodiversidad y las plantas, y para promover la construcción de propuestas propias de acción ambiental.",
    nota:
      "La versión oficial del artículo en RIIEP publica el título en portugués, con su traducción al español en el resumen.",
  },
  {
    id: "mirama-2021",
    autor: "Miramá Posos, P. M., & Villota Yaqueno, Y. L.",
    anio: "2021",
    pais: "Colombia",
    titulo:
      "Conocimiento local tradicional de plantas medicinales en la enseñanza y aprendizaje de las ciencias naturales en la Institución Educativa Francisco de la Villota.",
    tipo: "Artículo de investigación",
    fuente: "Revista Historia de la Educación Colombiana, 26(26-27), 97–122",
    base: "Historia de la Educación Colombiana · DOI 10.22267/rhec.212626.90",
    url: "https://doi.org/10.22267/rhec.212626.90",
    estudiante: "Samira Alexandra Arias Valero",
    problema:
      "Los conocimientos tradicionales relacionados con las plantas medicinales de la comunidad de Genoy no estaban siendo incorporados adecuadamente en los procesos de enseñanza de las ciencias naturales, lo que generaba una separación entre los conocimientos científicos trabajados en la institución y los conocimientos tradicionales de la comunidad.",
    propuesta:
      "Integrar los conocimientos tradicionales de la comunidad sobre las plantas medicinales en la enseñanza de las ciencias naturales puede fortalecer la relación entre el conocimiento científico escolar y los saberes propios del contexto.",
    metodologia:
      "Paradigma cualitativo, con enfoque hermenéutico y análisis de contenido de documentos institucionales.",
    poblacion:
      "Comunidad educativa de la Institución Educativa Francisco de la Villota, sede escuela integrada del corregimiento de Genoy, municipio de Pasto, Nariño.",
    instrumentos:
      "Análisis documental del Proyecto Educativo Institucional, el Proyecto Ambiental Escolar y el plan de área de ciencias naturales.",
    resultados:
      "Los documentos institucionales presentan elementos que favorecen el reconocimiento de la diversidad y del contexto propio, pero el conocimiento tradicional sobre las plantas medicinales no estaba contemplado de manera suficiente en el aula. Esto evidenció la necesidad de una relación más cercana entre el conocimiento científico escolar y los saberes locales de la comunidad.",
    otros:
      "Resalta el valor de las plantas medicinales como parte del conocimiento cultural y natural de una comunidad, y la importancia de aprovechar el contexto local para fortalecer el aprendizaje.",
    relacion:
      "Sustenta el enfoque de contexto colombiano de FloraQuest: demuestra la importancia de presentar información sobre especies vegetales, sus características, usos y relación con el entorno para que los usuarios conozcan y valoren la flora de su propio territorio.",
  },
];

const aportes = [
  {
    ref: "Pabón Galán (2021)",
    aporta:
      "Describe el problema de partida: la enseñanza de ciencias naturales es teórica y centrada en el docente.",
    sustenta: "Problema y justificación",
  },
  {
    ref: "Cárdenas-Vargas (2023)",
    aporta:
      "Demuestra que la mediación tecnológica elimina la ceguera vegetal en estudiantes de la misma institución.",
    sustenta: "Contenido teórico e investigación",
  },
  {
    ref: "Arias-Giraldo (2021)",
    aporta:
      "Valida el celular como laboratorio de bolsillo para el reconocimiento de la flora local del colegio.",
    sustenta: "Módulo de identificación de especies",
  },
  {
    ref: "Guerrero-Ortega et al. (2024)",
    aporta:
      "Aporta evidencia con prueba de entrada y salida sobre aprendizaje significativo con una aplicación de biodiversidad.",
    sustenta: "Diseño e implementación",
  },
  {
    ref: "Miramá Posos y Villota (2021)",
    aporta:
      "Incorpora el conocimiento local y el saber tradicional sobre plantas al aprendizaje de las ciencias.",
    sustenta: "Contenido teórico y contextualización",
  },
];

const ejesComunes = [
  {
    titulo: "Ceguera vegetal",
    texto:
      "Cuatro de los cinco antecedentes identifican el mismo síntoma: los estudiantes no reconocen ni valoran las plantas de su entorno, y las plantas se perciben como una materia difícil y poco interesante.",
  },
  {
    titulo: "Las TIC como mediadoras",
    texto:
      "Aplicaciones móviles y dispositivos portátiles se usan como puente entre el estudiante y el conocimiento, y convierten el aula o el patio escolar en un laboratorio.",
  },
  {
    titulo: "Aprendizaje y contexto local",
    texto:
      "Los resultados se miden con pruebas de entrada y salida, y se hace énfasis en que el contenido debe estar contextualizado en la biodiversidad y el saber local.",
  },
];

const vacioDetectado = [
  "Ningún antecedente incorpora gamificación (niveles, logros, recompensas) aplicada al aprendizaje de la botánica.",
  "Ninguno construye un inventario de la flora del propio colegio con códigos QR que el estudiante pueda consultar en el lugar.",
  "Muy pocos miden un cambio de conducta ambiental en el estudiante, y no solo un rendimiento académico.",
];

const fuentesInstitucionales = [
  {
    nombre: "Ministerio de Ambiente y Desarrollo Sostenible",
    uso: "Guía nacional para la adecuada gestión de residuos y normativa de separación de residuos en Colombia.",
    url: "https://www.minambiente.gov.co/",
  },
  {
    nombre: "Instituto Humboldt — Catálogo Nacional de Biodiversidad",
    uso: "Información taxonómica y descriptiva de las especies vegetales registradas en Colombia.",
    url: "https://catalogo.biodiversidad.co",
  },
  {
    nombre: "IDEAM",
    uso: "Datos ambientales oficiales del país para la contextualización del contenido ambiental.",
    url: "https://www.ideam.gov.co",
  },
  {
    nombre: "iNaturalist",
    uso: "Plataforma de ciencia ciudadana para identificación y validación de especies.",
    url: "https://www.inaturalist.org/",
  },
];

const repositorios = [
  { nombre: "Boletín Redipe y Redalyc", uso: "Localización del antecedente de Pabón Galán (2021)" },
  { nombre: "RIIEP", uso: "Localización del antecedente de Guerrero-Ortega et al. (2024)" },
  { nombre: "Historia de la Educación Colombiana", uso: "Localización del antecedente de Miramá Posos y Villota (2021)" },
  { nombre: "Repositorio institucional UPTC", uso: "Localización del antecedente de Cárdenas-Vargas (2023)" },
  { nombre: "Biblioteca Digital Universidad del Valle", uso: "Localización del antecedente de Arias-Giraldo (2021)" },
  { nombre: "Dialnet", uso: "Base de datos bibliográfica consultada para el estado del arte" },
];

const fuentesMultimedia = [
  ...presentaciones.map((p) => ({
    nombre: p.titulo,
    autor: "Equipo del Proyecto Productivo",
    url: presentacionLinks(p.driveId).view,
  })),
  ...infografias.map((f) => ({
    nombre: f.titulo,
    autor: "Equipo del Proyecto Productivo",
    url: infografiaLinks(f.driveId).view,
  })),
  {
    nombre: "Video explicativo y Elevator Pitch (Google Drive)",
    autor: "Equipo del Proyecto Productivo",
    url: "https://drive.google.com/file/d/1kg9CyoE3IdSmC3oQd6azcdYCM9p0nGe_/view",
  },
  {
    nombre: "Encuesta de impacto (Google Forms)",
    autor: "Equipo del Proyecto Productivo",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdewSZbwgW6tZIHo5vjKDg3Ucf3ETw3rKfqN37sD68oeQwAJQ/viewform?usp=dialog",
  },
];

const elaboracionPropia = [
  "Textos y contenidos de la plataforma FloraQuest",
  "Mascota, logotipo e identidad visual del proyecto",
  "Infografía Problema, Solución e Impacto",
  "Capturas de pantalla de la aplicación y de la web",
  "Fotografías de evidencias de implementación y socialización",
  "Material del stand y material educativo impreso",
  "Recursos y tarjetas de códigos QR de los árboles del colegio",
];

const secciones = [
  { id: "antecedentes", label: "Antecedentes" },
  { id: "sintesis", label: "Síntesis" },
  { id: "vacio", label: "Vacío detectado" },
  { id: "aportes", label: "Aportes por referente" },
  { id: "institucionales", label: "Fuentes institucionales" },
  { id: "repositorios", label: "Repositorios" },
  { id: "multimedia", label: "Multimedia" },
  { id: "elaboracion", label: "Elaboración propia" },
];

function Dato({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-l-2 border-border pl-4">
      <dt className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-primary mb-1">
        {label}
      </dt>
      <dd className="font-body text-sm leading-relaxed text-muted-foreground">{value}</dd>
    </div>
  );
}

function Chip({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "accent" }) {
  return (
    <span
      className={
        tone === "accent"
          ? "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold font-body bg-green-pale text-green-deep"
          : "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold font-body bg-secondary text-muted-foreground"
      }
    >
      {children}
    </span>
  );
}

function StatCard({
  valor,
  etiqueta,
  icono: Icon,
  delay,
}: {
  valor: string;
  etiqueta: string;
  icono: LucideIcon;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 rounded-3xl bg-card border border-border shadow-card overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 w-20 h-20 rounded-full bg-green-pale/50 blur-xl group-hover:bg-green-pale transition-colors" />
      <div className="relative">
        <span className="inline-flex w-11 h-11 items-center justify-center rounded-2xl bg-secondary text-primary mb-4">
          <Icon size={20} />
        </span>
        <p className="font-display font-black text-4xl text-gradient-green leading-none">{valor}</p>
        <p className="font-body text-sm text-muted-foreground mt-2 leading-snug">{etiqueta}</p>
      </div>
    </motion.div>
  );
}

export default function Referentes() {
  return (
    <PageLayout>
      <PageHero
        icon={BookMarked}
        eyebrow="Gestión Estratégica"
        title="Cuadro de análisis de referentes"
        subtitle="Estado del arte del proyecto: los antecedentes académicos que sustentan FloraQuest, con su metodología, sus resultados y su relación directa con el tema de investigación."
      />

      {/* Resumen cuantitativo */}
      <section className="py-12 bg-gradient-to-b from-transparent via-secondary/40 to-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard valor="5" etiqueta="Antecedentes analizados" icono={BookMarked} delay={0} />
            <StatCard
              valor="2021-24"
              etiqueta="Rango de publicación"
              icono={FileText}
              delay={0.07}
            />
            <StatCard valor="6" etiqueta="Repositorios consultados" icono={Library} delay={0.14} />
            <StatCard
              valor="3"
              etiqueta="Vacíos que justifican FloraQuest"
              icono={Target}
              delay={0.21}
            />
          </div>
        </div>
      </section>

      {/* Índice de la página */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4">
          <nav className="flex flex-wrap gap-2" aria-label="Secciones de la página">
            {secciones.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-body text-sm font-semibold text-muted-foreground hover:text-primary px-4 py-2 rounded-full bg-card border border-border shadow-card transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div id="antecedentes" className="scroll-mt-24 mb-6">
            <span className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-primary bg-green-pale px-3 py-1.5 rounded-full mb-3">
              <FileText size={14} /> 01 · Estado del arte
            </span>
            <h2 className="font-display font-black text-3xl text-gradient-green">
              Antecedentes del estado del arte
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-3xl leading-relaxed">
              Los cinco antecedentes siguientes fueron analizados por el equipo según el cuadro de
              análisis de referentes del proyecto productivo. Cada ficha presenta el problema
              identificado, la propuesta, la metodología aplicada, los resultados obtenidos y la
              relación directa con FloraQuest.
            </p>
          </div>

          <Accordion type="single" collapsible className="mb-16">
            {referentes.map((r, i) => (
              <AccordionItem
                key={r.id}
                value={r.id}
                className="border-border bg-card rounded-3xl px-6 mb-4 shadow-card overflow-hidden transition-shadow data-[state=open]:shadow-card-hover"
              >
                <AccordionTrigger className="font-display text-foreground hover:no-underline py-5">
                  <span className="flex items-start gap-4 text-left pr-4 w-full">
                    <span className="shrink-0 w-10 h-10 rounded-2xl bg-gradient-hero text-primary-foreground font-display font-black text-sm flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-display font-bold text-foreground">{r.autor}</span>
                        <Chip tone="accent">{r.anio}</Chip>
                        <Chip>{r.pais}</Chip>
                        <Chip>{r.tipo}</Chip>
                      </span>
                      <span className="block font-body text-sm font-normal text-muted-foreground leading-snug">
                        {r.titulo}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="border-t border-border pt-6 mt-1 space-y-6">
                    <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                      <Dato label="Síntesis del problema" value={r.problema} />
                      <Dato label="Hipótesis o propuesta de solución" value={r.propuesta} />
                      <Dato label="Metodología: tipo y diseño" value={r.metodologia} />
                      <Dato label="Población intervenida" value={r.poblacion} />
                      <Dato label="Instrumentos aplicados" value={r.instrumentos} />
                      <Dato label="Resultados más importantes" value={r.resultados} />
                      <Dato label="Otros aspectos importantes" value={r.otros} />
                      <div>
                        <dt className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-primary mb-1">
                          Revista, editorial o universidad
                        </dt>
                        <dd className="font-body text-sm text-muted-foreground">{r.fuente}</dd>
                      </div>
                    </dl>

                    <div className="rounded-2xl bg-green-pale/40 border border-green-pale p-5">
                      <p className="font-display text-[11px] font-bold uppercase tracking-[0.08em] text-green-deep mb-2 flex items-center gap-2">
                        <Sparkles size={14} /> Relación con el tema de investigación
                      </p>
                      <p className="font-body text-sm leading-relaxed text-foreground/80">
                        {r.relacion}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline break-all"
                      >
                        <ExternalLink size={15} className="shrink-0" /> {r.url}
                      </a>
                      <span className="inline-flex items-center gap-2 font-body text-xs text-muted-foreground">
                        <Users size={14} className="text-primary" />
                        Análisis a cargo de <strong className="text-foreground">{r.estudiante}</strong>
                      </span>
                    </div>

                    {r.nota && (
                      <p className="font-body text-xs leading-relaxed text-muted-foreground bg-secondary/60 border-l-2 border-yellow-accent rounded-r-xl px-4 py-3">
                        {r.nota}
                      </p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div id="sintesis" className="scroll-mt-24 mb-16">
            <SectionCard title="Síntesis del estado del arte" icon={Quote}>
              <p>
              Los cinco antecedentes analizados coinciden en identificar un mismo núcleo
              problemático: los estudiantes no reconocen ni valoran las plantas de su entorno,
              fenómeno conocido como <strong className="text-foreground">ceguera vegetal</strong>.
              Los cuatro antecedentes centrados en tecnología atribuyen ese desconocimiento a una
              enseñanza tradicional, teórica y descontextualizada, y proponen las aplicaciones
              móviles como puente entre el estudiante y el conocimiento.
            </p>
            <p>
              En cuanto a instrumentos, predominan las pruebas de entrada y salida, los diarios de
              campo y los cuestionarios de percepción, aplicados sobre muestras pequeñas de
              estudiantes. Todos los antecedentes miden resultados de aprendizaje o de
              reconocimiento de especies, pero ninguno mide un cambio sostenido de conducta
              ambiental.
            </p>
            </SectionCard>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {ejesComunes.map((eje, i) => (
                <motion.div
                  key={eje.titulo}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="p-5 rounded-2xl bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all"
                >
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground font-display font-bold text-xs mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display font-bold text-foreground mb-1.5">{eje.titulo}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{eje.texto}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div id="vacio" className="scroll-mt-24 mb-16">
            <div className="rounded-3xl bg-gradient-hero p-8 sm:p-10 text-primary-foreground shadow-card mb-6 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-12 w-48 h-48 rounded-full bg-primary-foreground/10 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] bg-primary-foreground/15 px-3 py-1.5 rounded-full mb-3">
                  <Target size={14} /> 03 · Justificación
                </span>
                <h2 className="font-display font-black text-3xl mb-3">
                  El vacío que justifica FloraQuest
                </h2>
                <p className="font-body text-sm leading-relaxed text-primary-foreground/85 max-w-3xl">
                  Del análisis de los cinco antecedentes se identifican tres vacíos que ninguno de
                  ellos cubre y que el proyecto se propone atender.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {vacioDetectado.map((v, i) => (
                <motion.div
                  key={v}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-card border-t-4 border-yellow-accent border-x border-b border-border shadow-card"
                >
                  <p className="font-display font-black text-2xl text-gradient-green mb-2">
                    Vacío {i + 1}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{v}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 p-5 rounded-2xl bg-secondary/60 border border-border font-body text-sm text-foreground/80 leading-relaxed">
              FloraQuest responde a esos tres vacíos: aplica gamificación al aprendizaje de la
              botánica, documenta la flora del propio colegio mediante códigos QR consultables en el
              lugar y busca llevar el aprendizaje más allá del rendimiento académico hacia el
              cuidado del entorno.
            </p>
          </div>

          <div id="aportes" className="scroll-mt-24 mb-16">
            <span className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-primary bg-green-pale px-3 py-1.5 rounded-full mb-3">
              <Quote size={14} /> 04 · Aportes
            </span>
            <h2 className="font-display font-black text-3xl text-gradient-green mb-6">
              Qué aporta cada referente al proyecto
            </h2>
            <div className="overflow-x-auto rounded-3xl border border-border shadow-card bg-card">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-hero text-primary-foreground">
                    <th className="px-5 py-4 font-display font-bold text-sm">Referente</th>
                    <th className="px-5 py-4 font-display font-bold text-sm">Aporte al proyecto</th>
                    <th className="px-5 py-4 font-display font-bold text-sm">Elemento que sustenta</th>
                  </tr>
                </thead>
                <tbody>
                  {aportes.map((a, i) => (
                    <tr
                      key={a.ref}
                      className={`border-t border-border transition-colors hover:bg-secondary/50 ${
                        i % 2 === 1 ? "bg-secondary/20" : ""
                      }`}
                    >
                      <td className="px-5 py-4 font-display font-semibold text-sm text-primary whitespace-nowrap align-top">
                        {a.ref}
                      </td>
                      <td className="px-5 py-4 font-body text-sm text-muted-foreground align-top leading-relaxed">
                        {a.aporta}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <Chip tone="accent">{a.sustenta}</Chip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div id="institucionales" className="scroll-mt-24 mb-16">
            <span className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-primary bg-green-pale px-3 py-1.5 rounded-full mb-3">
              <Landmark size={14} /> 05 · Fuentes
            </span>
            <h2 className="font-display font-black text-3xl text-gradient-green mb-6">
              Fuentes institucionales consultadas
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {fuentesInstitucionales.map((f, i) => (
                <motion.a
                  key={f.nombre}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="group p-6 rounded-3xl bg-card border border-border shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <p className="font-display font-bold text-foreground">{f.nombre}</p>
                    <Globe
                      size={16}
                      className="text-primary shrink-0 mt-0.5 group-hover:rotate-12 transition-transform"
                    />
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                    {f.uso}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary">
                    Visitar sitio
                    <ExternalLink
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <div id="repositorios" className="scroll-mt-24 mb-16">
            <SectionCard
              title="Repositorios y bases de datos del estado del arte"
              icon={Library}
              className="mb-0"
            >
              <ul className="grid sm:grid-cols-2 gap-3">
                {repositorios.map((r) => (
                  <li
                    key={r.nombre}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-secondary/40 border border-border"
                  >
                    <Library size={16} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">
                      <strong className="text-foreground">{r.nombre}</strong> — {r.uso}
                    </span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          <div id="multimedia" className="scroll-mt-24 mb-16">
            <SectionCard title="Fuentes del contenido multimedia" icon={FileText} className="mb-0">
              <ul className="space-y-3">
                {fuentesMultimedia.map((f) => (
                  <li key={f.nombre}>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-wrap items-center justify-between gap-2 p-4 rounded-2xl bg-card border border-border hover:border-primary hover:-translate-y-0.5 transition-all"
                    >
                      <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-foreground">
                        <FileText size={15} className="text-primary shrink-0" />
                        {f.nombre}
                      </span>
                      <span className="inline-flex items-center gap-3">
                        <Chip>{f.autor}</Chip>
                        <ExternalLink size={14} className="text-primary shrink-0" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          <div id="elaboracion" className="scroll-mt-24 mb-12">
            <span className="inline-flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-primary bg-green-pale px-3 py-1.5 rounded-full mb-3">
              <PenLine size={14} /> 06 · Autoría
            </span>
            <h2 className="font-display font-black text-3xl text-gradient-green mb-6">
              Elaboración propia y derechos de autor
            </h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <SectionCard title="Elaboración propia del equipo" icon={PenLine} className="mb-0">
                <p>
                  Los siguientes elementos fueron producidos por el equipo del Proyecto Productivo
                  del Instituto Técnico Mercedes Ábrego:
                </p>
                <ul className="space-y-2.5 pt-1">
                  {elaboracionPropia.map((e) => (
                    <li
                      key={e}
                      className="flex items-start gap-2.5 font-body text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard title="Derechos de autor y atribución" icon={ShieldCheck} className="mb-0">
                <ul className="space-y-3 pt-1">
                  <li className="font-body text-sm text-muted-foreground leading-relaxed">
                    Los textos, el diseño, la identidad visual y los materiales multimedia
                    publicados en esta plataforma son elaboración propia del equipo y se usan con
                    fines educativos.
                  </li>
                  <li className="font-body text-sm text-muted-foreground leading-relaxed">
                    Los antecedentes del estado del arte son propiedad de sus autores y editoriales y
                    se citan con autor, año, fuente y enlace permanente.
                  </li>
                  <li className="font-body text-sm text-muted-foreground leading-relaxed">
                    Los enlaces externos a sitios institucionales, bibliotecas y plataformas abiertas
                    fueron consultados durante la elaboración del proyecto.
                  </li>
                  <li className="font-body text-sm text-muted-foreground leading-relaxed">
                    No se utilizan imágenes, audios o videos de terceros sin citar su fuente, salvo
                    los recursos de dominio público y de licencia abierta identificados en esta
                    página.
                  </li>
                </ul>
              </SectionCard>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
            <PenLine size={14} className="text-primary" />
            Página elaborada por el Equipo del Proyecto Productivo · Enlaces y datos verificados
            durante la actualización de la plataforma
          </div>
        </div>
      </section>
    </PageLayout>
  );
}