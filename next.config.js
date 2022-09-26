/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    localeDetection: false,
  },
  images: {
    domains: ["portfolio-nahue-rodcast.vercel.app"],
  },
};

module.exports = nextConfig;
