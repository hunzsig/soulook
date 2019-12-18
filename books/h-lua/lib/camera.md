camera

> 调用：hcamera.method()

---

* **reset(whichPlayer, during)**
```
重置镜头
```

* **apply(whichPlayer, during, camerasetup)**
```
应用镜头
```

* **toXY(whichPlayer, during, x, y)**
```
移动到XY
```

* **toLoc(whichPlayer, during, loc)**
```
移动到点
```

* **lock(whichPlayer, whichUnit)**
```
锁定镜头
```

* **distance(whichPlayer, distance)**
```
设定镜头距离
```

* **shock(whichPlayer, whichType, during, scale)**
```
玩家镜头摇晃
whichType 震动包括两种，一种摇晃shake，一种抖动quake
scale 振幅 - 摇晃
```

* **setModel(bean)**
```
设置镜头模式
bean = {
    model = "normal" | "lock",
    whichPlayer = player, -- 锁定单位的玩家
    lockUnit = unit, -- 锁定单位的绑定单位,与玩家对应
}
```

* **getModel(whichPlayer)**
```
获取镜头模式,会获得 normal | lock
```
