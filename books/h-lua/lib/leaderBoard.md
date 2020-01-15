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
        yourFunc 设置数据的回调,可以获取到该排行榜,设置好对应玩家索引的数据即可
hleaderBoard.create(
    "akey",
    1.00,
    function(bl)
        hleaderBoard.setTitle(bl, "玩家伤害榜")
        local data = {}
        hplayer.loop(
            function(p, pi)
                data[pi] = math.floor(hplayer.getDamage(p) * 0.1)
            end
        )
        return data
    end
)
```

* **setTitle(whichBoard, title)**
```
设置排行榜的标题
```

