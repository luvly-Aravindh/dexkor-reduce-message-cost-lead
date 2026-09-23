import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, Database, Users, ShieldCheck } from 'lucide-react';
import CTAButton from './CTAButton.jsx';
import SectionHeading from './SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem, EASE } from '../lib/motion.jsx';

const STEPS = [
  { n: '1', title: 'Customer starts on WhatsApp', icon: MessageCircle, desc: 'A sales enquiry, support ticket, onboarding question or follow-up lands via the channel they already use.' },
  { n: '2', title: 'DexKor captures everything', icon: Database, desc: 'Conversation, contact details and intent are auto-logged against the customer record, zero manual entry.' },
  { n: '3', title: 'Team works with full context', icon: Users, desc: 'Sales, onboarding and support see the whole customer story on one screen, past chats, deals, tickets, notes.' },
  { n: '4', title: 'Nothing falls through', icon: ShieldCheck, desc: 'Automations, ownership, SLAs and next-step reminders keep every customer moving forward.' },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();
  return (
    <section id="how-it-works" className="section-pad bg-white" aria-labelledby="how-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="The DexKor approach"
          title="WhatsApp becomes part of your customer system, not a separate inbox."
          sub="DexKor connects every conversation to the workflow around it, giving your entire customer-facing team one shared source of truth."
        />

        <div className="relative mt-14">
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-line lg:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-electric-500"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
            />
          </div>
          <div className="absolute bottom-8 left-7 top-7 w-0.5 bg-line lg:hidden" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top bg-electric-500"
              initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
            />
          </div>

          <Stagger as="ol" className="relative grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6" stagger={0.3} amount={0.25}>
            {STEPS.map(({ n, title, icon: Icon, desc }) => (
              <StaggerItem as="li" key={n} className="flex gap-5 lg:flex-col lg:items-center lg:text-center" y={16}>
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-navy-900 text-white shadow-card">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="pt-1 lg:pt-2">
                  <p className="font-mono text-xs font-semibold tracking-[0.2em] text-electric-600">STEP {n}</p>
                  <h3 className="h3 mt-1 font-extrabold text-ink">{title}</h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted lg:mx-auto">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal className="mt-12 flex flex-col items-center">
          <CTAButton>Show Me A Live Walkthrough Of DexKor</CTAButton>
          <p className="eyebrow mt-4 text-muted">20-minute demo &middot; tailored to your workflow</p>
        </Reveal>
      </div>
    </section>
  );
}
