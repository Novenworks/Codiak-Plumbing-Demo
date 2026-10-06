export const metadata = { title: 'Outreach | Codiak Plumbing Demo', robots: { index: false, follow: false } };
export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 leading-relaxed">
      <p className="text-xs uppercase tracking-widest text-signal-dark">Operator only · noindex</p>
      <h1 className="mt-2 text-3xl">Codiak Plumbing outreach brief</h1>
      <ul className="mt-6 list-disc pl-5">
        <li>Original: https://www.redlands-plumbing.com/</li>
        <li>Demo: https://codiak-plumbing-demo.vercel.app</li>
        <li>GitHub: https://github.com/Novenworks/Codiak-Plumbing-Demo</li>
        <li>Phone: (909) 435-7865</li>
        <li>Owner: Coty Carr</li>
        <li>Agency: none found (WordPress Repairer theme)</li>
      </ul>
      <h2 className="mt-8 text-xl">Pitch hinge</h2>
      <p>Portfolio /portfolio/tankless-water-heater/ is still Lorem Ipsum.</p>

      <section className="mt-10">
        <h2 className="text-xl">Before / after</h2>
        <p className="mt-2 text-sm text-black/60">Before captured 2026-09-27 (live redlands-plumbing.com). After captured 2026-10-05 (this demo).</p>
        <figure className="mt-5">
          <img src="/outreach/before-desktop.jpg" alt="Before: current redlands-plumbing.com homepage, desktop 1440x900" width={1440} height={900} className="w-full border border-black/10" />
          <figcaption className="mt-2 text-sm text-black/60">Before — redlands-plumbing.com, desktop 1440×900</figcaption>
        </figure>
        <div className="mt-8 grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-start">
          <figure>
            <img src="/outreach/after-desktop.jpg" alt="After: Codiak Plumbing demo homepage, desktop 1440x900" width={1440} height={900} className="w-full border border-black/10" />
            <figcaption className="mt-2 text-sm text-black/60">After — demo, desktop 1440×900</figcaption>
          </figure>
          <figure>
            <img src="/outreach/after-mobile.jpg" alt="After: Codiak Plumbing demo homepage, mobile 390x844" width={390} height={844} className="w-full border border-black/10" />
            <figcaption className="mt-2 text-sm text-black/60">After — demo, mobile 390×844</figcaption>
          </figure>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl">Subject lines</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Coty, I made something for Codiak Plumbing</li>
          <li>had an idea for Codiak Plumbing</li>
          <li>quick thing I built for Codiak Plumbing</li>
        </ol>
        <h2 className="mt-8 text-xl">Cold email</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

I came across Codiak Plumbing and ended up spending a little time on the site.

You already have the part that matters, real work and a business people can trust.

I had an idea for how I'd present it, so I built a version instead of sending you a list of suggestions.

https://codiak-plumbing-demo.vercel.app

Thought you might be curious to see it.

If you like the direction, I can show you what I changed.

Vincent
Novenworks`}</pre>
        <h2 className="mt-8 text-xl">Follow-up</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

Just bumping this once in case it got buried. I made that Codiak Plumbing homepage concept and figured you might at least be curious to see how it came out.

https://codiak-plumbing-demo.vercel.app

All good if now isn't the time. Just wanted to make sure you saw it.

Vincent`}</pre>
      </section>
</main>
  );
}
