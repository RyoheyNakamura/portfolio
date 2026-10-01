# AGENTS.md — Portfolio サイト

## 構成ファイル
- `index.html` — メインファイル（SPA、全ビュー・CSS・JSを含む）
- `works.js` — 作品データ（`work()` 関数で登録）。`featured: true` がホーム Works の母集団＝その中の新しい順6件を表示（featured 0件なら全体の新しい順6件にフォールバック・2026-09-01）
- `news.js` — ニュースデータ（`NEWS` 配列、直近1年のみ表示）
- `favicon.png` — ファビコン
- `og-image.png` — OGP画像

## デプロイ
- GitHub: https://github.com/RyoheyNakamura/portfolio
- 公開URL: https://ryoheynakamura.com
- 更新手順: ファイル編集 → `git add` → `git commit` → `git push origin main`
- ローカル確認: `python3 -m http.server 8081 --directory "/Users/ryoheynakamura/Library/CloudStorage/Dropbox-invisi/Nakamura Ryohey/Claude/portfolio"`

## ビュー構造（SPA）
- `#main-view` — トップページ（Hero / Works preview / News / Commission / About）
- `#works-view` — 全作品一覧（フィルタ付き）
- `#detail-view` — 作品詳細
- `#news-detail-view` — ニュース詳細
- ビュー切替: `hidden` 属性 + opacity アニメーション
- ナビリンク: **全ビューで常設**（2026-09-01・`da40bb3`）。`setNavMain`/`header.offmain` は撤去。
  どのビューからでも `goMain(sel)` で main へ戻り当該セクションへ送る。⚠ `main-view` を出した直後は
  レイアウトが古く scroll が clamp されるので `getBoundingClientRect()` で強制リフローしてから `scrollTo`。
  ⚠ `goMain` はフェードしない（rAF が来ないと白紙で固まる）。⚠ 220ms のビュー切替は `viewTimer` で
  取り消せる＋`away` の判定に `location.hash` を含める（`pushState` は 220ms を待たず先に走るため）

## 主要な設計メモ
- 卵アニメ: `#egg-canvas`（single full-page canvas、ページ座標系、`z-index: -1`）
- モバイル卵サイズ: `const base = W < 768 ? W : vh`（幅基準）
- リサイズ誤検知防止: 高さ変化150px以下は無視（モバイルアドレスバー対策）
- canvas ratchet防止: layout()冒頭で `canvas.style.height = '0'` してから scrollHeight 計測
- 作品詳細の戻る先: `prevView`（'main' or 'works'）で分岐
- 言語切替: `i18n` オブジェクト + `data-i18n` 属性 + `setLang()`
- 作品テキスト（title/desc）は works.js の `title/titleEn/desc/descEn` フィールドで管理（i18nには持たない）

## Google Analytics
- 計測ID: G-XXRZ0TSQRP

## 作業規則
- 本人の依頼範囲で修正し、ブラウザで対象ビューを確認してから対象ファイルだけコミット・pushする。公開URLの挙動も確認する。
- 未追跡のSTAGEや別件の変更を混ぜない。元のCLAUDE.mdは互換用に保持する。
