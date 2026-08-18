import { useTheme } from './hooks/useTheme.js';
import { bookCall } from './lib/integrations.js';
import BlueprintBg from './components/BlueprintBg.jsx';
import FlowDiagram from './components/FlowDiagram.jsx';
import BidMockup from './components/BidMockup.jsx';

const CTA = ({ size = 'lg' }) => (
  <button onClick={bookCall}
    className={'font-heading font-semibold bg-accent text-[#FFF8F2] text-left cursor-pointer transition-colors duration-150 hover:bg-accentdark ' +
      (size === 'lg' ? 'text-[17px] px-9 h-[52px]' : 'text-[15px] px-[22px] h-11')}>
    Book a call
  </button>
);

const Kicker = ({ children }) => (
  <div className="font-heading text-[13px] tracking-[0.12em] uppercase text-muted">{children}</div>
);
const H2 = ({ children }) => (
  <h2 className="m-0 font-heading font-semibold text-[clamp(26px,3vw,36px)] tracking-[-0.015em]">{children}</h2>
);
const Wrap = ({ children, className = '' }) => (
  <div className={'max-w-[1240px] mx-auto px-6 ' + className}>{children}</div>
);

const pillarIcons = {
  zero: (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="text-primary">
      <rect x="8" y="2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
      <rect x="5" y="5" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <rect x="2" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 15 H26 M9 8 V32" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  ),
  changed: (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="text-primary">
      <rect x="2" y="4" width="20" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="12" y="4" width="20" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="27" cy="10" r="4" fill="none" stroke="var(--accent)" strokeWidth="1.6" />
    </svg>
  ),
  print: (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="text-primary">
      <path d="M6 2 H28 V32 H6 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 8 H24 M10 12 H24 M10 16 H24 M10 20 H18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M10 25 H20" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  ),
  sheet: (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="text-primary">
      <rect x="2" y="4" width="30" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 11 H32 M12 4 V30 M22 4 V30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M25 20 l3 3 l5 -6" fill="none" stroke="var(--accent)" strokeWidth="1.8" />
    </svg>
  ),
};

const pillars = [
  { icon: 'zero', title: 'Never start from zero', body: 'Every new bid opens pre-filled from the closest job you have already priced.' },
  { icon: 'changed', title: 'Spot what changed', body: 'Revised drawings and site differences get flagged for you, not hunted page by page.' },
  { icon: 'print', title: 'Fine print, flagged', body: 'Scope-shifting notes like millwork by owner surface before they cost margin.' },
  { icon: 'sheet', title: 'Your spreadsheet, untouched', body: 'Drafts land in your own template, your columns, nothing re-typed.' },
];
const whoFor = [
  ['A', 'Retail general contractors between 3M and 50M in revenue'],
  ['B', 'Firms bidding brand prototypes and franchise rollouts across locations'],
  ['C', 'Estimating teams of one to six who live in Excel or Sheets'],
  ['D', 'Owners who still touch every bid and want their evenings back'],
];
const steps = [
  ['01', 'Load', 'One call and a file upload turn your past bids into your private Bid Memory.'],
  ['02', 'Forward', 'Send any new invitation to bid to your ProjectX address.'],
  ['03', 'Review', 'A draft price lands in your template within 24 hours. Adjust what is different, approve, send.'],
];
const different = [
  'Built only for retail construction, not a general tool stretched across every trade.',
  'It remembers your jobs. Other software starts every project from a blank page.',
  'Human verified, always. The machine does the counting, your estimator makes the call.',
];
const faqs = [
  ['How long does setup take?', 'One 60 minute call plus a secure upload of past bid files. No software training, no IT project.'],
  ['Is our bid data confidential?', 'Yes. Your Bid Memory is private to your firm, never shared or pooled, and we will sign your NDA.'],
  ['Can we trust AI with our numbers?', 'You should not trust it blindly, and you do not have to. Every draft is verified by a person before you see it, every number shows where it came from, and nothing goes out without your approval.'],
  ['Will our estimator have to change how he works?', 'No. Drafts arrive in his own master template with his columns and his unit costs. The blank page disappears, the judgment stays his.'],
  ['Our jobs are not all identical. Does this still help?', 'Yes. The Bid Memory matches repeat brands best, and it also recognizes repeat work like demo, framing, and paint across different buildings. The more you bid, the more it knows.'],
  ['Do we have to drop Bluebeam or our takeoff tools?', 'No. ProjectX sits after your takeoff tools and handles the pricing grind. Keep what works.'],
  ['What happens in the first 30 days?', 'Week one we load your history. Weeks two through four your live bids run through the Bid Memory, and we track one number together: hours per bid, before and after.'],
];

export default function App() {
  const { theme, isDark, toggle } = useTheme();
  const themeLabel = theme === 'auto' ? 'Theme: Auto' : isDark ? 'Theme: Dark' : 'Theme: Light';
  return (
    <div className="bg-paper text-ink min-h-screen font-body">
      <nav className="border-b border-linestrong relative z-[2]">
        <Wrap className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-[10px]">
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="text-accent">
              <rect x="1" y="1" width="20" height="20" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
              <path d="M1 8 H21 M8 8 V21" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="font-heading font-bold text-[16px] tracking-[0.06em]">PROJECTX</span>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggle} aria-label="Toggle dark mode" title={themeLabel}
              className="bg-transparent border border-linestrong text-muted w-11 h-11 flex items-center justify-center cursor-pointer transition-colors duration-150 hover:text-ink hover:border-secondary">
              {isDark ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
              )}
            </button>
            <CTA size="sm" />
          </div>
        </Wrap>
      </nav>

      <header className="border-b border-linestrong relative overflow-hidden">
        <BlueprintBg id="bp-hero" />
        <Wrap className="pt-[88px] pb-20 grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-16 items-start relative">
          <div className="flex flex-col items-start gap-7 max-w-[65ch]">
            <div className="flex items-center gap-3 font-heading font-semibold text-[13px] tracking-[0.12em] uppercase text-muted">
              <span className="w-8 h-px bg-accent inline-block" />
              Estimating, from memory
            </div>
            <h1 className="m-0 font-heading font-semibold text-[clamp(36px,4.6vw,58px)] leading-[1.08] tracking-[-0.025em] [text-wrap:pretty]">
              Price Bids in Hours, Not Days
            </h1>
            <p className="m-0 text-[21px] leading-[1.55] text-muted max-w-[50ch]">
              For retail contractors who bid the same brands again and again. Your past bids become your next draft, ready to review.
            </p>
            <CTA />
            <p className="m-0 text-[15px] text-muted flex items-center gap-[10px]">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="text-accent shrink-0">
                <path d="M2 14 L8 2 L14 14 Z M5 14 V9 H11 V14" fill="none" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              Built hands-on with a Texas retail general contractor.
            </p>
          </div>
          <BidMockup />
        </Wrap>
      </header>

      <section className="border-b border-linestrong">
        <Wrap className="py-20">
          <div className="mb-4"><Kicker>01 / Fit</Kicker></div>
          <div className="mb-9"><H2>Who it is for</H2></div>
          <ul className="m-0 p-0 list-none grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] border-t border-l border-linestrong">
            {whoFor.map(([num, text]) => (
              <li key={num} className="border-r border-b border-linestrong p-6 flex flex-col gap-3">
                <span className="font-heading text-[12px] text-secondary tabular-nums">{num}</span>
                <span className="text-[17px] leading-[1.5]">{text}</span>
              </li>
            ))}
          </ul>
        </Wrap>
      </section>

      <section className="border-b border-linestrong">
        <Wrap className="py-20 flex flex-col items-start gap-9">
          <div className="flex flex-col gap-4">
            <Kicker>02 / Outcomes</Kicker>
            <H2>The week, back in <span className="border-b-[3px] border-accent">hours</span></H2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 w-full">
            {pillars.map((p) => (
              <div key={p.title} className="bg-surface border border-linestrong px-6 py-7 flex flex-col gap-[14px]">
                {pillarIcons[p.icon]}
                <h3 className="m-0 font-heading font-semibold text-[19px]">{p.title}</h3>
                <p className="m-0 text-[16px] text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <CTA />
        </Wrap>
      </section>

      <section className="border-b border-linestrong">
        <Wrap className="py-20 flex flex-col items-start gap-11">
          <div className="flex flex-col gap-4">
            <Kicker>03 / Process</Kicker>
            <H2>How it works</H2>
          </div>
          <FlowDiagram />
          <ol className="m-0 p-0 list-none grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8 w-full">
            {steps.map(([num, name, body]) => (
              <li key={num} className="flex flex-col gap-[10px] border-t-2 border-primary pt-[18px]">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-bold text-[14px] text-secondary tabular-nums">{num}</span>
                  <span className="font-heading font-semibold text-[19px]">{name}</span>
                </div>
                <p className="m-0 text-[16.5px] text-muted max-w-[42ch]">{body}</p>
              </li>
            ))}
          </ol>
          <CTA />
        </Wrap>
      </section>

      <section className="border-b border-linestrong">
        <Wrap className="py-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
          <div className="flex flex-col gap-4">
            <Kicker>04 / Position</Kicker>
            <H2>Why it is different</H2>
          </div>
          <ul className="m-0 p-0 list-none flex flex-col max-w-[65ch]">
            {different.map((d, i) => (
              <li key={d} className={'text-[18.5px] py-5 border-t border-linestrong' + (i === different.length - 1 ? ' border-b' : '')}>{d}</li>
            ))}
          </ul>
        </Wrap>
      </section>

      <section className="border-b border-linestrong">
        <Wrap className="py-20 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12">
          <div className="flex flex-col gap-4 items-start">
            <Kicker>05 / Questions</Kicker>
            <H2>Questions, answered</H2>
          </div>
          <div className="border-t border-linestrong">
            {faqs.map(([q, a]) => (
              <details key={q} className="border-b border-linestrong">
                <summary className="cursor-pointer py-[18px] font-heading font-semibold text-[17.5px] flex justify-between gap-4 items-baseline min-h-11 box-border hover:text-deep">
                  {q}
                  <span aria-hidden="true" className="faq-x text-accent font-body font-normal text-[20px] shrink-0 inline-block transition-transform duration-200">+</span>
                </summary>
                <p className="m-0 pb-[22px] text-[16.5px] text-muted max-w-[60ch]">{a}</p>
              </details>
            ))}
          </div>
        </Wrap>
      </section>

      <section className="bg-band text-bandink relative overflow-hidden">
        <BlueprintBg id="bp-close" color="var(--band-ink)" opacity={0.06} />
        <Wrap className="py-[88px] flex flex-col gap-8 items-start relative">
          <p className="m-0 font-heading font-medium text-[clamp(21px,2.5vw,28px)] leading-[1.5] max-w-[56ch] [text-wrap:pretty]">
            In your first month, your bid history becomes an asset instead of a filing problem. Repeat-brand bids come back in hours. Revisions stop eating evenings. Fine print gets caught before it costs you. Your estimator reviews and decides, and the week goes back to customers, crews, and the next job.
          </p>
          <CTA />
        </Wrap>
      </section>

      <footer>
        <Wrap className="py-9 flex flex-wrap gap-x-8 gap-y-4 items-center justify-between text-[15px] text-muted">
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-baseline">
            <span className="font-heading font-bold text-ink tracking-[0.04em]">PROJECTX</span>
            <span>Repeat-brand bids, drafted from your own history.</span>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={toggle}
              className="bg-transparent border border-linestrong text-muted px-4 h-11 font-body text-[14px] cursor-pointer transition-colors duration-150 hover:text-ink hover:border-secondary">
              {themeLabel}
            </button>
            <span>© 2026 ProjectX</span>
          </div>
        </Wrap>
      </footer>
    </div>
  );
}
