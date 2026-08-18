const flow = { animation: 'flowdash 1.8s linear infinite' };

export default function FlowDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 1020 244" className="w-full min-w-[660px] h-auto block text-ink" role="img"
           aria-label="Diagram: past bids load into your private Bid Memory, which drafts into your own spreadsheet template, and you approve">
        <g stroke="var(--line-strong)" strokeWidth="1" fill="none">
          <path d="M2 14 V2 H14 M1006 2 H1018 V14 M1018 230 V242 H1006 M14 242 H2 V230" />
        </g>
        <text x="24" y="22" fontFamily="Libre Franklin, sans-serif" fontSize="11" letterSpacing="2.5" fill="var(--secondary)">FIG. 1 / PRICING FLOW</text>
        <g stroke="var(--accent)" strokeWidth="1.2" fill="none">
          <path d="M340 32 V46 M980 32 V46" />
          <path d="M340 39 H556 M718 39 H980" />
          <path d="M350 35.5 l-9 3.5 l9 3.5 M970 35.5 l9 3.5 l-9 3.5" />
        </g>
        <text x="637" y="43" fontFamily="Libre Franklin, sans-serif" fontSize="12" fontWeight="600" letterSpacing="2" fill="var(--accent)" textAnchor="middle">HOURS, NOT DAYS</text>
        <g fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="56" y="82" width="108" height="80" opacity="0.3" />
          <rect x="48" y="90" width="108" height="80" opacity="0.55" />
          <rect x="40" y="98" width="108" height="80" />
          <path d="M52 116 H136 M52 132 H136 M52 148 H108" strokeWidth="1" opacity="0.45" />
          <path d="M40 98 l16 -16 M148 178 l-16 16" strokeWidth="0.7" opacity="0.35" />
        </g>
        <g stroke="var(--secondary)" fill="none">
          <path d="M172 130 H264" strokeWidth="1.4" strokeDasharray="4 8" style={flow} />
          <path d="M262 124 L270 130 L262 136" strokeWidth="1.4" />
        </g>
        <g fill="none">
          <circle cx="340" cy="130" r="62" stroke="var(--accent)" strokeWidth="1.3" strokeDasharray="3 9"
                  style={{ transformOrigin: '340px 130px', animation: 'spinring 90s linear infinite' }} />
          <circle cx="340" cy="130" r="50" stroke="currentColor" strokeWidth="1.4" />
          <path d="M314 112 H366 M306 130 H374 M314 148 H366 M322 92 V168 M340 84 V176 M358 92 V168" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="340" cy="130" r="3" fill="var(--accent)" />
        </g>
        <g stroke="var(--secondary)" fill="none">
          <path d="M412 130 H508" strokeWidth="1.4" strokeDasharray="4 8" style={flow} />
          <path d="M506 124 L514 130 L506 136" strokeWidth="1.4" />
        </g>
        <g fill="none" stroke="currentColor">
          <rect x="524" y="78" width="240" height="104" strokeWidth="1.4" />
          <path d="M524 102 H764" strokeWidth="1.2" />
          <path d="M604 78 V182 M684 78 V182" strokeWidth="1" opacity="0.4" />
          <path d="M524 128 H764 M524 154 H764" strokeWidth="1" opacity="0.4" />
        </g>
        <rect x="525" y="129" width="238" height="25" fill="var(--accent)" opacity="0.1" />
        <text x="534" y="96" fontFamily="Source Sans 3, sans-serif" fontSize="11" fill="var(--muted)">Line item</text>
        <text x="614" y="96" fontFamily="Source Sans 3, sans-serif" fontSize="11" fill="var(--muted)">Qty</text>
        <text x="694" y="96" fontFamily="Source Sans 3, sans-serif" fontSize="11" fill="var(--muted)">Total</text>
        <text x="756" y="146" fontFamily="Source Sans 3, sans-serif" fontSize="13" fontWeight="600" fill="var(--accent)" textAnchor="end">Δ</text>
        <g stroke="var(--secondary)" fill="none">
          <path d="M772 130 H886" strokeWidth="1.4" strokeDasharray="4 8" style={flow} />
          <path d="M884 124 L892 130 L884 136" strokeWidth="1.4" />
        </g>
        <g fill="none" stroke="var(--accent)" strokeWidth="1.6">
          <circle cx="930" cy="130" r="30" />
          <path d="M917 130 l9 9 l18 -20" />
        </g>
        <g stroke="var(--line-strong)" strokeWidth="1">
          <path d="M40 200 V206 M340 200 V206 M524 200 V206 M930 200 V206" />
        </g>
        <text x="40" y="222" fontFamily="Libre Franklin, sans-serif" fontSize="12" letterSpacing="1.8" fill="var(--muted)">PAST BIDS</text>
        <text x="340" y="222" fontFamily="Libre Franklin, sans-serif" fontSize="12" letterSpacing="1.8" fill="var(--muted)" textAnchor="middle">BID MEMORY</text>
        <text x="340" y="238" fontFamily="Source Sans 3, sans-serif" fontSize="12" fontStyle="italic" fill="var(--secondary)" textAnchor="middle">private to your firm</text>
        <text x="524" y="222" fontFamily="Libre Franklin, sans-serif" fontSize="12" letterSpacing="1.8" fill="var(--muted)">DRAFT IN YOUR TEMPLATE</text>
        <text x="960" y="222" fontFamily="Libre Franklin, sans-serif" fontSize="12" letterSpacing="1.8" fill="var(--muted)" textAnchor="end">YOU APPROVE</text>
      </svg>
    </div>
  );
}
