leaderBoard

> 调用：hleaderBoard.method()

---

* **LeaderboardResize(lb)**
```
重置排行榜尺寸
```

* **create(key, refreshFrequency, yourFunc)**
```
根据玩家创建排行榜
        key 排行榜唯一key
        refreshFrequency 刷新频率
        yourFunc 设置数据的回调,可以获取到该排行榜和玩家的index索引,设置标题
hleaderBoard.create('akey', 1.00, function(bl, i)
    local p = hplayer.players[i]
    local v = math.floor(hplayer.getDamage(p) * 0.1)
    cj.LeaderboardSetLabel(bl, "玩家伤害榜")
    cj.LeaderboardAddItem(bl, cj.GetPlayerName(p), v, p)
end)
```

* **setTitle(whichBoard, title)**
```
设置排行榜的标题
```

* **setPlayerData(whichBoard, whichPlayer, data)**
```
设置玩家的数据
```

