import { DokaponTheWorldComponentTypes, Vertex } from "global";

const vertexNameToComponentType: {
  [key in Vertex["name"]]: DokaponTheWorldComponentTypes;
} = {
  BattleField: "BattleFieldCheck",
  MagicBookField: "MagicBookFieldCheck",
  TreasureField: "TreasureFieldCheck",
  CollectMoneyField: "CollectMoneyFieldCheck",
  CollectAllMoneyField: "CollectMoneyFieldCheck",
  GoldTreasureField: "GoldTreasureFieldCheck",
  RedTreasureField: "RedTreasureFieldCheck",
  WhiteTreasureField: "WhiteTreasureFieldCheck",
  KeyTreasureField: "KeyTreasureFieldCheck",
  WorldTransferField: "WorldTransferFieldCheck",
  ChruchField: "ChurchFieldCheck",
  WeaponStoreField: "WeaponStoreFieldCheck",
  JobStoreField: "JobStoreFieldCheck",
  GroceryStoreField: "GroceryStoreFieldCheck",
  MagicStoreField: "MagicStoreFieldCheck",
  VillageField: "VillageFieldCheck",
  CaveField: "CaveFieldCheck",
  CastleField: "CastleFieldCheck",
  DamageField: "DamageFieldCheck",
};

export default vertexNameToComponentType;
