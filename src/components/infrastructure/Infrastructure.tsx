import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SimpleIcon,
  siAmazonwebservices,
  siDocker,
  siGrafana,
  siNginx,
  siOpentelemetry,
  siPostgresql,
  siVercel,
} from "simple-icons";
import { getDataInfra } from "@/utilitities/data/getData";
import { infraContent, infraTool } from "@/utilitities/datatypes";
import { orbitron, jetbrains_mono } from "@/utilitities/fonts";


interface Tool {
  id: infraTool;
  icon: SimpleIcon;
  accent: string;
  ring: "inner" | "outer";
}

const tools: Tool[] = [
  { id: "aws", icon: siAmazonwebservices, accent: "#FF9900", ring: "inner" },
  { id: "docker", icon: siDocker, accent: "#2496ED", ring: "inner" },
  { id: "postgresql", icon: siPostgresql, accent: "#4169E1", ring: "inner" },
  { id: "nginx", icon: siNginx, accent: "#009639", ring: "outer" },
  { id: "vercel", icon: siVercel, accent: "#64748B", ring: "outer" },
  {
    id: "opentelemetry",
    icon: siOpentelemetry,
    accent: "#F5A800",
    ring: "outer",
  },
  { id: "grafana", icon: siGrafana, accent: "#F46800", ring: "outer" },
];

const rings = {
  inner: { radius: 27, duration: 40, direction: 1 },
  outer: { radius: 45, duration: 60, direction: -1 },
};

const BrandIcon: React.FC<{ icon: SimpleIcon; className?: string }> = ({
  icon,
  className,
}) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill={`#${icon.hex}`}
    className={className}
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

const Orbit: React.FC<{
  core: string;
  active: infraTool | null;
  setActive: (tool: infraTool | null) => void;
}> = ({ core, active, setActive }) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Rings */}
      {(["outer", "inner"] as const).map((ring) => (
        <div
          key={ring}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-slate-300"
          style={{
            width: `${rings[ring].radius * 2}%`,
            height: `${rings[ring].radius * 2}%`,
          }}
        />
      ))}

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 opacity-30"
          animate={
            reduceMotion
              ? undefined
              : { scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 p-[2px] shadow-[0_0_40px_-5px_rgba(56,189,248,0.6)]">
          <span
            className={`${orbitron.className} flex h-full w-full items-center justify-center rounded-full bg-white text-sm font-bold uppercase tracking-widest text-slate-800`}
          >
            {core}
          </span>
        </span>
      </div>

      {/* Rotating nodes */}
      {(["inner", "outer"] as const).map((ring) => {
        const ringTools = tools.filter((tool) => tool.ring === ring);
        const { radius, duration, direction } = rings[ring];

        return (
          <motion.div
            key={ring}
            className="absolute inset-0"
            animate={reduceMotion ? undefined : { rotate: 360 * direction }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
          >
            {ringTools.map((tool, i) => {
              const angle = (i / ringTools.length) * 2 * Math.PI - Math.PI / 2;
              const isActive = active === tool.id;

              return (
                <div
                  key={tool.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${50 + radius * Math.cos(angle)}%`,
                    top: `${50 + radius * Math.sin(angle)}%`,
                  }}
                >
                  {/* Counter-rotate so the logos stay upright */}
                  <motion.div
                    animate={
                      reduceMotion ? undefined : { rotate: -360 * direction }
                    }
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                  >
                    <motion.div
                      onMouseEnter={() => setActive(tool.id)}
                      onMouseLeave={() => setActive(null)}
                      animate={{ scale: isActive ? 1.25 : 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="flex h-14 w-14 cursor-default items-center justify-center rounded-2xl border bg-white transition-shadow duration-300 md:h-16 md:w-16"
                      style={{
                        borderColor: isActive ? tool.accent : "#e2e8f0",
                        boxShadow: isActive
                          ? `0 0 30px -4px ${tool.accent}`
                          : "0 8px 24px -12px rgba(15,23,42,0.25)",
                      }}
                    >
                      <BrandIcon
                        icon={tool.icon}
                        className="h-7 w-7 md:h-8 md:w-8"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};

const Infrastructure: React.FC = () => {
  const [data, setData] = useState<infraContent | null>(null);
  const [active, setActive] = useState<infraTool | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      setData(getDataInfra(dataLang));
    } else {
      localStorage.setItem("language", "pt");
      setData(getDataInfra("pt"));
    }
  }, []);

  return (
    <section
      id="id_infra_div"
      className="relative w-full overflow-hidden bg-white py-24 text-slate-900 md:py-32"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />

      {/* Scanning beam */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-slate-200">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-green-600 to-transparent"
          animate={reduceMotion ? undefined : { x: ["-100%", "300%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className={`${orbitron.className} text-2xl md:text-4xl font-bold uppercase tracking-wide text-slate-900`}
          >
            {data?.title}{" "}
            <span className="bg-slate-900 bg-clip-text text-transparent">
              {data?.highlight}
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 md:text-lg">
            {data?.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {data && (
              <Orbit core={data.core} active={active} setActive={setActive} />
            )}
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {data &&
              tools.map((tool, index) => {
                const content = data.tools[tool.id];
                const isActive = active === tool.id;

                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className={index === 0 ? "sm:col-span-2" : ""}
                  >
                    <div
                      onMouseEnter={() => setActive(tool.id)}
                      onMouseLeave={() => setActive(null)}
                      className={`relative h-full overflow-hidden rounded-2xl border bg-white/80 p-5 backdrop-blur transition-all duration-300 ${isActive ? "-translate-y-1" : ""
                        }`}
                      style={{
                        borderColor: isActive ? tool.accent : "#e2e8f0",
                        boxShadow: isActive
                          ? `0 20px 50px -20px ${tool.accent}`
                          : "0 10px 30px -18px rgba(15,23,42,0.25)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${tool.accent}1A` }}
                        >
                          <BrandIcon icon={tool.icon} className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h3
                              className={`${orbitron.className} mb-0 text-base font-semibold tracking-wide text-slate-900`}
                            >
                              {tool.icon.title}
                            </h3>
                            <span
                              className={`${jetbrains_mono.className} text-[11px] text-slate-400`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p
                            className={`${jetbrains_mono.className} mb-2 mt-1 text-[11px] uppercase tracking-[0.2em]`}
                            style={{ color: tool.accent }}
                          >
                            {content.category}
                          </p>
                          <p className="mb-0 text-sm leading-relaxed text-slate-600">
                            {content.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                        style={{
                          width: isActive ? "100%" : "0%",
                          background: `linear-gradient(90deg, transparent, ${tool.accent}, transparent)`,
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
