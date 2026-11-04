import { useState, useId } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { Reveal } from '../lib/motion.jsx';
import { faq } from '../data/faq.js';

export default function FAQ() {
  const [openId, setOpenId] = useState(faq[0]?.id ?? null);
  const baseId = useId();
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section-pad bg-white" aria-labelledby="faq-title">
      <div className="container-x">
        <SectionHeading eyebrow="Common questions" title="Everything you're wondering, answered." />

        <Reveal className="mx-auto mt-12 max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white shadow-card">
          {faq.map((item) => {
            const open = openId === item.id;
            const panelId = `${baseId}-panel-${item.id}`;
            const buttonId = `${baseId}-button-${item.id}`;
            return (
              <div key={item.id}>
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-paper sm:px-7"
                  >
                    <span className="font-display text-[17px] font-bold leading-snug text-ink sm:text-lg">{item.q}</span>
                    <motion.span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${open ? 'bg-electric-500 text-white' : 'bg-paper text-muted'}`}
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                      aria-hidden="true"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      key="content"
                      initial={reduce ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduce ? { height: 0, opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-[15.5px] leading-relaxed text-muted sm:px-7">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
