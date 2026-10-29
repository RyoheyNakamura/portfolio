# AGENTS.md — Portfolio サイト

## 構成ファイル
- `index.html` — メインファイル（SPA、全ビュー・基礎CSS・ルーティング/翻訳JSを含む）
- `site.css` — 採用デザイン（トップ・本文・作品詳細・一覧。カスケード順を保持）
- `opening.js` — オープニングの文字/SVG卵・カーソル反応・名前の線・ヘッダー表示
- `works.js` — 作品データ（`work()` 関数で登録）。`featured: true` がホーム Works の母集団＝その中の新しい順8件を表示（featured 0件なら全体の新しい順8件にフォールバック・2026-09-01）
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
- ナビリンク: トップのオープニング中は非表示。本文の上端がヘッダー下端に届くとフェード表示し、戻る時もフェードする。その他のビューでは常設。非表示中は inert / aria-hidden。
  ヘッダーの `goMain(sel)` はトップ内の該当セクションへ移動する。Worksだけ全件一覧へ変更しない（2026-10-28本人判断）。
- `navigateRoute()` が4ビューの切替・埋め込み停止・瞬時スクロール・フォーカスを管理する。出る側をフェード→`viewTimer`で220ms（関連作品間180ms）→全ビューを隠して対象だけ表示→位置復元→`fadeIn()`。
- 各history entryにview/scrollY/filter/returnTo/focusSelectorを保持。初期URLは`replaceState`、通常遷移は`pushState`、popstateはURLとstateを照合して復元する。初期表示で同じURLをpushしない。
- スクロール位置はメモリへ即時保存し、historyへの書込みは120ms debounce。`scrollRestoration='manual'`、位置復元は必ず`instant`。表示前にリフローし、focusは`preventScroll:true`。
- 本文のopen/closeは`changingView`中の重複操作を抑止。ヘッダーナビとpopstateは予約をキャンセルして移動可能。
- News行は`li > a.news-item`。通常クリック/EnterのみSPA処理し、修飾クリック・中クリック・リンクコピーはブラウザ標準に任せる。

## 主要な設計メモ
- ヘッダーのホームリンク: RNから整列した1行のRyohey Nakamuraへ変更（2026-10-29本人採用A）。DM Sans 300、PC15px・650px以下11px・359px以下10px、クリック領域44px。モバイルのヘッダー左右余白・ナビ間隔も採用案に合わせる。
- オープニング: 白に近い背景、Music & SoundとSVG目玉焼き、隙間を縫うDM Sans 300の名前。本文が上から覆う。
- モーション: 画面内でゆっくり漂い、細かいポインタに反応。非表示中・reduced-motionでは停止。名前を細い線で結ぶ。
- 作品カード: サムネのホバー/フォーカスによる拡大・回転なし。一覧は段差なし。
- 作品詳細: メディア・説明・クレジットを中央800px内の縦積みにし、More Worksには左右余白を確保。
- Clients: About内の正式な組織名9件と「ほか / and more」。調査記録はVault、公開ファイルに私有資料URLを含めない。
- 作品詳細の戻る先: routeの`returnTo`で元の位置・フィルタへ復帰（関連作品間でも保持）。直リンクの戻り先がない場合はトップWorks/Newsへ。`prevView`は作品の戻るラベルに使用。
- 言語切替: `i18n` オブジェクト + `data-i18n` 属性 + `setLang()`
- 作品テキスト（title/desc）は works.js の `title/titleEn/desc/descEn` フィールドで管理（i18nには持たない）

## Google Analytics
- 計測ID: G-XXRZ0TSQRP

## 作業規則
- 本人の依頼範囲で修正し、ブラウザで対象ビューを確認してから対象ファイルだけコミット・pushする。公開URLの挙動も確認する。
- 未追跡のSTAGEや別件の変更を混ぜない。元のCLAUDE.mdは互換用に保持する。

## リデザイン採用（2026-10-27）
- 試作study15を本人が採用。実験ページ・比較パネル・noindex・購読送信ブロックは配布しない。GA/SEO/Kit送信先は従来どおり。
- 作品・ニュースデータは採用前と同一。トップはfeatured母集団の新しい順8件。
- 直前の公開版は `7deb023`。今回の採用コミットをrevertしてpushすれば復旧できる。
