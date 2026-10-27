import { useState } from "react";
import { motion } from "motion/react";
import { processSteps } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Process() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="relative border-t border-border px-5 py-32 md:px-10 md:py-48">
      <Reveal>
        <p className="label-xs text-accent">Process</p>
        <h2 className="mt-3 max-w-3xl font-display text-[12vw] leading-[0.88] tracking-wide sm:text-6xl lg:text-7xl">
          HOW THE WORK GETS MADE
        </h2>
      </Reveal>

      <ul className="mt-16 border-t border-border">
        {processSteps.map((item, i) => {
          const isActive = active === i;
          return (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              tabIndex={0}
              className="group relative border-b border-border py-8 outline-none transition-colors duration-500 focus-visible:bg-secondary/30"
            >
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 left-0 w-px bg-accent transition-transform duration-700 ${
                  isActive ? "scale-y-100" : "scale-y-0"
                }`}
              />
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 pl-4 transition-transform duration-700 md:grid-cols-[6rem_minmax(0,18rem)_minmax(0,1fr)] md:gap-10">
                <span
                  className={`font-display text-4xl transition-colors duration-500 md:text-5xl ${
                    isActive ? "text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.step}
                </span>
                <h3
                  className={`font-display text-3xl tracking-wide transition-all duration-700 md:text-5xl ${
                    isActive ? "translate-x-2 text-foreground" : "text-foreground/60"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`col-span-2 max-w-md text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 md:col-span-1 ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {item.body}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
