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
        <ol className="mt-3 list-decimal space-y-2 pl-5"><li>Coty, I made something for Codiak Plumbing</li><li>Had an idea for Codiak Plumbing</li><li>Coty, I tried something with the Codiak Plumbing site</li></ol>
        <h2 className="mt-8 text-xl">Cold email</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

I found Codiak Plumbing and got curious enough to spend some time on the site.

There is already a lot there to work with, especially the actual field work and the local reputation behind it. I ended up building a homepage concept around that.

https://codiak-plumbing-demo.vercel.app

Not trying to turn this into a big pitch. I just thought it was worth making and showing you.

Vincent
Novenworks`}</pre>
        <h2 className="mt-8 text-xl">Follow-up</h2>
        <pre className="mt-3 whitespace-pre-wrap">{`Hi Coty,

Circling back once on this. I made that homepage concept for Codiak Plumbing and figured it was worth one more send.

https://codiak-plumbing-demo.vercel.app

If it is not on your radar right now, all good.

Vincent`}</pre>
      </section>
</main>
  );
}
