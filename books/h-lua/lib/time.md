time

> 调用：htime.method()

---

* **vars**
```lua
htime = {
    -- 获取开始游戏后经过的总秒数
    count = 0,
    -- 当前时
    hour = 0,
    -- 当前分
    min = 0,
    -- 当前秒
    sec = 0
}
```

* **clock()**
```
自动调用的内部时钟
!请不要调用
```

* **his()**
```
获取时分秒
```

* **getSetTime(t)**
```
获取计时器设置时间
```

* **getRemainTime(t)**
```
获取计时器剩余时间
```

* **getElapsedTime(t)**
```
获取计时器已过去时间
```

* **setTimeout(time, title, yourFunc)**
```
创建 1 个一次性计时器
```

* **setInterval(time, title, yourFunc)**
```
创建 1 个循环计时器
```

* **delTimer(t)**
```
删除计时器
如果计时器设定过窗口，会贴心地自动删除
```

* **delDialog(td)**
```
删除计时器窗口
因为删除计时器时会自动删除窗口，所以这个方法一般无需使用
```
