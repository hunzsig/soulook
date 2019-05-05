item例子

---

* **永久型物品注册 1**
```
增加 200 视野
set hitembean = hItemBean.create()
set hitembean.item_id = <INTEGER_ID>
set hitembean.item_type = HITEM_TYPE_FOREVER
set hitembean.item_overlay = 1
set hitembean.sight = 200
call hitem.format(hitembean)
call hitembean.destroy()
```

* **永久型物品注册 2**
```
增加 10% 黄金获得率（对单位拥有者玩家而言）
set hitembean = hItemBean.create()
set hitembean.item_id = <INTEGER_ID>
set hitembean.item_type = HITEM_TYPE_FOREVER
set hitembean.item_overlay = 1
set hitembean.goldRatio = 10
call hitem.format(hitembean)
call hitembean.destroy()
```

* **永久型物品注册 3**
```
附加雷攻击/增加20%雷攻击伤害/增加45%攻击速度
set hitembean = hItemBean.create()
set hitembean.item_id = <INTEGER_ID>
set hitembean.item_type = HITEM_TYPE_FOREVER
set hitembean.item_overlay = 1
set hitembean.attackHuntType = "thunder"
set hitembean.thunder = 20
set hitembean.attackSpeed = 45
call hitem.format(hitembean)
call hitembean.destroy()
```

* **瞬逝型物品注册**
```
set hitembean = hItemBean.create()
set hitembean.item_type = HITEM_TYPE_MOMENT
set hitembean.item_id = <INTEGER_ID>
set hitembean.poison = 15
call hitem.format(hitembean)
call hitembean.destroy()
call hitem.onMoment(<INTEGER_ID>,function funcCallback)
```

* **物品合成**
```
// A+B=C
call hitemMix.newFormula(C,1)
call hitemMix.addFlag(C,A,1)
call hitemMix.addFlag(C,B,1)
// A+D=2C
call hitemMix.newFormula(C,2)
call hitemMix.addFlag(C,A,1)
call hitemMix.addFlag(C,D,1)
// 2C+3D+4E=5F
call hitemMix.newFormula(F,5)
call hitemMix.addFlag(F,C,2)
call hitemMix.addFlag(F,D,3)
call hitemMix.addFlag(F,E,4)
```

