// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://y25April.github.io/blog/", // ← ここを自分のGitHub Pages URLに変更
  base: "/blog/", // ← リポジトリ名
  integrations: [tailwind()],
});