'use client';
import { useEffect, useRef, useState } from 'react';

type Link = { href: string; label: string };

export default function MobileNav({ links, phone, tel }: { links: Link[]; phone: string; tel: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector('a')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 text-white transition-colors hover:bg-white/10"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
        </svg>
      </button>
      <div
        ref={menuRef}
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-white/10 bg-ink shadow-2xl shadow-black/40"
      >
        <nav aria-label="Mobile" className="container-page pb-5 pt-1">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-white/10">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[52px] items-center text-lg font-semibold text-white hover:text-signal-light"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={tel} className="btn btn-primary mt-5 w-full">
            Call {phone}
          </a>
        </nav>
      </div>
    </div>
  );
}
