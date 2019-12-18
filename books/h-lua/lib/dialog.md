dialog

> 调用：hdialog.method()

---

* **create(whichPlayer, options, call)**
```
创建一个新的对话框
hdialog.create(
    nil, --指所有玩家
    {
        title = "选择游戏模式",
        buttons = {
            "模式1",
            "模式2",
        }
    },
    function(btnIdx)
        hmsg.echo("选择了" .. btnIdx) --btnIdx等于"模式1"或"模式2"
        --根据btnIdx做出后续代码
    end
)
```
