import { ShieldCheck } from 'lucide-react';
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx';

const EVENTS = [
  { time: '09:14 AM', src: 'WhatsApp · Sales', text: 'Asked about pricing for 25 users. Wants a 2-week pilot.' },
  { time: '09:16 AM', src: 'SalesHub', text: 'Opportunity created · Deal size ₹1.5L · Owner: Anjali' },
  { time: '10:02 AM', src: 'Calendar', text: 'Demo confirmed for tomorrow, 4:00 PM.' },
  { time: '02:40 PM', src: 'OnboardHub', text: 'Pilot workspace provisioned. Welcome sequence started.' },
  { time: '04:18 PM', src: 'HelpDesk', text: 'Question about SSO, routed to solutions engineer. SLA: 2h' },
  { time: '05:03 PM', src: 'AccountCare', text: 'Health score: 92/100 · Expansion opportunity flagged.' },
];

export default function CustomerTimeline() {
  return (
    <section className="section-pad bg-paper" aria-labelledby="timeline-title">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal>
          <p className="eyebrow text-electric-600">One customer timeline</p>
          <h2 id="timeline-title" className="h2 mt-4 font-extrabold text-ink">Every conversation becomes context, automatically.</h2>
          <p className="lede mt-5 text-muted">
            Instead of treating each WhatsApp message as an isolated chat, DexKor threads it into the customer's full story, profile, deals, onboarding, support and success signals, all in one live view.
          </p>
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-card">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">One view. Every team. Zero context loss.</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-muted">
                Customer profile, conversations, sales activity, onboarding milestones, support tickets and health signals, all in the same place, always up to date.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-paper px-5 py-4">
              <strong className="text-sm font-bold text-ink">Raghav Menon · TechFlow Pvt Ltd</strong>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-wa/30 bg-wa/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-wa" /> Live
              </span>
            </div>
            <Stagger className="p-5 sm:p-6" stagger={0.09} amount={0.2}>
              {EVENTS.map((e, i) => (
                <StaggerItem key={e.time} className="relative flex gap-4 pb-5 last:pb-0" y={12}>
                  <div className="flex flex-col items-center">
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-electric-500 ring-4 ring-electric-500/15" />
                    {i < EVENTS.length - 1 && <span className="mt-1 w-px flex-1 bg-line" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted">{e.time}</p>
                    <div className="mt-1 rounded-xl border border-line bg-paper px-3.5 py-2.5">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-electric-600">{e.src}</p>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-ink">{e.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
