skill例子

---

* **一刹**
```
if(skillid == [SKILL_ID])then
    call SetUnitAnimation( triggerUnit, "attack slam" )
    set loc = hevent.getTargetLoc()
    set bean = hAttrHuntBean.create()
    set bean.damage = 3 * hattr.getAttackPhysical(triggerUnit)
    set bean.fromUnit = triggerUnit
    set bean.huntEff = "Objects\\Spawnmodels\\Human\\HumanBlood\\BloodElfSpellThiefBlood.mdl"
    set bean.huntKind = "attack"
    set bean.huntType = "physicalwind"
    call hskill.leap(triggerUnit,loc,50,"Abilities\\Spells\\Orc\\MirrorImage\\MirrorImageCaster.mdl",75,false,bean)
    call bean.destroy()
endif
```

* **无影斩**
```
if(skillid == [SKILL_ID])then
    call SetUnitVertexColorBJ( triggerUnit, 100, 100, 100, 75.00 )
    set bean = hAttrHuntBean.create()
    set bean.damage = hattr.getAttackPhysical(triggerUnit)
    set bean.fromUnit = triggerUnit
    set bean.huntEff = "Objects\\Spawnmodels\\Human\\HumanBlood\\BloodElfSpellThiefBlood.mdl"
    set bean.huntKind = "attack"
    set bean.huntType = "physicalwind"
    call hskill.shuttleToUnit(triggerUnit,hevent.getTargetUnit(),300,20,30,5,50,null,"attack",'A06K',bean)
    call bean.destroy()
endif
```


