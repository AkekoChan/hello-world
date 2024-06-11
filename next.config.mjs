/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/generate-picture": ["./public/uploads/**/*"],
    },
  },
};

export default nextConfig;
