import { Check, X } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
import { Reveal, Stagger, StaggerItem } from '../lib/motion.jsx';

const ROWS = [
  { moment: 'New enquiry lands', without: 'Manual copy-paste into CRM · often missed', with: 'Auto-captured with deal, owner and next step' },
  { moment: 'Follow-up needed', without: 'Rep remembers · or forgets · or checks 3 tools', with: 'Next action stays visible against the customer' },
  { moment: 'Deal closes → onboarding', without: 'Context handed over in a Slack message', with: 'Full customer story carries over automatically' },
  { moment: 'Support request on WhatsApp', without: 'Becomes a manual ticket someone has to create', with: 'Feeds the helpdesk with routing, SLA & priority' },
  { moment: 'Account health check', without: 'Scattered signals across teams and tools', with: 'One shared score with churn & expansion alerts' },
  { moment: 'Team switching cost', without: '5+ tabs per customer · constant context switching', with: 'One screen · one customer · one workflow' },
];

export default function Comparison() {
  return (
    <section id="compare" className="section-pad bg-white" aria-labelledby="cmp-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Every stage of the customer journey"
          title="Without DexKor vs. with DexKor."
          sub="Here's what actually changes across the customer lifecycle when your CRM speaks WhatsApp natively."
        />

        {/* Desktop table */}
        <Reveal className="mt-12 hidden md:block">
          <div className="overflow-hidden rounded-2xl border border-line shadow-card">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th scope="col">Customer moment</th>
                  <th scope="col">Without a unified workflow</th>
                  <th scope="col" className="text-electric-600">With DexKor</th>
                </tr>
              </thead>
              <Stagger as="tbody" stagger={0.1} amount={0.2}>
                {ROWS.map((r) => (
                  <StaggerItem as="tr" key={r.moment} y={10}>
                    <td className="text-[15px] font-semibold text-ink">{r.moment}</td>
                    <td className="text-[14.5px] text-muted">
                      <span className="inline-flex items-start gap-2">
                        <X size={15} className="mt-0.5 shrink-0 text-danger/70" aria-hidden="true" />
                        {r.without}
                      </span>
                    </td>
                    <td className="bg-wa/[0.04] text-[14.5px] font-medium text-ink">
                      <span className="inline-flex items-start gap-2">
                        <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                        {r.with}
                      </span>
                    </td>
                  </StaggerItem>
                ))}
              </Stagger>
            </table>
          </div>
        </Reveal>

        {/* Mobile stacked cards */}
        <Stagger className="mt-10 space-y-4 md:hidden" stagger={0.1}>
          {ROWS.map((r) => (
            <StaggerItem key={r.moment}>
              <div className="paper-card p-5">
                <p className="font-display text-[15px] font-bold text-ink">{r.moment}</p>
                <div className="mt-3 flex items-start gap-2 text-[14px] text-muted">
                  <X size={15} className="mt-0.5 shrink-0 text-danger/70" aria-hidden="true" />
                  {r.without}
                </div>
                <div className="mt-2.5 flex items-start gap-2 rounded-lg bg-wa/[0.06] p-2.5 text-[14px] font-medium text-ink">
                  <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                  {r.with}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
