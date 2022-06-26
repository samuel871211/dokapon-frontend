// prettier-ignore
const nameInputChars = {
  hiragana: [
      [
          'あ', 'い', 'う', 'え', 'お',
          'か', 'き', 'く', 'け', 'こ',
          'さ', 'し', 'す', 'せ', 'そ',
          'た', 'ち', 'つ', 'て', 'と',
          'な', 'に', 'ぬ', 'ね', 'の',
          'は', 'ひ', 'ふ', 'へ', 'ほ',
          'ま', 'み', 'む', 'め', 'も',
          'や', '　', 'ゆ', '　', 'よ',
          'ら', 'り', 'る', 'れ', 'ろ'
      ],
      [
          'わ', '　', 'を', '　', 'ん',
          'が', 'ぎ', 'ぐ', 'げ', 'ご',
          'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
          'だ', 'ぢ', 'づ', 'で', 'ど',
          'ば', 'び', 'ぶ', 'べ', 'ぼ',
          'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
          'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ',
          'っ', 'ゃ', 'ゅ', 'よ', '　',
          '一', '〜', '・', '、', '。'
      ]
  ],
  katakana: [
      [
          'ア', 'イ', 'ウ', 'エ', 'オ',
          'カ', 'キ', 'ク', 'ケ', 'コ',
          'サ', 'シ', 'ス', 'セ', 'ソ',
          'タ', 'チ', 'ツ', 'テ', 'ト',
          'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
          'ハ', 'ヒ', 'フ', 'へ', 'ホ',
          'マ', 'ミ', 'ム', 'メ', 'モ',
          'ヤ', '　', 'ユ', '　', 'ヨ',
          'ラ', 'リ', 'ル', 'レ', 'ロ'
      ],
      [
          'ワ', '　', 'ヲ', '　', 'ン',
          'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
          'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
          'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
          'バ', 'ビ', 'ブ', 'ベ', 'ボ',
          'パ', 'ピ', 'プ', 'ペ', 'ポ',
          'ァ', 'ィ', 'ゥ', 'ェ', 'ォ',
          'ッ', 'ャ', 'ュ', 'ヨ', 'ヴ',
          'ー', '〜', '・', '、', '。'
      ]
  ],
  special: [
      [
          'Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ',
          'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ',
          'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ',
          'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ',
          'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ',
          'Ｚ', '　', '　', '　', '　',
          '　', '　', '　', '　', '　',
          '　', '　', '　', '　', '　',
          '　', '　', '　', '　', '　'
      ],
      [
          '１', '２', '３', '４', '５',
          '６', '７', '８', '９', '０',
          '！', '：', '％', '　', '　',
          '　', '＋', '－', '　', '　',
          '？', '～', '＆', '　', '　',
          '，', '．', '。', '、', '　',
          '一', '（', '）', '＜', '＞',
          '　', '　', '　', '　', '　',
          '　', '　', '　', '　', '　'
      ]
  ],
  menu: [
      '平假名',
      '片假名',
      'ＡＢＣ',
      '　　　',
      '前進',
      '後退',
      '刪除',
      '　　　',
      'ＯＫ'
  ]
}
export default nameInputChars;
