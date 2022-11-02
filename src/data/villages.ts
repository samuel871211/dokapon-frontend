import { AreaTypes } from "global";
import { TextsKeys } from "./texts";

const villages: { [key in AreaTypes]: { name: TextsKeys; value: number }[] } = {
  Asia: [
    {
      name: "トーキョ一村",
      value: 90000,
    },
    {
      name: "サッポロ村",
      value: 85000,
    },
    {
      name: "チューゴク村",
      value: 55000,
    },
    {
      name: "タイ村",
      value: 53000,
    },
    {
      name: "モンゴル村",
      value: 76000,
    },
    {
      name: "インド村",
      value: 68000,
    },
    {
      name: "スリランカ村",
      value: 80000,
    },
    {
      name: "パキスタン村",
      value: 73000,
    },
    {
      name: "カンコク村",
      value: 51000,
    },
  ],
  Europe: [
    {
      name: "ポーランド村",
      value: 152000,
    },
    {
      name: "ドイツ村",
      value: 120000,
    },
    {
      name: "チェコ村",
      value: 95000,
    },
    {
      name: "ベルギ一村",
      value: 84000,
    },
    {
      name: "フランス村",
      value: 132000,
    },
    {
      name: "イタリア村",
      value: 120000,
    },
    {
      name: "ギリシャ村",
      value: 105000,
    },
    {
      name: "スペイン村",
      value: 112000,
    },
    {
      name: "イギリス村",
      value: 170000,
    },
  ],
  Russia: [
    {
      name: "モスクワ村",
      value: 84000,
    },
    {
      name: "マリ-エル村",
      value: 64000,
    },
    {
      name: "タイミル村",
      value: 149000,
    },
    {
      name: "ウドムルト村",
      value: 53000,
    },
    {
      name: "ブリヤード村",
      value: 77000,
    },
    {
      name: "サハ村",
      value: 50000,
    },
    {
      name: "チェルスキ一村",
      value: 58000,
    },
    {
      name: "カムチャツカ村",
      value: 101000,
    },
    {
      name: "カラフト村",
      value: 96000,
    },
  ],
  NorthAmerica: [
    {
      name: "バンクーバ一村",
      value: 77000,
    },
    {
      name: "フォトスミス村",
      value: 69000,
    },
    {
      name: "モントリオル村",
      value: 82000,
    },
    {
      name: "L. A. 村",
      value: 127000,
    },
    {
      name: "シカゴ村",
      value: 103000,
    },
    {
      name: "N.Y.村",
      value: 139000,
    },
    {
      name: "ワシントン村",
      value: 115000,
    },
    {
      name: "ダラス村",
      value: 109000,
    },
    {
      name: "ハワイ村",
      value: 185000,
    },
  ],
  SouthAmerica: [
    {
      name: "メキシコ村",
      value: 134000,
    },
    {
      name: "コスタリカ村",
      value: 128000,
    },
    {
      name: "コロンビア村",
      value: 76000,
    },
    {
      name: "ペル一村",
      value: 114000,
    },
    {
      name: "ブラジル村",
      value: 99000,
    },
    {
      name: "ボリビア村",
      value: 103000,
    },
    {
      name: "チリ村",
      value: 161000,
    },
    {
      name: "ウルグアイ村",
      value: 81000,
    },
    {
      name: "ベネズエラ村",
      value: 87000,
    },
  ],
  Oceania: [
    {
      name: "ニュジランド村",
      value: 138000,
    },
    {
      name: "シド二一村",
      value: 145000,
    },
    {
      name: "メルボルン村",
      value: 151000,
    },
    {
      name: "サザンクロス村",
      value: 174000,
    },
    {
      name: "ウインダム村",
      value: 167000,
    },
  ],
  Africa: [
    {
      name: "アルジェリア村",
      value: 195000,
    },
    {
      name: "ガ一ナ村",
      value: 82000,
    },
    {
      name: "コンゴ村",
      value: 78000,
    },
    {
      name: "エチオピア村",
      value: 171000,
    },
    {
      name: "ケニア村",
      value: 94000,
    },
    {
      name: "エジプト村",
      value: 200000,
    },
    {
      name: "ザンビア村",
      value: 90000,
    },
    {
      name: "タンザニア村",
      value: 87000,
    },
    {
      name: "マダガスカル村",
      value: 97000,
    },
  ],
  // 以下為空
  AsiaCave: [],
  EuropeCave: [],
  EuropeCaveLibrary: [],
  EuropeCaveCanteen: [],
  EuropeCaveHall: [],
  NorthAmericaCave: [],
  NorthAmericaCaveB2: [],
  SouthAmericaCave: [],
  SouthAmericaCaveB2: [],
  SouthAmericaCaveB3: [],
  OceaniaCave: [],
  AfricaCave: [],
  AfricaCaveB2: [],
  AfricaCaveB3Right: [],
  AfricaCaveB3Left: [],
  AfricaCaveB3Center: [],
  Arctic: [],
  ArcticCave: [],
  Antarctica: [],
  AntarcticaCave: [],
  HawaiianIslands: [],
  HawaiianIslandsCave: [],
  HawaiianIslandsCaveB2Right: [],
  HawaiianIslandsCaveB2Left: [],
  HawaiianIslandsCaveB2Center: [],
  HawaiianIslandsCaveB3Right: [],
  HawaiianIslandsCaveB3Left: [],
  HawaiianIslandsCaveB3Center: [],
  Atlantis: [],
};

export default villages;
