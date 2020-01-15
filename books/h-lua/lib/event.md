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

* **[重点]如何获取回调的数据**
```
以最常用的攻击事件为例子：
hevent.onAttack(whichUnit,function(evtData)
    --这个回调的evtData就包含了回调的所有数据了
end)
值得注意的是：
1、技能的ID已经自动转为string了，无需再此转换
2、所有的location，也就是点，自动转为(x,y,z)三个参数返回
```

* **onAttackDetect(whichUnit, action)**
```
当注意到攻击目标
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取被注意/目标单位
```

* **onAttackGetTarget(whichUnit, action)**
```
当获取攻击目标
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取被获取/目标单位
```

* **onAttackReady(whichUnit, action)**
```
当准备攻击
evtData.triggerUnit 获取攻击单位
evtData.targetUnit 获取被攻击单位
evtData.attacker 获取攻击单位
```

* **onBeAttackReady(whichUnit, action)**
```
当准备被攻击
evtData.triggerUnit 获取被攻击单位
evtData.targetUnit 获取攻击单位
evtData.attacker 获取攻击单位
```

* **onAttack(whichUnit, action)**
```
当造成攻击
evtData.triggerUnit 获取攻击来源
evtData.targetUnit 获取被攻击单位
evtData.attacker 获取攻击来源
evtData.damage 获取初始伤害
evtData.damageKind 获取伤害方式
evtData.damageType 获取伤害类型
```

* **onBeAttack(whichUnit, action)**
```
当承受攻击
evtData.triggerUnit 获取被攻击单位
evtData.attacker 获取攻击来源
evtData.damage 获取初始伤害
evtData.damageKind 获取伤害方式
evtData.damageType 获取伤害类型
```

* **onSkillStudy(whichUnit, action)**
```
当学习技能
evtData.triggerUnit 获取学习单位
evtData.triggerSkill 获取学习技能ID
```

* **onSkillReady(whichUnit, action)**
```
当准备施放技能
evtData.triggerUnit 获取施放单位
evtData.targetUnit 获取目标单位(只对对目标施放有效)
evtData.triggerSkill 获取施放技能ID
evtData.targetX 获取施放目标点X
evtData.targetY 获取施放目标点Y
evtData.targetZ 获取施放目标点Z
```

* **onSkillStart(whichUnit, action)**
```
当开始施放技能
evtData.triggerUnit 获取施放单位
evtData.targetUnit 获取目标单位(只对对目标施放有效)
evtData.triggerSkill 获取施放技能ID
evtData.targetX 获取施放目标点X
evtData.targetY 获取施放目标点Y
evtData.targetZ 获取施放目标点Z
```

* **onSkillStop(whichUnit, action)**
```
当停止施放技能
evtData.triggerUnit 获取施放单位
evtData.triggerSkill 获取施放技能ID
```

* **onSkillHappen(whichUnit, action)**
```
当发动技能效果
evtData.triggerUnit 获取施放单位
evtData.targetUnit 获取目标单位(只对对目标施放有效)
evtData.triggerSkill 获取施放技能ID
evtData.targetX 获取施放目标点X
evtData.targetY 获取施放目标点Y
evtData.targetZ 获取施放目标点Z
```

* **onSkillOver(whichUnit, action)**
```
当施放技能结束
evtData.triggerUnit 获取施放单位
evtData.triggerSkill 获取施放技能ID
```

* **onItemUsed(whichUnit, action)**
```
当单位使用物品
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取触发物品
```

* **onItemSell(whichUnit, action)**
```
当出售物品(商店卖给玩家)
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取触发物品
```

* **onItemDrop(whichUnit, action)**
```
当丢弃物品
evtData.triggerUnit 获取触发/出售单位
evtData.targetUnit 获取购买单位
evtData.triggerItem 获取触发/出售物品
```

* **onItemGet(whichUnit, action)**
```
当获得物品
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取触发物品
```

* **onItemPawn(whichUnit, action)**
```
当抵押物品（玩家把物品扔给商店）
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取触发物品
```

* **onItemDestroy(whichUnit, action)**
```
当物品被破坏
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取触发物品
```

* **onItemMix(whichUnit, action)**
```
当合成物品
evtData.triggerUnit 获取触发单位
evtData.triggerItem 获取合成的物品
```

* **onItemSeparate(whichUnit, action)**
```
当拆分物品
evtData.triggerUnit 获取触发单位
evtData.id 获取拆分的物品ID
evtData.type 获取拆分的类型
    simple 单件拆分(同一种物品拆成很多件)
    mixed 合成品拆分(一种物品拆成零件的种类)
```


* **onDamage(whichUnit, action)**
```
当造成伤害
evtData.triggerUnit 获取伤害来源
evtData.targetUnit 获取被伤害单位
evtData.sourceUnit 获取伤害来源
evtData.damage 获取初始伤害
evtData.damageKind 获取伤害方式
evtData.damageType 获取伤害类型
```

* **onBeDamage(whichUnit, action)**
```
当承受伤害
evtData.triggerUnit 获取被伤害单位
evtData.sourceUnit 获取伤害来源
evtData.damage 获取初始伤害
evtData.damageKind 获取伤害方式
```

* **onAvoid(whichUnit, action)**
```
当回避攻击成功
evtData.triggerUnit 获取触发单位
evtData.attacker 获取攻击单位
```

* **onBeAvoid(whichUnit, action)**
```
当攻击被回避
evtData.triggerUnit 获取攻击单位
evtData.attacker 获取攻击单位
evtData.targetUnit 获取回避的单位
```

* **onBreakArmor(whichUnit, action)**
```
当破防（护甲/魔抗）成功
evtData.breakType 获取无视类型
evtData.triggerUnit 获取破甲单位
evtData.targetUnit 获取目标单位
evtData.value 获取破甲的数值
```

* **onBeBreakArmor**
```
当被成功破防（护甲/魔抗）
evtData.breakType 获取无视类型
evtData.triggerUnit 获取被破甲单位
evtData.sourceUnit 获取来源单位
evtData.value 获取破甲的数值
```

* **onSwim(whichUnit, action)**
```
当眩晕成功
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取被眩晕单位
evtData.during 获取眩晕时间（秒）
evtData.damage 获取眩晕伤害
```

* **onBeSwim(whichUnit, action)**
```
当被眩晕
evtData.triggerUnit 获取被眩晕单位
evtData.sourceUnit 获取来源单位
evtData.during 获取眩晕时间（秒）
evtData.damage 获取眩晕伤害
```

* **onBroken(whichUnit, action)**
```
当打断成功
evtData.triggerUnit 获取触发单位(打断单位)
evtData.targetUnit 获取被打断单位
evtData.damage 获取打断伤害
```

* **onBeBroken(whichUnit, action)**
```
当被打断
evtData.triggerUnit 获取被打断单位
evtData.sourceUnit 获取来源单位(打断单位)
evtData.damage 获取打断伤害
```

* **onSilent(whichUnit, action)**
```
当沉默成功
evtData.triggerUnit 获取触发单位(沉默单位)
evtData.targetUnit 获取被沉默单位
evtData.during 获取沉默时间（秒）
evtData.damage 获取沉默伤害
```

* **onBeSilent(whichUnit, action)**
```
当被沉默
evtData.triggerUnit 获取被沉默单位
evtData.sourceUnit 获取来源单位(使用沉默单位)
evtData.during 获取沉默时间（秒）
evtData.damage 获取沉默伤害
```

* **onUnarm(whichUnit, action)**
```
当缴械成功
evtData.triggerUnit 获取触发单位(缴械单位)
evtData.targetUnit 获取被缴械单位
evtData.during 获取缴械时间（秒）
evtData.damage 获取缴械伤害
```

* **onBeUnarm(whichUnit, action)**
```
当被缴械
evtData.triggerUnit 获取被缴械单位
evtData.sourceUnit 获取来源单位(使用缴械单位)
evtData.during 获取缴械时间（秒）
evtData.damage 获取缴械伤害
```

* **onFetter(whichUnit, action)**
```
当缚足成功
evtData.triggerUnit 获取触发单位(缚足单位)
evtData.targetUnit 获取被缚足单位
evtData.during 获取缚足时间（秒）
evtData.damage 获取缚足伤害
```

* **onBeFetter(whichUnit, action)**
```
当被缚足
evtData.triggerUnit 获取被缚足单位
evtData.sourceUnit 获取来源单位(使用缚足单位)
evtData.during 获取缚足时间（秒）
evtData.damage 获取缚足伤害
```

* **onBomb(whichUnit, action)**
```
当爆破成功
evtData.triggerUnit 获取触发单位(爆破单位)
evtData.targetUnit 获取被爆破单位
evtData.damage 获取爆破伤害
evtData.range 获取爆破范围
```

* **onBeBomb(whichUnit, action)**
```
当被爆破
evtData.triggerUnit 获取被爆破单位
evtData.sourceUnit 获取来源单位(使用爆破单位)
evtData.damage 获取爆破伤害
evtData.range 获取爆破范围
```


* **onLightningChain(whichUnit, action)**
```
当闪电链电到人
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取被闪电链电到的单位
evtData.damage 获取闪电链伤害
evtData.range 获取闪电链范围
evtData.qty 获取闪电链数量
```

* **onBeLightningChain(whichUnit, action)**
```
当被闪电链电到
evtData.triggerUnit 获取被闪电链单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取闪电链范围
evtData.index 获取单位是第几个被电到的
```

* **onCrackFly(whichUnit, action)**
```
当击飞成功
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取被击飞单位
evtData.damage 获取击飞伤害
evtData.high 获取击飞高度
evtData.distance 获取击飞距离
```

* **onBeCrackFly(whichUnit, action)**
```
当被击飞
evtData.triggerUnit 获取被击飞单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取击飞伤害
evtData.high 获取击飞高度
evtData.distance 获取击飞距离
```

* **onRebound(whichUnit, action)**
```
当反伤时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取反伤伤害
```

* **onNoAvoid(whichUnit, action)**
```
当造成无法回避的伤害时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取伤害值
```

* **onBeNoAvoid(whichUnit, action)**
```
当被造成无法回避的伤害时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取暴击伤害值
```

* **onKnocking(whichUnit, action)**
```
当物理暴击时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取暴击伤害值
evtData.value 获取暴击几率百分比
evtData.percent 获取暴击增幅百分比
```

* **onBeKnocking(whichUnit, action)**
```
当承受物理暴击时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取暴击伤害值
evtData.value 获取暴击几率百分比
evtData.percent 获取暴击增幅百分比
```

* **onViolence(whichUnit, action)**
```
当魔法暴击时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取暴击伤害值
evtData.value 获取暴击几率百分比
evtData.percent 获取暴击增幅百分比
```

* **onBeViolence(whichUnit, action)**
```
当承受魔法暴击时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取暴击伤害值
evtData.value 获取暴击几率百分比
evtData.percent 获取暴击增幅百分比
```

* **onSpilt(whichUnit, action)**
```
当分裂时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取分裂伤害值
evtData.range 获取分裂范围(px)
evtData.percent 获取分裂百分比
```

* **onBeSpilt(whichUnit, action)**
```
当承受分裂时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取分裂伤害值
evtData.range 获取分裂范围(px)
evtData.percent 获取分裂百分比
```

* **onLimitToughness(whichUnit, action)**
```
当发生极限减伤抵抗（减伤不足以抵扣）
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
```

* **onHemophagia(whichUnit, action)**
```
当吸血时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取吸血值
evtData.percent 获取吸血百分比
```

* **onBeHemophagia(whichUnit, action)**
```
当被吸血时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取吸血值
evtData.percent 获取吸血百分比
```

* **onSkillHemophagia(whichUnit, action)**
```
当技能吸血时
evtData.triggerUnit 获取触发单位
evtData.targetUnit 获取目标单位
evtData.damage 获取吸血值
evtData.percent 获取吸血百分比
```

* **onBeSkillHemophagia(whichUnit, action)**
```
当被技能吸血时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.damage 获取吸血值
evtData.percent 获取吸血百分比
```

* **onPunish(whichUnit, action)**
```
当硬直时
evtData.triggerUnit 获取触发单位
evtData.sourceUnit 获取来源单位
evtData.value 获取硬直程度百分比
evtData.during 获取持续时间
```

* **onDead(whichUnit, action)**
```
当死亡时
evtData.triggerUnit 获取触发单位
evtData.killer 获取凶手单位
```

* **onKill(whichUnit, action)**
```
当击杀时
evtData.triggerUnit 获取触发单位
evtData.killer 获取凶手单位
evtData.targetUnit 获取死亡单位
```

* **onReborn(whichUnit, action)**
```
当复活时[复活时(必须使用 hunit.reborn 方法才能嵌入到事件系统)]
evtData.triggerUnit 获取触发单位
```

* **onLevelUp(whichUnit, action)**
```
当提升升等级时
evtData.triggerUnit 获取触发单位
evtData.value 获取提升了多少级
```

* **onSummon(whichUnit, action)**
```
当被召唤时
evtData.triggerUnit 获取被召唤单位
```

* **onEnterUnitRange(whichUnit, range, action)**
```
当进入某单位（whichUnit）范围内
evtData.triggerUnit 获取被进入范围的中心单位
evtData.triggerEnterUnit 获取进入范围的单位
evtData.range 获取设定范围
```

* **onEnterRect(whichRect, action)**
```
当进入某区域内
evtData.triggerRect 获取被进入的矩形区域
evtData.triggerUnit 获取进入矩形区域的单位
```

* **onLeaveRect(whichRect, action)**
```
当离开某区域内
evtData.triggerRect 获取被离开的矩形区域
evtData.triggerUnit 获取离开矩形区域的单位
```

* **onChat(whichPlayer, chatStr, matchAll, action)**
```
当聊天时
params matchAll 是否全匹配，false为like
evtData.triggerPlayer 获取聊天的玩家
evtData.triggerString 获取聊天的内容
evtData.triggerStringMatched 获取匹配命中的内容
```

* **onEsc(whichPlayer, action)**
```
当按ESC
evtData.triggerPlayer 获取触发玩家
```

* **onSelection(whichPlayer, qty, action)**
```
当玩家选择单位
whichPlayer 为nil时，指所有玩家
qty 需要点击次数
evtData.triggerPlayer 获取触发玩家
evtData.triggerUnit 获取触发单位
```

* **onUnSelection(whichPlayer, action)**
```
当玩家取消选择单位
evtData.triggerPlayer 获取触发玩家
evtData.triggerUnit 获取触发单位
```

* **onUpgradeStart(whichUnit, action)**
```
当建筑升级开始时
evtData.triggerUnit 获取触发单位
```

* **onUpgradeCancel(whichUnit, action)**
```
当建筑升级取消时
evtData.triggerUnit 获取触发单位
```

* **onUpgradeFinish(whichUnit, action)**
```
当建筑升级完成时
evtData.triggerUnit 获取触发单位
```

* **onConstructStart(whichPlayer, action)**
```
当任意建筑建造开始时
evtData.triggerUnit 获取触发单位
```

* **onConstructCancel(whichPlayer, action)**
```
当任意建筑建造取消时
evtData.cancelledStructure 获取触发单位
```

* **onConstructFinish(whichPlayer, action)**
```
当任意建筑建造完成时
evtData.cancelledStructure 获取触发单位
```

* **onRegister(action)**
```
当任意单位注册进h-lua系统时(注意这是全局事件)
evtData.triggerUnit 获取触发单位
```

* **onPickHero(action)**
```
当任意单位经过hero方法被玩家所挑选为英雄时(注意这是全局事件)
evtData.triggerPlayer 获取触发玩家
evtData.triggerUnit 获取触发单位
```
