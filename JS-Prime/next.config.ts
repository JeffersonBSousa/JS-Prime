import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/servicos", destination: "/#servicos", permanent: false },
      { source: "/sobre", destination: "/#sobre", permanent: false },
      { source: "/contato", destination: "/#contato", permanent: false },
    ];
  },
  /* config options here */
};

export default nextConfig;
