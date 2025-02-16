const nextConfig = {
  experimental: {
    appDir: true,
  } as any,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/nextjs-website/" : "",
  basePath:
    process.env.NODE_ENV === "production" ? "/nextjs-website" : "",
};

export default nextConfig;