/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
    serverActions: {
      bodySizeLimit: '5mb', // or any size you need, like '5mb'
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dvfkdjpixtuznysljuad.supabase.co",
      },
      // {
      //   protocol: "https",
      //   hostname: "ik.imagekit.io",
      // },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://www.linkedin.com/in/sandip-manna/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
