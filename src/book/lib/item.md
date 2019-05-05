item

> 调用：hitem.method()

---

* **物品系统说明**
```
    物品分为（item_type）
    1、永久型物品 forever
    2、消耗型物品 consume
    3、瞬逝型 moment
    
    每个英雄最大支持使用6件物品
    支持满背包合成
    物品存在重量，背包有负重，超过负重即使存在合成关系，也会被暂时禁止合成
    
    主动指玩家需要手动触发的技能
    被动指英雄不需要主动使用而是在满足特定条件后（如攻击成功时）自动触发的技能
    属性有三种叠加： 线性 | 非线性 | 不叠加
    属性的叠加不仅限于几率也有可能是持续时间，伤害等等
    -线性：直接叠加，如：100伤害的物品，持有2件时，造成伤害将提升为200
    -非线性：一般几率的计算为33%左右的叠加效益，如：30%几率的物品，持有两件时，触发几率将提升为42.9%左右
    -不叠加：数量不影响几率，如：30%几率的物品，持有100件也为30%
    ! 物品不说明的属性不涉及叠加规定，默认不叠加
```

* **全局变量**
```
string HITEM_TYPE_FOREVER = "forever"
string HITEM_TYPE_CONSUME = "consume"
string HITEM_TYPE_MOMENT = "moment"
```

* **默认物品栏技能（英雄6格那个）**
```
ITEM_ABILITY / ID AInv
```

* **del**
```
删除物品，可延时
```

* **getTotalQty**
```
获取注册的物品数量
```

* **setTotalQty**
```
设定注册的物品数量
```

* **isHvjass**
```
获取物品是否h-vjass内部函数创建
```

* **setIsHvjass**
```
设定物品是否h-vjass内部函数创建
```

* **getEmptySlot**
```
获取某单位身上空格物品栏数量
```

* **getCharges**
```
获取某单位身上某种物品的使用总次数
```

* **onUse**
```
绑定使用物品的使用触发
```

* **onMoment**
```
绑定靠近物品的瞬逝触发
```

* **format**
```
绑定物品到系统
```

* **isFormat**
```
获取物品ID是否注册过
```

* **addAttr**
```
增加物品属性
```

* **getNameById**
```
获取物品ID名字
```

* **getIcon**
```
获取物品图标（需要在format时设定路径）
```

* **getType**
```
获取物品类型
```

* **getIsPowerUp**
```
获取物品ID是否自动使用
```

* **getLevel**
```
获取物品ID等级
```

* **getGold**
```
获取物品ID黄金
```

* **getLumber**
```
获取物品ID木头
```

* **getOverlay**
```
获取物品ID叠加数
```

* **getWeight**
```
获取物品ID重量
```

* **getCombatEffectiveness**
```
获取物品ID战力
```

* **toUnit**
```
创建非合成物品给单位
itemid 物品ID
charges 使用次数
whichUnit 哪个单位
```

* **toUnitMix**
```
创建合成物品给单位（会触发合成事件）
itemid 物品ID
charges 使用次数
whichUnit 哪个单位
```

* **toXY**
```
创建非合成物品到XY坐标
itemid 物品ID
charges 使用次数
x/y 坐标
```

* **toLoc**
```
创建非合成物品给单位
itemid 物品ID
charges 使用次数
whichLoc 哪个点
```

* **itemPickupDefault**
```
单位获得物品（默认模式）
例如商店售卖的物品就是不由 htem.toUnit 得到的，这时要把它纳入到系统中来
```

* **itemUse**
```
单位使用物品
```

* **copy**
```
复制一个单位的物品给另一个单位
```

* **drop**
```
命令一个单位把物品全部仍在地上
```

* **initUnit**
```
初始化单位，绑定物品事件等
```

* **initShop**
```
初始化商店，绑定售卖事件等
并将此单位视为商店
```

















