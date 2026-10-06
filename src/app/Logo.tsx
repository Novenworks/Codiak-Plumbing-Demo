'use client';
import { useEffect, useRef, useState } from 'react';
import { BUSINESS } from './content';

// The logo is hotlinked from the business's own site (see docs/ASSET-PLAN.md).
// If it fails to load, the text wordmark beside it still identifies the business.
export default function Logo({ className = 'h-11 w-[60px]' }: { className?: string }) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // Catch errors that happened before hydration attached onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return null;
  return (
    <img
      ref={ref}
      src={BUSINESS.logo}
      alt=""
      width={60}
      height={44}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${className} shrink-0 object-contain`}
    />
  );
}
