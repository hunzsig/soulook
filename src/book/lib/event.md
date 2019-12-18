event

> 调用：hevent.method()

---

* **setLastDamageUnit(which, last)**
```
设置某单位最后的伤害者
```

* **setLastDamageUnit(which, last)**
```
设置某单位最后的伤害者
```

* **triggerEvent(bean)**
```
触发事件（通用）
! 慎用，建议看源码来用
```

* **get()**
```
事件get方法，用于触发事件时获取触发对象
getTriggerUnit()
getTriggerEnterUnit()
getTriggerRect()
getTriggerItem()
getTriggerPlayer()
getTriggerString()
getTriggerStringMatched()
getTriggerSkill()
getSourceUnit()
getTargetUnit()
getTargetLoc()
getAttacker()
getKiller()
getDamage()
getRealDamage()
getId()
getRange()
getQty()
getIndex()
getHigh()
getDistance()
getValue()
getPercent()
getDuring()
getDamageKind()
getDamageType()
getBreakType()
getType()
getIsNoAvoid()
```

* **onAttackDetect(whichUnit, action)**
```
当注意到攻击目标
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取被注意/目标单位
```

* **onAttackGetTarget(whichUnit, action)**
```
当获取攻击目标
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取被获取/目标单位
```

* **onAttackReady(whichUnit, action)**
```
当准备攻击
@ hevent.getTriggerUnit 获取攻击单位
@ hevent.getTargetUnit 获取被攻击单位
@ hevent.getAttacker 获取攻击单位
```

* **onBeAttackReady(whichUnit, action)**
```
当准备被攻击
@ hevent.getTriggerUnit 获取被攻击单位
@ hevent.getTargetUnit 获取攻击单位
@ hevent.getAttacker 获取攻击单位
```

* **onAttack(whichUnit, action)**
```
当造成攻击
@ hevent.getTriggerUnit 获取攻击来源
@ hevent.getTargetUnit 获取被攻击单位
@ hevent.getAttacker 获取攻击来源
@ hevent.getDamage 获取初始伤害
@ hevent.getRealDamage 获取实际伤害
@ hevent.getDamageKind 获取伤害方式
@ hevent.getDamageType 获取伤害类型
```

* **onBeAttack(whichUnit, action)**
```
当承受攻击
@ hevent.getTriggerUnit 获取被攻击单位
@ hevent.getAttacker 获取攻击来源
@ hevent.getDamage 获取初始伤害
@ hevent.getRealDamage 获取实际伤害
@ hevent.getDamageKind 获取伤害方式
@ hevent.getDamageType 获取伤害类型
```

* **onSkillStudy(whichUnit, action)**
```
当学习技能
@ hevent.getTriggerUnit 获取学习单位
@ hevent.getTriggerSkill 获取学习技能ID
```

* **onSkillReady(whichUnit, action)**
```
当准备施放技能
@ hevent.getTriggerUnit 获取施放单位
@ hevent.getTargetUnit 获取目标单位(只对对目标施放有效)
@ hevent.getTriggerSkill 获取施放技能ID
@ hevent.getTargetLoc 获取施放目标点
```

* **onSkillStart(whichUnit, action)**
```
当开始施放技能
@ hevent.getTriggerUnit 获取施放单位
@ hevent.getTargetUnit 获取目标单位(只对对目标施放有效)
@ hevent.getTriggerSkill 获取施放技能ID
@ hevent.getTargetLoc 获取施放目标点
```

* **onSkillStop(whichUnit, action)**
```
当停止施放技能
@ hevent.getTriggerUnit 获取施放单位
@ hevent.getTriggerSkill 获取施放技能ID
```

* **onSkillHappen(whichUnit, action)**
```
当发动技能效果
@ hevent.getTriggerUnit 获取施放单位
@ hevent.getTargetUnit 获取目标单位(只对对目标施放有效)
@ hevent.getTriggerSkill 获取施放技能ID
@ hevent.getTargetLoc 获取施放目标点
```

* **onSkillOver(whichUnit, action)**
```
当施放技能结束
@ hevent.getTriggerUnit 获取施放单位
@ hevent.getTriggerSkill 获取施放技能ID
```

* **onItemUsed(whichUnit, action)**
```
当单位使用物品
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取触发物品
```

* **onItemSell(whichUnit, action)**
```
当出售物品(商店卖给玩家)
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取触发物品
```

* **onItemDrop(whichUnit, action)**
```
当丢弃物品
@ hevent.getTriggerUnit 获取触发/出售单位
@ hevent.getTargetUnit 获取购买单位
@ hevent.getTriggerItem 获取触发/出售物品
```

* **onItemGet(whichUnit, action)**
```
当获得物品
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取触发物品
```

* **onItemPawn(whichUnit, action)**
```
当抵押物品（玩家把物品扔给商店）
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取触发物品
```

* **onItemDestroy(whichUnit, action)**
```
当物品被破坏
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取触发物品
```

* **onItemMix(whichUnit, action)**
```
当合成物品
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTriggerItem 获取合成的物品
```

* **onItemSeparate(whichUnit, action)**
```
当拆分物品
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getId 获取拆分的物品ID
@ hevent.getType 获取拆分的类型
    simple 单件拆分(同一种物品拆成很多件)
    mixed 合成品拆分(一种物品拆成零件的种类)
```


* **onDamage(whichUnit, action)**
```
当造成伤害
@ hevent.getTriggerUnit 获取伤害来源
@ hevent.getTargetUnit 获取被伤害单位
@ hevent.getSourceUnit 获取伤害来源
@ hevent.getDamage 获取初始伤害
@ hevent.getRealDamage 获取实际伤害
@ hevent.getDamageKind 获取伤害方式
@ hevent.getDamageType 获取伤害类型
```

* **onBeDamage(whichUnit, action)**
```
当承受伤害
@ hevent.getTriggerUnit 获取被伤害单位
@ hevent.getSourceUnit 获取伤害来源
@ hevent.getDamage 获取初始伤害
@ hevent.getRealDamage 获取实际伤害
@ hevent.getDamageKind 获取伤害方式
```

* **onAvoid(whichUnit, action)**
```
当回避攻击成功
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getAttacker 获取攻击单位
```

* **onBeAvoid(whichUnit, action)**
```
当攻击被回避
@ hevent.getTriggerUnit 获取攻击单位
@ hevent.getAttacker 获取攻击单位
@ hevent.getTargetUnit 获取回避的单位
```

* **onBreakArmor(whichUnit, action)**
```
当破防（护甲/魔抗）成功
@ hevent.getBreakType 获取无视类型
@ hevent.getTriggerUnit 获取破甲单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getValue 获取破甲的数值
```

* **onBeBreakArmor**
```
当被成功破防（护甲/魔抗）
@ hevent.getBreakType 获取无视类型
@ hevent.getTriggerUnit 获取被破甲单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getValue 获取破甲的数值
```

* **onSwim(whichUnit, action)**
```
当眩晕成功
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取被眩晕单位
@ hevent.getPercent 获取眩晕几率百分比
@ hevent.getDuring 获取眩晕时间（秒）
@ hevent.getDamage 获取眩晕伤害
```

* **onBeSwim(whichUnit, action)**
```
当被眩晕
@ hevent.getTriggerUnit 获取被眩晕单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getPercent 获取眩晕几率百分比
@ hevent.getDuring 获取眩晕时间（秒）
@ hevent.getDamage 获取眩晕伤害
```

* **onBroken(whichUnit, action)**
```
当打断成功
@ hevent.getTriggerUnit 获取触发单位(打断单位)
@ hevent.getTargetUnit 获取被打断单位
@ hevent.getPercent 获取打断几率百分比
@ hevent.getDamage 获取打断伤害
```

* **onBeBroken(whichUnit, action)**
```
当被打断
@ hevent.getTriggerUnit 获取被打断单位
@ hevent.getSourceUnit 获取来源单位(打断单位)
@ hevent.getPercent 获取打断几率百分比
@ hevent.getDamage 获取打断伤害
```

* **onSilent(whichUnit, action)**
```
当沉默成功
@ hevent.getTriggerUnit 获取触发单位(沉默单位)
@ hevent.getTargetUnit 获取被沉默单位
@ hevent.getPercent 获取沉默几率百分比
@ hevent.getDuring 获取沉默时间（秒）
@ hevent.getDamage 获取沉默伤害
```

* **onBeSilent(whichUnit, action)**
```
当被沉默
@ hevent.getTriggerUnit 获取被沉默单位
@ hevent.getSourceUnit 获取来源单位(使用沉默单位)
@ hevent.getPercent 获取沉默几率百分比
@ hevent.getDuring 获取沉默时间（秒）
@ hevent.getDamage 获取沉默伤害
```

* **onUnarm(whichUnit, action)**
```
当缴械成功
@ hevent.getTriggerUnit 获取触发单位(缴械单位)
@ hevent.getTargetUnit 获取被缴械单位
@ hevent.getPercent 获取缴械几率百分比
@ hevent.getDuring 获取缴械时间（秒）
@ hevent.getDamage 获取缴械伤害
```

* **onBeUnarm(whichUnit, action)**
```
当被缴械
@ hevent.getTriggerUnit 获取被缴械单位
@ hevent.getSourceUnit 获取来源单位(使用缴械单位)
@ hevent.getPercent 获取缴械几率百分比
@ hevent.getDuring 获取缴械时间（秒）
@ hevent.getDamage 获取缴械伤害
```

* **onFetter(whichUnit, action)**
```
当缚足成功
@ hevent.getTriggerUnit 获取触发单位(缚足单位)
@ hevent.getTargetUnit 获取被缚足单位
@ hevent.getPercent 获取缚足几率百分比
@ hevent.getDuring 获取缚足时间（秒）
@ hevent.getDamage 获取缚足伤害
```

* **onBeFetter(whichUnit, action)**
```
当被缚足
@ hevent.getTriggerUnit 获取被缚足单位
@ hevent.getSourceUnit 获取来源单位(使用缚足单位)
@ hevent.getPercent 获取缚足几率百分比
@ hevent.getDuring 获取缚足时间（秒）
@ hevent.getDamage 获取缚足伤害
```

* **onBomb(whichUnit, action)**
```
当爆破成功
@ hevent.getTriggerUnit 获取触发单位(爆破单位)
@ hevent.getTargetUnit 获取被爆破单位
@ hevent.getPercent 获取爆破几率百分比
@ hevent.getDamage 获取爆破伤害
@ hevent.getRange 获取爆破范围
```

* **onBeBomb(whichUnit, action)**
```
当被爆破
@ hevent.getTriggerUnit 获取被爆破单位
@ hevent.getSourceUnit 获取来源单位(使用爆破单位)
@ hevent.getPercent 获取爆破几率百分比
@ hevent.getDamage 获取爆破伤害
@ hevent.getRange 获取爆破范围
```


* **onLightningChain(whichUnit, action)**
```
当闪电链电到人
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取被闪电链电到的单位
@ hevent.getPercent 获取闪电链几率百分比
@ hevent.getDamage 获取闪电链伤害
@ hevent.getRange 获取闪电链范围
@ hevent.getQty 获取闪电链数量
```

* **onBeLightningChain(whichUnit, action)**
```
当被闪电链电到
@ hevent.getTriggerUnit 获取被闪电链单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getPercent 获取闪电链伤害
@ hevent.getDamage 获取闪电链范围
@ hevent.getIndex 获取单位是第几个被电到的
```

* **onCrackFly(whichUnit, action)**
```
当击飞成功
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取被击飞单位
@ hevent.getPercent 获取击飞几率百分比
@ hevent.getDamage 获取击飞伤害
@ hevent.getHigh 获取击飞高度
@ hevent.getDistance 获取击飞距离
```

* **onBeCrackFly(whichUnit, action)**
```
当被击飞
@ hevent.getTriggerUnit 获取被击飞单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取击飞伤害
@ hevent.getHigh 获取击飞高度
@ hevent.getDistance 获取击飞距离
```

* **onRebound(whichUnit, action)**
```
当反伤时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取反伤伤害
```

* **onNoAvoid(whichUnit, action)**
```
当造成无法回避的伤害时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取伤害值
```

* **onBeNoAvoid(whichUnit, action)**
```
当被造成无法回避的伤害时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取暴击伤害值
```

* **onKnocking(whichUnit, action)**
```
当物理暴击时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取暴击伤害值
@ hevent.getValue 获取暴击几率百分比
@ hevent.getPercent 获取暴击增幅百分比
```

* **onBeKnocking(whichUnit, action)**
```
当承受物理暴击时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取暴击伤害值
@ hevent.getValue 获取暴击几率百分比
@ hevent.getPercent 获取暴击增幅百分比
```

* **onViolence(whichUnit, action)**
```
当魔法暴击时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取暴击伤害值
@ hevent.getValue 获取暴击几率百分比
@ hevent.getPercent 获取暴击增幅百分比
```

* **onBeViolence(whichUnit, action)**
```
当承受魔法暴击时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取暴击伤害值
@ hevent.getValue 获取暴击几率百分比
@ hevent.getPercent 获取暴击增幅百分比
```

* **onSpilt(whichUnit, action)**
```
当分裂时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取分裂伤害值
@ hevent.getRange 获取分裂范围(px)
@ hevent.getPercent 获取分裂百分比
```

* **onBeSpilt(whichUnit, action)**
```
当承受分裂时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取分裂伤害值
@ hevent.getRange 获取分裂范围(px)
@ hevent.getPercent 获取分裂百分比
```

* **onLimitToughness(whichUnit, action)**
```
当发生极限减伤抵抗（减伤不足以抵扣）
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
```

* **onHemophagia(whichUnit, action)**
```
当吸血时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取吸血值
@ hevent.getPercent 获取吸血百分比
```

* **onBeHemophagia(whichUnit, action)**
```
当被吸血时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取吸血值
@ hevent.getPercent 获取吸血百分比
```

* **onSkillHemophagia(whichUnit, action)**
```
当技能吸血时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getTargetUnit 获取目标单位
@ hevent.getDamage 获取吸血值
@ hevent.getPercent 获取吸血百分比
```

* **onBeSkillHemophagia(whichUnit, action)**
```
当被技能吸血时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getDamage 获取吸血值
@ hevent.getPercent 获取吸血百分比
```

* **onPunish(whichUnit, action)**
```
当硬直时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getSourceUnit 获取来源单位
@ hevent.getValue 获取硬直程度百分比
@ hevent.getDuring 获取持续时间
```

* **onDead(whichUnit, action)**
```
当死亡时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getKiller 获取凶手单位
```

* **onKill(whichUnit, action)**
```
当击杀时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getKiller 获取凶手单位
@ hevent.getTargetUnit 获取死亡单位
```

* **onReborn(whichUnit, action)**
```
当复活时[复活时(必须使用 hunit.reborn 方法才能嵌入到事件系统)]
@ hevent.getTriggerUnit 获取触发单位
```

* **onLevelUp(whichUnit, action)**
```
当提升升等级时
@ hevent.getTriggerUnit 获取触发单位
@ hevent.getValue 获取提升了多少级
```

* **onSummon(whichUnit, action)**
```
当被召唤时
@ hevent.getTriggerUnit 获取被召唤单位
```

* **onEnterUnitRange(whichUnit, range, action)**
```
当进入某单位（whichUnit）范围内
@ hevent.getTriggerUnit 获取被进入范围的中心单位
@ hevent.getTriggerEnterUnit 获取进入范围的单位
@ hevent.getRange 获取设定范围
```

* **onEnterRect(whichRect, action)**
```
当进入某区域内
@ hevent.getTriggerRect 获取被进入的矩形区域
@ hevent.getTriggerUnit 获取进入矩形区域的单位
```

* **onLeaveRect(whichRect, action)**
```
当离开某区域内
@ hevent.getTriggerRect 获取被离开的矩形区域
@ hevent.getTriggerUnit 获取离开矩形区域的单位
```

* **onChat(whichPlayer, chatStr, matchAll, action)**
```
当聊天时
params matchAll 是否全匹配，false为like
@ hevent.getTriggerPlayer 获取聊天的玩家
@ hevent.getTriggerString 获取聊天的内容
@ hevent.getTriggerStringMatched 获取匹配命中的内容
```

* **onEsc(whichPlayer, action)**
```
当按ESC
@ hevent.getTriggerPlayer 获取触发玩家
```

* **onSelection(whichPlayer, qty, action)**
```
当玩家选择单位
whichPlayer 为nil时，指所有玩家
qty 需要点击次数
@ hevent.getTriggerPlayer 获取触发玩家
@ hevent.getTriggerUnit 获取触发单位
```

* **onUnSelection(whichPlayer, action)**
```
当玩家取消选择单位
@ hevent.getTriggerPlayer 获取触发玩家
@ hevent.getTriggerUnit 获取触发单位
```

* **onUpgradeStart(whichUnit, action)**
```
当建筑升级开始时
@ hevent.getTriggerUnit 获取触发单位
```

* **onUpgradeCancel(whichUnit, action)**
```
当建筑升级取消时
@ hevent.getTriggerUnit 获取触发单位
```

* **onUpgradeFinish(whichUnit, action)**
```
当建筑升级完成时
@ hevent.getTriggerUnit 获取触发单位
```

* **onConstructStart(whichPlayer, action)**
```
当任意建筑建造开始时
@ hevent.getTriggerUnit 获取触发单位
```

* **onConstructCancel(whichPlayer, action)**
```
当任意建筑建造取消时
@ hevent.getCancelledStructure 获取触发单位
```

* **onConstructFinish(whichPlayer, action)**
```
当任意建筑建造完成时
@ hevent.getCancelledStructure 获取触发单位
```

* **onRegister(action)**
```
当任意单位注册进h-lua系统时(注意这是全局事件)
@ hevent.getTriggerUnit 获取触发单位
```

* **onPickHero(action)**
```
当任意单位经过hero方法被玩家所挑选为英雄时(注意这是全局事件)
@ hevent.getTriggerPlayer 获取触发玩家
@ hevent.getTriggerUnit 获取触发单位
```
