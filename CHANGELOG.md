## unreleased

- 對戰的對手，是否改成用 reference 的方式？
- 對戰的對手如果是 player 以外，就直接跳過它的 `SelectGamePadButton` 回合

## 0.7.0

### added

- 圖片搬到前端

## 0.6.0 (一年半沒維護，忘記之前寫到哪裡)

### added

- `SelectGamePagButton` 的 `rightDialog` 實作 UI layout

### fixed

- Component `SwapCards` `先攻` 跟 `後攻` 的顯示邏輯錯誤

## 0.5.0

### added

- `PlayerInstance.possession.villages`
- `PlayerInstance.ownedWeaponIdxs`
- `PlayerInstance.ownedShieldIdxs`
- `PlayerInstance.ownedAccessoryIdxs`
- `PlayerInstance.ownedSpecialtyIdxs`
- `PlayerInstance.battledMonsterIdxs`
- `PlayerInstance.possession.specialty`
- `PlayerInstance.possession.totalMoney`
- Component `Data` 會去讀取使用者目前的 `availableCounts`
- Component `VillageFieldCheck` 會讀取村莊資訊
- Component `DataRank` 會根據總金額來決定排名順序

### changed

- `VillageFieldAttrs.villageName` 改成 `VillageFieldAttrs.villageIdx`
- `MagicAttack.fromMonsters` 改成 `MagicAttack.fromMonsterIdxs`
- `MagicDefense.fromMonsters` 改成 `MagicDefense.fromMonsterIdxs`
- `MagicBook.fromMonsters` 改成 `MagicBook.fromMonsterIdxs`
- `Shield.fromMonsters` 改成 `Shield.fromMonsterIdxs`
- `Weapon.fromMonsters` 改成 `Weapon.fromMonsterIdxs`
- `Accessory.fromMonsters` 改成 `Accessory.fromMonsterIdxs`

## 0.4.0

### added

- 新增 `MagicAttacks`、`MagicDefenses`、`MagicBooks` 的 `explanation` 到 `texts`
- `MagicAttacks`、`MagicDefenses`、`MagicBooks` 的 `fullExplanation` 如果沒有，就先用 `briefExplanation` 替代
- Component `BattleSpecialityIcon`
- Component `MagicAttackIcon`
- Component `MagicDefenseIcon`
- Component `SwapCard` 左右按鈕的閃爍動畫
- Component `SwapCard` 翻牌的動畫
- Component `SwapCard` 翻牌之後，會自動跳到下一個步驟
- Interface `MonsterInstance`，會從`MonsterFixedAttrs`去參照，並且生成一個怪物實例
- `BattleField` 新增 `terrain` 屬性
- `VillageField` 新增 `villageName` 屬性
- `CaveField` 新增 `linkTo` 屬性
- Component `SelectGamePadButton` 按下 R1 L1 之後，會跳出 Dialog 的邏輯

### fixed

- 輪盤已經選中數字之後，就不可以再骰出其他數字了
- Component `Check` 期間，Component `GraphUI` 的 transition 動畫移除
- Component `Check` 點選 Circle 之後，如該 vertex 上有 Character，會優先顯示 Component `PlayerVsCharacterDialogs`

## 0.3.0

### added

- component `VS` 跟 `ShowVertexTerrain` 為了開發方便，暫時設定為"點選鍵盤任意按鈕，跳到下一個步驟"
- 輪盤結果需要顯示 1 秒，再跳到下一個 component
- component `ShowVertexTerrain` 先完成皮，背景暫時沒有圖片

## 0.2.0

### added

- function `handleKeyUpForWalk` 按 X 的時候會倒退
- 部分 type `monster`的英文名稱確定
- type `monster` 新增 `key` 屬性，為`MonsterTypes`
- 部分 type `monster` 的 `fromAreas` 錯誤修正（尚未 100%確定）
- component `VS` 可正常顯示敵人的圖片了
- type `Vertex` 新增屬性 `terrain`，只有在 `Vertex.name === BattleField`才有這個屬性
- type `monster` 新增 `fromTerrains` 屬性，怪物的出現區域會根據地形決定

### changed

- 地形的英文 Typography 改成 Terrain

## 0.1.0

### added

- 人物移動時，背景會跟著移動
- component `VS` (部分邏輯尚未完成)

### changed

- function `handleKeyUpForWalk` 重構
