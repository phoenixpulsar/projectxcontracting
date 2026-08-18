const rows = [
  ['Selective demolition', '3,200', 'sqft', '$1.85', '$5,920'],
  ['Metal stud framing', '4,850', 'lf', '$6.40', '$31,040'],
  ['Drywall, hang and finish', '11,600', 'sqft', '$3.10', '$35,960'],
  ['ACT ceiling, 2x4 grid', '5,400', 'sqft', '$4.25', '$22,950'],
  ['Millwork install', '1', 'ls', '$48,500', '$48,500'],
  ['Paint, walls and ceiling', '14,200', 'sqft', '$1.15', '$16,330'],
];
const diffs = [['+', 'Sales floor 400 sqft larger'], ['\u2212', 'Landlord provides HVAC'], ['!', 'Note added: millwork by owner']];
const cell = 'py-[7px] border-b border-line';

export default function BidMockup() {
  return (
    <div className="flex flex-col min-w-0">
      <div className="font-heading text-[12px] tracking-[0.1em] uppercase text-muted px-[2px] pb-2 flex justify-between">
        <span>Output</span><span>Sheet 1 of 1</span>
      </div>
      <div className="bg-surface border border-linestrong">
        <div className="px-[18px] py-[14px] border-b border-linestrong flex items-center justify-between gap-3">
          <span className="font-heading font-semibold text-[14px]">Draft bid, ready for review</span>
          <span className="text-[12px] text-accent border border-accent px-2 py-[2px] tracking-[0.06em] uppercase">Draft</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[13.5px] tabular-nums min-w-[396px]">
            <thead>
              <tr className="text-muted text-left">
                <th className={cell + ' px-[14px] font-semibold'}>Line item</th>
                <th className={cell + ' px-2 font-semibold text-right'}>Qty</th>
                <th className={cell + ' px-2 font-semibold'}>Unit</th>
                <th className={cell + ' px-2 font-semibold text-right'}>Unit cost</th>
                <th className={cell + ' px-[14px] font-semibold text-right'}>Total</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([item, qty, unit, cost, total]) => (
                <tr key={item}>
                  <td className={cell + ' px-[14px]'}>{item}</td>
                  <td className={cell + ' px-2 text-right'}>{qty}</td>
                  <td className={cell + ' px-2 text-muted'}>{unit}</td>
                  <td className={cell + ' px-2 text-right'}>{cost}</td>
                  <td className={cell + ' px-[14px] text-right font-semibold'}>{total}</td>
                </tr>
              ))}
              <tr>
                <td className="px-[14px] py-[10px] font-semibold" colSpan="4">Draft total</td>
                <td className="px-[14px] py-[10px] text-right font-semibold text-deep">$412,380</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-surface border border-linestrong border-t-0">
        <div className="px-[18px] py-3 border-b border-line font-heading font-semibold text-[14px]">What changed from the last store</div>
        <ul className="m-0 px-[18px] pt-3 pb-4 list-none text-[14px] flex flex-col gap-2 text-muted">
          {diffs.map(([mark, text]) => (
            <li key={text} className="flex gap-[10px] items-baseline">
              <span aria-hidden="true" className="text-accent font-semibold shrink-0">{mark}</span>{text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
