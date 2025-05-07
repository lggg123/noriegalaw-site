import { NextConfig } from 'next';

const withMDX = require('@next/mdx')();
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Your existing config...
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // pageextensions: ['ts','tsx','js','jsx','md','mdx'],
};

export default nextConfig;