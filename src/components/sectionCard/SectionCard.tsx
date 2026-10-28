import React from "react";
import { motion } from "framer-motion";

type Accent = "rose" | "emerald" | "sky" | "violet";

// Static class names so Tailwind can pick them up
const accents: Record<Accent, { bar: string }> = {
  rose: {
    // bar: "from-pink-500 via-rose-500 to-red-500",
    bar: "from-emerald-500 via-green-600 to-teal-500",
  },
  emerald: {
    bar: "from-emerald-500 via-green-600 to-teal-500",
  },
  sky: {
    // bar: "from-sky-500 via-blue-600 to-indigo-500",
    bar: "from-emerald-500 via-green-600 to-teal-500",
  },
  violet: {
    // bar: "from-violet-500 via-purple-600 to-fuchsia-500",
    bar: "from-emerald-500 via-green-600 to-teal-500",
  },
};

interface SectionCardProps {
  accent: Accent;
  children: React.ReactNode;
}

// No transform, filter or position here: the sections contain absolutely
// positioned elements that must keep their current containing block.
const SectionCard: React.FC<SectionCardProps> = ({ accent, children }) => {
  const { bar } = accents[accent];

  return (
    <motion.section
      className="mx-auto my-10 w-[calc(100%-2rem)] max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_10px_40px_-15px_rgba(15,23,42,0.18)] transition-shadow duration-500 hover:shadow-[0_25px_60px_-20px_rgba(15,23,42,0.30)] md:my-16"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${bar}`} />
      <div className="px-2 py-6 md:px-8 md:py-10">{children}</div>
    </motion.section>
  );
};

export default SectionCard;
