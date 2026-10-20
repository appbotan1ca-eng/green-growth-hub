import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sprout, ArrowDown, BookOpen, Target, Heart, Shield } from "lucide-react";
import leafMascot from "@/assets/logo.webp";
import grupoFloraquest from "@/assets/grupo-floraquest.webp";

let registered = false;
if (!registered) {
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const valores = [
  { icon: BookOpen, title: "Educación", desc: "Aprendizaje activo sobre botánica y medio ambiente." },
  { icon: Target, title: "Innovación", desc: "Tecnología para la transformación educativa." },
  { icon: Heart, title: "Compromiso", desc: "Respeto y amor por la naturaleza." },
  { icon: Shield, title: "Responsabilidad", desc: "Sostenibilidad y cuidado del planeta." },
];

export default function ScrollScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const text = textRef.current;
    const welcome = welcomeRef.current;
    const badge = badgeRef.current;
    const title = titleRef.current;
    const desc = descRef.current;
    const image = imageRef.current;
    const cards = cardsRef.current;
    const overlay = overlayRef.current;
    if (!section || !video || !text || !welcome || !badge || !title || !desc || !image || !cards || !overlay) return;

    let killed = false;
    let tl: gsap.core.Timeline | null = null;
    let rafId: number | null = null;
    let targetTime = 0;
    let currentTarget = 0;

    const tick = () => {
      if (killed) return;
      const v = videoRef.current;
      if (v && isFinite(v.duration) && v.duration > 0) {
        currentTarget += (targetTime - currentTarget) * 0.18;
        if (Math.abs(currentTarget - targetTime) < 0.001) currentTarget = targetTime;
        if (!v.seeking && Math.abs(v.currentTime - currentTarget) > 0.04) {
          try {
            v.currentTime = currentTarget;
          } catch {
            /* ignore */
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const refreshST = () => {
      if (killed) return;
      ScrollTrigger.refresh();
    };

    const setup = () => {
      if (killed) return;
      const dur = video.duration;
      if (!isFinite(dur) || dur <= 0) return;

      try {
        video.currentTime = 0;
      } catch {
        /* ignore */
      }
      targetTime = 0;
      currentTarget = 0;

      if (reduced) {
        gsap.set(text, { opacity: 1, y: 0 });
        gsap.set(welcome, { opacity: 1, y: 0 });
        gsap.set(overlay, { opacity: 0.35 });
        return;
      }

      // Estado inicial oculto para cada pieza (staggered).
      gsap.set([badge, title, desc, image, cards], { opacity: 0 });
      gsap.set(badge, { y: 16 });
      gsap.set(title, { y: 20 });
      gsap.set(desc, { y: 20 });
      gsap.set(image, { x: 40, scale: 0.95 });
      gsap.set(cards, { y: 24 });
      cardRefs.current.forEach((c) => {
        if (c) gsap.set(c, { opacity: 0, y: 18, scale: 0.92 });
      });

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => (window.innerWidth < 768 ? "+=160%" : "+=220%"),
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (killed) return;
            const v = videoRef.current;
            if (!v) return;
            const d = v.duration;
            if (!isFinite(d) || d <= 0) return;
            targetTime = self.progress * d;
          },
          onRefresh: () => {
            if (killed) return;
            const v = videoRef.current;
            if (v && isFinite(v.duration) && v.duration > 0) {
              try {
                v.currentTime = 0;
              } catch {
                /* ignore */
              }
            }
            targetTime = 0;
            currentTarget = 0;
          },
        },
      });

      // Overlay dinámico sutil.
      tl.fromTo(overlay, { opacity: 0.2 }, { opacity: 0.45, ease: "none", duration: 1 }, 0);

      // FloraQuest: visible al inicio, se desvanece 0→0.3.
      tl.fromTo(
        text,
        { opacity: 1, y: 0 },
        { opacity: 0, y: -24, ease: "power1.out", duration: 0.3 },
        0
      );
      tl.to(text, { opacity: 0, duration: 0.7 }, 0.3);

      // Quiénes somos: entrada escalonada tras FloraQuest (0.32+).
      tl.to(badge, { opacity: 1, y: 0, ease: "power2.out", duration: 0.1 }, 0.32);
      tl.to(title, { opacity: 1, y: 0, ease: "power2.out", duration: 0.14 }, 0.36);
      tl.to(desc, { opacity: 1, y: 0, ease: "power2.out", duration: 0.14 }, 0.42);
      tl.to(image, { opacity: 1, x: 0, scale: 1, ease: "power2.out", duration: 0.18 }, 0.46);

      // Tarjetas: contenedor aparece, luego cada tarjeta escalonada.
      tl.to(cards, { opacity: 1, y: 0, ease: "power2.out", duration: 0.12 }, 0.5);
      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        tl!.to(c, { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.12 }, 0.54 + i * 0.04);
      });

      // Highlight épico: pulso secuencial con glow, tilt 3D, shimmer y estrella.
      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const start = 0.6 + i * 0.045;
        // lift + tilt + glow
        tl!.to(
          c,
          {
            scale: 1.1,
            rotationY: i % 2 === 0 ? 8 : -8,
            rotationX: -6,
            boxShadow: "0 0 0 2px rgba(160,255,180,1), 0 0 24px 6px rgba(120,255,160,0.55), 0 16px 40px rgba(0,0,0,0.4)",
            borderColor: "rgba(160,255,180,1)",
            backgroundColor: "rgba(255,255,255,0.18)",
            ease: "power2.out",
            duration: 0.07,
          },
          start
        );
        // shimmer sweep (hijo .shimmer)
        const shimmer = c.querySelector(".shimmer");
        if (shimmer) {
          tl!.fromTo(
            shimmer,
            { x: "-120%", opacity: 0 },
            { x: "120%", opacity: 1, ease: "power1.inOut", duration: 0.14 },
            start
          );
          tl!.to(shimmer, { opacity: 0, duration: 0.04 }, start + 0.12);
        }
        // estrella
        const star = c.querySelector(".star");
        if (star) {
          tl!.fromTo(
            star,
            { scale: 0, rotation: -90, opacity: 0 },
            { scale: 1.4, rotation: 0, opacity: 1, ease: "back.out(2)", duration: 0.12 },
            start
          );
          tl!.to(star, { scale: 1, duration: 0.06 }, start + 0.12);
          tl!.to(star, { opacity: 0, scale: 0.6, duration: 0.08 }, start + 0.22);
        }
        // settle
        tl!.to(
          c,
          {
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            boxShadow: "0 0 0 0px rgba(120,220,140,0), 0 4px 12px rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.2)",
            backgroundColor: "rgba(255,255,255,0.10)",
            ease: "power2.inOut",
            duration: 0.1,
          },
          start + 0.12
        );
      });

      // Parallax diferenciado por tarjeta (profundidad).
      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const depth = (i % 2 === 0 ? -20 : 20) + (i < 2 ? -6 : 6);
        tl!.fromTo(c, { y: 0 }, { y: depth, ease: "none", duration: 0.34 }, 0.56);
      });

      // Salida del bloque welcome.
      tl.to([badge, title, desc, image, cards], { opacity: 0, y: -16, ease: "power1.in", duration: 0.12 }, 0.9);
      cardRefs.current.forEach((c) => {
        if (c) tl!.to(c, { opacity: 0, duration: 0.1 }, 0.9);
      });

      void leafMascot;
    };

    const onLoadedMetadata = () => {
      if (killed) return;
      setReady(true);
      setup();
      requestAnimationFrame(() => refreshST());
      rafId = requestAnimationFrame(tick);
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    }

    const onResize = () => refreshST();
    window.addEventListener("resize", onResize);

    return () => {
      killed = true;
      window.removeEventListener("resize", onResize);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (tl) {
        tl.kill();
        tl = null;
      }
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="scroll-scene"
      className="relative w-full h-screen overflow-hidden bg-black"
      aria-label="Escena ambiental interactiva"
    >
      <video
        ref={videoRef}
        src="/scroll-scene.mp4"
        poster="/scroll-scene-poster.jpg"
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black pointer-events-none z-[5]"
        style={{ opacity: 0.2 }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40 pointer-events-none z-[6]" />

      {/* Bloque Quiénes somos (aparece tras FloraQuest) */}
      <div
        id="quienes-somos"
        ref={welcomeRef}
        className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-8 pointer-events-none"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Texto a la izquierda */}
            <div className="text-left">
              <span
                ref={badgeRef}
                className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-white font-display font-bold text-sm mb-4 backdrop-blur-sm"
              >
                Bienvenidos
              </span>
              <h2
                ref={titleRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-4 drop-shadow-lg"
              >
                ¿Quiénes <span className="text-green-bright">Somos</span>?
              </h2>
              <p
                ref={descRef}
                className="text-base sm:text-lg text-white/85 font-body leading-relaxed drop-shadow max-w-xl"
              >
                Somos estudiantes de Media Técnica del <strong className="text-white">Instituto Técnico Mercedes Abrego</strong>,
                apasionados por la educación ambiental y la tecnología. Creamos <strong className="text-green-bright">FloraQuest</strong>,
                una aplicación educativa sobre botánica que busca fortalecer los conocimientos ambientales de nuestra comunidad.
              </p>
            </div>

            {/* Imagen a la derecha */}
            <div ref={imageRef} className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={grupoFloraquest}
                alt="Grupo FloraQuest"
                className="w-full h-48 sm:h-64 lg:h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Tarjetas con highlight/parallax */}
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 sm:mt-8"
          >
            {valores.map((v, i) => (
              <div
                key={v.title}
                ref={(el) => {
                  if (el) cardRefs.current[i] = el;
                }}
                className="relative p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-left transition-colors overflow-hidden"
                style={{ willChange: "transform, opacity, box-shadow", perspective: "600px", transformStyle: "preserve-3d" }}
              >
                {/* shimmer sweep */}
                <span className="shimmer pointer-events-none absolute inset-0 -translate-x-full opacity-0" style={{ background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)" }} />
                {/* estrella */}
                <span className="star pointer-events-none absolute top-2 right-2 text-yellow-300 opacity-0" style={{ filter: "drop-shadow(0 0 6px rgba(255,230,120,0.9))" }}>★</span>
                <v.icon className="text-green-bright mb-2 relative z-10" size={22} />
                <h4 className="font-display font-bold text-white text-sm mb-1">{v.title}</h4>
                <p className="text-xs text-white/75 font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Texto de FloraQuest sobre el vídeo */}
      <div
        ref={textRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex justify-center">
            <img
              src={leafMascot}
              alt="FloraQuest mascota"
              className="h-24 w-24 sm:h-32 sm:w-32 drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl font-display font-black text-white leading-tight mb-4 drop-shadow-lg">
            FloraQuest
          </h1>
          <p className="text-xl sm:text-2xl font-body font-semibold text-white/90 mb-2 drop-shadow">
            Aprende, Crece, Protege
          </p>
          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto mb-8 font-body drop-shadow">
            App educativa sobre botánica para fortalecer la educación ambiental
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-green-deep font-display font-bold text-lg shadow-playful hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 pointer-events-auto"
            >
              <Sprout size={22} />
              Conoce el Proyecto
            </a>
            <a
              href="#elevator-pitch"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 text-white font-display font-bold text-lg hover:bg-white/10 transition-all duration-200 pointer-events-auto"
            >
              Elevator Pitch
            </a>
          </div>
          <div className="mt-16">
            <ArrowDown className="mx-auto text-white/60 animate-bounce" size={28} />
          </div>
        </div>
      </div>

      {!ready && !reduced && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-30">
          <div className="text-white/80 font-body text-sm flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
            Cargando escena…
          </div>
        </div>
      )}

      {reduced && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/70 font-body text-xs">
          Movimiento reducido activo
        </div>
      )}
    </section>
  );
}
