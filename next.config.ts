import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['behold.pictures'],
  },
};

const withNextIntl = createNextIntlPlugin({
    experimental: {
      createMessagesDeclaration: './src/translations/sv.json'
  }
})
export default withNextIntl(nextConfig);
