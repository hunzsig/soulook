dialog

> 调用：hdialog.method()

---

* **create(whichPlayer, options, call)**
```
hdialog.create( --创建一个新的对话框1
    nil, --指所有玩家，自动挑选第一人
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
—
hdialog.create( --创建一个新的对话框2，且A、B作为热键
    nil, --指所有玩家，自动挑选第一人
    {
        title = "选择游戏模式",
        buttons = {
            {value="A", label="模式1"},
            {value="B", label="模式2"},
        }
    },
    function(btnIdx)
        hmsg.echo("选择了" .. btnIdx) --btnIdx等于"A"或"B"
        --根据btnIdx做出后续代码
    end
)
```
