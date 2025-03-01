/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', '*.vercel.app']
    },
  },
  images: {
    unoptimized: true,
  },
  // Critical: Skip the static generation phase for authenticated routes
  // This should prevent "UserContext not found" errors 
  output: 'standalone',
  
  // Ensure that pages with client components are not pre-rendered statically
  // This helps prevent the "UserContext not found" errors during build
  staticPageGenerationTimeout: 1000,
  transpilePackages: [
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
  ],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Already defined above
  // Explicitly define webpack configuration for path resolution
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    
    // Polyfill Node.js native modules for browser compatibility
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      zlib: require.resolve('browserify-zlib'),
      util: require.resolve('util/'),
      vm: false
    };
    
    return config;
  },
}

module.exports = nextConfig