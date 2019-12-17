attribute

 调用：hattr.method()

---

* **#include "attributeIds.j"**
```
加载预定义的物品编辑器技能/物品ID
当使用自行设定属性技能时，注释此代码
```

* **了解属性系统**
```
life / 最大生命
mana / 最大魔法
move / 移动力
defend  / 护甲
attackSpeed / 攻击速度
attackHuntType / 攻击伤害类型
attackPhysical / 白字攻击（vjass系统也称为物理攻击）
attackMagic / 绿字攻击（vjass系统也称为魔法攻击）
attackRange / 攻击范围（无效项）
sight / 视野
str / 绿字力量
agi / 绿字敏捷
int / 绿字智力
strWhite / 白字力量
agiWhite / 白字敏捷
intWhite / 白字智力
lifeBack / 生命恢复
lifeSource / 生命源
lifeSourceCurrent / 当前生命源
manaBack / 魔法恢复
manaSource / 魔法源
manaSourceCurrent / 当前魔法源 
resistance / 魔抗
toughness / 韧性
avoid / 回避
aim / 命中
knocking / 物理暴击 
violence / 魔法暴击 
punish / 最大硬直
punishCurrent / 当前硬直
meditative / 冥想力（无用项）
help / 救助力
hemophagia / 吸血
hemophagiaSkill / 技能吸血
split / 分裂
splitRange / 分裂范围 
goldRatio / 黄金获得率
lumberRatio / 木头获得率
expRatio / 经验获得率
luck / 幸运
invincible / 无敌
weight / 负重
weightCurrent / 当前负重
huntAmplitude / 伤害附加
huntRebound / 反伤
cure / 治疗效果
knockingOppose / 物暴抵抗
violenceOppose / 魔暴抵抗
hemophagiaOppose / 吸血抵抗
splitOppose / 分裂抵抗
punishOppose / 硬直抵抗
huntReboundOppose / 反伤抵抗
swimOppose / 眩晕抵抗
heavyOppose / 沉重抵抗
breakOppose / 打断抵抗
unluckOppose / 霉运抵抗
silentOppose / 沉默抵抗
unarmOppose / 缴械抵抗
fetterOppose / 缚足抵抗
bombOppose / 爆破抵抗
lightningChainOppose / 闪电链抵抗
crackFlyOppose / 击飞抵抗
fire / 火攻击
soil / 土攻击
water / 水攻击
ice / 冰攻击
wind / 风攻击
light / 光攻击
dark / 暗攻击
wood / 木攻击
thunder / 雷攻击
poison / 毒攻击
ghost / 鬼攻击
metal / 金攻击
dragon / 龙攻击
fireOppose / 火抵抗
soilOppose / 土抵抗
waterOppose / 水抵抗
iceOppose / 冰抵抗
windOppose / 风抵抗
lightOppose / 光抵抗
darkOppose / 暗抵抗
woodOppose / 木抵抗
thunderOppose / 雷抵抗
poisonOppose / 毒抵抗
ghostOppose / 鬼抵抗
metalOppose / 金抵抗
dragonOppose / 龙抵抗
lifeBackVal / 特效增益 - 生命恢复值
lifeBackDuring / 特效增益 - 生命恢复特效效果的持续时间
manaBackVal / 特效增益 - 魔法恢复值
manaBackDuring / 特效增益 -魔法恢复特效效果的持续时间
attackSpeedVal / 特效增益 - 攻击速度百分比
attackSpeedDuring / 特效增益 - 攻击速度特效效果的持续时间
attackPhysicalVal / 特效增益 - 白字攻击值
attackPhysicalDuring / 特效增益 - 白字攻击特效效果的持续时间
attackMagicVal / 特效增益 - 绿字攻击值
attackMagicDuring / 特效增益 - 绿字攻击特效效果的持续时间
attackRangeVal / 特效增益 - 攻击范围值
attackRangeDuring / 特效增益 -  攻击范围特效效果的持续时间
sightVal / 特效增益 - 视野范围值
sightDuring / 特效增益 - 视野范围特效效果的持续时间
moveVal / 特效增益 - 移动力值
moveDuring / 特效增益 - 移动力特效效果的持续时间
aimVal / 特效增益 - 命中值
aimDuring / 特效增益 - 命中特效效果的持续时间
strVal / 特效增益 - 绿字力量值
strDuring / 特效增益 - 绿字力量特效效果的持续时间
agiVal / 特效增益 - 绿字敏捷值
agiDuring / 特效增益 - 绿字敏捷特效效果的持续时间
intVal / 特效增益 - 绿字智力值
intDuring / 特效增益 - 绿字智力特效效果的持续时间
knockingVal / 特效增益 - 物理暴击值
knockingDuring / 特效增益 - 物理暴击特效效果的持续时间
violenceVal / 特效增益 - 魔法暴击值
violenceDuring / 特效增益 - 魔法暴击特效效果的持续时间
hemophagiaVal / 特效增益 - 吸血值
hemophagiaDuring / 特效增益 - 吸血特效效果的持续时间
hemophagiaSkillVal / 特效增益 - 技能吸血值
hemophagiaSkillDuring /特效增益 -  技能吸血特效效果的持续时间
splitVal / 特效增益 - 分裂值
splitDuring / 特效增益 - 分裂特效效果的持续时间
luckVal / 特效增益 - 幸运值
luckDuring / 特效增益 - 幸运特效效果的持续时间
huntAmplitudeVal / 特效增益 - 伤害增幅百分比
huntAmplitudeDuring / 特效增益 - 伤害增幅特效效果的持续时间
fireVal / 特效增益 - 火攻击百分比
fireDuring / 特效增益 - 火攻击特效效果的持续时间
soilVal / 特效增益 - 土攻击百分比
soilDuring / 特效增益 - 土攻击特效效果的持续时间
waterVal / 特效增益 - 水攻击百分比
waterDuring / 特效增益 - 水攻击特效效果的持续时间
iceVal / 特效增益 - 冰攻击百分比
iceDuring / 特效增益 - 冰攻击特效效果的持续时间
windVal / 特效增益 - 风攻击百分比
windDuring / 特效增益 - 风攻击特效效果的持续时间
lightVal / 特效增益 - 光攻击百分比
lightDuring / 特效增益 - 光攻击特效效果的持续时间
darkVal / 特效增益 - 暗攻击百分比
darkDuring / 特效增益 - 暗攻击特效效果的持续时间
woodVal / 特效增益 - 木攻击百分比
woodDuring / 特效增益 - 木攻击特效效果的持续时间
thunderVal / 特效增益 - 雷攻击百分比
thunderDuring / 特效增益 - 雷攻击特效效果的持续时间
poisonVal / 特效增益 - 毒攻击百分比
poisonDuring / 特效增益 - 毒攻击特效效果的持续时间
ghostVal / 特效增益 - 鬼攻击百分比
ghostDuring / 特效增益 - 鬼攻击特效效果的持续时间
metalVal / 特效增益 - 金攻击百分比
metalDuring / 特效增益 - 金攻击特效效果的持续时间
dragonVal / 特效增益 - 龙攻击百分比
dragonDuring / 特效增益 - 龙攻击特效效果的持续时间
fireOpposeVal / 特效增益 - 火抵抗百分比
fireOpposeDuring / 特效增益 - 火抵抗特效效果的持续时间
soilOpposeVal / 特效增益 - 土抵抗百分比
soilOpposeDuring / 特效增益 - 土抵抗特效效果的持续时间
waterOpposeVal / 特效增益 - 水抵抗百分比
waterOpposeDuring / 特效增益 - 水抵抗特效效果的持续时间
iceOpposeVal / 特效增益 - 冰抵抗百分比
iceOpposeDuring / 特效增益 - 冰抵抗特效效果的持续时间
windOpposeVal / 特效增益 - 风抵抗百分比
windOpposeDuring / 特效增益 - 风抵抗特效效果的持续时间
lightOpposeVal / 特效增益 - 光抵抗百分比
lightOpposeDuring / 特效增益 - 光抵抗特效效果的持续时间
darkOpposeVal / 特效增益 - 暗抵抗百分比
darkOpposeDuring / 特效增益 - 暗抵抗特效效果的持续时间
woodOpposeVal / 特效增益 - 木抵抗百分比
woodOpposeDuring / 特效增益 - 木抵抗特效效果的持续时间
thunderOpposeVal / 特效增益 - 雷抵抗百分比
thunderOpposeDuring / 特效增益 - 雷抵抗特效效果的持续时间
poisonOpposeVal / 特效增益 - 毒抵抗百分比
poisonOpposeDuring / 特效增益 - 毒抵抗特效效果的持续时间
ghostOpposeVal / 特效增益 - 鬼抵抗百分比
ghostOpposeDuring / 特效增益 - 鬼抵抗特效效果的持续时间
metalOpposeVal / 特效增益 - 金抵抗百分比
metalOpposeDuring / 特效增益 - 金抵抗特效效果的持续时间
dragonOpposeVal / 特效增益 - 龙抵抗百分比
dragonOpposeDuring / 特效增益 - 龙抵抗特效效果的持续时间
toxicVal / 负面伤害特效 - 中毒值
toxicDuring / 负面伤害特效 - 中毒特效效果的持续时间
burnVal / 负面伤害特效 - 灼烧值
burnDuring / 负面伤害特效 - 灼烧特效效果的持续时间
dryVal / 负面伤害特效 - 枯竭值
dryDuring / 负面伤害特效 - 枯竭特效效果的持续时间
freezeVal / 负面伤害特效 - 冻结值
freezeDuring / 负面伤害特效 - 冻结特效效果的持续时间
coldVal / 负面伤害特效 - 寒冷值
coldDuring / 负面伤害特效 - 寒冷特效效果的持续时间
bluntVal / 负面伤害特效 - 迟钝值
bluntDuring / 负面伤害特效 - 迟钝特效效果的持续时间
myopiaVal / 负面伤害特效 - 短视值
myopiaDuring / 负面伤害特效 - 短视特效效果的持续时间
muggleVal / 负面伤害特效 - 麻瓜值
muggleDuring / 负面伤害特效 - 麻瓜特效效果的持续时间
blindVal / 负面伤害特效 - 致盲值
blindDuring / 负面伤害特效 - 致盲特效效果的持续时间
corrosionVal / 负面伤害特效 - 腐蚀值
corrosionDuring / 负面伤害特效 - 腐蚀特效效果的持续时间
chaosVal / 负面伤害特效 - 混乱值
chaosDuring / 负面伤害特效 - 混乱特效效果的持续时间
twineVal / 负面伤害特效 - 缠绕值
twineDuring / 负面伤害特效 - 缠绕特效效果的持续时间
drunkVal / 负面伤害特效 - 醉酒
drunkDuring / 负面伤害特效 - 醉酒特效效果的持续时间
tortuaVal / 负面伤害特效 - 剧痛值
tortuaDuring / 负面伤害特效 - 剧痛特效效果的持续时间
weakVal / 负面伤害特效 - 乏力值
weakDuring / 负面伤害特效 - 乏力特效效果的持续时间
astrictVal / 负面伤害特效 - 束缚值
astrictDuring / 负面伤害特效 - 束缚特效效果的持续时间
foolishVal / 负面伤害特效 - 愚蠢值
foolishDuring / 负面伤害特效 - 愚蠢特效效果的持续时间
dullVal / 负面伤害特效 - 粗钝值
dullDuring / 负面伤害特效 - 粗钝特效效果的持续时间
dirtVal / 负面伤害特效 - 尘迹值
dirtDuring / 负面伤害特效 - 尘迹特效效果的持续时间
swimOdds / 负面伤害特效 - 眩晕几率
swimDuring / 负面伤害特效 - 眩晕特效效果的持续时间
heavyOdds / 负面伤害特效 - 沉重几率
heavyVal / 负面伤害特效 - 沉重特效效果的持续时间
breakOdds / 负面伤害特效 - 打断几率
breakDuring / 负面伤害特效 - 打断特效效果的持续时间
unluckVal / 负面伤害特效 - 霉运值
unluckDuring / 负面伤害特效 - 霉运特效效果的持续时间
silentOdds / 负面伤害特效 - 沉默几率
silentDuring / 负面伤害特效 - 沉默特效效果的持续时间
unarmOdds / 负面伤害特效 - 缴械几率
unarmDuring / 负面伤害特效 - 缴械特效效果的持续时间
fetterOdds / 负面伤害特效 - 缚足几率
fetterDuring / 负面伤害特效 - 缚足特效效果的持续时间
bombVal / 负面伤害特效 - 爆破值
bombOdds / 负面伤害特效 - 爆破几率
bombModel / 负面伤害特效 - 爆破特效特效字符
lightningChainVal / 负面伤害特效 - 闪电链值
lightningChainOdds / 负面伤害特效 - 闪电链几率
lightningChainQty / 负面伤害特效 - 闪电链打击单位数
lightningChainReduce / 负面伤害特效 - 闪电链衰减百分比
lightningChainModel / 负面伤害特效 - 闪电链特效特效字符
crackFlyVal / 负面伤害特效 - 击飞值
crackFlyOdds / 负面伤害特效 - 击飞几率
crackFlyDistance / 负面伤害特效 - 击飞距离
crackFlyHigh / 负面伤害特效 - 击飞高度
```

* **regAllAttrSkill**
```
单位注册所有属性技能
```

* **resetSkill**
```
单位重置注册所有属性技能（一般不使用）
```

* **initAttr**
```
初始化属性参数，并返回验证单位是否初始化过参数
```

* **isInit**
```
检查单位是否已经初始化
```

* **resetAttrGroups**
```
注册单位进默认属性判断的单位组
```




