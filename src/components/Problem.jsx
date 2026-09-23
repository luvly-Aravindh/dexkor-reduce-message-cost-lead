import { AlertTriangle, Clock, MessageCircle, Users, LayoutGrid } from 'lucide-react';
import CTAButton from './CTAButton.jsx';
import SectionHeading from './SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx';

const CARDS = [
  {
    icon: Clock,
    title: 'Leads discussed on WhatsApp, tracked nowhere.',
    desc: 'Objections, questions and next-step commitments stay stuck in individual chats, never making it to the CRM, never turning into follow-ups.',
  },
  {
    icon: MessageCircle,
    title: 'Customers want WhatsApp. Teams need a workflow.',
    desc: 'When WhatsApp is just a chat inbox, your team still has to manage ownership, tickets, escalation and SLAs somewhere else, twice the work.',
  },
  {
    icon: Users,
    title: 'Every handoff loses context.',
    desc: 'Sales-to-onboarding-to-support: each team sees a different version of the same customer, so buyers repeat themselves and trust erodes.',
  },
  {
    icon: LayoutGrid,
    title: 'More tools = more tabs to manage.',
    desc: 'CRM + helpdesk + WhatsApp tool + spreadsheets. Your team switches between five apps just to answer one customer.',
  },
];

const STATS = [
  { big: '68%', label: 'of WhatsApp messages go unanswered for 24+ hours' },
  { big: '₹4.2L', label: 'average monthly revenue lost per team to slow follow-ups' },
  { big: '5.3', label: 'apps a typical CX rep switches between per customer' },
];

export default function Problem() {
  return (
    <section id="problem" className="section-pad bg-paper" aria-labelledby="problem-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="The costly problem"
          title="Your team is losing deals every single day, and they don't even know it."
          sub="Customer conversations happen on WhatsApp. Sales gets tracked somewhere else. Support sits in a third tool. Every handoff loses context, and every missed message loses money."
        />

        <Reveal delay={0.05} className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-start gap-4 rounded-2xl border border-danger/20 bg-danger/[0.04] p-5 sm:p-6">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-danger/10 text-danger">
              <AlertTriangle size={18} aria-hidden="true" />
            </span>
            <p className="text-[15px] leading-relaxed text-ink">
              <b>Industry benchmark:</b> businesses lose ~40% of qualified WhatsApp leads to slow response times, missed follow-ups, and messages that fall between the cracks of disconnected tools.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2" stagger={0.09}>
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-electric-300">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="h3 mt-4 font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.big}>
              <div className="rounded-2xl border border-line bg-white p-6 text-center shadow-card">
                <div className="font-display text-3xl font-extrabold text-danger sm:text-4xl">{s.big}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex flex-col items-center">
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-danger">
            <span className="h-2 w-2 animate-pulse rounded-full bg-danger" /> Stop the leak, here's the fix
          </p>
          <CTAButton>Show Me How Much Revenue I'm Leaving On The Table</CTAButton>
          <p className="eyebrow mt-4 text-muted">Free ROI calculator &middot; get your number in 30 seconds</p>
        </Reveal>
      </div>
    </section>
  );
}
