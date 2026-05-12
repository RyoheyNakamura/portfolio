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
//    bandcamp   : 'Bandcamp embed src URL'        （任意・Bandcamp の Share/Embed から iframe の src をコピー）
//    title      : '日本語タイトル'                （必須）
//    titleEn    : '英語タイトル'                  （省略するとtitleを表示）
//    desc       : '日本語説明文'                  （必須）
//    descEn     : '英語説明文'                    （省略するとdescを表示）
//    credits    : '日本語クレジット'              （任意・<br>で改行）
//    creditsEn  : '英語クレジット'                （省略するとcreditsを表示）
//    hidden     : true                           （非表示にしたい場合のみ記載。省略すると表示）
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

  credits:   '',
  creditsEn: '',
})

work('riddle-valorant-2026', {
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

  credits:   '',
  creditsEn: '',
})

work('world-trigger-reboot', {
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

  credits:   '',
  creditsEn: '',
})

work('lotte-painomi', {
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

  credits:   '',
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

  credits:   '',
  creditsEn: '',
})

work('pokemon-go-fest-2025', {
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

  credits:   '',
  creditsEn: '',
})

work('dish-jockey', {
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

  desc:      'DISH JOCKEYは、「音」を盛り付ける「音楽のビュッフェ体験」。ビュッフェでお皿に料理をのせていくように、レコードみたいなお皿に食品サンプルをのせるだけでかっこいい音楽がつくれる、ふしぎな遊び場です。つくれる楽曲は、なんと14億通り。',
  descEn:    'Sound design for DISH JOCKEY — a "music buffet" experience where placing food samples on record-shaped dishes generates music. Over 1.4 billion possible combinations.',

  credits:   '',
  creditsEn: '',
})

work('meiji-kajuugumi', {
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
  bandcamp:   'https://bandcamp.com/EmbeddedPlayer/album=2222647963/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=606952366/transparent=true/',

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
  bandcamp:   'https://bandcamp.com/EmbeddedPlayer/album=3320236763/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=974101391/transparent=true/',

  title:     'VDSHTTR',
  titleEn:   'VDSHTTR',

  desc:      'ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists\' Harddrive」収録曲。',
  descEn:    'Included in "Physicists\' Harddrive," a compilation album by net label Physical and Gradual Solidarity.',

  credits:   '',
  creditsEn: '',
})

work('goodnight-to-the-world', {
  hidden:   false,
  category:   'self',
  date:       '2023.10.29',
  tags:       'Ambient',
  youtube:    [],
  vimeo:      '',
  url:        '',
  image:      'images/goodnight-to-the-world.jpg',
  soundcloud: '',
  spotify:    '',
  bandcamp:   'https://bandcamp.com/EmbeddedPlayer/album=366363831/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1683783587/transparent=true/',

  title:     'Goodnight to the World We Once Knew',
  titleEn:   'Goodnight to the World We Once Knew',

  desc:      'ネットレーベル『物理的で緩やかな連帯』のコンピレーションアルバム「Physicists\' Habit」収録曲。',
  descEn:    'Included in "Physicists\' Habit," a compilation album by net label Physical and Gradual Solidarity.',

  credits:   '',
  creditsEn: '',
})

work('transpop', {
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
  url:        '',
  image:      '',
  soundcloud: 'https://soundcloud.com/ryoheynakamura/pop-culture-communication-free-download?utm_source=clipboard&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fryoheynakamura%252Fpop-culture-communication-free-download',
  spotify:    '',
  bandcamp:   '',

  title:     'Pop Culture Communication',
  titleEn:   'Pop Culture Communication',

  desc:      'ポップカルチャーをテーマに制作した自主制作のElectro House楽曲。',
  descEn:    'An original Electro House track themed around pop culture.',

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
  url:        '',
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
