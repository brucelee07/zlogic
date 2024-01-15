/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "vip2.loli.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "sm.ms",
        pathname: "**",
      },
    ],
  },
};
