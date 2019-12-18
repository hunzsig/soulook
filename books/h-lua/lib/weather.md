weather
> 调用：hweather.method()

---

* **vars**
```lua
hweather = {
    --天气ID
    sun = hSys.getObjId('LRaa'), --日光
    moon = hSys.getObjId('LRma'), --月光
    shield = hSys.getObjId('MEds'), --紫光盾
    rain = hSys.getObjId('RAlr'), --雨
    rainstorm = hSys.getObjId('RAhr'), --大雨
    snow = hSys.getObjId('SNls'), --雪
    snowstorm = hSys.getObjId('SNhs'), --大雪
    wind = hSys.getObjId('WOlw'), --风
    windstorm = hSys.getObjId('WNcw'), --大风
    mistwhite = hSys.getObjId('FDwh'), --白雾
    mistgreen = hSys.getObjId('FDgh'), --绿雾
    mistblue = hSys.getObjId('FDbh'), --蓝雾
    mistred = hSys.getObjId('FDrh'), --红雾
}
```

* **del(w, during)**
```
删除天气
```

* **create(bean)**
```
创建天气
options = {
    x=0,y=0, 坐标
    w=0,h=0, 长宽
    type=hweather.sun 天气类型
    during=10 持续时间小于等于0=无限
}
```

