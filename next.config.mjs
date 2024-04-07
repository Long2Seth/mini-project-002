/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'store.istad.co'
          }
        ]
      }

};

export default nextConfig;
