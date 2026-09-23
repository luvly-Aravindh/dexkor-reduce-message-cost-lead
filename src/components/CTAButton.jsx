import { scrollToForm } from '../lib/scroll.js';

/**
 * Reusable conversion button. Every instance scrolls to #lead-form.
 * size: "sm" | "md" | "lg". glow: ambient halo for dark backgrounds.
 */
export default function CTAButton({ children, size = 'md', glow = false, full = false, className = '', onClick, type = 'button', disabled = false, ...rest }) {
  const classes = [
    'cta',
    size === 'sm' ? 'cta--sm' : '',
    size === 'lg' ? 'cta--lg' : '',
    glow ? 'cta--glow' : '',
    full ? 'w-full' : 'w-full sm:w-auto',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (type === 'button' && !e.defaultPrevented) scrollToForm(true);
  };

  return (
    <button type={type} className={classes} onClick={handleClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
