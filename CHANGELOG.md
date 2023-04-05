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
