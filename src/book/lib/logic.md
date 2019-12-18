logic

> 调用：hlogic.method()

---

* **mbStringLen(str)**
```
计算字符串宽度(识别字符)
```

* **polarProjection(x, y, dist, angle)**
```
极坐标位移
```

* **oddsItem(odds_stable, odds_gain, timers)**
```
获取物品几率叠加几率
根据固定因子及增益因子计算几率因子
return odds_stable + odds_stable * ((timers - 1) * odds_gain)
```

* **coverAttrEffectVal(value1, value2)**
```
计算属性特效效果叠加
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
