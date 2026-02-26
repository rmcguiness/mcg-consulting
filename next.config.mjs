/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@react-pdf/renderer"],
  webpack: (config) => {
    // Alias canvas to false for react-pdf (not needed in browser/node PDF generation)
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;

