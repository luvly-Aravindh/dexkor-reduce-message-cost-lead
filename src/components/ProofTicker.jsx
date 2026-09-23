import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { tickerActivities } from '../data/tickerActivities.js';

const START_DELAY = 4000;
const VISIBLE_FOR = 6000;
const INTERVAL = 11000;

export default function ProofTicker() {
  const reduce = useReducedMotion();
  const [item, setItem] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const timers = [];
    const show = () => {
      setItem(tickerActivities[index % tickerActivities.length]);
      index += 1;
      setVisible(true);
      timers.push(setTimeout(() => setVisible(false), VISIBLE_FOR));
    };
    timers.push(setTimeout(() => {
      show();
      timers.push(setInterval(show, INTERVAL));
    }, START_DELAY));
    return () => timers.forEach((t) => { clearTimeout(t); clearInterval(t); });
  }, []);

  return (
    <AnimatePresence>
      {visible && item && (
        <motion.div
          key={item.name + item.time}
          className="ticker"
          role="status"
          aria-live="polite"
          initial={reduce ? { opacity: 0 } : { x: -380, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { x: -380, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 240, damping: 26 }}
        >
          <div className="ticker__map" aria-hidden="true">
            <svg className="ticker__pin" viewBox="0 0 16 20" fill="none">
              <path d="M8 0C3.58 0 0 3.5 0 7.8 0 13.2 8 20 8 20s8-6.8 8-12.2C16 3.5 12.42 0 8 0z" fill="#3b5afe" />
              <circle cx="8" cy="7.6" r="3" fill="#fff" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="ticker__l1 truncate">{item.name} <span className="font-normal text-muted">from</span> {item.city}</p>
            <p className="ticker__l2 truncate">{item.action}</p>
            <p className="ticker__l3">
              <span>{item.time}</span>
              <ScallopCheck />
              <span className="font-medium text-[#3b5afe]">Verified by Proof</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScallopCheck() {
  const points = [];
  const n = 24;
  for (let i = 0; i < n; i += 1) {
    const r = i % 2 === 0 ? 7 : 5.8;
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    points.push(`${(7 + r * Math.cos(a)).toFixed(2)},${(7 + r * Math.sin(a)).toFixed(2)}`);
  }
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <polygon points={points.join(' ')} fill="#3b5afe" />
      <path d="M4.2 7.2l1.9 1.9 3.7-3.9" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
