is

> 调用：his.method()

---

* **set(handle, key, val)**
```
通用set方法,这个方法不会panic
```

* **get(handle, key)**
```
通用get方法,这个方法不会panic
```

* **night()**
```
是否夜晚
```

* **day()**
```
是否白天
```

* **computer(whichPlayer)**
```
是否电脑
```

* **autoConvertGoldToLumber(whichPlayer)**
```
是否自动换算黄金木头
```

* **playerSite(whichPlayer)**
```
是否玩家位置
如果位置为真实玩家或为空，则为true
而如果选择了电脑玩家补充，则为false
```

* **playing(whichPlayer)**
```
是否正在游戏
```

* **neutral(whichPlayer)**
```
是否中立玩家
包括中立敌对/中立被动/中立受害/中立特殊
```

* **detected(whichUnit, whichPlayer)**
```
是否在某玩家真实视野内
```

* **hasSlot(whichUnit)**
```
是否拥有物品栏
```

* **death(whichUnit)**
```
是否死亡
```

* **alive(whichUnit)**
```
是否生存
```

* **invincible(whichUnit)**
```
是否无敌
```

* **invisible(whichUnit)**
```
是否隐身中
```

* **hero(whichUnit)**
```
是否英雄
```

* **building(whichUnit)**
```
是否建筑
```

* **illusion(whichUnit)**
```
是否镜像
```

* **ground(whichUnit)**
```
是否地面单位
```

* **flying(whichUnit)**
```
是否空中单位
```

* **melee(whichUnit)**
```
是否近战
```

* **ranged(whichUnit)**
```
是否远程
```

* **summoned(whichUnit)**
```
是否召唤
```

* **mechanical(whichUnit)**
```
是否机械
```

* **ancient(whichUnit)**
```
是否古树
```

* **locust(whichUnit)**
```
是否蝗虫
```

* **punish(whichUnit)**
```
是否被硬直
```

* **silent(whichUnit)**
```
是否被沉默
```

* **unarm(whichUnit)**
```
是否被缴械
```

* **crackFly(whichUnit)**
```
是否被击飞
```

* **water(whichUnit)**
```
是否处在水面
```

* **floor(whichUnit)**
```
是否处于地面
```

* **unit(whichUnit, otherUnit)**
```
是否某个特定单位
```

* **enemy(whichUnit, otherUnit)**
```
是否敌人单位
```

* **ally(whichUnit, otherUnit)**
```
是否友军单位
```

* **enemyPlayer(whichUnit, otherUnit)**
```
是否敌人玩家
```

* **allyPlayer(whichUnit, otherUnit)**
```
是否友军玩家
```

* **borderRect(rect, x, y)**
```
是否超出区域边界
```

* **borderMap(x, y)**
```
是否超出地图边界
```

* **ownItem(u, itemId)**
```
单位身上是否有某种物品
```

