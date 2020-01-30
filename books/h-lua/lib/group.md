group

> 调用：hgroup.method()

---

* **loop(whichGroup, actions, autoDel)**
```
循环group
```

* **count(whichGroup)**
```
统计单位组当前单位数
```

* **isIn(whichGroup, whichUnit)**
```
判断单位是否在单位组内
```

* **isEmpty(whichGroup)**
```
判断单位组是否为空
```

* **addUnit(whichGroup, whichUnit)**
```
把单位加进单位组内
```

* **removeUnit(whichGroup, whichUnit)**
```
把单位移出单位组
```

* **createByXY(x, y, radius, filterFunc)**
```
以(x,y)点为中心radius距离创建单位组
```

* **createByLoc(loc, radius, filterFunc)**
```
以loc点为中心radius距离创建单位组
```

* **createByUnit(u, radius, filterFunc)**
```
以某单位为中心radius距离创建单位组
```

* **createByRect(r, filterFunc)**
```
以某区域创建单位组
```

* **move(whichGroup, loc, eff, isFollow)**
```
瞬间移动单位组
```

* **getClosest(whichGroup, x, y)**
```
获取单位组内离选定的(x,y)最近的单位
```

* **animate(whichGroup, animateStr)**
```
指挥单位组所有单位做动作(动画)
```

* **clear(whichGroup, isDestroy, isDestroyUnit)**
```
清空单位组
isDestroy 是否同时删除单位组
isDestroyUnit 是否同时删除单位组里面的单位
```
