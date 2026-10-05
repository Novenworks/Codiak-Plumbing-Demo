// Simplified locator map. City positions are projected from real coordinates;
// the I-10 line is approximate. Only Redlands, Yucaipa and Calimesa are named
// as the service area — the other towns are shown for orientation.
const CORE = [
  { name: 'Redlands', x: 208, y: 191, lx: -8, ly: -34, anchor: 'end' },
  { name: 'Yucaipa', x: 419, y: 231, lx: 15, ly: -8, anchor: 'start' },
  { name: 'Calimesa', x: 391, y: 285, lx: -15, ly: 26, anchor: 'end' },
] as const;

const NEARBY = [
  { name: 'San Bernardino', x: 46, y: 94, lx: -8, ly: -14, anchor: 'start' },
  { name: 'Highland', x: 169, y: 58, lx: 10, ly: 4, anchor: 'start' },
  { name: 'Mentone', x: 281, y: 164, lx: 10, ly: -6, anchor: 'start' },
  { name: 'Loma Linda', x: 89, y: 204, lx: -12, ly: 28, anchor: 'start' },
  { name: 'Beaumont', x: 519, y: 421, lx: -12, ly: 4, anchor: 'end' },
] as const;

export default function ServiceAreaMap() {
  return (
    <figure className="m-0">
      <svg
        viewBox="0 0 560 475"
        role="img"
        aria-labelledby="map-title map-desc"
        className="h-auto w-full border border-line bg-white"
      >
        <title id="map-title">Codiak Plumbing service area</title>
        <desc id="map-desc">
          Map showing Redlands, Yucaipa and Calimesa along Interstate 10, with nearby San Bernardino, Highland, Mentone, Loma Linda and Beaumont for reference.
        </desc>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#ece7df" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="560" height="475" fill="url(#grid)" />
        <path
          d="M0 164 C 80 170, 150 178, 212 183 C 270 190, 305 205, 333 228 C 360 250, 380 268, 393 292 C 410 322, 430 345, 454 365 C 480 388, 505 410, 560 448"
          fill="none"
          stroke="#121315"
          strokeOpacity="0.35"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <g transform="translate(300 203)">
          <rect x="-20" y="-13" width="40" height="24" rx="3" fill="#121315" />
          <text x="0" y="5" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">I-10</text>
        </g>
        {NEARBY.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="4" fill="#fff" stroke="#6b7076" strokeWidth="2" />
            <text x={c.x + c.lx} y={c.y + c.ly} textAnchor={c.anchor} fontSize="18" fill="#5b6066">
              {c.name}
            </text>
          </g>
        ))}
        {CORE.map((c) => (
          <g key={c.name}>
            <circle cx={c.x} cy={c.y} r="9" fill="#d7262e" stroke="#fff" strokeWidth="3" />
            <text x={c.x + c.lx} y={c.y + c.ly} textAnchor={c.anchor} fontSize="25" fontWeight="800" fill="#121315">
              {c.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full bg-signal" /> Redlands, Yucaipa & Calimesa
        </span>
        <span className="inline-flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-3 w-3 rounded-full border-2 border-[#6b7076] bg-white" /> Nearby — call to confirm
        </span>
      </figcaption>
    </figure>
  );
}
