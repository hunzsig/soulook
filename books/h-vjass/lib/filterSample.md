filter例子

---

* **filter用于group的创建**
```
例子：选取存活的我方非建筑英雄
local hFilter filter = 0
set filter = hFilter.create()
call filter.isHero(true)
call filter.isAlly(true,whichUnit)
call filter.isAlive(true)
call filter.isBuilding(false)
set g = hgroup.createByUnit(whichUnit,hAwardRange,function hFilter.get)
call filter.destroy()
```

* **filter用于group的创建 例子**
```
例子：选取存活的敌方建筑
local hFilter filter = 0
set filter = hFilter.create()
call filter.isEnemy(true,whichUnit)
call filter.isAlive(true)
call filter.isBuilding(true)
set g = hgroup.createByUnit(whichUnit,hAwardRange,function hFilter.get)
call filter.destroy()
```

