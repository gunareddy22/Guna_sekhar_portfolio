
import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
// This GITHUB_REPOSITORY_NAME will be set by the GitHub Actions workflow.
// It's used to set the basePath and assetPrefix for project repositories on GitHub Pages.
// For user/org pages (e.g., your-username.github.io), this will be an empty string.
const repoName = process.env.GITHUB_REPOSITORY_NAME || ''; 

const basePath = isProd && repoName ? `/${repoName}` : '';
// assetPrefix needs a trailing slash if basePath is set.
// If basePath is '/foo', assetPrefix should be '/foo/'.
// If basePath is '', assetPrefix should be undefined (Next.js default is '').
const assetPrefix = isProd && repoName ? `/${repoName}/` : undefined;

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export if using next/image with default loader
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
