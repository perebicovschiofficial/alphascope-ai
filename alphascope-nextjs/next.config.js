/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru', 'zh', 'es', 'ar', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
