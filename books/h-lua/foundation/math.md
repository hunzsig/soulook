math

> 调用：math.method() 与原有math完美混合

---

* **random(n, m)**
```
整合原生的随机整数，支持整型和浮点型
!任一边参数为浮点型，则视为浮点随机
```

* **polarProjection(x, y, dist, angle)**
```
极坐标位移
```

* **round(decimal)**
```
四舍五入
```

* **numberFormat(value)**
```
数字格式化
```

* **getDegBetweenXY(x1, y1, x2, y2)**
```
获取两个坐标间角度，如果其中一个单位为空 返回0
```

* **getDegBetweenLoc(l1, l2)**
```
获取两个点间角度，如果其中一个单位为空 返回0
```

* **getDegBetweenUnit(u1, u2)**
```
获取两个单位间角度，如果其中一个单位为空 返回0
```

* **getDistanceBetweenUnit**
```
获取两个单位间距离，如果其中一个单位为空 返回0
```

* **getDistanceBetweenXY(x1, y1, x2, y2)**
```
获取两个坐标距离
```

* **getDistanceBetweenLoc(l1, l2)**
```
获取两个点距离
```

* **getDistanceBetweenUnit(u1, u2)**
```
获取两个单位距离
```

* **getMaxDistanceInRect(w, h, deg)**
```
获取矩形区域内某角度距离边缘最大距离
w = 区域长
h = 区域宽
deg = 角度
```
