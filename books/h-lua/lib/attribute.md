attribute

> 调用：hattr.method() or hattribute.method()
> 虽然属性系统已经有着极致的性能优化，常规使用毫无问题。
> 但如果瞬间调用过多会引起小卡顿，这是您需要注意规划的事
> tips: 你可以尝试使用htime分离瞬间或考虑属性的合并设置及优化你的地图流程

---

* **设置三围的影响**
```
hattr.setThreeBuff(
    {
        str = {
            life = 7,
            attack_white = 0.06,
            toughness = 0.02,
            aim = 0.003
        },
        agi = {
            attack_white = 0.10,
            attack_speed = 0.015,
            avoid = 0.005
        },
        int = {
            attack_white = 0.08,
            resistance = 0.005
        }
    }
)
```

* **设置单位属性**
```lua
设置单位永久,攻击附加魔法属性，生命等于100
魔法加50，护甲减1，移动2倍，生命恢复减少50%
    hattr.set(u, 0, {
        attack_hunt_type = "+magic",
        life = "=100",
        mana = "+50",
        defend = "-1",
        move = "*2",
        life_back = "/2",
    })
设置单位临时移动增加100，持续3.33秒
    hattr.set(u, 3.33, {
        move = "+100",
    })
对于buff、debuff、effect这些特别的效果，需要特别的set，参考如下:
buff只对来源生效，debuff、effect只对目标生效，记住啦~
设置2个攻击生效的debuff
    1、目标有45%的几率减少10点护甲，持续4.5秒
    2、目标有75%的几率减少12点生命恢复，持续6秒
    3、上述两个效果在7.77秒后失效（临时攻击特效是吧~）
attr设置改动哪个属性，而model是它们的作用特效，而第二个sub就是删除特效了，一个add、一个sub
    hattr.set(u,7.77,{
        attack_debuff = {
            add = {
                {
                    attr = "defend",
                    odds = 45,
                    during = 4.5,
                    val = 10,
                    model = "Abilities\\Spells\\Undead\\DeathandDecay\\DeathandDecayTarget.mdl"
                },
                {
                    attr = "life_back",
                    odds = 75,
                    val = 12,
                    during = 6,
                    model = "Objects\\Spawnmodels\\Human\\HumanBlood\\BloodElfSpellThiefBlood.mdl"
                }
            }
        },
        attack_debuff = {
            sub = {...}
        }
    })
可以看出buff就是增加自己的属性，而debuff就是减少敌人的属性，effect较特殊，只有特定的效果，如：眩晕
50%的几率眩晕1.55秒，并造成17点伤害
    hattr.set(u,0,{
        attack_effect = {
            add = {
                {
                    attr = "swim",
                    odds = 50,
                    val = 17,
                    during = 1.55
                }
            }
        }
    })
对应的effect有:
    knocking 物理暴击
    violence 魔法暴击
    split 分裂 
    swim 眩晕
    broken 打断
    silent 沉默
    unarm 缴械
    fetter 缚足
    bomb 爆破
    lightning_chain 闪电链
    crack_fly 击飞
如果想要更好的运用这么神奇的属性设置，查看源码也是个不错的选择哦！
```

* **获取单位属性**
```
获得单项属性，如移动力
local move = hattr.get(u,"move") -- 522
获得所有属性，返回一个table
local attrs = hattr.get(u) -- table
```



