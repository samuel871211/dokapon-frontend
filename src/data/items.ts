// const itemList: Item[] = [
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 800,
//     name: "バイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 2000,
//     name: "３バイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 6000,
//     name: "４バイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 12000,
//     name: "５バイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 15000,
//     name: "バイバイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 20000,
//     name: "バババイン",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 500000,
//     name: "フリールーレット",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 400,
//     name: "０のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "１のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "２のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "３のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "４のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "５のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 300,
//     name: "６のクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 1600,
//     name: "マルチクリスタル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 500,
//     name: "ジャンプ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 250,
//     name: "ソトジャンプ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 400,
//     name: "ハロージャンプ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 1500,
//     name: "ミセジャンプ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 800,
//     name: "カエロッカナ",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 100,
//     name: "回復ざい",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 1200,
//     name: "回復ざいＳＰ",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 500,
//     name: "ちりょう薬",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 12000,
//     name: "ばんのう薬",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 30000,
//     name: "きせきのしずく",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 20000,
//     name: "復活ざい",
//   },
//   {
//     type: "回復系アイテム",
//     description: "",
//     price: 15000,
//     name: "ヒーリングベル",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 200,
//     name: "パワーキノコ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 200,
//     name: "ガードキノコ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 200,
//     name: "スピードキノコ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: 200,
//     name: "マジックキノコ",
//   },
//   {
//     type: "移動系アイテム",
//     description: "",
//     price: -1,
//     name: "魔法の薬",
//   },
//   {
//     type: "guard",
//     description: "",
//     price: 16000,
//     name: "マモるんです",
//   },
//   {
//     type: "guard",
//     description: "",
//     price: 14200,
//     name: "ヨケるんです",
//   },
//   {
//     type: "guard",
//     description: "",
//     price: 6000,
//     name: "キエるんです",
//   },
//   {
//     type: "guard",
//     description: "",
//     price: 13800,
//     name: "ミエるんです",
//   },
//   {
//     type: "guard",
//     description: "",
//     price: 6000,
//     name: "魔法の鏡",
//   },
// ];

import { Item } from "global";
/**
 * https://stackoverflow.com/questions/70956050/how-do-i-declare-object-value-type-without-declaring-key-type
 *
 * 可以在不宣告key type的情況，宣告value的型別
 *
 * 如此一來，key就可以透過TS自動解析成union type
 */
const satisfiesRecord =
  <T>() =>
  <K extends PropertyKey>(rec: Record<K, T>) =>
    rec;

const items = satisfiesRecord<Item>()({
  roulette2: {
    type: "移動系アイテム",
    description: "",
    price: 800,
    name: "バイン",
  },
  roulette3: {
    type: "移動系アイテム",
    description: "",
    price: 2000,
    name: "３バイン",
  },
  roulette4: {
    type: "移動系アイテム",
    description: "",
    price: 6000,
    name: "４バイン",
  },
  roulette5: {
    type: "移動系アイテム",
    description: "",
    price: 12000,
    name: "５バイン",
  },
  roulette6: {
    type: "移動系アイテム",
    description: "",
    price: 15000,
    name: "バイバイン",
  },
  roulette7: {
    type: "移動系アイテム",
    description: "",
    price: 20000,
    name: "バババイン",
  },
  roulette8: {
    type: "移動系アイテム",
    description: "",
    price: 500000,
    name: "フリールーレット",
  },
  crystal0: {
    type: "移動系アイテム",
    description: "",
    price: 400,
    name: "０のクリスタル",
  },
  crystal1: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "１のクリスタル",
  },
  crystal2: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "２のクリスタル",
  },
  crystal3: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "３のクリスタル",
  },
  crystal4: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "４のクリスタル",
  },
  crystal5: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "５のクリスタル",
  },
  crystal6: {
    type: "移動系アイテム",
    description: "",
    price: 300,
    name: "６のクリスタル",
  },
  crystalSpecial: {
    type: "移動系アイテム",
    description: "",
    price: 1600,
    name: "マルチクリスタル",
  },
  featherVillage: {
    type: "移動系アイテム",
    description: "",
    price: 500,
    name: "ジャンプ",
  },
  featherCaveOut: {
    type: "移動系アイテム",
    description: "",
    price: 250,
    name: "ソトジャンプ",
  },
  featherJobStore: {
    type: "移動系アイテム",
    description: "",
    price: 400,
    name: "ハロージャンプ",
  },
  featherGroceryStore: {
    type: "移動系アイテム",
    description: "",
    price: 1500,
    name: "ミセジャンプ",
  },
  featherMyFootPrint: {
    type: "移動系アイテム",
    description: "",
    price: 800,
    name: "カエロッカナ",
  },
  recoverHP50: {
    type: "回復系アイテム",
    description: "",
    price: 100,
    name: "回復ざい",
  },
  recoverHP100: {
    type: "回復系アイテム",
    description: "",
    price: 1200,
    name: "回復ざいＳＰ",
  },
  recoverSomeAbnormalState: {
    type: "回復系アイテム",
    description: "",
    price: 500,
    name: "ちりょう薬",
  },
  recoverMostAbnormalState: {
    type: "回復系アイテム",
    description: "",
    price: 12000,
    name: "ばんのう薬",
  },
  recoverHPAndAllAbnormalState: {
    type: "回復系アイテム",
    description: "",
    price: 30000,
    name: "きせきのしずく",
  },
  recoverRevive: {
    type: "回復系アイテム",
    description: "",
    price: 20000,
    name: "復活ざい",
  },
  recoverHPBeforeBattle: {
    type: "回復系アイテム",
    description: "",
    price: 15000,
    name: "ヒーリングベル",
  },
  mushroomAttack: {
    type: "強化系アイテム",
    description: "",
    price: 200,
    name: "パワーキノコ",
  },
  mushroomGuard: {
    type: "強化系アイテム",
    description: "",
    price: 200,
    name: "ガードキノコ",
  },
  mushroomSpeed: {
    type: "強化系アイテム",
    description: "",
    price: 200,
    name: "スピードキノコ",
  },
  mushroomMagic: {
    type: "強化系アイテム",
    description: "",
    price: 200,
    name: "マジックキノコ",
  },
  mushroomMagicMedicine: {
    type: "移動系アイテム",
    description: "",
    price: -1,
    name: "魔法の薬",
  },
  guardPhysicalAttack: {
    type: "補助系アイテム",
    description: "",
    price: 16000,
    name: "マモるんです",
  },
  guardBadTreasure: {
    type: "補助系アイテム",
    description: "",
    price: 14200,
    name: "ヨケるんです",
  },
  guardFromBattle: {
    type: "補助系アイテム",
    description: "",
    price: 6000,
    name: "キエるんです",
  },
  guardSeeCardBeforeBattle: {
    type: "補助系アイテム",
    description: "",
    price: 13800,
    name: "ミエるんです",
  },
  guardMagicAttack: {
    type: "補助系アイテム",
    description: "",
    price: 6000,
    name: "魔法の鏡",
  },
  guardRockDestroy: {
    type: "補助系アイテム",
    description: "",
    price: 150,
    name: "マトック",
  },
  disturbPossesionSteal: {
    type: "邪魔系アイテム",
    description: "",
    price: 1800,
    name: "モノキャッチャー",
  },
  disturbMoneySteal: {
    type: "邪魔系アイテム",
    description: "",
    price: 5000,
    name: "ゼニキャッチャー",
  },
  disturbSetUpTrap: {
    type: "邪魔系アイテム",
    description: "",
    price: 100,
    name: "ワナ",
  },
  disturbSetUpRock: {
    type: "邪魔系アイテム",
    description: "",
    price: 100,
    name: "トーレナ岩",
  },
  disturbSelfBeingRock: {
    type: "邪魔系アイテム",
    description: "",
    price: 1500,
    name: "トーサン像",
  },
});

export default items;
