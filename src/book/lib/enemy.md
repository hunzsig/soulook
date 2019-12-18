enemy

> 调用：henemy.method()

---

* **setName(name)**
```
设置敌人的名称
```

* **getName()**
```
获取敌人的名称
```

* **setColor(color)**
```
设置敌人的颜色
```

* **getColor()**
```
获取敌人的颜色
```

* **setShareSight(bool)**
```
设置敌人是否共享视野
```

* **isShareSight(): bool**
```
获取敌人是否共享视野
```

* **setPlayer(whichPlayer)**
```
将某个玩家位置设定为敌人，同时将他名字设定为全局的emptyName
颜色调节为黑色ConvertPlayerColor(12)
```

* **getPlayer(createQty)**
```
最优化自动获取一个敌人玩家
createQty 可设定创建单位数，更精准调用，默认权重 1
```

* **create(bean)**
```
创建敌人单位/单位组
此方法本质上是自动获取一个敌人玩家，然后调用hunit的create方法
bean = {
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
        isInvulnerable = false, --是否无敌，可选
}
```
