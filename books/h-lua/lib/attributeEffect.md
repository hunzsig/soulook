attribute - effect

调用：hattrEffect.method()

---

* **伤害特效会在什么时候触发？**
```
1、触发普通攻击的会自动触发，此情况下等同于攻击特效（当然和魔兽原声不一样，这个是可以无限叠加的）
2、在调用hattrHunt的hunt函数（包括对单/组）在hAttrHuntBean中设定bean.isEffect = true
    这种情况下，可以用于技能等其他的情况
```

* **伤害特效简单说明**
```
前面也说到了，伤害特效会在攻击时自动触发
因为也可以在其他情况下触发，所以取名为“伤害特效”
伤害特效一般可以分为 2 种
1、正面的伤害特效（增益/buff）
    在触发时，会增强fromUnit（伤害来源）的对应属性值，如：
        life_back 	 	生命恢复效果：增加生命恢复
        mana_back 	 	魔法恢复效果：增加魔法恢复
        attack_speed 	攻击速度效果：增加攻击速度
        move 		 	移动力效果：增加移动力
        attack_physical 物理攻击力效果：增加物理攻击力
        attack_magic    魔法攻击力效果：增加魔法攻击力
        attack_range    攻击距离效果：增加攻击距离
        sight           视野效果：增加视野
        aim 			命中效果：增加命中
        str 			力量效果：增加力量(绿字)
        agi 			敏捷效果：增加敏捷(绿字)
        int 			智力效果：增加智力(绿字)
        knocking 		物理暴击效果：增加物理暴击
        violence 		魔法暴击效果：增加魔法暴击
        hemophagia 		吸血效果：增加吸血
        hemophagia_skill技能吸血效果：增加技能吸血
        split 			分裂效果：增加分裂
        luck 			运气效果：增加运气
        hunt_amplitude 	伤害增幅效果：增加伤害增幅
1、负面的伤害特效（减益/debuff）
    在触发时，会降低toUnit（伤害目标）的对应属性值，或闪电链、击飞等其他特殊的效果，如：
        toxic 			中毒[减少生命恢复]
        burn  			灼烧[减少生命恢复]
        dry 			枯竭[减少魔法恢复]
        freeze 			冻结[减少攻击速度]
        cold 			寒冷[减少移动力]
        blunt			迟钝[减少物理攻击力]
        muggle			麻瓜[减少魔法攻击力]
        myopia			短视[减少攻击距离]
        blind			致盲[减少视野]
        corrosion		腐蚀[减少护甲]
        chaos			混乱[减少魔抗]
        twine			缠绕[减少回避]
        drunk			醉酒[减少命中]
        tortua			剧痛[减少韧性]
        weak			乏力[减少力量(绿字)]
        astrict			束缚[减少敏捷(绿字)]
        foolish			愚蠢[减少智力(绿字)]
        dull			粗钝[减少物理暴击]
        dirt			尘迹[减少魔法暴击]
        swim 			眩晕[特定眩晕，直接眩晕，受抵抗]
        heavy 			沉重[加重硬直减少量]
        break 			打断[直接僵直]
        unluck 			倒霉[减少运气]
        silent 			沉默[无法使用技能]
        unarm 			缴械[无法进行攻击]
        fetter			脚镣[无法进行移动]
        bomb			爆破[范围伤害]
        lightning_chain 闪电链[被动传递电击]
        crack_fly 		击飞[上天]
```

* **额外说明**
```
由于伤害特效设计初期并无考虑所有方面，
并由于vjass语言的编写限制，所以类型会较少，可以自行拓展
在lua框架下，会解除所有限制，更加强大
```



