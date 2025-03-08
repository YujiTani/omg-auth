# OMG_AUTH アプリケーション

## ステートレス性について
このアプリは、ステートレス性を学習するためにあえて状態保持機能をもたせていません

短命な認証状態: 
authenticated Cookieは1回のリクエストでのみ有効にし、使用後に削除しております。これによりログイン画面からログイン画面への無限loopを回避しています。

HTTPの本質的なステートレス性と、それを克服するためのテクニック（Cookieの使用）を理解していただけると幸いです。

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

open http://localhost:3000

# シーケンス図
https://claude.site/artifacts/67000f51-4367-4982-b41b-307460d9b0bc
