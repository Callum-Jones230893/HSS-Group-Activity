'use client';

import {Link, usePathname} from '@/i18n/navigation';

export default function Butoooon() {
  const pathname = usePathname();

  return (
    <nav style={{display: 'flex', gap: 12, padding: 16}}>
      <Link href={pathname} locale="en">EN</Link>
      <Link href={pathname} locale="sv">SV</Link>
    </nav>
  );
}