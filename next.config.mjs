/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  output: "export",
  distDir: "build",
};

export default nextConfig;
