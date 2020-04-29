属性系统

---

```
h-lua 有强大的属性系统
能轻松几行代码就实现绝大多数属性的实时改动

黄金率 / 木头率 / 经验率 / 售卖率（%）
gold_ratio / lumber_ratio / exp_ratio / sell_ratio
    影响资源获取率
    售卖率以默认的50%为准，假如某玩家作者设置TA的售卖率不等于50，那么会自动算出差值，给予扣款或补偿

生命 / 生命恢复
life / life_back
    单位的最大生命值 / 每秒对生命恢复的量
    最小值 1

魔法 / 魔法恢复
mana / mana_back
    单位的最大魔法值 / 每秒对魔法恢复的量
    最小值 1

移动力
move
    [范围] 0～?取决于地图的平衡常数设置(一般设为522)，当camera采用zoomin模式时，最大移动力增加2倍
    每秒移动最大距离
    *数值无上限，但地图移动上限为522或1044（camera = zoomin）
    *假设移动力为2000，则实际移动仍为522，而其他由移动力影响的技能属性将以2000点计算

护甲
defend
    依照公式将抵消/增加受到的伤害比例
    假设当前护甲为 x ：
    正护甲抵伤公式：x/(x+200)
    负护甲增伤公式 ：abs(x)/(abs(x)x0.33+100)
    遇到无视护甲的伤害时，正护甲将会失效，如果此时护甲为负，依然会承受更大的伤害

魔抗（%）
resistance
    魔法伤害的抵抗因数
    如果魔抗小于0%，则额外承受同比例伤害,如-25%，则承受125%伤害
    如果魔抗大于等于100%时，则完全不受魔法伤害
    遇到无视魔抗的伤害时，正魔抗将会失效，如果此时魔抗为负，依然会承受更大的伤害

减伤
toughness
    可以直接抵消伤害，包括真实伤害!
    最大只能抵消90%的伤害，无论减伤达到多大
    * 减伤最低为0，也就是不能反增伤

视野
sight
    单位的视野

回避（%）
avoid
    当英雄受到的是“攻击”造成的伤害时会有一定几率闪避抵抗，并且使攻击特效失效
    闪避效果只有当英雄回避属性大于0%时才会开始生效
    回避可以无限堆，达到100%时一般情况下回避所有伤害
    回避率=(回避-命中)（%）
    * 如果该次伤害拥有真实、绝对伤害类型，无法回避（damageKind）
    * 如果该次伤害为无视回避，则回避失效（breakArmorType）

命中（%）
aim
    命中直接抵消回避生效的效果值
    回避率=(回避-命中)（%）

冥想力
meditative
    无实际意义项，你可以用来实现个性效果

救助力
help
    无实际意义项，你可以用来实现个性效果
    
运气
luck
    无实际意义项，你可以给玩家信心的效果

僵直
punish / punish_current
    每个单位默认的硬直为生命值的1/2
    硬直扣减量与受到伤害相关
    受到快速多段伤害或高伤害时，将很容易被击破而僵直
    硬直被破坏时会僵直5秒,并重置硬直条，期间受到伤害可能会再次僵直
    硬直的僵直5秒的体现是攻击速度和移动速度被极大地减少
    硬直未被击破时每隔5秒恢复100点
    * 不造成伤害时，不减少硬直

僵直抵抗（%）
punish_oppose
    硬直抵抗按百分比减少硬直的减速效果(减的是攻速及移速)
    硬直抵抗的效果最高只能减少90%
    
力量（分为白+绿，一般意义为本体+附加值）
str_white / str_green
    -> 每1点的效果，作者可以自行setThreeBuff修改
    
敏捷（分为白+绿，一般意义为本体+附加值）
agi_white / agi_green
    -> 每1点的效果，作者可以自行setThreeBuff修改

智力（分为白+绿，一般意义为本体+附加值）
int_white / int_green
    -> 每1点的效果，作者可以自行setThreeBuff修改
    
攻击波动（附加于攻击之上，建议slk获取）
    普通攻击造成伤害时的浮动范围
    攻击波动与生俱来，不随任何影响而变动
    波动的数值不会加入在攻击力中

攻击伤害类型
attack_damage_type(table)
    详情可参考const里的DAMAGE_TYPE
    攻击伤害类型就是在攻击时自动附带的伤害类型
    自然属性自带10%的加成

攻击力（分为白+绿，一般意义为本体+附加值）
attack_white / attack_green
    在h-lua下所有单位造成的伤害都视为攻击attack（包括触发技能）
    在调用h-lua skill技能的damage（伤害）可以自定义伤害为技能或其他类型
    单位进行攻击的能力，一般分为近战或者远程
    每个单位的攻击力由物理攻击力+魔法攻击力组成
    物理攻击力会触发物理暴击
    魔法攻击力会触发魔法暴击
    由于攻击的伤害都是混合型伤害（物理+魔法），所以暴击计算会受到削减
    
攻击速度（%）
attack_speed
    攻击一次的间隔
    假设当前攻速增益为 x% ：
    攻击间隔公式：(基本间隔*100) / (100+x) [单位：击/秒]
   
治疗效果（%）
cure
    增强治疗的效果
    影响life/mana/life_back/mana_back数值的改动

吸血（%）
hemophagia
    攻击造成伤害时触发吸血
    以实际伤害及吸血百分比为计算
    
技能吸血（%）
hemophagia_skill
    技能造成伤害时(无论伤害是物理魔法真实还是混合等)触发技能吸血
    以实际伤害及吸血百分比为计算

伤害增幅（%）
damage_amplitude
    增幅属性可以提高所有的伤害（包括真实伤害）
    如增幅100%，则攻击、物品、技能等所有伤害都会提高100%
    伤害增幅在暴击分裂等之前
    
负重（Kg）
weight / weight_current
    负重决定你身上能够佩戴多少重量的物品装备
    常规地图物品都设为0kg所以负重是无效的
    
无敌（%）
invincible
    收到伤害时无敌抵消的的几率

伤害反射（%）
damage_rebound
    可反射受到的一切伤害
    反伤数值机制精度为0.01,小于0.01无效
    默认最低为0%（无反射）最高无限定
    *以最终伤害值计算反射，反射的伤害不会再次成为反射源

反伤抵抗（%）
knocking_oppose
    阻碍反伤效果

物理暴击抵抗（%）
knocking_oppose
    阻碍物理暴击发生

魔法暴击抵抗（%）
violence_oppose
    阻碍魔法暴击发生

魔法暴击抵抗（%）
hemophagia_oppose
    阻碍魔法暴击发生
 
分裂抵抗（%）
split_oppose
    阻碍分裂发生

吸血抵抗（%）
hemophagia_oppose
    抵抗两种吸血效果

僵直抵抗（%）
punish_oppose
    抵抗僵直效果

分裂抵抗（%）
split_oppose
    阻碍分裂发生
    
眩晕抵抗（%）
swim_oppose
    眩晕抵抗同时减少受到眩晕的几率及眩晕时间
    眩晕几率=原眩晕几率%-眩晕抵抗（%）,最小0%即无效
    眩晕时间=原眩晕时间*(100%-眩晕抵抗%)（s）,最小0秒即无效

沉默抵抗（%）
silent_oppose
    阻碍沉默发生

缴械抵抗（%）
unarm_oppose
    阻碍缴械发生

缚足抵抗（%）
fetter_oppose
    阻碍缚足发生

爆破抵抗（%）
bomb_oppose
    阻碍爆破发生

闪电链抵抗（%）
lightning_chain_oppose
    阻碍闪电链发生

击飞抵抗（%）
crack_fly_oppose
    阻碍击飞发生
    
伤害方式
DAMAGE_KIND 详情请看const
    伤害方式共 4 种
    [攻击方式]普通攻击、魔兽原生技能造成的伤害（触发回避、攻击buff、攻击debuff、攻击特效）
    [技能方式]技能设定（触发技能buff、技能debuff、技能特效）
    [物品方式]物品伤害，一种概念
    [特别方式]特别伤害，一种概念
    一般都设为攻击或技能，一些死循环的可以设为特别伤害
    伤害一般计算优先级：方式类型判定->无敌、眩晕抵抗->自然->伤害增幅->物魔暴击、致命抵抗->回避、命中->护甲、魔抗->减伤->造成伤害->分裂、吸血、技能吸血->僵直、反射、治疗->攻击特效

伤害类型(下述仅是一般理解，在框架中你是可以自定义伤害的种类和类别的)
DAMAGE_TYPE 详情请看const
    伤害类型一般指伤害的类型，类型之间可以随意的重复叠加
    例如一个伤害类型：可以是{physical,fire,fire}物理+火，而且火占到了三分之二的比例
    物理伤害：受护甲影响，触发物理暴击
    魔法伤害：受魔抗影响，触发魔法暴击
    真实伤害：可使得这次整体伤害无法回避
    绝对伤害：可使得这次整体伤害无法回避，无视无敌
    自然伤害：自然属性的N种伤害，触发自然属性的加成和抵抗
    一般情况下，一次伤害总是各种类型混合的，各个类型会按照各自的规则来计算削弱和加强，不必担心混乱
    例如{magic,fire}这种类型，这次伤害是200点，他们会各自平分伤害：magic100，fire100，如果魔法就按魔抗计算被抵消，火伤害依然是有100点的

无视
BREAK_ARMOR_TYPE 详情请看const
    无视防，无视魔抗、无视回避
    无视只对正数值有效，如负护甲依然会被加伤

攻击/技能特增益or负面
attack_buff / attack_debuff
skill_buff / skill_debuff
    用于在攻击时对单位进行简单属性的改动
    如在攻击的时候增加攻击单位的攻击速度

攻击/技能特效
attack_effect / skill_effect
    hlua系统比vjass系统更强大
    无论是攻击或技能，都可以对属性系统所有的属性造成影响
    而vjass中的负面效果，你甚至可以自己控制特效，不再是固定的(详情请看attribute)
    物理暴击 {attr="knocking",odds = 0.0, percent = 0.0, effect = nil},
    魔法暴击 {attr="violence",odds = 0.0, percent = 0.0, effect = nil},
    分裂 {attr="split",odds = 0.0, percent=0.0, range = 0.0, effect = nil},
    眩晕 {attr="swim",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    打断 {attr="broken",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    沉默 {attr="silent",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    缴械 {attr="unarm",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    缚足 {attr="fetter",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    爆破 {attr="bomb",odds = 0.0, val = 0.0, during = 0.0, effect = nil},
    闪电链 {attr="lightning_chain",odds = 0.0, val = 0.0, during = 0.0, effect = nil, qty = 0, reduce = 0.0},
    击飞 {attr="crack_fly",odds = 0.0, val = 0.0, during = 0.0, effect = nil, distance = 0, high = 0.0}

自然属性介绍
natural
    自然属性是伤害类型的一种，独立存在，不影响原有的护甲、魔抗等影响，仅呈现辅助式伤害
    默认对无抗性的伤害加成10%
    自然属性一共分为：
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
        insect / 虫攻击
        god / 神攻击
    对应的抵抗:
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
        insect_oppose / 虫抵抗
        god_oppose / 神抵抗
    它们同时对应各自的抵抗属性。
    每个属性在造成对应的伤害时，会获得百分比加成，无上限，而抵抗则直接减少加成比例
    如：火加成为100%，火抵抗为40%，依然加成60%
    如：火加成为0%，火抵抗却为40%，则该次火伤害只能造成60%的伤害
    * 自然属性计算在伤害增幅之后，物理/魔法暴击之前
    * hlua中与vjass不同的是，自然的属性不再影响特效增益，一切交给你自己决定。
    * 自然的属性只影响拥有自然伤害的该次伤害的增加与减少
    
```



