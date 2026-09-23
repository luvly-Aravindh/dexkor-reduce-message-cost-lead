import { Reveal } from '../lib/motion.jsx';

const BRANDS = [
  { name: 'NovaLogistics', mark: 'N', color: '#2F6BFF' },
  { name: 'TechFlow', mark: 'T', color: '#FFB020' },
  { name: 'BharatBooks', mark: 'B', color: '#25D366' },
  { name: 'MetroMart', mark: 'M', color: '#FF6B4A' },
  { name: 'ZenithHealth', mark: 'Z', color: '#2F6BFF' },
  { name: 'OpenNest', mark: 'O', color: '#FFB020' },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-white py-10" aria-label="Customers">
      <div className="container-x">
        <Reveal>
          <p className="text-center font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            Trusted by 500+ growing businesses across India, SEA and MENA
          </p>
        </Reveal>
        <Reveal delay={0.08} className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {BRANDS.map((b) => (
            <div key={b.name} className="inline-flex items-center gap-2.5 text-[15px] font-bold text-ink/70">
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg font-display text-sm text-white"
                style={{ background: b.color }}
                aria-hidden="true"
              >
                {b.mark}
              </span>
              {b.name}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
