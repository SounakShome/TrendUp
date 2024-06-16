import daisyui from 'daisyui';
/** @type {import('next').NextConfig} */
const nextConfig = {
  daisyui: {
    themes: ["light"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
