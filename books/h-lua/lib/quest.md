quest

> 调用：hquest.method()

---

* **del(q, during)**
```
删除任务
```

* **create(options)**
```lua
创建一个任务
options = {
    side = "left", --位置，默认left
    isFinish = false, --任务是否已完成，默认false
    title = "", --标题
    content = "", --内容，你可以设置一个string或一个table，table会自动便利附加|n（换行）
    icon = "ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp", --图标
    during = nil, --持续时间，默认为nil，不计时
}
```

* **flash()**
```
令F9按钮闪烁
```

* **setCompleted(q)**
```
设置任务为完成
```

* **setFailed(q)**
```
设置任务为失败
```

* **setDiscovered(q)**
```
设置任务为被发现
```
