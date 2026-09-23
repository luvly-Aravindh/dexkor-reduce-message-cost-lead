import { useState } from 'react';
import { Zap } from 'lucide-react';
import CTAButton from './CTAButton.jsx';
import { Reveal } from '../lib/motion.jsx';

/** Indian abbreviated currency: 4.8 L / 46.08 L / 1.2 Cr. */
function fmt(n) {
  if (n >= 10000000) return (n / 10000000).toFixed(2).replace(/\.00$/, '') + ' Cr';
  if (n >= 100000) return (n / 100000).toFixed(2).replace(/\.00$/, '') + ' L';
  return Math.round(n).toLocaleString('en-IN');
}

const SLIDERS = [
  { key: 'messages', label: 'Monthly WhatsApp conversations', min: 100, max: 10000, step: 100, def: 1000, kind: 'plain' },
  { key: 'aov', label: 'Average order / deal value', min: 1000, max: 200000, step: 1000, def: 15000, kind: 'rupee' },
  { key: 'conv', label: 'Current lead-to-customer rate', min: 2, max: 30, step: 1, def: 8, kind: 'pct' },
  { key: 'resp', label: 'Current avg response time', min: 1, max: 48, step: 1, def: 4, kind: 'hrs' },
];

function missRate(respHrs) {
  if (respHrs <= 1) return 0.2;
  if (respHrs <= 4) return 0.2 + (respHrs - 1) * 0.067;
  if (respHrs <= 24) return 0.4 + (respHrs - 4) * 0.0125;
  return Math.min(0.8, 0.65 + (respHrs - 24) * 0.006);
}

export default function ROICalculator() {
  const [v, setV] = useState(() => Object.fromEntries(SLIDERS.map((s) => [s.key, s.def])));
  const set = (key) => (e) => setV((prev) => ({ ...prev, [key]: +e.target.value }));

  const monthlyLoss = v.messages * missRate(v.resp) * (v.conv / 100) * v.aov;
  const monthlyRecovery = monthlyLoss * 0.8;
  const annual = monthlyRecovery * 12;

  const shown = (s) => {
    if (s.kind === 'rupee') return '₹' + v[s.key].toLocaleString('en-IN');
    if (s.kind === 'pct') return v[s.key] + '%';
    if (s.kind === 'hrs') return v[s.key] + ' hrs';
    return v[s.key].toLocaleString('en-IN');
  };

  return (
    <section id="calculator" className="section-pad relative overflow-hidden bg-navy-950 text-white" aria-labelledby="calc-title">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-amber absolute -top-24 right-[-8%] h-[440px] w-[440px] rounded-full blur-2xl" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-marker-500/30 bg-marker-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-marker-500">
            <Zap size={13} aria-hidden="true" /> Free ROI calculator
          </span>
          <h2 id="calc-title" className="h2 mt-5 font-extrabold text-white">See exactly how much revenue you can recover this month.</h2>
          <p className="lede mt-4 text-white/70">Move the sliders to match your business. Watch the number update live.</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          {/* Inputs */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <div className="space-y-7">
              {SLIDERS.map((s) => {
                const pct = ((v[s.key] - s.min) / (s.max - s.min)) * 100;
                return (
                  <div key={s.key}>
                    <label className="flex items-center justify-between gap-3 text-sm text-white/75">
                      <span>{s.label}</span>
                      <b className="font-display text-white">{shown(s)}</b>
                    </label>
                    <input
                      type="range"
                      className="range mt-3"
                      min={s.min}
                      max={s.max}
                      step={s.step}
                      value={v[s.key]}
                      onChange={set(s.key)}
                      style={{ '--fill': pct + '%' }}
                      aria-label={s.label}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Output */}
          <div className="flex flex-col rounded-2xl border border-white/10 bg-navy-900/70 p-6 shadow-deep sm:p-7">
            <p className="font-mono text-[11px] uppercase tracking-wider text-white/50">You're currently losing about</p>
            <p className="mt-1 text-sm font-semibold text-danger">💸 Revenue slipping away every month</p>
            <div className="mt-2 font-display text-4xl font-extrabold text-white tnum sm:text-5xl">₹{fmt(monthlyLoss)}</div>
            <p className="mt-2 text-[13px] leading-relaxed text-white/55">to slow responses, missed messages &amp; lost context</p>

            <div className="mt-6 rounded-xl border border-wa/25 bg-wa/[0.08] p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-wa/90">📈 With DexKor, you'd recover</p>
              <div className="mt-1 font-display text-2xl font-extrabold text-wa tnum sm:text-3xl">₹{fmt(monthlyRecovery)} / month</div>
            </div>
            <p className="mt-4 text-[14px] text-white/70">That's <b className="text-white">₹{fmt(annual)}</b> per year, starting month one.</p>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-marker-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-marker-500" /> Let's recover this revenue, live demo this week
          </p>
          <CTAButton glow>YES! Recover This Revenue For My Business</CTAButton>
          <p className="eyebrow mt-4 text-white/55">Free 20-min demo tailored to your numbers &middot; No sales pressure</p>
        </Reveal>
      </div>
    </section>
  );
}
