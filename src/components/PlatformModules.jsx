import { Check, Briefcase, Headphones, Rocket, Gem } from 'lucide-react';
import CTAButton from './CTAButton.jsx';
import SectionHeading from './SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx';

const MODULES = [
  {
    tag: 'Sales',
    icon: Briefcase,
    title: 'SalesHub',
    desc: 'Manage pipeline and WhatsApp conversations together. Every deal has the full chat history attached, nothing gets forgotten.',
    features: ['Auto-create opportunities from WhatsApp', 'AI-suggested next actions & follow-ups', 'Pipeline forecasting with live deal signals'],
  },
  {
    tag: 'Support',
    icon: Headphones,
    title: 'HelpDesk',
    desc: 'Turn WhatsApp into a proper support channel with tickets, routing, SLAs, priority and full resolution visibility.',
    features: ['Smart routing to the right agent instantly', 'SLA tracking with breach alerts', 'Canned replies, macros and AI drafts'],
  },
  {
    tag: 'Onboarding',
    icon: Rocket,
    title: 'OnboardHub',
    desc: 'Keep implementation on track after the deal closes. Milestones, tasks and customer conversations, all connected.',
    features: ['Templated onboarding playbooks', 'Milestone alerts on WhatsApp', 'Time-to-value tracking per account'],
  },
  {
    tag: 'Customer Success',
    icon: Gem,
    title: 'AccountCare',
    desc: 'Spot churn risk early and surface expansion opportunities using live customer signals from every touchpoint.',
    features: ['Health scoring across every account', 'Early churn signals & risk alerts', 'Upsell & expansion play recommendations'],
  },
];

export default function PlatformModules() {
  return (
    <section id="platform" className="section-pad bg-white" aria-labelledby="platform-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="One platform · Four modules"
          title="Everything your customer-facing team needs, in one place."
          sub="Four purpose-built modules that share one customer record. No integrations. No syncing. No duplicate work."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2" stagger={0.1}>
          {MODULES.map(({ tag, icon: Icon, title, desc, features }) => (
            <StaggerItem key={title}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-electric-300 hover:shadow-card sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-electric-600">{tag}</p>
                    <h3 className="h3 font-extrabold text-ink">{title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{desc}</p>
                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-ink">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wa/12 text-wa">
                        <Check size={13} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-12 flex flex-col items-center">
          <CTAButton>Show Me Every Module In A Live Demo</CTAButton>
          <p className="eyebrow mt-4 text-muted">See all 4 modules working together &middot; No credit card needed</p>
        </Reveal>
      </div>
    </section>
  );
}
