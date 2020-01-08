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

* **modelEffect(whichUnit, whichAbility, abilityLevel, during)**
```
为单位添加效果只限技能类(一般使用物品技能<攻击之爪>模拟)一段时间
```

* **damage(bean)**
```
造成伤害(没错这是个技能)
bean = {
    fromUnit = nil, --伤害来源
    toUnit = nil, --目标单位
    damage = 0, --初始伤害
    realDamage = 0, --实际伤害
    realDamageStringColor = "", --伤害漂浮字颜色
    huntKind = "attack", --伤害种类 attack | skill | special
    huntType = { "magic", "thunder" }, --伤害类型 physical | magic 等
    huntEff = "", --伤害特效
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
    model = nil, --特效，可选
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil, --特效，可选
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil, --特效，可选
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil, --特效，可选
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil, --特效，可选
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil --目标位置特效（可选）
    modelSingle = nil --个体的特效（可选）
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
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
    model = nil, --目标位置特效（可选）
    huntKind = CONST_HUNT_KIND.skill, --伤害的种类（可选）
    huntType = {"thunder"}, --伤害的类型,注意是table（可选）
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
    model = nil, --特效（可选）
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **swimGroup(options)**
```
范围眩晕
options = {
    range = 0, --眩晕范围（必须有）
    during = 0, --眩晕持续时间（必须有）
    odds = 100, --对每个单位的独立几率（可选,默认100）
    model = "", --特效（可选，只有在匹配模式下才会生效，使用单位组请额外补充特效）
    whichGroup = [group], --目标单位组（可选）
    whichUnit = [unit], --目标单位（可选）
    whichLoc = [location], --目标点（可选）
    x = [point], --目标坐标X（可选）
    y = [point], --目标坐标Y（可选）
    filter = [function], --区配模型下必须有
    damage = 0, --伤害（可选，但是这里可以等于0）
    sourceUnit = [unit], --伤害来源单位（damage>0时，必须有）
    huntKind = CONST_HUNT_KIND.skill --伤害的种类（可选）
    huntType = {CONST_HUNT_TYPE.real} --伤害的类型,注意是table（可选）
}
```

* **leap(mover, targetX, targetY, speed, meff, range, isRepeat, bean)**
```
剃
mover, 移动的单位
x, y, 目标XY坐标
speed, 速度
meff, 移动特效
range, 伤害范围
isRepeat, 是否允许重复伤害
bean 伤害bean
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
