// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
// ブログの動的ページ（Markdown連携）のために必要
export default defineConfig({
  site: "https://y25April.github.io/blog/", // GitHub Pages URLに変更
  base: "/blog/", // repository
  integrations: [
      tailwind(), // Tailwind CSS
      mdx()       // Markdown/MDX対応を追加
    ],
  // 出力先（静的ビルド時）
  output: "static",
});