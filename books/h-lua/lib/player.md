player

> 调用：hplayer.method()

---

* **vars**
```lua
hplayer = {
    --用户玩家 players[1] 代表玩家1
    players = {},
    --中立敌对
    player_aggressive = cj.Player(PLAYER_NEUTRAL_AGGRESSIVE),
    --中立受害
    player_victim = cj.Player(bj_PLAYER_NEUTRAL_VICTIM),
    --中立特殊
    player_extra = cj.Player(bj_PLAYER_NEUTRAL_EXTRA),
    --中立被动
    player_passive = cj.Player(PLAYER_NEUTRAL_PASSIVE),
    --玩家状态
    player_status = {
        none = "无参与",
        gaming = "游戏中",
        leave = "已离开",
    },
    --用户玩家最大数量
    qty_max = 12,
    --当前玩家数量
    qty_current = 0,
    --换算比率，默认：1000000金 -> 1木
    convert_ratio = 1000000,
}
```

* **adjustPlayerState(delta, whichPlayer, whichPlayerState)**
```
增加玩家状态，参考原生魔兽jass
```

* **setPlayerState(whichPlayer, whichPlayerState, value)**
```
设置玩家状态，参考原生魔兽jass
```

* **setConvertRatio(ratio)**
```
设置换算比率
```

* **getConvertRatio()**
```
获取换算比率
```

* **index(whichPlayer)**
```
获取玩家ID，例如：玩家一等于1，玩家三等于3
```

* **getSelection(whichPlayer)**
```
获取玩家当前勾选的单位
```

* **getStatus(whichPlayer)**
```
获取玩家状态
```

* **getApm(whichPlayer)**
```
获取玩家的APM
```

* **getRandomHero()**
```
在所有玩家里获取一个随机的英雄
```

* **clearUnit(whichPlayer)**
```
令玩家单位全部删除
```

* **defeat(whichPlayer, tips)**
```
令玩家失败
```

* **victory(whichPlayer)**
```
令玩家成功
```

* **setIsAutoConvert(whichPlayer, b)**
```
设置是否自动将{hAwardConvertRatio}黄金换1木头
```

* **getIsAutoConvert(whichPlayer)**
```
获取是否自动将{hAwardConvertRatio}黄金换1木头
```

* **getDamage(whichPlayer)**
```
获取玩家造成的总伤害
```

* **addDamage(whichPlayer, val)**
```
增加玩家造成的总伤害
```

* **getBeDamage(whichPlayer)**
```
获取玩家受到的总伤害
```

* **addBeDamage(whichPlayer, val)**
```
增加玩家受到的总伤害
```

* **getKill(whichPlayer)**
```
获取玩家杀敌数
```

* **addKill(whichPlayer, val)**
```
增加玩家杀敌数
```

* **getLifeSourceRatio(whichPlayer)**
```
获取玩家生命源设定百分比
```

* **getManaSourceRatio(whichPlayer)**
```
获取玩家魔法源设定百分比
```

* **setGoldRatio(whichPlayer, val, during)**
```
设置玩家黄金收获比
```

* **addGoldRatio(whichPlayer, val, during)**
```
增加玩家黄金收获比
```

* **subGoldRatio(whichPlayer, val, during)**
```
减少玩家黄金收获比
```

* **getGoldRatio(whichPlayer)**
```
获取玩家黄金收获比
```



* **setLumberRatio(whichPlayer, val, during)**
```
设置玩家木头收获比
```

* **addLumberRatio(whichPlayer, val, during)**
```
增加玩家木头收获比
```

* **subLumberRatio(whichPlayer, val, during)**
```
减少玩家木头收获比
```

* **getLumberRatio(whichPlayer)**
```
获取玩家木头收获比
```


* **setExpRatio(whichPlayer, val, during)**
```
设置玩家经验收获比
```

* **addExpRatio(whichPlayer, val, during)**
```
增加玩家经验收获比
```

* **subExpRatio(whichPlayer, val, during)**
```
减少玩家经验收获比
```

* **getExpRatio(whichPlayer)**
```
获取玩家经验收获比
```

* **setSellRatio(whichPlayer, val, during)**
```
设置玩家售卖收获比
```

* **addSellRatio(whichPlayer, val, during)**
```
增加玩家售卖收获比
```

* **subSellRatio(whichPlayer, val, during)**
```
减少玩家售卖收获比
```

* **getSellRatio(whichPlayer)**
```
获取玩家售卖收获比
```

* **getTotalGold(whichPlayer)**
```
获取玩家总获金量
```

* **addTotalGold(whichPlayer, val)**
```
增加玩家总获金量
```

* **getTotalGoldCost(whichPlayer)**
```
获取玩家总耗金量
```

* **addTotalGoldCost(whichPlayer, val)**
```
增加玩家总耗金量
```

* **getTotalLumber(whichPlayer)**
```
获取玩家总获木量
```

* **addTotalLumber(whichPlayer, val)**
```
增加玩家总获木量
```

* **getTotalLumberCost(whichPlayer)**
```
获取玩家总耗木量
```

* **addTotalLumberCost(whichPlayer, val)**
```
增加玩家总耗木量
```

* **getGold(whichPlayer)**
```
获取玩家金钱
```

* **setGold(whichPlayer, gold)**
```
设置玩家金钱
```

* **addGold(whichPlayer, gold, u)**
```
增加玩家金钱（自动结合加成）
如果设置了u，则会在该单位处展示漂浮字
```

* **subGold(whichPlayer, gold)**
```
减少玩家金钱
```

* **getLumber(whichPlayer)**
```
获取玩家木头
```

* **setLumber(whichPlayer, lumber)**
```
设置玩家木头
```

* **addLumber(whichPlayer, lumber, u)**
```
增加玩家木头（自动结合加成）
如果设置了u，则会在该单位处展示漂浮字
```

* **subLumber(whichPlayer, lumber)**
```
减少玩家木头
```
