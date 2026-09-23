export const metadata = { title: 'Outreach | Codiak Plumbing Demo', robots: { index: false, follow: false } };
export default function OutreachPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 leading-relaxed">
      <p className="text-xs uppercase tracking-widest text-rust">Operator only · noindex</p>
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
        <h2 className="text-xl">Subject lines</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>Coty, I made something for Codiak Plumbing</li>
          <li>Had an idea for Codiak Plumbing</li>
          <li>Tried something with the Codiak Plumbing site</li>
        </ol>
        <h2 className="mt-8 text-xl">Cold email</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

I came across Codiak Plumbing and ended up spending some time on the site.

You already have real work to show. I had an idea for giving the projects and proof more room, so I built a version.

https://codiak-plumbing-demo.vercel.app

Thought you might be curious to see it. If the direction clicks, I can show you what I changed.

Vincent
Novenworks`}</pre>
        <h2 className="mt-8 text-xl">Follow-up</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

Just bumping this once in case it got buried. I put together that Codiak Plumbing homepage idea and wanted to make sure you saw it.

https://codiak-plumbing-demo.vercel.app

No pressure if the timing is bad. Figured it was worth sending.

Vincent`}</pre>
      </section>
</main>
  );
}
