import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 상위 디렉터리의 다른 lockfile을 루트로 오인하지 않도록 고정
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
