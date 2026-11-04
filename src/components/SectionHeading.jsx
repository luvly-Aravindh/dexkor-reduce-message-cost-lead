import { Reveal } from '../lib/motion.jsx';

export default function SectionHeading({ eyebrow, title, sub, align = 'center', dark = false, className = '', titleClass = '' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const eyebrowCls = dark ? 'text-marker-500' : 'text-electric-600';
  const titleCls = dark ? 'text-white' : 'text-ink';
  const subCls = dark ? 'text-white/70' : 'text-muted';
  return (
    <Reveal className={`max-w-3xl ${alignCls} ${className}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${eyebrowCls}`}>{eyebrow}</p>}
      <h2 className={`h2 font-extrabold ${titleCls} ${titleClass}`}>{title}</h2>
      {sub && <p className={`lede mt-5 ${subCls}`}>{sub}</p>}
    </Reveal>
  );
}
