item

> 调用：hitem.method()

---

* **物品系统说明**
```
    每个英雄最大支持使用6+1件物品(6背包+1拾取)
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

* **vars**
```
TYPE = {
    COORDINATE = "coordinate",
    POSITION = "position",
    UNIT = "unit",
    LOCATION = "location"
}
```

* **del(it, during)**
```
删除物品，可延时
```

* **getId(it)**
```
获取物品ID字符串
```

* **getSlk(itOrId)**
```
获取(物品or物品ID)SLK数据集
```

* **getArt(itOrId)**
```
获取(物品or物品ID)的图标路径
```

* **getFile(itOrId)**
```
获取(物品or物品ID)的模型路径
```

* **getClass(itOrId)**
```
获取(物品or物品ID)的分类
```

* **getGoldCost(itOrId)**
```
获取(物品or物品ID)所需的金币
```

* **getLumberCost(itOrId)**
```
获取(物品or物品ID)所需的木头
```

* **getIsUsable(itOrId)**
```
获取(物品or物品ID)是否可以使用
```

* **getIsPowerUp(itOrId)**
```
获取(物品or物品ID)是否自动使用
```

* **getIsPerishable(itOrId)**
```
获取(物品or物品ID)是否使用后自动消失
```

* **getIsSellAble(itOrId)**
```
获取(物品or物品ID)是否可卖
```

* **getShadowId(itOrId)**
```
获取(物品or物品ID)的影子ID（实现神符满格购物的关键）
```

* **getFaceId(itOrId)**
```
获取(物品or物品ID)的真实ID（实现神符满格购物的关键
```

* **getTriggerCall(itOrId)**
```
获取(物品or物品ID)的回调函数
```

* **getOverlie(itOrId)**
```
获取(物品or物品ID)的最大叠加数(默认是1个,此系统以使用次数作为数量使用)
```

* **getWeight(itOrId)**
```
获取(物品or物品ID)的重量（默认为0）
```

* **getAttribute(itOrId)**
```
获取(物品or物品ID)的属性加成
```

* **getCharges(it)**
```
获取物品的使用次数
```

* **setCharges(it)**
```
设置物品的使用次数
```

* **getTotalCharges(itemId, whichUnit)**
```
获取某单位身上某种物品的使用总次数
```

* **getEmptySlot(whichUnit)**
```
获取某单位身上空格物品栏数量
```

* **setAllowSeparate(whichUnit)**
```
使得单位拥有拆分物品的技能
```

* **addAttribute(whichUnit, itId, charges)**
```
附加单位获得物品后的属性
```

* **subAttribute(whichUnit, itId, charges)**
```
削减单位获得物品后的属性
```

* **create(bean)**
```
创建物品
bean = {
    itemId = 'I001', --物品ID
    charges = 1, --物品可使用次数（可选，默认为1）
    whichUnit = nil, --哪个单位（可选）
    whichUnitPosition = nil, --哪个单位的位置（可选，填单位）
    x = nil, --哪个坐标X（可选）
    y = nil, --哪个坐标Y（可选）
    whichLoc = nil, --哪个点（可选，不推荐）
    during = 0, --持续时间（可选，创建给单位要注意powerUp物品的问题）
}
!单位模式下，during持续时间是无效的
```

* **give(origin, target)**
```
使一个单位的所有物品给另一个单位
```

* **copy(origin, target)**
```
复制一个单位的所有物品给另一个单位
```

* **drop(origin)**
```
令一个单位把物品全部仍在地上
```














