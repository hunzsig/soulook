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
}
@return 最后创建单位/单位组
```

* **getAvatar(u)**
```
获取单位类型的头像
```

* **getAttackSpeedBaseSpace**
```
获取单位类型整体的攻击速度间隔(默认2.00秒/击)
```

* **setAttackSpeedBaseSpace**
```
设置单位类型整体的攻击速度间隔
```

* **getAttackRange**
```
获取单位类型整体的攻击范围
```

* **setAttackRange**
```
设置单位类型整体的攻击范围，物编的攻击距离与主动范围请调节为一致，攻击距离更改设定为最大攻击距离
例如需要修改的单位在物编将[主动攻击范围][攻击范围]设为9999，然后hjass里就可以动态最大修改攻击距离为 9999
主动攻击范围务必与攻击距离一致，hjass里修改攻击范围时，会自适应主动攻击范围
```

* **setUserData**
```
设置单位自定义值
```

* **getUserData**
```
获取单位自定义值
```

* **del**
```
删除单位，可延时
```

* **kill**
```
杀死单位，可延时
```

* **exploded**
```
爆毁单位，可延时
```

* **getFacing**
```
获取单位面向角度
```

* **getFacingBetween**
```
获取两个单位间面向角度，如果其中一个单位为空 返回0
```

* **setUnitFly**
```
设置单位可飞，用于设置单位飞行高度之前
```

* **rebornAtXY**
```
在某XY坐标复活英雄
* 只有英雄能被复活
* 只有调用此方法会触发复活事件
```

* **rebornAtLoc**
```
在某点复活英雄
* 只有英雄能被复活
* 只有调用此方法会触发复活事件
```

* **shadow**
```
创建一个单位的影子
影子是无敌蝗虫且无法行动
用于标识
```

* **createUnit**
```
在某点创建1单位
```

* **createUnitFacing**
```
在某点创建1单位,面向角度facing
```

* **createUnitLookAt**
```
在某点创建1单位,并看向某点
```

* **createUnitAttackToLoc**
```
在某点创建1单位,攻击移动到某点
```

* **createUnitAttackToUnit**
```
在某点创建1单位,攻击某单位
```

* **createUnitXY**
```
在XY创建1单位
```

* **createUnitXYFacing**
```
在XY创建1单位,面向角度facing
```

* **createUnithXY**
```
在hXY创建1单位
```

* **createUnits**
```
在某点创建单位组
```

* **createUnitsFacing**
```
在某点创建单位组,面向角度facing
```

* **createUnitsLookAt**
```
在某点创建单位组,并看向某点
```

* **createUnitsAttackToLoc**
```
在某点创建单位组,攻击移动到某点
```

* **createUnitsAttackToUnit**
```
在某点创建单位组,攻击某单位
```


* **createUnitsXY**
```
在XY创建单位组
```

* **createUnitsXYFacing**
```
在XY创建单位组,面向角度facing
```

