// ============================================================
//  works.js — 案件データ管理ファイル
//  新しい案件を追加するときは下のブロックをコピーして埋めてください
// ============================================================
//
//  使えるフィールド一覧:
//    category   : 'client' | 'self' | 'produce'  （必須）
//    date       : 'YYYY.MM.DD'                    （必須）
//    tags       : 'タグ1, タグ2, タグ3'           （カンマ区切り）
//    youtube    : ['動画ID1', '動画ID2']          （配列。1つでも配列で書く）
//    vimeo      : 'Vimeo動画ID'                   （任意）
//    url        : '外部リンクURL'                 （任意）
//    image      : 'images/ファイル名.jpg'          （任意）
//    soundcloud : 'SoundCloud URL'               （任意・ページのURL全体）
//    spotify    : 'track/ID または album/ID'      （任意・open.spotify.com/以降のパス）
//    bandcamp   : '<iframe ...>...</iframe>'        （任意・Bandcamp の Share/Embed から埋め込みコード全体をコピー）
//    title      : '日本語タイトル'                （必須）
//    titleEn    : '英語タイトル'                  （省略するとtitleを表示）
//    desc       : '日本語説明文'                  （必須）
//    descEn     : '英語説明文'                    （省略するとdescを表示）
//    approach   : '「どう考えたか」の一行'          （任意・課題→アプローチ。省略すると欄ごと出ない）
//    approachEn : 'その英訳'                        （省略するとapproachを表示）
//    credits    : '日本語クレジット'              （任意・<br>で改行）
//    creditsEn  : '英語クレジット'                （省略するとcreditsを表示）
//    aliases    : ['old-id']                    （任意・旧URLをこの作品へ案内）
//    hidden     : true                           （非表示にしたい場合のみ記載。省略すると表示）
//    featured   : true                           （おすすめ。ホームの Works はこの中から新しい順に6件を表示。省略すると一覧のみ）
//
//  ※ 空欄のフィールドは何も表示されません
//  ※ youtube が複数ある場合は配列に追加してください
//  ※ youtube の1番目がサムネイルに使用されます
//
// ============================================================

const WORKS = [];
function work(id, d) { WORKS.push({ id, ...d }); }

// ============================================================
//  Client Works
// ============================================================

work('suntory-boss', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2026.02.03',
  tags:       'TVCM, サントリー',
  youtube:    ['wdHi1ySp5SU'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'サントリー BOSS×大相撲<br>『働く私の土俵際』篇',
  titleEn:   "Suntory BOSS × Grand Sumo<br>'My Workday on the Edge'",

  desc:      'サントリーホールディングス様のTVCM『働く私の土俵際』篇の音楽を担当いたしました。',
  descEn:    "Composed the music for Suntory Holdings' BOSS Coffee TV commercial.",

  credits:   'Music Producer : Masayuki Noda<br>Music : Ryohey Nakamura',
  creditsEn: '',
})

work('riddle-valorant-2026', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2026.01.10',
  tags:       'WebMovie, RIDDLE ORDER',
  youtube:    ['IOWrImWC8ZY'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'RIDDLE ORDER<br>VALORANT 2026 ROSTER',
  titleEn:   'RIDDLE ORDER<br>VALORANT 2026 ROSTER',

  desc:      'プロゲーミングチーム「RIDDLE ORDER」のVALORANT部門の2026年ロスター映像の音楽を担当いたしました。',
  descEn:    "Composed the music for pro gaming team RIDDLE ORDER's VALORANT 2026 roster announcement video.",

  approach:  '毎年続くロスター映像なので、前年・前々年の雰囲気は意図して引き継ぎ、サウンドだけを新しくしました。チームが積み上げてきた歴史と、その年の刷新感を、一本の中で同時に鳴らすためです。',
  approachEn: "This roster film returns every year, so I deliberately carried over the atmosphere of the previous two editions and renewed only the sound itself \u2014 letting the team's accumulated history and the new season's sense of renewal play in the same piece.",

  credits:   '',
  creditsEn: '',
})

work('world-trigger-reboot', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2025.12.20',
  tags:       'WebMovie, ワールドトリガー',
  youtube:    ['l2oRQ0Uq8Zw'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'アニメ「ワールドトリガー」REBOOT<br>プロジェクト ティザームービー',
  titleEn:   'World Trigger REBOOT Project<br>Teaser Movie',

  desc:      'アニメ「ワールドトリガー」REBOOTプロジェクトのティザームービーの音楽を担当いたしました。',
  descEn:    'Composed the music for the teaser movie of the World Trigger anime REBOOT project.',

  credits:   'Music Producer : Masayuki Noda<br>Music : Ryohey Nakamura',
  creditsEn: '',
})

work('lotte-painomi', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2025.11.15',
  tags:       'WebMovie, パイの実',
  youtube:    [],
  vimeo:      '',
  url:        'https://www.lotte.co.jp/products/brand/painomi/painone/',
  image:      'images/lotte-painomi.png',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     '株式会社ロッテ - パイの実<br>特別コンテンツ「パイの音 64奏」',
  titleEn:   'Lotte - Painomi<br>Special Content "Painone 64 Melodies"',

  desc:      '株式会社ロッテが展開する『パイの実』の特別コンテンツ「パイの音 64奏」の音楽を担当いたしました。',
  descEn:    "Composed the music for Lotte's special content \"Painone 64 Melodies\" for their Painomi brand.",

  credits:   '',
  creditsEn: '',
})

work('coca-cola-recycle', {
  hidden:   false,
  category:   'client',
  date:       '2025.11.01',
  tags:       'Exhibition, Coca-Cola',
  youtube:    [],
  vimeo:      '',
  url:        'https://www.coca-cola.com/jp/ja/environment/activities/Xfes2025',
  image:      'images/coca-cola-recycle.png',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'Coca-Cola X Fes 2025<br>Recycle Music Box',
  titleEn:   'Coca-Cola X Fes 2025<br>Recycle Music Box',

  desc:      'Coca-Cola X Fes 2025にて展示された、ターンテーブル型リサイクルボックス「Recycle Music Box」のサウンドデザインを担当いたしました。',
  descEn:    'Sound design for "Recycle Music Box," a turntable-style recycling installation exhibited at Coca-Cola X Fes 2025.',

  credits:   'Producer, Technical Director : Tsuyoshi Otabe<br>Technical Director : Kenichi Takahana<br>Sound Design : Ryohey Nakamura, Takaki Kiminori<br>Character Voice : Yuichi Nakamura',
  creditsEn: '',
})

work('kyuhaku-fumufumu', {
  hidden:   false,
  category:   'client',
  date:       '2025.10.16',
  tags:       'Exhibition, 九州国立博物館',
  youtube:    [],
  vimeo:      '1115719400',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     '九州国立博物館<br>キューハクふむふむ',
  titleEn:   'Kyushu National Museum<br>Kyuhaku Fumufumu',

  desc:      '九州国立博物館の文化交流展示室に設置されている対話型コンテンツ「キューハクふむふむ」の音楽を担当いたしました。',
  descEn:    'Composed the music for "Kyuhaku Fumufumu," an interactive installation in the Kyushu National Museum\'s Cultural Exchange Exhibition Room.',

  credits:   'Producer : Yuichi Nakamura<br>Composer : Ryohey Nakamura',
  creditsEn: '',
})

work('pokemon-go-fest-2025', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2025.07.17',
  tags:       'WebCM, ポケモン',
  youtube:    ['JGsvdz05k1M', 'DxrFCKMyXic'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'Pokémon GO Japan<br>Web CM「Pokémon GO Fest 2025」',
  titleEn:   'Pokémon GO Japan<br>Web CM "Pokémon GO Fest 2025"',

  desc:      'Pokémon GO JapanのWeb CM「Pokémon GO Fest 2025」の音楽を担当いたしました。',
  descEn:    'Composed the music for Pokémon GO Japan\'s web commercial "Pokémon GO Fest 2025."',

  credits:   'Producer : Masayuki Noda<br>Composer : Ryohey Nakamura',
  creditsEn: '',
})

work('dish-jockey', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2025.05.03',
  tags:       'Exhibition, NTTドコモ',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/dish-jockey.jpg',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     '株式会社NTTドコモ・スタジオ＆ライブ<br>DISH JOCKEY',
  titleEn:   'NTT Docomo Studio & Live<br>DISH JOCKEY',

  desc:      '株式会社NTTドコモ・スタジオ＆ライブが展開するインタラクティブ音楽体験「DISH JOCKEY」のサウンドデザインを担当いたしました。',
  descEn:    'Handled sound design for "DISH JOCKEY," an interactive music experience developed by NTT Docomo Studio & Live.',

  credits:   'Producer : Masayuki Noda<br>Technical Director : Kenichi Takahana<br>Sound Director : CD HATA<br>Composer : Ryohey Nakamura',
  creditsEn: '',
})

work('meiji-kajuugumi', {
  featured:   true,
  hidden:   false,
  category:   'client',
  date:       '2025.03.06',
  tags:       'TVCM, 果汁グミ',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/meiji-kajuugumi.png',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     '明治株式会社 - 果汁グミ<br>CM「ぷにぷにくだもの篇」',
  titleEn:   'Meiji - Kajuugumi<br>CM "Punipuni Kudamono" Remix',

  desc:      'しなこさんが出演している『果汁グミ』のTVCM「ぷにぷにくだもの篇」のリミックスを担当いたしました。',
  descEn:    "Arranged the remix for Meiji's Kajuugumi TVCM \"Punipuni Kudamono\" featuring Shinako.",

  credits:   'Producer : Masayuki Noda, Ryohey Nakamura<br>CM Arrangement : Ryohey Nakamura<br>CM Lyrics : Masayuki Noda<br>Recording & Mixing Engineer : Shinya Unoh (ODEN STUDIO)',
  creditsEn: '',
})

work('valorant-gc-2024', {
  hidden:   false,
  category:   'client',
  date:       '2024.04.26',
  tags:       'WebMovie, VALORANT',
  youtube:    ['Wbsnll83weI','aYZ-_NPE9RE'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'VALORANT Game Changers Japan 2024 Teaser',
  titleEn:   'VALORANT Game Changers Japan 2024 Teaser',

  desc:      'VALORANT Game Changers Japan 2024 Teaserの音楽を担当いたしました。',
  descEn:    'Composed the music for the VALORANT Game Changers Japan 2024 teaser video.',

  credits:   '',
  creditsEn: '',
})

work('crazy-raccoon-cr-fes-2024', {
  hidden:   false,
  category:   'client',
  date:       '2024.01.29',
  tags:       'WebMovie, CrazyRaccoon',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/CRFes2024.jpg',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'Crazy Raccoon<br>『CR FES 2024』告知映像',
  titleEn:   'Crazy Raccoon<br>CR FES 2024 Announcement',

  desc:      "プロゲーミングチーム「Crazy Raccoon」が主催するファンイベント「CR FES 2024」の開催告知映像の音楽を担当いたしました。本楽曲は、「'CR ANTHEM' - nqrse × FAKE TYPE.」の特別リミックスver.となります。",
  descEn:    "Composed the music for the CR FES 2024 announcement video by pro gaming team Crazy Raccoon. The track is a special remix of \"CR ANTHEM\" by nqrse × FAKE TYPE.",

  credits:   'Director, Designer : Charles Chung (maxilla)<br>Creative Producer, Creative Planner : Shintaro Toshima (maxilla)<br>Project Manager : Moe Niitsu (maxilla), Kanako Himeno (maxilla)<br>Illustrator : Kei Mochizuki<br>Music : "CR ANTHEM" - nqrse × FAKE TYPE.<br>Remix : Ryohey Nakamura',
  creditsEn: '',
})

work('otafuku-gochi-on', {
  hidden:   false,
  category:   'client',
  date:       '2023.08.29',
  tags:       'TVCM, オタフクソース',
  youtube:    ['OHiAIUo6Yac','20gKO1zrspY'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'オタフクソース株式会社<br>Gochi On ミート TVCM',
  titleEn:   'Otafuku Sauce<br>Gochi On Meat TVCM',

  desc:      '『Gochi On ミート お肉にのせるソース』のTVCM「瀬戸内レモン＆粒にんにく」篇の音楽を担当いたしました。',
  descEn:    "Composed the music for Otafuku Sauce's TVCM \"Setouchi Lemon & Minced Garlic\" edition of the Gochi On Meat sauce.",

  credits:   '',
  creditsEn: '',
})

work('riddle-welcome-456', {
  hidden:   false,
  category:   'client',
  date:       '2022.02.20',
  tags:       'WebMovie, RIDDLE ORDER',
  youtube:    ['FS5JFSd3pCk'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     'RIDDLE ORDER<br>WELCOME 456',
  titleEn:   'RIDDLE ORDER<br>WELCOME 456',

  desc:      'プロゲーミングチーム「RIDDLE ORDER」のAPEX LEGENDS部門へ「456」Yukio, Hesiko, Naohiro, 4ssiiの4名が加入することをアナウンスする映像の音楽を担当いたしました。',
  descEn:    "Composed the music for RIDDLE ORDER's APEX LEGENDS division welcome announcement video for players Yukio, Hesiko, Naohiro, and 4ssii.",

  credits:   '',
  creditsEn: '',
})


// ============================================================
//  Self Works  ←  自主制作はここに追加
// ============================================================

work('dip', {
  hidden:   false,
  category:   'self',
  date:       '2025.10.26',
  tags:       'Techno',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/dip.jpg',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2222647963/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=606952366/transparent=true/" seamless><a href="https://physicalloosesolidarity.bandcamp.com/album/hexaholic">HEXAHOLIC Ryohey Nakamura</a></iframe>',

  title:     'DIP',
  titleEn:   'DIP',

  desc:      'ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「HEXAHOLIC」収録曲。',
  descEn:    'Included in "HEXAHOLIC," a compilation album by net label Physical and Gradual Solidarity.',

  credits:   '',
  creditsEn: '',
})

work('vdshttr', {
  hidden:   false,
  category:   'self',
  date:       '2024.10.27',
  tags:       'Metal',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/vdshttr.jpg',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3320236763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=974101391/transparent=true/" seamless><a href="https://physicalloosesolidarity.bandcamp.com/album/physicists-harddrive">Physicists&#39; Harddrive Ryohey Nakamura</a></iframe>',

  title:     'VDSHTTR',
  titleEn:   'VDSHTTR',

  desc:      'ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists\' Harddrive」収録曲。',
  descEn:    'Included in "Physicists\' Harddrive," a compilation album by net label Physical and Gradual Solidarity.',

  credits:   '',
  creditsEn: '',
})



work('transpop', {
  featured:   true,
  hidden:   false,
  category:   'self',
  date:       '2023.03.18',
  tags:       'Saku, 初音ミク',
  youtube:    ['eFY8WRlLYE0'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    'track/368PCNuXK2QPpZFAKsYPnZ?si=ac2e8883578f4b0e',
  bandcamp:   '',

  title:     'TransPOP',
  titleEn:   'TransPOP',

  desc:      'ボーカロイドプロデューサー「Saku」との共同制作楽曲。初音ミクをボーカルに迎えて制作いたしました。',
  descEn:    'A collaborative track with vocaloid producer Saku, featuring Hatsune Miku on vocals.',

  credits:   '',
  creditsEn: '',
})

work('pop-culture-communication', {
  hidden:   false,
  category:   'self',
  date:       '2021.09.11',
  tags:       'ElectroHouse',
  youtube:    [],
  vimeo:      '',
  url:        'https://physicalloosesolidarity.bandcamp.com/album/physicists-high',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/pop-culture-communication-free-download?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fryoheynakamura%252Fpop-culture-communication-free-download',
  spotify:    '',
  bandcamp:   '',

  title:     'Pop Culture Communication',
  titleEn:   'Pop Culture Communication',

  desc:      'ポップカルチャーをテーマに制作した自主制作のElectro House楽曲。ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists\' High」に「Original Mix」として収録。',
  descEn:    'An original Electro House track themed around pop culture, also included as the Original Mix on the compilation album “Physicists’ High” by 物理的で緩やかな連帯.',

  credits:   '',
  creditsEn: '',
})

work('fantom-kiss', {
  hidden:   false,
  category:   'self',
  date:       '2021.09.08',
  tags:       'ElectroHouse, FutureHouse',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/fantom-kiss-free-download',
  spotify:    '',
  bandcamp:   '',

  title:     'Fantom Kiss',
  titleEn:   'Fantom Kiss',

  desc:      '自主制作のElectro House / Future House楽曲。',
  descEn:    'An original Electro House / Future House track.',

  credits:   '',
  creditsEn: '',
})

work('cubed-design', {
  hidden:   false,
  category:   'self',
  date:       '2020.04.11',
  tags:       'Dubstep',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/cubed-design',
  spotify:    '',
  bandcamp:   '',

  title:     'CUBED DESIGN',
  titleEn:   'CUBED DESIGN',

  desc:      '自主制作のDubstep楽曲。',
  descEn:    'An original Dubstep track.',

  credits:   '',
  creditsEn: '',
})

work('the-last-letter', {
  hidden:   false,
  category:   'self',
  date:       '2019.10.27',
  tags:       'MelodicDubstep',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/the-last-letter-inspired-by-takuan',
  spotify:    '',
  bandcamp:   '',

  title:     'The Last Letter',
  titleEn:   'The Last Letter',

  desc:      'イラストレーター 巽 たくあん氏とのコラボレーションによる自主制作のMelodic Dubstep楽曲。',
  descEn:    'An original Melodic Dubstep track created in collaboration with illustrator Takuan Tatsumi.',

  credits:   'Illustration: 巽 たくあん',
  creditsEn: 'Illustration: Takuan Tatsumi',
})

work('hello-resonance', {
  hidden:   false,
  category:   'self',
  date:       '2019.06.02',
  tags:       'Electronica',
  youtube:    ['taxCkzVntXw'],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/hello-resonance',
  spotify:    '',
  bandcamp:   '',

  title:     'Hello, resonance',
  titleEn:   'Hello, resonance',

  desc:      '映像作家 Eita Watanabeとのコラボレーションによる自主制作のElectronica楽曲。映像作品として制作・公開されました。',
  descEn:    'An original Electronica track created in collaboration with filmmaker Eita Watanabe, released as an audiovisual work.',

  credits:   '映像: Eita Watanabe',
  creditsEn: 'Video: Eita Watanabe',
})

// work('track-id', {
//   category:   'self',
//   date:       '2026.01.01',
//   tags:       'Dubstep',
//   youtube:    ['YOUTUBE_ID'],
//   vimeo:      '',
//   url:        '',
//   image:      '',
//   soundcloud: '',
//   spotify:    '',
//   bandcamp:   '',
//   title:      '曲タイトル',
//   titleEn:    '',
//   desc:       '制作背景・コンセプト。',
//   descEn:     '',
//   credits:    '',
//   creditsEn:  '',
// })

// ============================================================
//  Produce  ←  プロデュース案件はここに追加
// ============================================================

work('nhk-eigodeasobo-welcome-to-the-jungle', {
  featured:   true,
  hidden:   false,
  category:   'produce',
  date:       '2025.10.07',
  tags:       'NHK, Eテレ',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    'track/5kNqbGvqQ0Q1ilHI1HBp7V?si=9c8a2ff62a9f4aac',
  bandcamp:   '',

  title:     'NHK Eテレ「えいごであそぼ Meets the World」<br>マンスリーソング「WELCOME TO THE JUNGLE」',
  titleEn:   'NHK E-tele "Eigo de Asobo Meets the World"<br>Monthly Song "WELCOME TO THE JUNGLE"',

  desc:      'NHK Eテレで放送されている『えいごであそぼ Meets the World』2025年10月のマンスリーソング「WELCOME TO THE JUNGLE」の作編曲を担当いたしました。',
  descEn:    'Composed and arranged "WELCOME TO THE JUNGLE," the October 2025 monthly song for NHK E-tele\'s "Eigo de Asobo Meets the World."',

  credits:   '作編曲：Ryohey Nakamura',
  creditsEn: 'Composition & Arrangement: Ryohey Nakamura',
})

work('nhk-eigodeasobo-my-old-teddy-bear', {
  featured:   true,
  hidden:   false,
  category:   'produce',
  date:       '2024.09.12',
  tags:       'NHK, Eテレ',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      '',
  soundcloud: '',
  spotify:    'track/2XFZIAMDuPXtt0v7ArYqKz?si=73337037221c4963',
  bandcamp:   '',

  title:     'NHK Eテレ「えいごであそぼ Meets the World」<br>マンスリーソング「MY OLD TEDDY BEAR」',
  titleEn:   'NHK E-tele "Eigo de Asobo Meets the World"<br>Monthly Song "My Old Teddy Bear"',

  desc:      'NHK Eテレで放送されている『えいごであそぼ Meets the World』2024年9月のマンスリーソング「MY OLD TEDDY BEAR」の作編曲を担当いたしました。',
  descEn:    'Composed and arranged "My Old Teddy Bear," the September 2024 monthly song for NHK E-tele\'s "Eigo de Asobo Meets the World."',

  credits:   '作編曲：Ryohey Nakamura',
  creditsEn: 'Composition & Arrangement: Ryohey Nakamura',
})

work('kinoshita-tamako-soda-no-mahou', {
  hidden:   false,
  category:   'produce',
  date:       '2023.10.29',
  tags:       '木下珠子',
  youtube:    ['eEizjCmOvnY'],
  vimeo:      '',
  url:        'https://booth.pm/ja/items/5142021',
  image:      '',
  soundcloud: '',
  spotify:    '',
  bandcamp:   '',

  title:     '木下珠子<br>1st Album「はじまり」収録曲「ソーダの魔法」',
  titleEn:   'Kinoshita Tamako<br>1st Album "Hajimari" — "Soda no Mahou"',

  desc:      '木下珠子さんの1st Album「はじまり」に収録されている「ソーダの魔法」の作曲・編曲を担当いたしました。',
  descEn:    'Composed and arranged "Soda no Mahou," a track on singer Tamako Kinoshita\'s 1st album "Hajimari."',

  credits:   '作曲・編曲：Ryohey Nakamura',
  creditsEn: 'Composition & Arrangement: Ryohey Nakamura',
})

// work('project-id', {
//   category:   'produce',
//   date:       '2026.01.01',
//   tags:       'Event',
//   youtube:    [],
//   vimeo:      '',
//   url:        '',
//   image:      '',
//   soundcloud: '',
//   spotify:    '',
//   bandcamp:   '',
//   title:      'プロジェクトタイトル',
//   titleEn:    '',
//   desc:       '概要。',
//   descEn:     '',
//   credits:    '',
//   creditsEn:  '',
// })

// ============================================================
//  2026-10-27 additions — public credits and assets: images/works-sources-20261027.md
// ============================================================

work("kinoshita-tamako-re", {
  "category": "produce",
  "date": "2026.10.25",
  "featured": true,
  "hidden": false,
  "tags": "木下珠子, Album",
  "youtube": [
    "mf-W5UaDeNw"
  ],
  "url": "https://booth.pm/ja/items/8977824",
  "image": "images/kinoshita-tamako-re.jpg",
  "title": "木下珠子<br>4th Album「Re:」",
  "titleEn": "Tamako Kinoshita<br>4th Album “Re:”",
  "desc": "木下珠子さんの4th Album「Re:」に収録された「芽吹きの言葉」の作曲・編曲と、表題曲「Re:」の編曲を担当しました。",
  "descEn": "Composed and arranged “Mebuki no Kotoba” and arranged the title track “Re:” for Tamako Kinoshita’s fourth album.",
  "credits": "「芽吹きの言葉」作曲・編曲：Ryohey Nakamura<br>「芽吹きの言葉」作詞：久遠真雪<br>「Re:」編曲：Ryohey Nakamura<br>「Re:」作詞・作曲：木下珠子",
  "creditsEn": "“Mebuki no Kotoba” — Composition & Arrangement: Ryohey Nakamura<br>“Mebuki no Kotoba” — Lyrics: 久遠真雪<br>“Re:” — Arrangement: Ryohey Nakamura<br>“Re:” — Lyrics & Composition: Tamako Kinoshita"
});

work("kinoshita-tamako-blooming", {
  "category": "produce",
  "date": "2025.10.26",
  "hidden": false,
  "tags": "木下珠子, Album",
  "youtube": [
    "eMsnkwwO3Fs"
  ],
  "url": "https://linkco.re/ENN68BQx",
  "image": "images/kinoshita-tamako-blooming.jpg",
  "title": "木下珠子<br>3rd Album「Blooming」",
  "titleEn": "Tamako Kinoshita<br>3rd Album “Blooming”",
  "desc": "木下珠子さんの3rd Album「Blooming」に収録された「リリィ・ライト」の作詞・作曲・編曲と、表題曲「Blooming」の作曲・編曲を担当しました。",
  "descEn": "Wrote the lyrics, composed and arranged “Lily Light,” and composed and arranged the title track for Tamako Kinoshita’s third album, “Blooming.”",
  "credits": "「リリィ・ライト」作詞・作曲・編曲：Ryohey Nakamura<br>「Blooming」作曲・編曲：Ryohey Nakamura<br>「Blooming」作詞：木下珠子",
  "creditsEn": "“Lily Light” — Lyrics, Composition & Arrangement: Ryohey Nakamura<br>“Blooming” — Composition & Arrangement: Ryohey Nakamura<br>“Blooming” — Lyrics: Tamako Kinoshita"
});

work("relattice-compilation", {
  "category": "self",
  "date": "2026.04.26",
  "featured": false,
  "hidden": false,
  "tags": "Relattice, Compilation, Saku",
  "url": "https://relattice.bandcamp.com/album/relattice",
  "image": "images/relattice.jpg",
  "bandcamp": "<iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=807563539/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/tracklist=false/transparent=true/\" title=\"Ryohey Nakamura — PURE\" seamless></iframe><iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1814914475/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/tracklist=false/transparent=true/\" title=\"Saku, Ryohey Nakamura — Key Point\" seamless></iframe>",
  "title": "Relattice<br>「PURE」「キーポイント」",
  "titleEn": "Relattice<br>“PURE” / “Key Point”",
  "desc": "コンピレーションアルバム「Relattice」に、本人名義の「PURE」と、Sakuとの共作「キーポイント」の2曲を提供しました。",
  "descEn": "Contributed “PURE” under my own name and “Key Point,” a collaboration with Saku, to the compilation album “Relattice.”",
  "credits": "Tr.02「PURE」：Ryohey Nakamura<br>Tr.12「キーポイント」：Saku, Ryohey Nakamura",
  "creditsEn": "Tr.02 “PURE”: Ryohey Nakamura<br>Tr.12 “Key Point”: Saku, Ryohey Nakamura"
});

work("kinoshita-tamako-shining", {
  "category": "produce",
  "date": "2024.10.27",
  "hidden": false,
  "tags": "木下珠子, Album",
  "youtube": [
    "zF7M1pdMpnM"
  ],
  "url": "https://booth.pm/ja/items/6163190",
  "image": "images/kinoshita-tamako-beyond.jpg",
  "title": "木下珠子<br>2nd Album「Beyond」収録曲「Shining!!」",
  "titleEn": "Tamako Kinoshita<br>“Shining!!” from “Beyond”",
  "desc": "木下珠子さんの2nd Album「Beyond」に収録された「Shining!!」の作曲・編曲を担当しました。",
  "descEn": "Composed and arranged “Shining!!” for Tamako Kinoshita’s second album, “Beyond.”",
  "credits": "作曲・編曲：Ryohey Nakamura<br>作詞・歌唱：木下珠子",
  "creditsEn": "Composition & Arrangement: Ryohey Nakamura<br>Lyrics & Vocals: Tamako Kinoshita"
});

work("nhk-mitateru-autumn-sp", {
  "category": "client",
  "date": "2024.10.14",
  "hidden": true,
  "tags": "NHK, Eテレ, 効果音",
  "url": "https://invisi.jp/works/mitateru-fsp-2",
  "image": "images/mitateru-autumn-sp.jpg",
  "title": "NHK Eテレ<br>「みたてるふぉーぜ 秋SP」",
  "titleEn": "NHK E-tele<br>“Mitateru-phose” Autumn Special",
  "desc": "NHK Eテレ「みたてるふぉーぜ 秋SP」の効果音を担当しました。身の回りのものを別のものに見立てる番組の、30分のスペシャルです。",
  "descEn": "Created sound effects for the autumn special of NHK E-tele’s “Mitateru-phose,” a 30-minute program that invites viewers to imagine everyday objects as something else.",
  "credits": "効果音：Ryohey Nakamura<br>音楽：米田望<br>音楽プロデューサー：松尾謙二郎",
  "creditsEn": "Sound Effects: Ryohey Nakamura<br>Music: 米田望<br>Music Producer: 松尾謙二郎"
});

work("nhk-mitateru-winter-sp", {
  "category": "client",
  "date": "2025.02.11",
  "hidden": false,
  "tags": "NHK, Eテレ, 効果音",
  "url": "https://invisi.jp/works/nhketv-mitateru-wsp",
  "image": "images/mitateru-winter-sp.jpg",
  "title": "NHK Eテレ<br>「みたてるふぉーぜ 冬SP」",
  "titleEn": "NHK E-tele<br>“Mitateru-phose” Winter Special",
  "desc": "NHK Eテレ「みたてるふぉーぜ 冬SP」の効果音を担当しました。「冬さがそーぜ」「いろどろーぜ」など、身近なものから見立ての世界を広げる30分のスペシャルです。",
  "descEn": "Created sound effects for the winter special of NHK E-tele’s “Mitateru-phose,” a 30-minute program exploring imaginative ways of seeing everyday objects.",
  "credits": "効果音：Ryohey Nakamura<br>音楽：米田望<br>音楽プロデューサー：松尾謙二郎",
  "creditsEn": "Sound Effects: Ryohey Nakamura<br>Music: 米田望<br>Music Producer: 松尾謙二郎"
});

// Additional label releases — sources: images/works-catalog-20261027.md





work("pinky-step", {
  "category": "self",
  "date": "2022.10.30",
  "hidden": false,
  "featured": false,
  "tags": "物理的で緩やかな連帯, Physicists' Hype",
  "url": "https://physicalloosesolidarity.bandcamp.com/track/pinky-step",
  "image": "images/physicists-hype.jpg",
  "bandcamp": "<iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2167378569/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"Pinky Step\" seamless></iframe>",
  "title": "Pinky Step",
  "titleEn": "Pinky Step",
  "desc": "ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists' Hype」収録曲。",
  "descEn": "Included in “Physicists' Hype,” a compilation album by the netlabel 物理的で緩やかな連帯.",
  "credits": "Artist : Ryohey Nakamura",
  "creditsEn": "Artist : Ryohey Nakamura"
});



work("waiting-for-you-still", {
  "category": "self",
  "date": "2026.10.25",
  "hidden": false,
  "featured": false,
  "tags": "物理的で緩やかな連帯, heptaphobic",
  "url": "https://physicalloosesolidarity.bandcamp.com/track/waiting-for-you-still",
  "image": "images/heptaphobic.jpg",
  "bandcamp": "<iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=4146657706/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"Waiting for You (Still)\" seamless></iframe>",
  "title": "Waiting for You (Still)",
  "titleEn": "Waiting for You (Still)",
  "desc": "ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「heptaphobic」収録曲。",
  "descEn": "Included in “heptaphobic,” a compilation album by the netlabel 物理的で緩やかな連帯.",
  "credits": "Artist : Ryohey Nakamura",
  "creditsEn": "Artist : Ryohey Nakamura"
});

// Album-level entries and Cygames — sources: images/works-grouping-cygames-20261027.md

work("physicists-hill", {
  "aliases": [
    "the-emperor-walks-on-the-whale",
    "fluorescence-night-flow-remix"
  ],
  "category": "self",
  "date": "2020.10.22",
  "hidden": false,
  "featured": false,
  "tags": "物理的で緩やかな連帯, Compilation",
  "url": "https://physicalloosesolidarity.bandcamp.com/album/physicists-hill",
  "image": "images/physicists-hill.jpg",
  "bandcamp": "<iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2789756234/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"The Emperor Walks on The Whale\" seamless></iframe><iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2577919269/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"Fluorescence (NIGHT FLOW Remix)\" seamless></iframe>",
  "title": "Physicists’ Hill",
  "titleEn": "Physicists’ Hill",
  "desc": "ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists’ Hill」に、「The Emperor Walks on The Whale」と、Kurage543「Fluorescence」のリミックス「Fluorescence (NIGHT FLOW Remix)」の2曲で参加しました。",
  "descEn": "Contributed “The Emperor Walks on The Whale” and “Fluorescence (NIGHT FLOW Remix),” a remix of Kurage543’s “Fluorescence,” to the compilation album “Physicists’ Hill” by 物理的で緩やかな連帯.",
  "credits": "Tr.02「The Emperor Walks on The Whale」：Ryohey Nakamura<br>Tr.09「Fluorescence (NIGHT FLOW Remix)」リミックス：Ryohey Nakamura<br>「Fluorescence」原曲：Kurage543",
  "creditsEn": "Tr.02 “The Emperor Walks on The Whale”: Ryohey Nakamura<br>Tr.09 “Fluorescence (NIGHT FLOW Remix)” — Remix: Ryohey Nakamura<br>“Fluorescence” — Original: Kurage543"
});

work("physicists-habit", {
  "aliases": [
    "goodnight-to-the-world",
    "autumn-themed-radio-jingle"
  ],
  "category": "self",
  "date": "2023.10.29",
  "hidden": false,
  "featured": false,
  "tags": "物理的で緩やかな連帯, Compilation",
  "url": "https://physicalloosesolidarity.bandcamp.com/album/physicists-habit",
  "image": "images/goodnight-to-the-world.jpg",
  "bandcamp": "<iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=2573548020/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"Autumn-Themed Radio Jingle\" seamless></iframe><iframe style=\"border: 0; width: 100%; height: 120px;\" src=\"https://bandcamp.com/EmbeddedPlayer/track=1683783587/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/\" title=\"Goodnight to the World We Once Knew\" seamless></iframe>",
  "title": "Physicists’ Habit",
  "titleEn": "Physicists’ Habit",
  "desc": "ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists’ Habit」に、「Autumn-Themed Radio Jingle」と「Goodnight to the World We Once Knew」の2曲で参加しました。",
  "descEn": "Contributed “Autumn-Themed Radio Jingle” and “Goodnight to the World We Once Knew” to the compilation album “Physicists’ Habit” by 物理的で緩やかな連帯.",
  "credits": "Tr.01「Autumn-Themed Radio Jingle」：Ryohey Nakamura<br>Tr.06「Goodnight to the World We Once Knew」：Ryohey Nakamura",
  "creditsEn": "Tr.01 “Autumn-Themed Radio Jingle”: Ryohey Nakamura<br>Tr.06 “Goodnight to the World We Once Knew”: Ryohey Nakamura"
});

work("cygames-saga", {
  "category": "client",
  "date": "2026.10.24",
  "hidden": false,
  "featured": true,
  "tags": "WebCM, Cygames",
  "youtube": [
    "mVZHI6JyrPk"
  ],
  "url": "https://invisi.jp/works/cygames-cm-or",
  "image": "images/cygames-saga.jpg",
  "title": "Cygames<br>「佐賀から世界へ」篇",
  "titleEn": "Cygames<br>“From Saga to the World”",
  "desc": "CygamesのコーポレートCM「佐賀から世界へ」篇の音楽を担当しました。",
  "descEn": "Created the music for Cygames’ corporate commercial, “From Saga to the World.”",
  "credits": "Music Producer : Yuichi Nakamura<br>Music : Ryohey Nakamura",
  "creditsEn": "Music Producer : Yuichi Nakamura<br>Music : Ryohey Nakamura"
});


// Additional public credits verified 2026-10-27.
work('planetshopper', {
  category: 'client',
  featured: false,
  date: '2024.09.20',
  tags: 'Installation, 佐賀県立宇宙科学館',
  image: 'images/planetshopper.jpg',
  vimeo: '943939796?h=09ac186dd0',
  url: 'https://mtblanc.jp/works/7345/',
  title: '佐賀県立宇宙科学館《ゆめぎんが》<br>プラネッツホッパー',
  titleEn: 'Saga Prefectural Space & Science Museum<br>Planets Hopper',
  desc: '佐賀県立宇宙科学館《ゆめぎんが》の体験型展示「プラネッツホッパー」の音楽を担当しました。床面スクリーンに映し出された太陽系の惑星を、ジャンプして巡る展示です。',
  descEn: 'Composed music for Planets Hopper, an interactive exhibit at the Saga Prefectural Space & Science Museum. Visitors jump between planets in a solar system projected onto a floor screen.',
  credits: 'Client : 佐賀県 / 乃村工藝社 / モンブラン・ピクチャーズ<br>Sound Designer : Yuichi Nakamura (invisi)<br>Composer : Ryohey Nakamura (invisi)',
  creditsEn: 'Client : Saga Prefecture / NOMURA / MontBlanc Pictures<br>Sound Designer : Yuichi Nakamura (invisi)<br>Composer : Ryohey Nakamura (invisi)',
});

work('current-compilation', {
  category: 'self',
  featured: false,
  date: '2025.10.26',
  tags: 'Compilation, 隙間産業大学',
  image: 'images/current-compilation.jpg',
  soundcloud: 'https://soundcloud.com/sui-fuji/current-xfd',
  url: 'https://sukimadaigaku.booth.pm/items/7589715',
  title: 'Current<br>「Fallen Leaves Steps」',
  titleEn: 'Current<br>“Fallen Leaves Steps”',
  desc: '隙間産業大学のコンピレーションアルバム「Current」に、楽曲「Fallen Leaves Steps」で参加しました。2025年秋のM3で頒布。収録曲は8曲目です。',
  descEn: 'Contributed “Fallen Leaves Steps” to Current, a compilation album by Sukima Sangyo Daigaku, released at M3 Autumn 2025. The track appears as number 8.',
  credits: 'Track 08 : Fallen Leaves Steps — Ryohey Nakamura<br>Label : 隙間産業大学',
  creditsEn: 'Track 08 : Fallen Leaves Steps — Ryohey Nakamura<br>Label : Sukima Sangyo Daigaku',
});

work('artificial-aesthetics-01', {
  category: 'self',
  featured: false,
  date: '2025.10.26',
  tags: 'Collaboration, Release',
  image: 'images/artificial-aesthetics-01.jpg',
  url: 'https://music.apple.com/jp/album/1851378267',
  title: 'Artificial Aesthetics 01<br>“reconstruction”',
  titleEn: 'Artificial Aesthetics 01<br>“reconstruction”',
  desc: 'Neo IkutaのConcept EP「Artificial Aesthetics 01 “reconstruction”」に参加し、M1「浸水（Reconstruction Edit）」の編曲を担当しました。',
  descEn: 'Arranged track 1, “Inundation (Reconstruction Edit)”, for Neo Ikuta’s concept EP Artificial Aesthetics 01 “reconstruction”.',
  youtube: ['mfCDwIHTXpo'],
  credits: 'Artists : Neo Ikuta / 無來 / Ryohey Nakamura<br>Arrangement (M1「浸水 / Reconstruction Edit」) : Ryohey Nakamura',
  creditsEn: 'Artists : Neo Ikuta / Nakuru / Ryohey Nakamura<br>Arrangement (M1 “Inundation / Reconstruction Edit”) : Ryohey Nakamura',
});


work('riddle-valorant-2025', {
  category: 'client',
  featured: false,
  date: '2024.11.12',
  tags: 'WebMovie, RIDDLE ORDER, VALORANT',
  youtube: ['bdk-xAlJ6e8'],
  title: 'RIDDLE ORDER<br>2025 VALORANT ROSTER PV「NEW CHAPTER」',
  titleEn: 'RIDDLE ORDER<br>2025 VALORANT Roster Film “NEW CHAPTER”',
  desc: 'RIDDLE ORDERの2025 VALORANT ROSTER PV「NEW CHAPTER」の音楽を担当しました。2024年11月に公開された、新体制を紹介する映像です。',
  descEn: 'Created the music for RIDDLE ORDER’s 2025 VALORANT roster film, “NEW CHAPTER”, released in November 2024 to introduce the new lineup.',
  credits: 'Music : Ryohey Nakamura',
});

work('riddle-unleash-the-beast', {
  category: 'client',
  featured: false,
  date: '2024.06.03',
  tags: 'WebMovie, RIDDLE ORDER',
  image: 'images/riddle-unleash.jpg',
  url: 'https://x.com/RIDDLEORDER/status/1797554916397121827',
  title: 'RIDDLE ORDER<br>“Unleash The Beast.”',
  titleEn: 'RIDDLE ORDER<br>“Unleash The Beast.”',
  desc: 'RIDDLE ORDERの映像「Unleash The Beast.」の音楽・効果音を担当しました。',
  descEn: 'Created the music and sound effects for RIDDLE ORDER’s film “Unleash The Beast.”',
  credits: 'Director / Screenplay / Editor : Sqkurq<br>Music / Sound Effects : Ryohey Nakamura',
});

work('natsuga-teruyama-momiji', {
  category: 'self',
  featured: false,
  date: '2025.03.01',
  tags: 'Collaboration, 照山紅葉',
  youtube: ['vxI9rkxiyMw'],
  title: '照山紅葉<br>「夏が」',
  titleEn: 'Teruyama Momiji<br>“Natsu ga”',
  desc: '照山紅葉との共同制作楽曲「夏が」。音楽を共同で制作しました。',
  descEn: 'Co-created the music for “Natsu ga” with Teruyama Momiji.',
  credits: 'Music : Ryohey Nakamura / 照山紅葉<br>Video : ちゃん / 照山紅葉',
  creditsEn: 'Music : Ryohey Nakamura / Teruyama Momiji<br>Video : Chan / Teruyama Momiji',
});

work('rasen-misora-asahina', {
  category: 'produce',
  featured: false,
  date: '2026.06.10',
  tags: 'Arrangement, Mix, 朝比奈御空',
  youtube: ['Oepmq3uqX_o'],
  url: 'https://www.youtube.com/watch?v=o5-eBGdLweg',
  title: '朝比奈御空<br>「螺旋」「螺旋（Re-recording）」',
  titleEn: 'Misora Asahina<br>“Rasen” / “Rasen (Re-recording)”',
  desc: '朝比奈御空の「螺旋」の編曲・ミックスを担当しました。2023年のコンピレーションアルバム「かたち」収録版と、2026年の1st EP「インクの海で夢を見ていた」収録の再録版「螺旋（Re-recording）」を紹介しています。ページ内の動画は2023年版です。再録版は外部リンクからお聴きいただけます。',
  descEn: 'Arranged and mixed “Rasen” by Misora Asahina. This page presents the 2023 version from the compilation Katachi and “Rasen (Re-recording)” from the 2026 debut EP Inku no Umi de Yume wo Miteita. The embedded video is the 2023 version; the external link opens the re-recording.',
  credits: '「螺旋」（2023 / かたち）<br>Artist : 朝比奈御空<br>Arrangement / Mix : Ryohey Nakamura<br><br>「螺旋（Re-recording）」（2026 / インクの海で夢を見ていた M3）<br>Lyrics / Music : 朝比奈御空<br>Arrangement / Mix : Ryohey Nakamura',
  creditsEn: '“Rasen” (2023 / Katachi)<br>Artist : Misora Asahina<br>Arrangement / Mix : Ryohey Nakamura<br><br>“Rasen (Re-recording)” (2026 / Inku no Umi de Yume wo Miteita, Track 3)<br>Lyrics / Music : Misora Asahina<br>Arrangement / Mix : Ryohey Nakamura',
});
