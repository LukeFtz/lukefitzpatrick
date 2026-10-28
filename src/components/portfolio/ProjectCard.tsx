import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { portfolioProject } from "@/utilitities/datatypes";

interface ProjectCardProps {
  project: portfolioProject;
  index: number;
  categoryLabel: string;
  viewProject: string;
  viewCode: string;
  titleFont: string;
  monoFont: string;
}

// forwardRef so AnimatePresence "popLayout" can measure exiting cards
const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard(
    {
      project,
      index,
      categoryLabel,
      viewProject,
      viewCode,
      titleFont,
      monoFont,
    },
    ref
  ) {
    const reduceMotion = useReducedMotion();

    // Pointer position inside the card, 0..1
    const pointerX = useMotionValue(0.5);
    const pointerY = useMotionValue(0.5);

    const rotateX = useSpring(useTransform(pointerY, [0, 1], [8, -8]), {
      stiffness: 200,
      damping: 20,
    });
    const rotateY = useSpring(useTransform(pointerX, [0, 1], [-8, 8]), {
      stiffness: 200,
      damping: 20,
    });

    const spotX = useTransform(pointerX, (v) => `${v * 100}%`);
    const spotY = useTransform(pointerY, (v) => `${v * 100}%`);
    const spotlight = useMotionTemplate`radial-gradient(400px circle at ${spotX} ${spotY}, rgba(255, 255, 255, 0.9), transparent 60%)`;

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width);
      pointerY.set((event.clientY - rect.top) / rect.height);
    };

    const handleLeave = () => {
      pointerX.set(0.5);
      pointerY.set(0.5);
    };

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
        className="[perspective:1000px]"
      >
        <motion.div
          onMouseMove={reduceMotion ? undefined : handleMove}
          onMouseLeave={handleLeave}
          style={reduceMotion ? undefined : { rotateX, rotateY }}
          className="group relative h-full rounded-2xl p-px shadow-2xl transition-shadow duration-500 hover:shadow-2xl"
        >
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-slate-300/50 p-6">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: spotlight }}
            />

            {/* HUD corner brackets */}
            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-green-600/70" />
            <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-green-600/70" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-green-600/70" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-green-600/70" />

            <div
              className={`${monoFont} relative flex items-center justify-between text-xs uppercase tracking-[0.2em]`}
            >
              <span className="rounded-full border border-green-600/40 bg-green-600/10 px-3 py-1 text-slate-800">
                {categoryLabel}
              </span>
              {/* <span className="flex items-center gap-2 text-slate-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
                {project.status} · {project.year}
              </span> */}
            </div>

            <div
              className={`${titleFont} relative mt-6 text-5xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(0,0,0,0.7)]`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3
              className={`${titleFont} relative mt-2 text-xl font-semibold tracking-wide text-black`}
            >
              {project.title}
            </h3>
            <p className="relative mb-6 mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>

            <ul className="relative flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className={`${monoFont} rounded-md border border-slate-700 bg-slate-800/60 px-2 py-1 text-[11px] text-slate-200`}
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* {(project.link || project.repo) && (
              <div className="relative mt-6 flex gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_-4px_rgba(34,211,238,0.8)] transition hover:brightness-110"
                  >
                    {viewProject} →
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                  >
                    {viewCode}
                  </a>
                )}
              </div>
            )} */}
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

export default ProjectCard;
