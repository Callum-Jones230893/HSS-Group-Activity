// import { redirect } from "next/navigation";
// import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation'

export default async function Page() {
  // const locale = await getLocale()

  // redirect(`/${locale}/404`);
  notFound()
}
