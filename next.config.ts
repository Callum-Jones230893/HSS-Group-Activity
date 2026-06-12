import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['behold.pictures'],
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

const withNextIntl = createNextIntlPlugin({
    experimental: {
      createMessagesDeclaration: './src/translations/sv.json'
  }
})
export default withNextIntl(nextConfig);
