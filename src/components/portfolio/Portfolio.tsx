import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { getDataPortfolio } from "@/utilitities/data/getData";
import { portfolioCategory, portfolioContent } from "@/utilitities/datatypes";
import ProjectCard from "./ProjectCard";
import { orbitron, jetbrains_mono } from "@/utilitities/fonts";


type Filter = portfolioCategory | "all";

const Counter: React.FC<{ value: number; start: boolean }> = ({
  value,
  start,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [start, value]);

  return <span ref={ref}>0</span>;
};

const Portfolio: React.FC = () => {
  const [data, setData] = useState<portfolioContent | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      setData(getDataPortfolio(dataLang));
    } else {
      localStorage.setItem("language", "pt");
      setData(getDataPortfolio("pt"));
    }
  }, []);

  const projects = useMemo(() => data?.projects ?? [], [data]);

  const categories = useMemo(
    () => Array.from(new Set(projects.map((project) => project.category))),
    [projects]
  );

  const technologies = useMemo(
    () => new Set(projects.flatMap((project) => project.stack)).size,
    [projects]
  );

  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters: Filter[] = ["all", ...categories];

  return (
    <section
      id="id_portfolio_div"
      ref={sectionRef}
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-900 to-white py-24 text-slate-100 md:py-32"
    >

      {/* Perspective grid floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 [perspective:600px]"
      >
        <motion.div
          className="absolute inset-x-[-50%] bottom-0 h-[200%] origin-bottom [transform:rotateX(60deg)] [background-image:linear-gradient(rgba(34,211,238,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.9)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_top,black,transparent_80%)]"
          animate={
            reduceMotion
              ? undefined
              : { backgroundPosition: ["0px 0px", "0px 48px"] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className={`${orbitron.className} bg-black bg-clip-text text-4xl font-bold uppercase tracking-wider text-transparent pt-2  md:text-6xl`}
          >
            {data?.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-slate-600 md:text-lg">
            {data?.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        {data && (
          <motion.div
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 md:gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: data.stats.projects, value: projects.length },
              { label: data.stats.technologies, value: technologies },
              { label: data.stats.areas, value: categories.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-600/20 bg-white/[0.03] px-2 py-4 text-center"
              >
                <div
                  className={`${orbitron.className} text-3xl font-bold text-slate-600 md:text-4xl`}
                >
                  <Counter value={stat.value} start={inView} />
                </div>
                <div
                  className={`${jetbrains_mono.className} mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-600 md:text-xs`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Filters */}
        {data && (
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`${jetbrains_mono.className} relative rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${filter === item
                  ? "text-slate-800"
                  : "text-slate-600 hover:text-green-700"
                  }`}
              >
                {filter === item && (
                  <motion.span
                    layoutId="portfolio-filter"
                    className="absolute inset-0 rounded-full border border-green-600/60 bg-green-600/10 shadow-[0_0_20px_-4px_rgba(34,211,238,0.8)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">
                  {item === "all" ? data.all : data.categories[item]}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Projects */}
        {data && inView && (
          <motion.div
            layout
            className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  categoryLabel={data.categories[project.category]}
                  viewProject={data.viewProject}
                  viewCode={data.viewCode}
                  titleFont={orbitron.className}
                  monoFont={jetbrains_mono.className}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
