import MobileNav from './MobileNav';
import Logo from './Logo';
import EstimateForm from './EstimateForm';
import ServiceAreaMap from './ServiceAreaMap';
import { BUSINESS, NAV, PROJECTS, REPAIRS, REVIEWS } from './content';
import { ArrowIcon, ClockIcon, ExternalIcon, MailIcon, PhoneIcon, ShieldIcon, UserIcon } from './icons';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: BUSINESS.name,
  telephone: '+1-909-435-7865',
  email: BUSINESS.email,
  url: 'https://www.redlands-plumbing.com/',
  address: { '@type': 'PostalAddress', addressLocality: 'Yucaipa', addressRegion: 'CA', addressCountry: 'US' },
  areaServed: BUSINESS.cities.map((c) => ({ '@type': 'City', name: `${c}, CA` })),
  founder: { '@type': 'Person', name: BUSINESS.owner },
};

function CallButton({ className = '', label = `Call ${BUSINESS.phone}` }: { className?: string; label?: string }) {
  return (
    <a href={BUSINESS.tel} className={`btn btn-primary ${className}`}>
      <PhoneIcon />
      {label}
    </a>
  );
}

function Wordmark() {
  return (
    <span className="leading-none">
      <span className="display block text-[1.35rem] text-white">Codiak Plumbing</span>
      <span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-white/70">
        Lic. #{BUSINESS.license}
      </span>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-ink">
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink text-white">
        <div className="container-page relative flex h-[72px] items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 rounded-sm">
            <Logo />
            <Wordmark />
          </a>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9375rem] font-semibold">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="py-2 text-white/85 transition-colors hover:text-white hover:underline hover:decoration-signal hover:decoration-2 hover:underline-offset-8">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <a href={BUSINESS.tel} className="btn btn-primary hidden min-h-[44px] px-4 py-2 text-[0.9375rem] sm:inline-flex">
              <PhoneIcon className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <MobileNav links={NAV} phone={BUSINESS.phone} tel={BUSINESS.tel} />
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink text-white">
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1.5 bg-signal" />
          <div className="container-page grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-24">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-signal-light">
                <span aria-hidden="true" className="h-0.5 w-8 bg-signal" />
                Redlands · Yucaipa · Calimesa
              </p>
              <h1 id="hero-title" className="mt-6 text-[clamp(2.9rem,7.4vw,5.75rem)] leading-[0.94]">
                <span className="block">Plumbing problem?</span>
                <span className="block text-signal-bright">Let’s get it fixed.</span>
              </h1>
              <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-white/80 sm:text-xl">
                We’re a licensed, owner-operated plumbing company based in Yucaipa. Call us for leaks, clogs and
                emergencies at any hour, or request an estimate for a repipe, remodel or new build.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <CallButton className="min-h-[60px] px-7 text-lg" />
                <a href="#estimate" className="group min-h-[44px] py-2 font-semibold text-white">
                  <span className="underline decoration-white/40 decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-signal-light">
                    Planning a project? Request an{' '}
                    <span className="whitespace-nowrap">
                      estimate
                      <ArrowIcon className="ml-1.5 inline h-4 w-4 align-[-0.15em] transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.9375rem] font-semibold text-white/80 sm:hidden">
                <li className="flex items-center gap-2"><ShieldIcon className="h-4 w-4 text-signal-light" />Licensed, CSLB #{BUSINESS.license}</li>
                <li className="flex items-center gap-2"><ClockIcon className="h-4 w-4 text-signal-light" />Emergency service 24/7</li>
              </ul>
            </div>

            <aside aria-label="About Codiak Plumbing" className="lg:col-span-5 lg:pt-3">
              <div className="border border-white/15 bg-ink-2">
                <p className="eyebrow border-b border-white/10 px-6 py-4 text-white/70">Who you’re calling</p>
                <ul className="divide-y divide-white/10">
                  <li className="flex gap-4 px-6 py-5">
                    <ShieldIcon className="mt-0.5 h-6 w-6 shrink-0 text-signal-light" />
                    <div>
                      <p className="font-bold">Licensed plumbing contractor</p>
                      <p className="mt-1 text-white/75">
                        {BUSINESS.licenseClass}, CSLB #{BUSINESS.license}.{' '}
                        <a href={BUSINESS.licenseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                          Check our license<ExternalIcon /><span className="sr-only"> (opens the CSLB website in a new tab)</span>
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 px-6 py-5">
                    <UserIcon className="mt-0.5 h-6 w-6 shrink-0 text-signal-light" />
                    <div>
                      <p className="font-bold">Owner-operated</p>
                      <p className="mt-1 text-white/75">{BUSINESS.owner} owns and runs Codiak Plumbing out of Yucaipa.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 px-6 py-5">
                    <ClockIcon className="mt-0.5 h-6 w-6 shrink-0 text-signal-light" />
                    <div>
                      <p className="font-bold">Emergency service 24/7</p>
                      <p className="mt-1 text-white/75">Burst pipe or major leak? Call any time, day or night.</p>
                    </div>
                  </li>
                </ul>
                <figure className="border-t border-white/10 bg-black/25 px-6 py-5">
                  <blockquote className="text-[1.0625rem] leading-relaxed text-white/90">“{REVIEWS.hero.text}”</blockquote>
                  <figcaption className="mt-2 text-sm text-white/65">{REVIEWS.hero.name} · Yelp review</figcaption>
                </figure>
              </div>
            </aside>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="py-20 sm:py-24">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="eyebrow text-signal-dark">Services</p>
              <h2 id="services-title" className="mt-3 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02]">
                Something broke, or something’s planned?
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                We handle everyday repairs and emergencies as well as larger projects for homes and commercial buildings.
                Find what matches your situation below.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
              <article aria-labelledby="repairs-title" className="border-t-[6px] border-signal bg-white p-6 shadow-[0_1px_0_#d8d1c5] sm:p-9">
                <p className="eyebrow text-signal-dark">Something’s wrong right now</p>
                <h3 id="repairs-title" className="mt-2 text-3xl sm:text-[2.1rem]">Repairs &amp; emergencies</h3>
                <ul className="mt-7 divide-y divide-line border-y border-line">
                  {REPAIRS.map((r) => (
                    <li key={r.title} className="py-5">
                      <h4 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-bold">
                        {r.title}
                        {r.urgent && (
                          <span className="rounded-sm bg-signal px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                            Call now
                          </span>
                        )}
                      </h4>
                      <p className="mt-1.5 text-muted">{r.body}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <CallButton />
                  <p className="text-sm text-muted">Emergency service available 24/7.</p>
                </div>
              </article>

              <article aria-labelledby="projects-title" className="bg-ink p-6 text-white sm:p-9">
                <p className="eyebrow text-signal-light">Planning ahead</p>
                <h3 id="projects-title" className="mt-2 text-3xl sm:text-[2.1rem]">Projects &amp; installations</h3>
                <ul className="mt-7 divide-y divide-white/10 border-y border-white/10">
                  {PROJECTS.map((p) => (
                    <li key={p.title} className="py-4">
                      <h4 className="text-lg font-bold">{p.title}</h4>
                      <p className="mt-1 text-white/75">{p.body}</p>
                    </li>
                  ))}
                </ul>
                <a href="#estimate" className="btn mt-8 w-full bg-white text-ink hover:bg-paper-2 sm:w-auto">
                  Request an estimate
                  <ArrowIcon />
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="how-it-works" aria-labelledby="process-title" className="border-y border-line bg-white py-20 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-signal-dark">How it works</p>
              <h2 id="process-title" className="mt-3 text-[clamp(2.1rem,4.6vw,3.25rem)] leading-[1.02]">
                What happens after you contact us
              </h2>
            </div>
            <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:col-span-8">
              {[
                {
                  t: 'Call or send a request',
                  b: (
                    <>
                      Call <a className="link whitespace-nowrap" href={BUSINESS.tel}>{BUSINESS.phone}</a> for anything urgent. For planned work,
                      send a request with a few details about the job.
                    </>
                  ),
                },
                { t: 'We take a look', b: 'We come out, find the cause of the problem and give you a quote for the work.' },
                { t: 'We do the work', b: 'Once you give the go-ahead, we complete the repair or installation.' },
              ].map((s, i) => (
                <li key={s.t} className="relative border-t-2 border-ink pt-6">
                  <span aria-hidden="true" className="display block text-6xl leading-none text-signal">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-[1.4rem] leading-tight">{s.t}</h3>
                  <p className="mt-2 text-muted">{s.b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="py-20 sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-signal-dark">About us</p>
              <h2 id="about-title" className="mt-3 text-[clamp(2.1rem,4.6vw,3.5rem)] leading-[1.02]">
                A local company, run by the contractor whose name is on the license.
              </h2>
              <div className="mt-7 max-w-2xl space-y-5 text-lg leading-relaxed">
                <p>
                  Codiak Plumbing is owned and operated by {BUSINESS.owner}, a licensed plumbing contractor based in Yucaipa.
                  We work on homes and commercial buildings across Redlands, Yucaipa, Calimesa and the surrounding cities.
                </p>
                <p className="text-muted">
                  When you call, you’re dealing directly with the company that does the work, and our customers often
                  mention Coty and the crew by name in their reviews.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <dl className="border-2 border-ink bg-white">
                {[
                  ['Owner', BUSINESS.owner],
                  ['License', `CSLB #${BUSINESS.license}`],
                  ['Classification', BUSINESS.licenseClass],
                  ['Based in', 'Yucaipa, California'],
                  ['Emergency service', '24 hours a day, 7 days a week'],
                  ['Serving', 'Redlands, Yucaipa, Calimesa and nearby cities'],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[10rem_1fr]">
                    <dt className="text-sm font-bold uppercase tracking-wider text-muted">{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <a href={BUSINESS.licenseUrl} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-flex items-center gap-1.5 text-[0.9375rem]">
                Verify our license with the CSLB<ExternalIcon /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" aria-labelledby="reviews-title" className="bg-paper-2 py-20 sm:py-24">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-signal-dark">Reviews</p>
                <h2 id="reviews-title" className="mt-3 text-[clamp(2.1rem,4.6vw,3.25rem)] leading-[1.02]">
                  What our customers say
                </h2>
              </div>
              <a href={BUSINESS.yelpUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                Read more reviews on Yelp<ExternalIcon /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
              <figure className="relative lg:col-span-7">
                <span aria-hidden="true" className="display absolute -left-1 -top-10 select-none text-[9rem] leading-none text-signal sm:-top-12 sm:text-[11rem]">
                  “
                </span>
                <blockquote className="display relative pt-14 text-[clamp(1.85rem,3.6vw,2.9rem)] leading-[1.12]">
                  {REVIEWS.featured.text}
                </blockquote>
                <figcaption className="mt-6 font-semibold">
                  {REVIEWS.featured.name} <span className="font-normal text-muted">· Yelp review</span>
                </figcaption>
              </figure>
              <div className="grid content-start gap-8 border-t-2 border-ink pt-8 lg:col-span-5 lg:border-l-2 lg:border-t-0 lg:pl-10 lg:pt-2">
                {REVIEWS.more.map((q) => (
                  <figure key={q.name}>
                    <blockquote className="text-xl leading-relaxed">“{q.text}”</blockquote>
                    <figcaption className="mt-3 font-semibold">
                      {q.name} <span className="font-normal text-muted">· Yelp review</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section id="service-area" aria-labelledby="area-title" className="py-20 sm:py-24">
          <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-signal-dark">Service area</p>
              <h2 id="area-title" className="mt-3 text-[clamp(2.1rem,4.6vw,3.25rem)] leading-[1.02]">
                Based in Yucaipa, working across the Redlands area
              </h2>
              <p className="mt-6 text-lg leading-relaxed">
                We serve homes and businesses in Redlands, Yucaipa, Calimesa and the surrounding cities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Not sure whether we cover your address? Call{' '}
                <a href={BUSINESS.tel} className="link whitespace-nowrap text-ink">{BUSINESS.phone}</a> and ask.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {BUSINESS.cities.map((c) => (
                  <li key={c} className="rounded-sm border-2 border-ink px-3 py-1.5 font-bold">{c}</li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <ServiceAreaMap />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-title" className="bg-ink py-20 text-white sm:py-24">
          <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-signal-light">Contact</p>
              <h2 id="contact-title" className="mt-3 text-[clamp(2.3rem,5vw,3.75rem)] leading-[1]">
                Tell us what’s going on.
              </h2>
              <div className="mt-10 border-l-4 border-signal pl-6">
                <h3 className="text-2xl">Need a plumber now?</h3>
                <p className="mt-2 text-white/75">Call us. Emergency service is available 24 hours a day, 7 days a week.</p>
                <a href={BUSINESS.tel} className="display mt-4 inline-flex min-h-[48px] items-center gap-3 text-[clamp(2rem,4.4vw,2.75rem)] text-white transition-colors hover:text-signal-light">
                  <PhoneIcon className="h-8 w-8 text-signal-light" />
                  <span><span className="sr-only">Call </span>{BUSINESS.phone}</span>
                </a>
              </div>
              <div className="mt-10 border-l-4 border-white/20 pl-6">
                <h3 className="text-2xl">Prefer email?</h3>
                <p className="mt-2 text-white/75">Send details and photos of the problem, and we’ll get back to you.</p>
                <a href={`mailto:${BUSINESS.email}`} className="mt-3 inline-flex min-h-[44px] items-center gap-2.5 break-all font-semibold underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white">
                  <MailIcon className="h-5 w-5 shrink-0 text-signal-light" />
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div id="estimate" className="bg-white p-6 text-ink sm:p-9 lg:col-span-7">
              <h3 id="estimate-title" className="text-3xl">Request an estimate</h3>
              <p className="mt-2 text-muted">
                For repipes, remodels, new construction and other planned work. For a leak or anything urgent, please call.
              </p>
              <div className="mt-7">
                <EstimateForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink-3 pb-[calc(84px+env(safe-area-inset-bottom))] text-white/75 lg:pb-0">
        <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo />
              <Wordmark />
            </div>
            <p className="mt-5 max-w-sm">
              Licensed, owner-operated plumbing for homes and businesses in Redlands, Yucaipa, Calimesa and nearby cities.
            </p>
          </div>
          <div>
            <h2 className="eyebrow text-white">Contact</h2>
            <ul className="mt-4 space-y-2">
              <li><a href={BUSINESS.tel} className="inline-flex min-h-[40px] items-center font-semibold text-white hover:underline">{BUSINESS.phone}</a></li>
              <li><a href={`mailto:${BUSINESS.email}`} className="inline-flex min-h-[40px] items-center break-all hover:text-white hover:underline">{BUSINESS.email}</a></li>
              <li>Emergency service 24/7</li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow text-white">License</h2>
            <ul className="mt-4 space-y-2">
              <li>{BUSINESS.licenseClass}</li>
              <li>
                <a href={BUSINESS.licenseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[40px] items-center gap-1 hover:text-white hover:underline">
                  CSLB #{BUSINESS.license}<ExternalIcon /><span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>Based in Yucaipa, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="container-page py-6 text-sm text-white/60">© {new Date().getFullYear()} {BUSINESS.legalName}</p>
        </div>
      </footer>

      {/* Mobile contact bar */}
      <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-[1.4fr_1fr] gap-3">
          <a href={BUSINESS.tel} className="btn btn-primary min-h-[48px] px-3">
            <PhoneIcon />
            Call now
          </a>
          <a href="#estimate" className="btn btn-ghost min-h-[48px] px-3">
            Estimate
          </a>
        </div>
      </nav>
    </>
  );
}
