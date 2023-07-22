import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://tonalmathew.github.io',
  base: '/hello-world',
  output: "server",
  adapter: vercel()
});