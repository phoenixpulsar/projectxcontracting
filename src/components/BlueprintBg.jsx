export default function BlueprintBg({ id, color = 'var(--primary)', opacity = 0.055 }) {
  return (
    <svg aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" style={{ color, opacity }}>
      <defs>
        <pattern id={id + '-s'} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
        <pattern id={id + '-l'} width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M120 0H0V120" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={'url(#' + id + '-s)'} />
      <rect width="100%" height="100%" fill={'url(#' + id + '-l)'} />
    </svg>
  );
}
