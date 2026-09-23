import React from "react";

const marqueeItems = [
  <>
    Priya from Bengaluru just <strong>booked a demo</strong>, 2 mins ago
  </>,
  <>
    <strong>+47%</strong> faster response time reported by TechFlow this week
  </>,
  <>
    Rohit's team at Nova Logistics{" "}
    <strong>onboarded in 12 minutes</strong>
  </>,
  <>
    <strong>1.2M</strong> customer messages handled through DexKor last month
  </>,
  <>
    Anita saved <strong>14 hours/week</strong> after switching from spreadsheets
  </>,
  <>
    BharatBooks sales grew <strong>3.2x</strong> in 90 days
  </>,
  <>
    <strong>500+</strong> teams active across India, SEA and MENA
  </>,
];

const TopBarMarquee = () => {
  return (
    <>
      {/* Tailwind custom animation */}
      <style>{`
        @keyframes topBarMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .top-bar-marquee-animation {
          animation: topBarMarquee 35s linear infinite;
        }

        .top-bar-marquee-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="w-full overflow-hidden bg-[#071433] text-white border-b border-white/10 whitespace-nowrap"
        aria-hidden="true"
      >
        <div className="top-bar-marquee-animation flex w-max">
          {/* First set */}
          {marqueeItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-2.5 px-7 py-3 text-[13px] leading-none font-normal"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />

              <span>
                {item}
              </span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {marqueeItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-2.5 px-7 py-3 text-[13px] leading-none font-normal"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />

              <span>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopBarMarquee;