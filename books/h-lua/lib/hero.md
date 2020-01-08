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

* **setBuildParams(x, y, distance, per_row, allow_qty)**
```
设定酒馆参数
x 位置的坐标X
y 位置的坐标Y
distance 位置的间隔距离
per_row 位置上横列每行最大数量
allow_qty 酒馆内允许多少个英雄商品
```

* **setHeroBornParams(x, y)**
```
设定英雄出生点参数
x 位置的坐标X
y 位置的坐标Y
```

* **setPlayerAllowQty(whichPlayer, max)**
```
设置玩家最大单位数量,支持1 - 7
```

* **getPlayerAllowQty(whichPlayer)**
```
获取玩家最大单位数量
```

* **addPlayerUnit(whichPlayer, u, type)**
```
添加一个单位给玩家
```

* **removePlayerUnit(whichPlayer, u, type)**
```
删除一个英雄单位对玩家
```

* **setIsHero(u, bool)**
```
设置一个单位是否使用英雄判定(请勿重复设置)
 ！请不要乱设置[一般单位]为[英雄]，以致于力量敏捷智力等不属于一般单位的属性引起崩溃报错
 ！设定后 his.hero 方法会认为单位为英雄，同时属性系统才会认定它为英雄，从而生效
```

* **getHeroType(u)**
```
获取英雄的类型（STR/AGI/INT）
```

* **getHeroTypeLabel(u)**
```
获取英雄的类型名称（力量/敏捷/智力）
```

* **buildClick(during, clickQty)**
```
构建选择单位给玩家（clickQty 击）
during 选择时间
自动获取 hslk_global.heroes ，请先设置这个table
```

* **buildTavern(during)**
```
构建选择单位给玩家（商店物品）
during 选择时间
自动获取 hslk_global.heroesItems ，请先设置这个table
```
