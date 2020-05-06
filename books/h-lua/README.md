 * [github网址](https://github.com/hunzsig-warcraft3/h-lua)
 * [开源地图：我塔非凡](https://github.com/hunzsig-warcraft3/w3x-my-tower)
 * 功能测试：
     [DZAPI](https://github.com/hunzsig-warcraft3/w3x-test-dzapi)、
     [崩溃压力](https://github.com/hunzsig-warcraft3/w3x-test-breakdown)
 * [极速上手文档](https://docs.qq.com/doc/DTUZZZWZzYVpyeW1o)
 * author hunzsig
 * version 2020.05.06
 * QQ 325338043
 
## 最近致命性动荡修改
> BJ方法不再内置，如果你使用了BJ方法，可自行引用 /h-lua/foundation/blizzard_bj.lua
> message模块已被删除，在屏幕打印的echo方法现在是直接全局使用即可
> mark模块已被删除，重构为texture模块，管理与贴图有关的一些方法
> time修复了致命bug，全面框架自实现化，不再向外提供timer对象
> env重构，大部分功能已经可以试用
> hero重构，英雄选择功能已经可以试用

### 敬告 warning
可以发现h-lua并没有发行Releases，尚在master-dev，有的功能尚未测试，或者尚未完成
但h-lua的初衷是在开源的同时引导帮助你更好地学习作图，，不依赖任何游戏平台（如JAPI、DzAPI）
所以你依然可以看框架代码学会不同的作图方法
暂时未完善的库：item（合成拆分）

#### 框架结构如下：
```
    ├── h-lua.lua - 入口文件，你的main文件需要包含它
    ├── ui - UI界面
    ├── const - 静态值
    │   ├── attritube - 属性
    │   ├── breakArmorType - 破防类型
    │   ├── damageKind - 伤害种类
    │   ├── damageType - 伤害类型
    │   ├── event - 事件
    │   ├── hero - 英雄
    │   ├── hotKey - 热键
    │   ├── item - 物品
    │   ├── playerColor - 玩家颜色
    │   └── unit - 单位
    ├── foundation - 基础文件
    │   ├── foundation - 基础文件
    │   ├── blizzard_b.lua - 暴雪B全局变量
    │   ├── blizzard_c.lua - 暴雪C全局变量
    │   ├── blizzard_bj.lua - 暴雪部分BJ函数，实际无用，非要用bj就自行拓展编写载入
    │   ├── blizzard_def.lua - 实际无用，参考用途
    │   ├── color.lua - 颜色
    │   ├── debug.lua - 调试
    │   ├── echo.lua - 游戏荧幕打印
    │   ├── f9.lua - 框架任务
    │   ├── json.lua - json库
    │   ├── math.lua - 计算库
    │   ├── md5.lua - MD5
    │   ├── runtime.lua - 运行时数据集
    │   ├── string.lua - 字符串库
    │   └── table.lua - 表库
    ├── lib
    │   ├── skill - 技能包
    │   ├── attrbute.lua - 基础/拓展/伤害特效/自然/单位关联，万能属性系统，自由、强大
    │   ├── award.lua - 奖励模块，用于控制玩家的黄金木头经验
    │   ├── camera.lua - 镜头模块，用于控制玩家镜头
    │   ├── dialog.lua - 对话框模块，用于显示对话框
    │   ├── dzapi.lua - Dzapi(配合./plugins/dzapi.jass使用)
    │   ├── effect.lua - 特效模块
    │   ├── enemy.lua - 敌人模块，用于设定敌人玩家，自动分配单位
    │   ├── env.lua - 环境模块，可随机为区域生成装饰物及地表纹理
    │   ├── event.lua - 事件模块，自定义事件，包括物品合成分拆/暴击，精确攻击捕捉等
    │   ├── group.lua - 单位组
    │   ├── hero.lua - 英雄/选英雄模块，包含点击/酒馆选择，repick/random功能等
    │   ├── is.lua - 判断模块 * 常用
    │   ├── item.lua - 物品模块，与属性系统无缝结合，合成/分拆等功能
    │   ├── leaderBoard.lua 排行榜模块，用于简易构建排行榜
    │   ├── lightning.lua - 闪电链
    │   ├── multiBoard.lua - 多面板
    │   ├── player.lua - 玩家
    │   ├── quest.lua - 任务
    │   ├── rect.lua - 区域
    │   ├── sound.lua - 声音模块
    │   ├── textTag.lua - 漂浮字
    │   ├── texture.lua - 遮罩、贴图
    │   ├── time.lua - 时间/计时器 * 常用
    │   ├── unit.lua - 单位
    │   └── weather.lua - 天气
    ├── package - 打包上线用exe
    ├── plugins
    │   └── dzapi.jass - 拓展dzapi，使用时复制到触发内
    ├── resource - 资源数据(不需要在意的)
    └── slk - SLK物编生成数据
        ├── data.lua - 需要在触发编辑器加载的文件，slk数据
        ├── helper.lua - 可选在触发编辑器加载的文件，slk生成帮助函数
        └── init.jass - 需要在触发编辑器加载的文件，用于初始化及调用lua-exec
```

> 提醒：本套代码免费提供给了解lua的作者试用，如果不了解lua语言请使用T来制作地图或自行学习，此处不提供教学

#### 以下教程以demoTD图（我塔非凡）为例
#### 编辑器以 https://github.com/hunzsig-warcraft3/assets-software 编辑器（WorldEdit_1.27a_1.0.rar）为例
> 编辑器准备：
> 打开编辑器【设置】的lua、Dzapi引擎 
> 关闭编辑器【插件】“逆天”触发
> 好了，让我们开始接入：
> 打开编辑器，打开地图按F4打开触发编辑器
> 在最上方第一的位置添加一个【新触发】
> 选中新建的触发点击菜单【编辑】将他转为自定义文本，替换成你的代码，如下：
```
<?
#include "[YOUR PATH]/h-lua/slk/helper.lua"
#include "[YOUR PATH]/h-lua/slk/data.lua"
#include "[YOUR PATH]/h-lua/slk/init.jass"
import("main.lua") ("hot.lua", true)
?>
```
> （不建议路径存在有中文）

```
上线打包package用 import("main.lua") ("dist.lua", true)
```

> 注意：
h-lua库开源，不定时更新，可访问 http://hlua.book.hunzsig.org 查看最新文档
h-lua库仅提供一些功能函数协助做图作者更加轻松制作地图
h-lua库不保证完全正确且无bug，如有需要，请自行修改源码进行游戏制作，这里不过是提供思路与帮助
由于h-lua使用了slk，保存时会自动帮助你生成框架需要的所有物编，所以无需自行构建物编
