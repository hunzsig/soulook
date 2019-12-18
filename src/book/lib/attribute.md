attribute

> 调用：hattr.method()

---

* **了解属性**
```
life / 最大生命
mana / 最大魔法
move / 移动力
defend  / 护甲
attack_speed / 攻击速度
attack_hunt_type / 攻击伤害类型
attack_white / 白字攻击
attack_green / 绿字攻击
attack_range / 攻击范围（未实现）
sight / 视野
str_green / 绿字力量
agi_green / 绿字敏捷
int_green / 绿字智力
str_white / 白字力量
agi_white / 白字敏捷
int_white / 白字智力
life_back / 生命恢复
life_source / 生命源
life_source_current / 当前生命源
mana_back / 魔法恢复
mana_source / 魔法源
mana_source_current / 当前魔法源 
resistance / 魔抗(%)
toughness / 减伤
avoid / 回避(%)
aim / 命中(%)
knocking_odd / 物理暴击几率(%)
violence_odd / 魔法暴击几率(%)
knocking / 物理暴击百分比(%)
violence / 魔法暴击百分比(%)
punish / 最大硬直
punish_current / 当前硬直
meditative / 冥想力（无实际意义项，你可以用来实现个性效果）
help / 救助力
hemophagia / 吸血(%)
hemophagia_skill / 技能吸血(%)
split / 分裂(%)
split_range / 分裂范围 
gold_ratio / 黄金获得率(%)
lumber_ratio / 木头获得率(%)
exp_ratio / 经验获得率(%)
luck / 幸运(%)
invincible / 无敌(%)
weight / 负重
weight_current / 当前负重
hunt_amplitude / 伤害附加(%)
hunt_rebound / 反伤(%)
cure / 治疗效果
knocking_oppose / 物暴抵抗(%)
violence_oppose / 魔暴抵抗(%)
hemophagia_oppose / 吸血抵抗(%)
split_oppose / 分裂抵抗(%)
punish_oppose / 硬直抵抗(%)
hunt_rebound_oppose / 反伤抵抗(%)
swim_oppose / 眩晕抵抗(%)
silent_oppose / 沉默抵抗(%)
unarm_oppose / 缴械抵抗(%)
fetter_oppose / 缚足抵抗(%)
bomb_oppose / 爆破抵抗(%)
lightning_chain_oppose / 闪电链抵抗(%)
crack_fly_oppose / 击飞抵抗(%)
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
fire_oppose / 火抵抗
soil_oppose / 土抵抗
water_oppose / 水抵抗
ice_oppose / 冰抵抗
wind_oppose / 风抵抗
light_oppose / 光抵抗
dark_oppose / 暗抵抗
wood_oppose / 木抵抗
thunder_oppose / 雷抵抗
poison_oppose / 毒抵抗
ghost_oppose / 鬼抵抗
metal_oppose / 金抵抗
dragon_oppose / 龙抵抗
attack_buff / 攻击增益
attack_debuff / 负面攻击
skill_buff / 技能增益
skill_debuff / 负面技能
attack_effect / 攻击特效
skill_effect / 技能特效
swim / 眩晕
broken / 眩晕
silent / 眩晕
unarm / 缴械
fetter / 缚足
bomb / 爆破
lightning_chain / 闪电链
crack_fly / 击飞
odds / 几率
val / 数值
during / 持续时间
qty / 数量
reduce / 衰减
distance / 距离
high / 高度
```

* **setThreeBuff(buff)**
```
设置三围的影响
```

* **regAllAbility(whichUnit)**
```
为单位注册属性系统所需要的基础技能
```

* **resetSkill(whichUnit)**
```
单位重置注册所有属性技能（一般不使用）
```

* **set(whichUnit, during, data)**
```
设置单位永久,攻击附加魔法属性，生命等于100
魔法加50，护甲减1，移动2倍，生命恢复减少50%
hattr.set(u,0,{
    attack_hunt_type = "+magic",
    life = "=100",
    mana = "+50",
    defend = "-1",
    move = "*2",
    life_back = "/2",
})
设置单位临时移动增加100，持续3.33秒
hattr.set(u,3.33,{
    move = "+100",
})
```

* **get(whichUnit, attr)**
```
获取单位某属性
local move = hattr.get(u,"move")
```

* **reRegister(whichUnit)**
```
重置注册
```

* **huntUnit(bean)**
```
伤害一个单位
bean.effect 伤害特效
bean.huntKind伤害方式:
        attack 攻击
        skill 技能
        item 物品
        special 特殊（如眩晕、打断、分裂、爆炸、闪电链之类的）
bean.huntType伤害类型:
        physical 物理伤害则无视护甲<享受物理暴击加成，受护甲影响>
        magic 魔法<享受魔法暴击加成，受魔抗影响>
        real 真实<无视回避>
        absolute 绝对(无视回避、无视无敌)
        fire    火
        soil    土
        water   水
        ice     冰
        wind    风
        light   光
        dark    暗
        wood    木
        thunder 雷
        poison  毒
        ghost   鬼
        metal   金
        dragon  龙
bean.breakArmorType 无视的类型：{ 'defend', 'resistance', 'avoid' }
        沉默时，爆炸、闪电链、击飞会失效，其他不受影响
hattr.huntUnit({
    damage = 100,
    fromUnit = source,
    toUnit = targer,
    huntKind = "attack",
    huntType = "fire"
})
```




