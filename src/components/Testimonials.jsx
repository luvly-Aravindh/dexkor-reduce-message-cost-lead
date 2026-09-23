import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { Stagger, StaggerItem } from '../lib/motion.jsx';
import { testimonials } from '../data/testimonials.js';

function initials(name) {
  return name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-paper" aria-labelledby="testimonials-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Real customers · Real results"
          title="What growing teams say after switching to DexKor."
          sub="These are the numbers our customers are hitting, usually within the first 60 days."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <figure className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-[0_24px_48px_-20px_rgba(15,27,51,0.28)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-0.5 text-marker-500" aria-label={`${t.rating} out of 5 stars`} role="img">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                    ))}
                  </div>
                </div>
                {t.metric && (
                  <span className="mt-4 inline-flex w-fit items-center rounded-full bg-wa/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-success">
                    {t.metric}
                  </span>
                )}
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white" aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-sm text-muted">{t.role} · {t.company}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
