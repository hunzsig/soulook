hero

> 调用：hhero.method()

---

* **setPrevLevel(u, lv)**
```
设置英雄之前的等级
```

* **getPrevLevel(u)**
```
获取英雄之前的等级
```

* **getCurLevel(u)**
```
获取英雄当前等级
```

* **setCurLevel(u, newLevel, showEffect)**
```
设置英雄当前的等级
```

* **setPlayerAllowQty(whichPlayer, max)**
```
设置玩家最大单位数量,支持1 - 7
```

* **getPlayerAllowQty(whichPlayer)**
```
获取玩家最大单位数量
```

* **getHeroType(u)**
```
获取英雄的类型（STR/AGI/INT）
```

* **getHeroTypeLabel(u)**
```
获取英雄的类型名称（力量/敏捷/智力）
```

* **setBornXY(x, y)**
```
设定英雄出生点参数
x 位置的坐标X
y 位置的坐标Y
```

* **setIsHero(u, bool)**
```
设置一个单位是否使用英雄判定(请勿重复设置)
 ！请不要乱设置[一般单位]为[英雄]，以致于力量敏捷智力等不属于一般单位的属性引起崩溃报错
 ！设定后 his.hero 方法会认为单位为英雄，同时属性系统才会认定它为英雄，从而生效
```

* **buildSelector(options)**
```
开始构建英雄选择
options = {
    heroes = {"H001","H002"}, -- 可以选择的单位ID
    during = 60, -- 选择持续时间，最少30秒，默认60秒，超过这段时间未选择的玩家会被剔除出游戏
    type = string, "tavern" | "click"
    buildX = 0, -- 构建点X
    buildY = 0, -- 构建点Y
    buildDistance = 256, -- 构建距离，例如两个酒馆间，两个单位间
    buildRowQty = 4, -- 每行构建的最大数目，例如一行最多4个酒馆
    allowTavernQty = 10, -- 酒馆模式下，一个酒馆最多拥有几种单位
}
如：
    hhero.setBornXY(1004, 142)
    hhero.buildSelector({
        heroes = { "Hpal", "Hamg" }, -- 可以选择的单位ID
        during = 60,
        type = "tavern",
        buildX = -517, -- 构建点X
        buildY = 314, -- 构建点Y
        buildDistance = 256,
        buildRowQty = 2,
        buildTavernQty = 10, -- 酒馆模式下，一个酒馆最多拥有几种单位
    })
```
