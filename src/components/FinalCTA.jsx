import { ShieldCheck, BadgeCheck, Clock } from 'lucide-react';
import LeadForm from './LeadForm.jsx';
import { Reveal } from '../lib/motion.jsx';

const GUARANTEES = [
  { icon: ShieldCheck, title: '30-day money-back', sub: 'Guarantee, no questions asked' },
  { icon: BadgeCheck, title: 'SOC 2 · GDPR · DPDP', sub: 'Enterprise-grade security' },
  { icon: Clock, title: 'Live in 15 minutes', sub: 'Free white-glove onboarding' },
];

export default function FinalCTA() {
  return (
    <section id="demo" className="section-pad relative overflow-hidden bg-navy-950 text-white" aria-labelledby="final-title">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-blue absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full blur-2xl opacity-80" aria-hidden="true" />
      <div className="glow-amber absolute -bottom-48 -left-24 h-[480px] w-[480px] rounded-full blur-2xl" aria-hidden="true" />

      <div className="container-x relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-5">
        <div className="lg:pt-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-marker-500/30 bg-marker-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-marker-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-marker-500" /> Only 7 demo slots left this week
            </span>
            <h2 id="final-title" className="h2 mt-5 font-extrabold text-white">Every day you wait, more WhatsApp leads slip through the cracks.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <p className="lede text-white/75">
              Book your free 20-minute demo. See DexKor working with your actual workflow. Walk away with a clear plan to recover the revenue you're currently losing, whether you sign up or not.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-9 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {GUARANTEES.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-wa">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-[13px] leading-snug text-white/60">{sub}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="w-full">
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
