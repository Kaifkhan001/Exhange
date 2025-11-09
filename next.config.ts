import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/backpack/:path*',
                destination: 'https://api.backpack.exchange/:path*',
            },
        ];
    },
};

export default nextConfig;
