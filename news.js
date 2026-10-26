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
    id: 'news-invisi-25th-dj',
    date: '2026.10.26',
    category: 'event',
    title: 'invisi 25周年記念パーティーにDJ出演',
    titleEn: 'DJ Set at invisi’s 25th Anniversary Party',
    body: '2026年11月5日（木）、恵比寿のTimeOut Café &amp; Diner / KATAで開催される「invisi 25周年記念パーティー」にDJとして出演します。<br><br>所属するinvisiの25周年を、DJやライブとともにお祝いする一夜。軽食やドリンクを片手に、音楽と交流を楽しんでいただけたら嬉しいです。<br><br>日時：2026年11月5日（木）18:00〜23:00<br>会場：TimeOut Café &amp; Diner / KATA（恵比寿駅2番出口から徒歩3分）<br>DJ出演：19:10〜19:40 ／ TimeOut Café &amp; Diner<br>参加費：無料（入場・お食事・2ドリンク込み）<br><br>ご来場の際は、下記リンクより事前にお申し込みください。途中参加・途中退出も歓迎です。会場でお会いできるのを楽しみにしています。<br><br>※タイムテーブルおよび内容は変更となる場合があります。',
    bodyEn: 'I will be playing a DJ set at invisi’s 25th Anniversary Party on Thursday, November 5, 2026, at TimeOut Café &amp; Diner / KATA in Ebisu, Tokyo.<br><br>Join us to celebrate 25 years of invisi, the company I am part of, with DJ sets, live performances, food and drinks. I look forward to sharing an evening of music and conversation with you.<br><br>Date: Thursday, November 5, 2026, 18:00–23:00 (JST)<br>Venue: TimeOut Café &amp; Diner / KATA (a 3-minute walk from Ebisu Station, Exit 2)<br>My DJ set: 19:10–19:40 at TimeOut Café &amp; Diner<br>Admission: Free, including food and two drinks<br><br>Please register in advance via the link below. You are welcome to arrive or leave at any time. See you there!<br><br>Please note that the timetable and program are subject to change.',
    url: 'https://invisi25th.peatix.com/',
  },
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
