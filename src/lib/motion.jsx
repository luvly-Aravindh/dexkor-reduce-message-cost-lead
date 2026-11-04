import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';
import { formatINR } from './format.js';

export const EASE = [0.16, 1, 0.3, 1];

/** Fade + rise on scroll. Renders instantly when reduced motion is preferred. */
export function Reveal({ children, delay = 0, y = 18, amount = 0.2, className = '', as = 'div', ...rest }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.65, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const containerVariants = (stagger, delay) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});
const itemVariants = (y) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
});

/** Staggered children. Wrap items in <StaggerItem>. */
export function Stagger({ children, stagger = 0.1, delay = 0, amount = 0.15, className = '', as = 'div' }) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      variants={containerVariants(stagger, delay)}
      initial={reduce ? 'show' : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ children, y = 18, className = '', as = 'div', ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag className={className} variants={itemVariants(y)} {...rest}>
      {children}
    </Tag>
  );
}

/** Counts from 0 to value once in view, Indian digit grouping. */
export function CountUp({ value, decimals = 0, prefix = '', suffix = '', duration = 1.6, delay = 0, className = '', immediate = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!(inView || immediate)) return;
    if (reduce) { setDisplay(value); return; }
    const controls = animate(0, value, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, immediate, value, reduce, duration, delay]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {prefix}{formatINR(display, decimals)}{suffix}
    </span>
  );
}

/** Highlighter sweep behind an inline phrase. Triggers in view (or when `on` is passed). */
export function Highlight({ children, light = false, on, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [active, setActive] = useState(false);
  useEffect(() => {
    const trigger = on === undefined ? inView : on;
    if (!trigger) return;
    const t = setTimeout(() => setActive(true), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, on, delay]);
  return (
    <span ref={ref} className={`hl ${light ? 'hl--light' : ''} ${active ? 'is-on' : ''} ${className}`}>
      {children}
    </span>
  );
}
