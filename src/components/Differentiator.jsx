import { MessageCircle, Layers, Repeat } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { Stagger, StaggerItem } from '../lib/motion.jsx';

const CARDS = [
  {
    icon: MessageCircle,
    title: 'Built WhatsApp-first, not bolted on',
    desc: 'DexKor was designed from day one around WhatsApp, not retrofitted with a plugin. Every workflow assumes chat is the primary channel.',
  },
  {
    icon: Layers,
    title: 'CRM + Support in one system',
    desc: 'Revenue conversations and customer service run on the same customer record, no more sales and support fighting over context.',
  },
  {
    icon: Repeat,
    title: 'Full lifecycle, one operating system',
    desc: 'Sales → onboarding → support → success → expansion. All in one place. No handoff losses. No tool sprawl. No duplicate data.',
  },
];

export default function Differentiator() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-950 text-white" aria-labelledby="diff-title">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="glow-blue absolute -bottom-40 right-[-8%] h-[480px] w-[480px] rounded-full blur-2xl opacity-70" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Not another WhatsApp tool"
          title="Why DexKor is fundamentally different."
          sub="Most WhatsApp tools help you send messages. DexKor helps you run your entire customer operation around them."
        />

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3" stagger={0.1}>
          {CARDS.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-electric-400/40 sm:p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="h3 mt-5 font-extrabold text-white">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{desc}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
