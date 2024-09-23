import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  trailingSlash: false,
  swcMinify: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = config.optimization.splitChunks || {};
      config.optimization.splitChunks.cacheGroups = {
        default: false,
        vendors: false,
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
        },
      };
    }

    config.optimization.minimize = true;
    config.optimization.minimizer = [
      new TerserPlugin({
        parallel: true,
      }),
    ];

    return config;
  },

  productionBrowserSourceMaps: false,

  output: "export",
};

export default nextConfig;
