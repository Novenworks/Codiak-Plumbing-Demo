import MobileNav from './MobileNav';

const PHONE = '(909) 435-7865';
const TEL = 'tel:+19094357865';
const EMAIL = 'mailto:info@Redlands-Plumbing.com';
const LOGO = 'https://www.redlands-plumbing.com/wp-content/uploads/2021/11/Screen-Shot-2021-11-19-at-10.23.41-PM.png';
const CREW = 'https://www.redlands-plumbing.com/wp-content/uploads/2021/03/Plumber-img.png';

const services = [
  { title: 'Drains & hydro jetting', body: 'Restore flow. Camera inspection when the line needs a look before we open anything up.' },
  { title: 'Repipe', body: 'Replace aging lines with a plan that matches the house.' },
  { title: 'Remodel plumbing', body: 'Rough-in and finish work for kitchens, baths, and additions.' },
  { title: 'New construction', body: 'Code-aware plumbing for new builds in Redlands and nearby communities.' },
  { title: 'Repairs & fixtures', body: 'Leaky faucets, valves, water pressure, and everyday calls.' },
  { title: 'Commercial', body: 'Non-residential service for shops and buildings.' },
];

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#service-area', label: 'Service Area' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const quotes = [
  { name: 'Mrs. H.', text: 'Great service. Reasonable pricing. These guys are honest and do not try to upsell you.' },
  { name: 'Jim H.', text: 'Highly recommended as always. Thank you Cody, Ian and crew.' },
  { name: 'Shane L.', text: 'Problem on a Friday night. Appointment the next morning. Came out when they said they would.' },
  { name: 'Matt D.', text: 'Cody and his team came out the same day and gave me a quote. Fixed it the next day.' },
];

export default function HomePage() {
  return (
    <div>
      <header className="sticky top-0 z-40 bg-ink text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO} alt="Codiak Plumbing" className="h-12 w-auto" />
            <span className="hidden text-sm sm:block">Codiak Plumbing</span>
          </a>
          <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={TEL} className="rounded bg-rust px-3 py-2 text-sm font-semibold">{PHONE}</a>
            <MobileNav links={navLinks} />
          </div>
        </div>
      </header>
      <main id="top">
        <section className="bg-steel text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-red-300">Redlands · Yucaipa · Calimesa</p>
              <h1 className="text-4xl leading-tight md:text-5xl">A local plumbing team for repairs, repipes, remodels and more</h1>
              <p className="mt-5 max-w-xl text-lg text-white/80">Codiak Plumbing serves Redlands and nearby communities with residential and commercial plumbing, from drains and hydro jetting to repipes and new construction.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded bg-rust px-5 py-3 text-sm font-semibold">Request an Estimate</a>
                <a href={TEL} className="rounded border border-white/30 px-5 py-3 text-sm">Call {PHONE}</a>
              </div>
              <p className="mt-6 text-sm text-white/60">Owner/operator Coty Carr · 24/7 emergency service · CSLB #1065137</p>
            </div>
            <img src={CREW} alt="Plumber installing a kitchen faucet" className="h-[420px] w-full object-cover object-top" />
          </div>
        </section>
        <section className="border-y bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 text-sm sm:grid-cols-3">
            <p><strong>Owner-operated.</strong> Coty Carr runs the company from Yucaipa.</p>
            <p><strong>Licensed plumbing.</strong> CSLB #1065137, C-36.</p>
            <p><strong>Emergency coverage.</strong> Emergency service available 24/7.</p>
          </div>
        </section>
        <section id="services" className="mx-auto max-w-6xl px-4 py-20">
          <p className="text-xs uppercase tracking-widest text-rust">What we take on</p>
          <h2 className="mt-2 text-3xl">Work grouped the way homeowners decide</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="border border-black/10 bg-white p-6">
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-black/70">{s.body}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="service-area" className="bg-ink py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs uppercase tracking-widest text-red-300">Where we work</p>
            <h2 className="mt-2 text-3xl">Serving Redlands, Yucaipa, Calimesa and surrounding cities</h2>
            <p className="mt-4 max-w-2xl text-white/70">Based in Yucaipa and working across the Redlands area for homes and commercial buildings. Emergency service is available 24/7 — call <a href={TEL} className="underline underline-offset-4">{PHONE}</a> and tell us what is going on.</p>
          </div>
        </section>
        <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">Owner-operated plumbing with more range than emergency calls</h2>
            <p className="mt-4 text-black/75">Codiak Plumbing Services is a California corporation at 33879 Nebraska Street, Yucaipa. Coty Carr is the owner/operator.</p>
          </div>
          <ol className="space-y-4 border border-black/10 bg-white p-6">
            <li>01 Call or request an estimate.</li>
            <li>02 Diagnose on site. Quote before work proceeds.</li>
            <li>03 Complete the repair or install.</li>
          </ol>
        </section>
        <section id="reviews" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl">What customers have said</h2>
            <p className="mt-3 text-black/60">Reviews from Yelp.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {quotes.map((q) => (
                <blockquote key={q.name} className="border border-black/10 p-6">
                  <p>{q.text}</p>
                  <footer className="mt-4 text-sm text-black/60">{q.name} · Yelp review</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="bg-steel py-20 text-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4">
            <div>
              <h2 className="text-3xl">Ready for an estimate?</h2>
              <p className="mt-3 text-white/70">Call or email Codiak Plumbing to discuss your project.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={TEL} className="rounded bg-rust px-5 py-3 font-semibold">{PHONE}</a>
              <a href={EMAIL} className="rounded border border-white/30 px-5 py-3">info@Redlands-Plumbing.com</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-ink px-4 py-8 text-sm text-white/60">
        <p>Codiak Plumbing · Redlands / Yucaipa / Calimesa</p>
      </footer>
    </div>
  );
}
