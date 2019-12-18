textTag

> 调用：httg.method() or htextTag.method()

---

* **del(ttg)**
```
删除漂浮字
```

* **create(msg, size, color, opacity, during)**
```
创建漂浮字
设置during为0则永久显示
opacity设置为0则不可见(0.0~1.0)
color为6位颜色代码 http://www.atool.org/colorpicker.php
```

* **create2Unit(u, msg, size, color, opacity, during, zOffset)**
```
在某单位头上创建漂浮字
```

* **create2Loc(loc, msg, size, color, opacity, during, zOffset)**
```
在某点上创建漂浮字
```

* **createFollowUnit(u, msg, size, color, opacity, during, zOffset)**
```
创建漂浮字并绑定在某单位头上，跟随移动
```

* **getSize(ttg)**
```
获取漂浮字大小
```

* **getColor(ttg)**
```
获取漂浮字颜色
```

* **getMsg(ttg)**
```
获取漂浮字内容
```

* **getOpacity(ttg)**
```
获取漂浮字透明度
```

* **getDuring(ttg)**
```
获取漂浮字持续时间
```

* **style(ttg, showtype, xspeed, yspeed)**
```
风格特效:
        scale 放大
        shrink 缩小
        toggle 放大再缩小
```
