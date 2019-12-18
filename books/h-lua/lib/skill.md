skill
> 调用：hskill.method()

---

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

* **broken(u, sourceUnit, damage, percent)**
```
打断
!注意这个方法对中立被动无效
```

* **swim(u, during, sourceUnit, damage)**
```
眩晕
!注意这个方法对中立被动无效
```

* **silent(u, during, sourceUnit, damage)**
```
沉默
```

* **unarm(u, during, sourceUnit, damage)**
```
缴械
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

* **diy(bean, life)**
```
自定义技能 - 对单位/对XY/对点
bean = {
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

* **lightningChain(codename, qty, change, range, isRepeat, bean)**
```
闪电链
codename 闪电效果类型 详情查看 hLightning
qty 传递单位数
reduce 递减率
eff 击打特效
isRepeat 是否允许同一个单位重复打击（临近2次不会同一个）
bean 伤害bean(同hskill.damage)
```

* **shapeshift(u, during, modelFrom, modelTo, eff, attrData)**
```
变身[参考 h-lua变身技能模板]
!modelFrom 技能模板 参考 h-lua SLK
!modelTo 技能模板 参考 h-lua SLK
```

* **crackFly(distance, high, during, bean)**
```
击飞
distance 击退距离
high 击飞高度
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

