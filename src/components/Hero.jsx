import CTAButton from './CTAButton.jsx';

const Check = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Star = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-4.5L5.5 20l2-7L2 9h7z" />
  </svg>
);

const BULLETS = [
  <>Capture <b className="font-bold text-white">every WhatsApp lead</b> automatically, no more copy-paste into your CRM</>,
  <>Cut first-response time by up to <b className="font-bold text-white">73%</b> with smart routing &amp; automation</>,
  <>Sales, onboarding &amp; support work from <b className="font-bold text-white">one customer timeline</b></>,
  <>Get started in <b className="font-bold text-white">15 minutes</b>, without replacing your existing tools</>,
];

const CTA_SUB = ["No credit card required", "15-minute setup", "Cancel anytime"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-12 pb-16 text-white sm:py-16 sm:pb-20">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      {/* ambient glows (::before / ::after) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[200px] -top-[200px] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(37,211,102,.16),transparent_65%)] sm:-right-[260px] sm:-top-[260px] sm:h-[700px] sm:w-[700px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[160px] -left-[160px] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(84,227,142,.08),transparent_65%)] sm:-bottom-[200px] sm:-left-[200px] sm:h-[500px] sm:w-[500px]"
      />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-2">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-5">
          {/* ---------------- left column ---------------- */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-[rgba(37,211,102,.4)] bg-[rgba(37,211,102,.08)] px-1.5 sm:px-3.5 py-2 text-[10px] font-bold leading-tight tracking-[0.05em] text-[color:var(--accent2,#54e38e)] sm:rounded-full sm:text-[11px] md:text-xs">
              <span className="h-2 w-2 flex-none animate-[live_1.5s_ease-in-out_infinite] rounded-full bg-[var(--wa,#25d366)] shadow-[0_0_12px_var(--wa,#25d366)]" />
              THE #1 WHATSAPP-FIRST CRM FOR GROWING BUSINESSES
            </span>

            <h1 className="mb-5 mt-5 text-[clamp(33px,7vw,65px)] font-black leading-[1.05] tracking-[-1px] text-white sm:mb-[22px] sm:leading-[1.02] sm:tracking-[-1.5px] lg:tracking-[-2.5px]">
              Your customers are already on WhatsApp.{" "}
              <em className="relative not-italic text-[#25d366] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-1.5 after:rounded after:bg-[#25d366] after:opacity-25 after:content-['']">
                Manage the whole conversation there.
              </em>
            </h1>

            <p className="mb-7 max-w-[620px] text-[17px] leading-[1.55] text-[#97a6c7] sm:mb-[26px] sm:text-[19px]">
              DexKor is the only CRM + Support platform built around WhatsApp, so sales and support teams can handle
              customer conversations, follow-ups and service from one place.
            </p>

            <ul className="mb-7 mx-auto w-full max-w-md list-none p-0 text-left lg:mx-0 lg:max-w-none">
              {BULLETS.map((b, i) => (
                <li key={i} className="flex items-start gap-3 py-2 text-[15px] font-medium text-[#dfe7fb] sm:text-[16px]">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--wa,#25d366)]">
                    <Check className="h-3.5 w-3.5 text-[#04150b]" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-2 flex w-full flex-col items-center gap-4 lg:items-start">
              <CTAButton>Show Me How DexKor Works</CTAButton>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-[13px] text-[#97a6c7] lg:justify-start">
                {CTA_SUB.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* trust strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-[color:var(--line,rgba(255,255,255,.1))] pt-5 text-[13px] text-[#97a6c7] sm:mt-9 sm:py-4 lg:justify-start">
              <div className="flex gap-0.5 text-[color:var(--gold,#ffb020)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" />
                ))}
              </div>
              <div><b className="text-white">4.8/5</b> from 320+ reviews</div>
              <div className="hidden h-7 w-px bg-[rgba(255,255,255,.1)] sm:block" />
              <div><b className="text-white">500+</b> teams onboard</div>
              <div className="hidden h-7 w-px bg-[rgba(255,255,255,.1)] sm:block" />
              <div><b className="text-white">1M+</b> monthly conversations</div>
            </div>
          </div>

          {/* ---------------- right column: phone mockup ---------------- */}
          <div className="relative flex w-full items-center justify-center">
            <div className="pointer-events-none absolute h-full w-full bg-[radial-gradient(circle,rgba(37,211,102,.25),transparent_60%)] blur-[40px]" />

            {/* floating badges — tucked in on mobile so they never clip, hang off on larger screens */}
            <div className="absolute right-1 top-4 z-[3] flex animate-[floaty_4s_ease-in-out_infinite] items-center gap-2 rounded-xl bg-white px-3 py-2 text-[12px] font-bold text-[#04150b] shadow-[0_20px_40px_rgba(0,0,0,.35)] sm:-right-[30px] sm:top-[60px] sm:px-3.5 sm:py-2.5 sm:text-[13px]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[var(--wa,#25d366)]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
              </svg>
              Lead auto-captured
            </div>
            <div className="absolute bottom-4 left-1 z-[3] flex animate-[floaty_4.5s_ease-in-out_.5s_infinite] items-center gap-2 rounded-xl bg-white px-3 py-2 text-[12px] font-bold text-[#04150b] shadow-[0_20px_40px_rgba(0,0,0,.35)] sm:-left-[40px] sm:bottom-[80px] sm:px-3.5 sm:py-2.5 sm:text-[13px]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[var(--wa,#25d366)]">
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" />
              </svg>
              Response in 47s
            </div>

            {/* phone — fluid width, capped, so it never overflows small screens */}
            <div className="float relative z-[1] w-full max-w-[300px] rounded-[36px] border-2 border-[#1f2c33] bg-[#111b21] p-3 shadow-[0_30px_70px_-20px_rgba(0,0,0,.6),0_0_70px_-18px_rgba(37,211,102,.28),inset_0_1px_0_rgba(255,255,255,.06)] ring-1 ring-white/5 sm:max-w-[320px]">
              <div className="mx-auto mb-2 h-[22px] w-[100px] rounded-b-[14px] bg-black" />

              <div className="flex h-[480px] flex-col overflow-hidden rounded-[26px] bg-[#0b141a] sm:h-[520px]">
                {/* header */}
                <div className="flex items-center gap-2.5 border-b border-[#0d1418] bg-[#202c33] px-3.5 py-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#aebac1]">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-[linear-gradient(135deg,#00a884,#25d366)] text-[15px] font-bold text-white">
                    RM
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] font-semibold leading-tight text-[#e9edef]">Raghav Menon</div>
                    <div className="mt-0.5 flex items-center gap-1 text-[11px] leading-tight text-[#8696a0]">
                      <span className="h-[5px] w-[5px] animate-[live_1s_infinite] rounded-full bg-[var(--wa,#25d366)]" /> typing...
                    </div>
                  </div>
                  <div className="flex gap-3.5 text-[#aebac1] [&_svg]:h-5 [&_svg]:w-5">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M15 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4.5l7 4.5V6l-7 4.5z" stroke="currentColor" strokeWidth="1.8" /></svg>
                    <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" /></svg>
                    <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><circle cx="12" cy="19" r="1.5" fill="currentColor" /></svg>
                  </div>
                </div>

                {/* chat */}
                <div
                  className="flex flex-1 flex-col gap-2 overflow-y-auto p-3"
                  style={{
                    background:
                      "linear-gradient(rgba(11,20,26,.92),rgba(11,20,26,.92)), repeating-linear-gradient(45deg,#0b141a 0,#0b141a 20px,#0f1a20 20px,#0f1a20 40px)",
                  }}
                >
                  <div className="my-1 self-center rounded-md bg-[rgba(30,42,50,.7)] px-2.5 py-1 text-center text-[11px] font-medium text-[#8696a0]">
                    TODAY
                  </div>

                  <Msg dir="in">
                    Hi! Saw your ad on Instagram. Do you offer bulk pricing for 25+ users?
                    <Time>09:14</Time>
                  </Msg>

                  <Msg dir="out" tag="AUTO-CAPTURED TO CRM">
                    Hi Raghav! Thanks for reaching out 👋 Yes, we have team plans starting at ₹499/user for 25+. Can I send you a quick breakdown?
                    <Time seen>09:14</Time>
                  </Msg>

                  <Msg dir="in">
                    Yes please. Also need pilot for 2 weeks first.
                    <Time>09:15</Time>
                  </Msg>

                  <Msg dir="out" tag="OPP CREATED · ASSIGNED TO ANJALI">
                    Absolutely, 14-day pilot is free. Booking a 20-min setup call now. Confirm slot: <b className="font-bold">Tomorrow, 4 PM?</b>
                    <Time seen>09:15</Time>
                  </Msg>

                  <Msg dir="in">
                    Perfect. Confirmed. 🚀
                    <Time>09:16</Time>
                  </Msg>

                  <Msg dir="out" tag="DEAL STAGE: PILOT ACTIVE" className="bg-[#054d3f]">
                    Calendar invite sent. See you at 4 PM tomorrow!
                    <Time seen>09:16</Time>
                  </Msg>
                </div>

                {/* input */}
                <div className="flex items-center gap-2.5 bg-[#202c33] px-3 py-2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="flex-none text-[#8696a0]">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  <div className="flex-1 rounded-[20px] bg-[#2a3942] px-3 py-2 text-[12px] text-[#8696a0]">Type a message</div>
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[var(--wa,#25d366)]">
                    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px] text-white">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyframes used by the animate-[...] utilities above */}
      <style>{`
        @keyframes live { 0%,100%{opacity:1} 50%{opacity:.4} }
        @keyframes floaty { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
      `}</style>
    </section>
  );
}

/* ---- chat bubble helpers ---- */
function Msg({ dir, tag, className = "", children }) {
  const isOut = dir === "out";
  const base = isOut
    ? "self-end rounded-tr-sm bg-[#005c4b]"
    : "self-start rounded-tl-sm bg-[#202c33]";
  return (
    <div className={`relative max-w-[80%] rounded-lg px-2.5 py-2 text-[13px] leading-[1.4] text-[#e9edef] ${base} ${className}`}>
      {tag && (
        <span className="mb-1 inline-block rounded bg-[rgba(37,211,102,.2)] px-1.5 py-0.5 text-[10px] font-bold tracking-[0.03em] text-[color:var(--accent,#25d366)]">
          ▸ {tag}
        </span>
      )}
      {children}
    </div>
  );
}

function Time({ seen, children }) {
  return (
    <span className="float-right ml-2 mt-1.5 text-[10px] text-[#8696a0]">
      {children}
      {seen && <span className="ml-1 text-[11px] text-[#53bdeb]">✓✓</span>}
    </span>
  );
}