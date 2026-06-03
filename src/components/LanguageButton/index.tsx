"use client";

import { Link, usePathname } from "@/i18n/navigation";

type LocaleProps = {
  locale: string;
  content: string;
};

export default function LanguageButton() {
  const pathname = usePathname();

  const localeOptions: LocaleProps[] = [
    { locale: "en", content: "EN" },
    { locale: "sv", content: "SV" },
  ];

  return (
    <nav style={{ display: "flex", gap: 12, padding: 16 }}>
      {/* Link/Path helpers keep the current path but swap the locale */}
      <Link href={pathname} locale="en">
        EN
      </Link>
    </nav>
  );
}
