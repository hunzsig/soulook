attribute - hunt

 调用：hattrHunt.method()

---

* **huntUnit**
```
伤害单位
heffect 特效
bean.huntKind伤害方式: 
    attack 攻击
    skill 技能
    item 物品
    special 特殊（如分裂，攻击特效的爆炸、闪电链之类的）
bean.huntType伤害类型: 
    physical 物理伤害则无视护甲<享受物理暴击加成，受护甲影响>
    magic 魔法<享受魔法暴击加成，受魔抗影响>
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
    real 真实
    absolute 绝对
isBreak是否无视：true | false 物理伤害则无视护甲 | 魔法伤害则无视魔抗
isNoAvoid是否无法回避：true | false
isEffect是否触发伤害特效：true | false 攻击默认强制设为true
沉默时，爆炸、闪电链、击飞会失效，其他不受影响
```

* **huntGroup**
```
伤害单位群
! 循环 hattrHunt.huntUnit
```


