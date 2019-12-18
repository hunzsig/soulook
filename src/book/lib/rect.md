rect
> 调用：hrect.method()

---

* **create(x, y, w, h, name)**
```
创建一个设定中心（x,y）创建一个长w宽h的矩形区域
```

* **createInLoc(loc, w, h, name)**
```
创建一个设定点（loc）创建一个长w宽h的矩形区域
```

* **getName(whichRect)**
```
获取区域名称
```

* **getX(whichRect)**
```
设置区域中心点坐标X
```

* **getY(whichRect)**
```
设置区域中心点坐标Y
```

* **getWidth(whichRect)**
```
获取区域的宽
```

* **getHeight(whichRect)**
```
获取区域的高
```

* **getStartX(whichRect)**
```
获取区域的开始点坐标X
```

* **getStartY(whichRect)**
```
获取区域的开始点坐标Y
```

* **getEndX(whichRect)**
```
获取区域的结束点坐标X
```

* **getEndY(whichRect)**
```
获取区域的结束点坐标Y
```

* **del(whichRect, during)**
```
删除区域
```

* **lock(bean)**
```
锁定所有单位在某个区域无法离开
bean = {
   type 类型有：square|circle // 矩形(默)|圆形
   during 持续时间 必须大于0
   width 锁定活动范围长，大于0
   height 锁定活动范围宽，大于0
   whichRect 锁定区域时设置，可选
   whichUnit 锁定某个单位时设置，可选
   whichLoc 锁定某个点时设置，可选
   whichX 锁定某个坐标X时设置，可选
   whichY 锁定某个坐标Y时设置，可选
}
```
