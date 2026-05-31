const base = 'w-10 h-10 text-slate-700';

/** Line-style icons sized for 64px category tiles */
export function IconMensCasual({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 18 L24 12 L34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20h24l-1 18H13L12 20z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 28h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

export function IconWomensEthnic({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 14h12l2 4 6 22H10l6-22 2-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M20 10c2-2 6-2 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFormal({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 12h12l4 8v20H14V20l4-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 12v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 20l-2 6h4l-2-6z" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

export function IconDresses({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 12h8l6 6-4 22H18l-4-22 6-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 12c0-2 4-2 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconFootwear({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M10 28c8-6 20-6 28 0v4c-8 6-20 6-28 0v-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 28l6-4M22 26l6-2M32 28l4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      <ellipse cx="24" cy="34" rx="10" ry="3" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

export function IconJackets({ className = base }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 14h12l4 4v20H14V18l4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M24 14v26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M17 20h14M17 24h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

const INDEXED = [IconMensCasual, IconWomensEthnic, IconFormal, IconDresses, IconFootwear, IconJackets];

export function CategoryIcon({ index }) {
  const Cmp = INDEXED[index] ?? IconMensCasual;
  return <Cmp />;
}
