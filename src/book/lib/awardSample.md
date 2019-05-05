award例子

---

* **设定资源共享范围**
```
call haward.setRange(800)
```

* **注册瞬逝型物品**
```
globals
    integer momentItems_count = 0
    integer array momentItems
endglobals
.
..
    // 瞬时物品
    set momentItems_count = 6
    set momentItems[1]= 'o002'
    set momentItems[2]= 'o003'
    set momentItems[3]= 'o004'
    set momentItems[4]= 'o005'
    set momentItems[5]= 'o006'
    set momentItems[6]= 'o007'
..
.  
private static method registerItemMonentCall takes nothing returns nothing
    local unit u = hevent.getTriggerUnit()
    local integer id = hevent.getId()
    local real charges = hevent.getValue()
    if (id == 'o002') then // 金币
        call haward.forUnitGold(u,2*R2I(charges))
    elseif (id == 'o003') then // 木材
        call haward.forUnitLumber(u,R2I(charges))
    elseif (id == 'o004') then // 经验
        call haward.forGroupExp(u,R2I(charges))
    elseif (id == 'o005') then // 时轮之力Gold
        call haward.forPlayerGold(u,R2I(charges))
    elseif (id == 'o006') then // 时轮之力Lumber
        call haward.forPlayerLumber(u,R2I(charges))
    elseif (id == 'o007') then // 时轮之力Exp
        call haward.forGroupExp(u,R2I(charges))
    endif
    set u = null
endmethod
private static method registerItemMonent takes nothing returns nothing
    local hItemBean hitembean
    local integer i = 0
    loop
        exitwhen i>momentItems_count
            set hitembean = hItemBean.create()
            set hitembean.item_type = HITEM_TYPE_MOMENT
            set hitembean.item_id = momentItems[i]
            call hitem.format(hitembean)
            call hitembean.destroy()
            call hitem.onMoment(momentItems[i],function thistype.registerItemMonentCall)
        set i=i+1
    endloop
endmethod
```

