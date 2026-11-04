import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/logo.svg";
import CTAButton from './CTAButton.jsx';
import { scrollToId } from '../lib/scroll.js';

const NAV = [
  { id: 'problem', label: 'Problem' },
  { id: 'calculator', label: 'ROI Calculator' },
  { id: 'platform', label: 'Platform' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  const go = (id) => { setOpen(false); scrollToId(id); };

  return (
    <header
      data-site-header
      className={`sticky inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open ? 'bg-navy-950/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]' : 'bg-[#071433]'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <a
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-md"
          aria-label="DexKor, back to top"
        >
          <img
            src={Logo}
            alt="DexKor"
            className="h-7 sm:h-10 w-auto brightness-0 invert"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="link-underline text-[15px] font-medium text-white/80 hover:text-white transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton size="sm">Get Demo</CTAButton>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white hover:bg-white/10 transition-colors"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="lg:hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-md"
          >
            <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.2 }}
                  onClick={() => go(item.id)}
                  className="rounded-lg px-3 py-3 text-left text-base font-medium text-white/90 hover:bg-white/10"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-3 pb-1">
                <CTAButton full onClick={() => setOpen(false)}>Get Demo</CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
