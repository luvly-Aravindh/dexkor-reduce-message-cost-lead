/**
 * DexKor lockup. Replace the mark + wordmark below with the official SVG when
 * it is dropped into src/assets (keep the `light` prop so the header can invert it).
 */
export default function Logo({ light = true, className = '' }) {
  const text = light ? 'text-white' : 'text-navy-900';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="DexKor">
      <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
        <rect width="64" height="64" rx="14" fill={light ? '#FFFFFF' : '#0E2149'} />
        <path d="M20 18h13c9.4 0 15 5.6 15 14s-5.6 14-15 14H20V18zm8 7v14h5c4.6 0 7-2.6 7-7s-2.4-7-7-7h-5z" fill={light ? '#0E2149' : '#FFFFFF'} />
        <circle cx="46" cy="18" r="6" fill="#2F6BFF" />
      </svg>
      <span className={`font-display text-[1.35rem] font-extrabold tracking-[0.12em] ${text}`}>DEXKOR</span>
    </span>
  );
}
