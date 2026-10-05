'use client';
import { FormEvent, useRef, useState } from 'react';
import { BUSINESS, WORK_TYPES } from './content';

type Fields = { name: string; phone: string; email: string; city: string; work: string; details: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: '', phone: '', email: '', city: '', work: '', details: '' };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = 'Please enter your name.';
  const digits = f.phone.replace(/\D/g, '');
  if (!digits) e.phone = 'Please enter a phone number so we can reach you.';
  else if (digits.length < 10) e.phone = 'Please enter a 10-digit phone number, including area code.';
  if (f.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'That email address doesn’t look right.';
  if (!f.work) e.work = 'Please choose the type of work.';
  if (f.details.trim().length < 10) e.details = 'Please add a few words about the job.';
  return e;
}

function buildMessage(f: Fields) {
  const header = [
    `Name: ${f.name.trim()}`,
    `Phone: ${f.phone.trim()}`,
    f.email.trim() ? `Email: ${f.email.trim()}` : '',
    f.city ? `City: ${f.city}` : '',
    `Type of work: ${f.work}`,
  ].filter(Boolean);
  return `${header.join('\n')}\n\n${f.details.trim()}`;
}

export default function EstimateForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'opened'>('idle');
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const set = (key: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    setStatus('idle');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const subject = `Estimate request: ${fields.work}${fields.city ? ` in ${fields.city}` : ''}`;
    const href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(fields))}`;
    window.location.href = href;
    setStatus('opened');
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage(fields));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const fieldClass = (key: keyof Fields) =>
    `field ${errors[key] ? 'border-signal ring-1 ring-signal' : ''}`;

  const errorText = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`${key}-error`} className="mt-1.5 text-sm font-medium text-signal-dark">
        {errors[key]}
      </p>
    ) : null;

  const describedBy = (key: keyof Fields, hint?: string) =>
    [errors[key] ? `${key}-error` : '', hint ?? ''].filter(Boolean).join(' ') || undefined;

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby="estimate-title" className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" autoComplete="name" value={fields.name} onChange={set('name')}
            aria-invalid={!!errors.name} aria-describedby={describedBy('name')} className={fieldClass('name')} />
          {errorText('name')}
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={fields.phone} onChange={set('phone')}
            aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} className={fieldClass('phone')} />
          {errorText('phone')}
        </div>
        <div>
          <label htmlFor="email" className="label">Email <span className="font-normal text-muted">(optional)</span></label>
          <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={set('email')}
            aria-invalid={!!errors.email} aria-describedby={describedBy('email')} className={fieldClass('email')} />
          {errorText('email')}
        </div>
        <div>
          <label htmlFor="city" className="label">City <span className="font-normal text-muted">(optional)</span></label>
          <select id="city" name="city" value={fields.city} onChange={set('city')} className={fieldClass('city')}>
            <option value="">Choose a city</option>
            {BUSINESS.cities.map((c) => <option key={c}>{c}</option>)}
            <option value="Another nearby city">Another nearby city</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="work" className="label">Type of work</label>
        <select id="work" name="work" value={fields.work} onChange={set('work')}
          aria-invalid={!!errors.work} aria-describedby={describedBy('work')} className={fieldClass('work')}>
          <option value="">Choose one</option>
          {WORK_TYPES.map((w) => <option key={w}>{w}</option>)}
        </select>
        {errorText('work')}
      </div>
      <div>
        <label htmlFor="details" className="label">What’s going on?</label>
        <textarea id="details" name="details" rows={4} value={fields.details} onChange={set('details')}
          placeholder="For example: kitchen sink drains slowly and backs up into the other side."
          aria-invalid={!!errors.details} aria-describedby={describedBy('details')} className={`${fieldClass('details')} resize-y`} />
        {errorText('details')}
      </div>

      <p id="send-note" className="text-sm leading-relaxed text-muted">
        This opens your email app with your request filled in, addressed to {BUSINESS.email}. Nothing is sent until you press Send there.
      </p>
      <button type="submit" aria-describedby="send-note" className="btn btn-primary w-full sm:w-auto sm:justify-self-start">
        Email my request
      </button>

      <div aria-live="polite">
        {status === 'opened' && (
          <div className="border-l-4 border-ink bg-paper px-4 py-3 text-sm leading-relaxed">
            <p className="font-semibold">Your email app should now be open with your request.</p>
            <p className="mt-1 text-muted">
              Press Send there to deliver it. If nothing opened, copy your request and email it to{' '}
              <a className="link" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, or call{' '}
              <a className="link whitespace-nowrap" href={BUSINESS.tel}>{BUSINESS.phone}</a>.
            </p>
            <button type="button" onClick={copy} className="btn btn-ghost-dark mt-3 min-h-[40px] px-4 py-2 text-sm">
              {copied ? 'Copied' : 'Copy my request'}
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
