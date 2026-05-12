// ============================================================
//  news.js — ニュースデータ管理ファイル
//
//  使えるフィールド一覧:
//    id       : 'news-id'                        （必須・URLに使用）
//    date     : 'YYYY.MM.DD'                     （必須）
//    category : 'event' | 'media' | 'release' | 'other'
//    title    : '日本語タイトル'                 （必須）
//    titleEn  : '英語タイトル'                   （省略するとtitleを表示）
//    body     : '日本語本文'                     （<br>で改行可）
//    bodyEn   : '英語本文'                       （省略するとbodyを表示）
//    url      : '外部リンクURL'                  （任意）
//    image    : 'images/ファイル名.jpg'           （任意）
//    youtube  : ['動画ID1', '動画ID2']           （任意・配列）
//    bandcamp : ['<iframe ...>...</iframe>', ...]  （任意・配列・Bandcampの埋め込みコード全体を貼る）
//    spotify  : 'track/ID または album/ID'       （任意）
//    soundcloud: 'SoundCloud URL'               （任意）
//
//  ※ 直近1年以内のものが最大5件表示されます
// ============================================================

const NEWS = [
  {
    id: 'relattice',
    date: '2026.04.26',
    category: 'release',
    title: 'コンピレーションアルバム『Relattice』に参加',
    titleEn: 'Participated in Compilation Album "Relattice"',
    body: 'ネットレーベル「Relattice」のコンピレーションアルバム『Relattice』に参加しました。Tr.02「PURE」およびTr.12「キーポイント」（Sakuとの共作）を提供しています。',
    bodyEn: 'Contributed two tracks to "Relattice," a compilation album by net label Relattice. Tr.02 "PURE" and Tr.12 "Key Point" (co-written with Saku).',
    url: 'https://relattice.tumblr.com/',
    image: '',
    youtube: [],
    bandcamp: ['<iframe style="border: 0; width: 700px; height: 1136px;" src="https://bandcamp.com/EmbeddedPlayer/album=3460887448/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://relattice.bandcamp.com/album/relattice">Relattice Relattice</a></iframe>'],
    spotify: '',
    soundcloud: '',
  },
  // テンプレート（event）
  // {
  //   id: '',
  //   date: '',
  //   category: 'event',
  //   title: '',
  //   titleEn: '',
  //   body: '',
  //   bodyEn: '',
  //   url: '',
  //   image: '',
  //   youtube: [],
  //   bandcamp: [],
  //   spotify: '',
  //   soundcloud: '',
  // },
  // テンプレート（media）
  // {
  //   id: '',
  //   date: '',
  //   category: 'media',
  //   title: '',
  //   titleEn: '',
  //   body: '',
  //   bodyEn: '',
  //   url: '',
  //   image: '',
  //   youtube: [],
  //   bandcamp: [],
  //   spotify: '',
  //   soundcloud: '',
  // },
  // テンプレート（release）
  // {
  //   id: '',
  //   date: '',
  //   category: 'release',
  //   title: '',
  //   titleEn: '',
  //   body: '',
  //   bodyEn: '',
  //   url: '',
  //   image: '',
  //   youtube: [],
  //   bandcamp: [],
  //   spotify: '',
  //   soundcloud: '',
  // },
];
