/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"], // Add other language codes if needed
    defaultLocale: "en", // Set the default locale to English
  },
};

module.exports = nextConfig;
