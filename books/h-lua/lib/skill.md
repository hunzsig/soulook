skill
> 调用：hskill.method()

---

* **add(whichUnit, ability_id, during)**
```
为单位添加技能
```

* **del(whichUnit, ability_id, during)**
```
为单位删除技能
```

* **forever(whichUnit, ability_id)**
```
为单位设置技能的永久使用性
```

* **has(whichUnit, ability_id)**
```
是否拥有技能
```

* **avoid(whichUnit)**
```
回避
```

* **invulnerable(whichUnit, during)**
```
无敌,设置during为0则是0为无敌~
```

* **invulnerableGroup(whichGroup, during)**
```
群体无敌
```

* **pause(whichUnit, during, pauseColor)**
```
暂停效果
pauseColor black | blue | red | green
```

* **invisible(whichUnit, during, transition, effect)**
```
隐身
transition是过渡时间，0就是瞬间隐身,默认0
```

* **visible(whichUnit, during, transition, effect)**
```
现形
transition是过渡时间，0就是瞬间隐身,默认0
```

* **modelEffect(whichUnit, whichAbility, abilityLevel, during)**
```
为单位添加效果只限技能类(一般使用物品技能<攻击之爪>模拟)一段时间
```

* **damage(bean)**
```
造成伤害(没错这是个技能)
bean = {
    sourceUnit = nil, --伤害来源
    targetUnit = nil, --目标单位
    damage = 0, --初始伤害
    damageString = "", --伤害漂浮字前缀字串
    damageStringColor = "", --伤害漂浮字颜色
    damageKind = "attack", --伤害种类 attack | skill | special
    damageType = { "magic", "thunder" }, --伤害类型 physical | magic 等
    effect = "", --伤害特效
}
```

* **broken(options)**
```
打断
!注意这个方法对中立被动无效
options = {
    whichUnit = unit, --目标单位，必须
    odds = 100, --几率，可选
    damage = 0, --伤害，可选
    sourceUnit = nil, --来源单位，可选
    effect = nil, --特效，可选
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **swim(options)**
```
眩晕
!注意这个方法对中立被动无效
options = {
    whichUnit = unit, --目标单位，必须
    during = 0, --持续时间，必须
    odds = 100, --几率，可选
    damage = 0, --伤害，可选
    sourceUnit = nil, --来源单位，可选
    effect = nil, --特效，可选
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **silent(options)**
```
沉默
options = {
    whichUnit = unit, --目标单位，必须
    during = 0, --持续时间，必须
    odds = 100, --几率，可选
    damage = 0, --伤害，可选
    sourceUnit = nil, --来源单位，可选
    effect = nil, --特效，可选
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **unarm(options)**
```
缴械
options = {
    whichUnit = unit, --目标单位，必须
    during = 0, --持续时间，必须
    odds = 100, --几率，可选
    damage = 0, --伤害，可选
    sourceUnit = nil, --来源单位，可选
    effect = nil, --特效，可选
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **fetter(options)**
```
缚足
options = {
    whichUnit = unit, --目标单位，必须
    during = 0, --持续时间，必须
    odds = 100, --几率，可选
    damage = 0, --伤害，可选
    sourceUnit = nil, --来源单位，可选
    effect = nil, --特效，可选
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **bomb(options)**
```
爆破
options = {
    damage = 0, --伤害（必须有，小于等于0直接无效）
    range = 1, --范围（可选）
    whichUnit = nil, --目标单位（挑选，单位时会自动选择与此单位同盟的单位）
    whichGroup = nil, --目标单位组（挑选，优先级更高）
    sourceUnit = nil, --伤害来源单位（可选）
    odds = 100, --几率（可选）
    effect = nil --目标位置特效（可选）
    effectSingle = nil --个体的特效（可选）
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```


* **lightningChain(options)**
```
闪电链
options = {
    damage = 0, --伤害（必须有，小于等于0直接无效）
    whichUnit = [unit], --第一个的目标单位（必须有）
    prevUnit = [unit], --上一个的目标单位（必须有，用于构建两点间闪电特效）
    sourceUnit = nil, --伤害来源单位（必须有）
    lightningType = [hlightning.type], -- 闪电效果类型（可选 详情查看 hlightning.type
    odds = 100, --几率（可选）
    qty = 1, --传递的最大单位数（可选，默认1）
    change = 0, --增减率（可选，默认不增不减为0，范围建议[-1.00，1.00]）
    range = 300, --寻找下一目标的作用范围（可选，默认300）
    isRepeat = false, --是否允许同一个单位重复打击（临近2次不会同一个）
    effect = nil, --目标位置特效（可选）
    damageKind = CONST_HUNT_KIND.skill, --伤害的种类（可选）
    damageType = {"thunder"}, --伤害的类型,注意是table（可选）
    index = 1,--隐藏的参数，用于暗地里记录是第几个被电到的单位
    repeatGroup = [group],--隐藏的参数，用于暗地里记录单位是否被电过
}
```

* **crackFly(options)**
```
击飞
options = {
    damage = 0, --伤害（必须有，但是这里可以等于0）
    whichUnit = [unit], --第一个的目标单位（必须有）
    sourceUnit = [unit], --伤害来源单位（必须有）
    odds = 100, --几率（可选,默认100）
    distance = 0, --击退距离，可选，默认0
    high = 100, --击飞高度，可选，默认100
    during = 0.5, --击飞过程持续时间，可选，默认0.5秒
    effect = nil, --特效（可选）
    damageKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    damageType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **rangeSwim(options)**
```
范围眩晕
options = {
    range = 0, --眩晕范围（必须有）
    during = 0, --眩晕持续时间（必须有）
    odds = 100, --对每个单位的独立几率（可选,默认100）
    effect = "", --特效（可选）
    whichUnit = [unit], --中心单位（可选）
    whichLoc = [location], --目标点（可选）
    x = [point], --目标坐标X（可选）
    y = [point], --目标坐标Y（可选）
    filter = [function], --必须有
    damage = 0, --伤害（可选，但是这里可以等于0）
    sourceUnit = [unit], --伤害来源单位（damage>0时，必须有）
    damageKind = CONST_DAMAGE_KIND.skill --伤害的种类（可选）
    damageType = {CONST_DAMAGE_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **rangeDamage(options)**
```
范围持续伤害
options = {
    range = 0, --范围（必须有）
    frequency = 0, --伤害频率（必须有）
    times = 0, --伤害次数（必须有）
    effect = "", --特效（可选）
    effectSingle = "", --单体特效（可选）
    filter = [function], --必须有
    whichUnit = [unit], --中心单位的位置（可选）
    whichLoc = [location], --目标点（可选）
    x = [point], --目标坐标X（可选）
    y = [point], --目标坐标Y（可选）
    damage = 0, --伤害（可选，但是这里可以等于0）
    sourceUnit = [unit], --伤害来源单位（damage>0时，必须有）
    damageKind = CONST_DAMAGE_KIND.skill --伤害的种类（可选）
    damageType = {CONST_DAMAGE_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **whirlwind(options)**
```
剑刃风暴
options = {
    range = 0, --范围（必须有）
    frequency = 0, --伤害频率（必须有）
    during = 0, --持续时间（必须有）
    filter = [function], --必须有
    damage = 0, --每次伤害（必须有）
    sourceUnit = [unit], --伤害来源单位（必须有）
    effect = "", --特效（可选）
    effectSingle = "", --单体砍中特效（可选）
    animation = "spin", --单位附加动作，常见的spin（可选）
    damageKind = CONST_DAMAGE_KIND.skill --伤害的种类（可选）
    damageType = {CONST_DAMAGE_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **leap(options)**
```
剃(前冲型直线攻击)
options = {
    arrowUnit = nil, -- 前冲的单位（有就是自身冲击，没有就是马甲特效冲击）
    sourceUnit, --伤害来源（必须有！不管有没有伤害）
    targetUnit, --冲击的目标单位（可选的，有单位目标，那么冲击到单位就结束）
    x, --冲击的x坐标（可选的，对点冲击，与某目标无关）
    y, --冲击的y坐标（可选的，对点冲击，与某目标无关）
    speed = 10, --冲击的速度（可选的，默认10，0.02秒的移动距离,大概1秒500px)
    acceleration = 0, --冲击加速度（可选的，每个周期都会增加0.02秒一次)
    filter = [function], --必须有
    tokenArrow = nil, --前冲的特效（x,y时认为必须！自身冲击就是bind，否则为马甲本身，如冲击波的波）
    tokenArrowScale = 1.00, --前冲的特效作为马甲冲击时的模型缩放
    tokenArrowOpacity = 1.00, --前冲的特效作为马甲冲击时的模型透明度[0-1]
    tokenArrowHeight = 0.00, --前冲的特效作为马甲冲击时的离地高度
    effectMovement = nil, --移动过程，每个间距的特效（可选的，采用的0秒删除法，请使用explode类型的特效）
    effectEnd = nil, --到达最后位置时的特效（可选的，采用的0秒删除法，请使用explode类型的特效）
    damageMovement = 0, --移动过程中的伤害（可选的，默认为0）
    damageMovementRange = 0, --移动过程中的伤害（可选的，默认为0，易知0范围是无效的所以有伤害也无法体现）
    damageMovementRepeat = false, --移动过程中伤害是否可以重复造成（可选的，默认为不能）
    damageMovementDrag = false, --移动过程是否拖拽敌人（可选的，默认为不能）
    damageEnd = 0, --移动结束时对目标的伤害（可选的，默认为0）
    damageEndRange = 0, --移动结束时对目标的伤害范围（可选的，默认为0，此处0范围是有效的，会只对targetUnit生效，除非unit不存在）
    damageKind = CONST_DAMAGE_KIND.skill, --伤害的种类（可选）
    damageType = {CONST_DAMAGE_TYPE.real} --伤害的类型,注意是table（可选）
    damageEffect = nil, --伤害特效（可选）
    oneHitOnly = false, --是否打击一次就立刻失效（类似格挡，这个一次和只攻击一个单位不是一回事）
    extraInfluence = [function] --对选中的敌人的额外影响，会回调该敌人单位，可以对其做出自定义行为
}
```

* **leapPow(options)**
```
剃[爪子状]，参数与leap一致，额外有两个参数，设置角度
需要注意一点的是，pow会自动将对单位跟踪的效果转为对坐标系(不建议使用unit)
options = {
    qty = 0, --数量
    deg = 15, --角度
    hskill.leap.options
}
```

* **leapRange(options)**
```
剃[选区型]，参数与leap一致，额外有两个参数，设置范围
需要注意一点的是，pow会自动将对单位跟踪的效果转为对坐标系(不建议使用unit)
options = {
    targetRange = 0, --以目标点为中心的选区范围
    hskill.leap.options
}
```

* **shapeshift(u, during, modelFrom, modelTo, eff, attrData)**
```
变身[参考 h-lua变身技能模板]
!modelFrom 技能模板 参考 h-lua SLK
!modelTo 技能模板 参考 h-lua SLK
```

* **diy(options)**
```
自定义技能 - 对单位/对XY/对点
options = {
    whichPlayer,
    skillId,
    orderString,
    x,y 创建位置
    targetX,targetY 对XY时可选
    targetLoc, 对点时可选
    targetUnit, 对单位时可选
    life, 马甲生命周期
}
```
