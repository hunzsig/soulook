unit
> 调用：hunit.method()

---

* **getMaxLife(u)**
```
获取单位的最大生命
```

* **getCurLife(u)**
```
获取单位的当前生命
```

* **setCurLife(u, val)**
```
设置单位的当前生命
```

* **addCurLife(u, val)**
```
增加单位的当前生命
```

* **subCurLife(u, val)**
```
减少单位的当前生命
```

* **getMaxMana(u)**
```
获取单位的最大魔法
```

* **getCurMana(u)**
```
获取单位的当前魔法
```

* **setCurMana(u, val)**
```
设置单位的当前魔法
```

* **addCurMana(u, val)**
```
增加单位的当前魔法
```

* **subCurMana(u, val)**
```
减少单位的当前魔法
```

* **getCurLifePercent(u)**
```
获取单位百分比生命
```

* **setCurLifePercent(u, val)**
```
设置单位百分比生命
```

* **getCurManaPercent(u)**
```
获取单位百分比魔法
```

* **setCurManaPercent(u, val)**
```
设置单位百分比魔法
```

* **setPeriod(u, life)**
```
设置单位的生命周期
```

* **getFacing(u)**
```
获取单位面向角度
```

* **isOpenPunish(u)**
```
获取单位是否启用硬直（系统默认不启用）
```

* **create(bean)**
```
创建单位/单位组
bean = {
   whichPlayer = nil, --归属玩家
   unitId = nil, --类型id,如'H001'
   x = nil, --创建坐标X，可选
   y = nil, --创建坐标Y，可选
   loc = nil, --创建点，可选
   height = 高度，0，可选
   timeScalePercent = 动作时间比例，1~，可选
   modelScalePercent = 模型缩放比例，1~，可选
   opacity = 透明，0～255，可选
   qty = 1, --数量，可选，可选
   life = nil, --生命周期，到期死亡，可选
   during = nil, --持续时间，到期删除，可选
   facing = nil, --面向角度，可选
   facingX = nil, --面向X，可选
   facingY = nil, --面向Y，可选
   facingLoc = nil, --面向点，可选
   facingUnit = nil, --面向单位，可选
   attackX = nil, --攻击X，可选
   attackY = nil, --攻击Y，可选
   attackLoc = nil, --攻击点，可选
   attackUnit = nil, --攻击单位，可选
   isOpenPunish = false, --是否开启硬直系统，可选
   isShadow = false, --是否影子，可选
   isUnSelectable = false, --是否可鼠标选中，可选
   isPause = false, -- 是否暂停
   isInvulnerable = false, --是否无敌，可选
   isShareSight = false, --是否与所有玩家共享视野，可选
}
@return 最后创建单位/单位组
```

* **getId(u)**
```
获取单位ID字符串
```

* **getSlk(u)**
```
获取单位SLK数据集
```

* **getAvatar(u)**
```
获取单位类型的头像
```

* **getAttackSpeedBaseSpace(u)**
```
获取单位的攻击速度间隔
```

* **getAttackRange(u)**
```
获取单位的攻击范围
```

* **getName(u)**
```
获取单位的名称
```

* **getUserData(u)**
```
获取单位自定义值
```

* **setUserData(u, val, during)**
```
设置单位自定义值
```

* **setColor(u,color)**
```
设置单位颜色,color可设置玩家索引[1-16],应用其对应的颜色
又或者直接设置CONST_PLAYER_COLOR额key，如"RED"
setColor(u,1) 等同于 setColor(u,"red") 等同于 setColor(u,"RED")
```

* **getFacing(u)**
```
获取单位面向角度
```

* **del(targetUnit, during)**
```
删除单位，可延时
```

* **kill(targetUnit, during)**
```
杀死单位，可延时
```

* **exploded(targetUnit, during)**
```
爆毁单位，可延时
```

* **setCanFly(u)**
```
设置单位可飞，用于设置单位飞行高度之前
```

* **rebornAtXY(u, delay, invulnerable, x, y)**
```
在某XY坐标复活英雄
!只有英雄能被复活
!只有调用此方法会触发复活事件
```

* **rebornAtLoc(u, delay, invulnerable, loc)**
```
在某点复活英雄
!只有英雄能被复活
!只有调用此方法会触发复活事件
```
