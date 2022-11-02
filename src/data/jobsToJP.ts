import { JobTypes } from "global";
import { TextsKeys } from "./texts";

const jobsToJP: { [key in JobTypes]: TextsKeys } = {
  beginner: "無職",
  warrior: "戦士",
  magician: "魔法使い",
  cleric: "僧侶",
  thief: "盜賊",
  knight: "ナイト",
  archmage: "大魔導",
  priest: "神官",
  bladeMaster: "ソードマスター",
  necromancer: "ネクロマンサー",
  exorcist: "エクソシスト",
  pirate: "海賊",
  ninja: "忍者",
  gamester: "ギャンブラー",
  beastTamer: "怪獸使い",
  robot: "機械の体",
  carpenter: "大工",
  nurse: "ナース",
  monk: "モンク",
  dancer: "おどり子",
  alien: "宇宙人",
  queen: "女王様",
  gladiator: "格闘士",
  elves: "精霊使い",
  royal: "王族",
  devil: "デビラーマン",
  anotherDevil: "アナザーデビラー",
};

export default jobsToJP;
