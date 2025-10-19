# blog

## Dir
```
my-blog/
├── src/
│   ├── content/
│   │   └── posts/            ← 記事（Markdown）を置く場所
│   │   └── tools/            ← toolを置く場所
│   ├── layouts/              ← ページ共通レイアウト
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro       ← トップページ
│   │   └── blog/
│   │       └── index.astro   ← 記事一覧ページ
│   └── components/           ← コンポーネント（Header, Footerなど）
│       ├── Header.astro
│       └── PostCard.astro
├── public/                   ← 画像やfaviconなど静的ファイル
└── astro.config.mjs
```
- コンテンツコレクションを有効化
  - Astroのcontent collectionsを使うことでMarkdown記事を型安全に管理できます
  - blog/src/content/config.ts
- getStaticPaths() とは？
  - Astro が動的ルート（[slug].astro など）をビルドするために必要な関数です。
  - getCollection("posts") → src/content/posts/ のすべてのMarkdownを取得
  - それぞれの投稿の slug を使って /blog/{slug}/ を生成
  - props として post の中身をページに渡す、という流れになります。
    - 補足：自動ルーティングの仕組み
    - Markdownファイル	生成されるURL
    ```
    src/content/posts/hello-world.md	/blog/hello-world/
    src/content/posts/second-post.md	/blog/second-post/
    ```
    - この仕組みにより、Markdownファイルを追加するだけで自動でページが増える ようになります。
## create
blog/src/content/posts/xxx.md

## build
GitHub Pagesは静的サイトのみ配信
- setting
  - blog/astro.config.mjs
    - site は本番環境のURL
    - base は GitHub Pages のサブパス（リポジトリ名）
- build
  - npm run build
  - 出力先は dist/ ディレクトリ（デフォルト）
- GitHub Actions

## deploy
npm install gh-pages --save-dev
npm run deploy     
- -d dist は Astro のビルド出力先（dist/ フォルダ）を gh-pages に公開する指定です   
  
# GitHub Pages
1. GitHub のリポジトリを開く
2. Settings → Pages
3. Source を gh-pages ブランチに設定
4. 保存すると数分後に公開されます
デフォルトで peaceiris/actions-gh-pages が gh-pages ブランチに push するため、この設定でOKです
- https://y25april.github.io/blog/