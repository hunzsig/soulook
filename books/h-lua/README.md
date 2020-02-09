 * [github网址](https://github.com/hunzsig-warcraft3/h-lua)
 * [最佳实践：暂未公开](https://github.com/hunzsig/w3x-my-tower)
 * author hunzsig
 * version 2020.02.09
 * QQ 325338043

# 使用优势？
h-lua拥有优秀的demo，在开源的同时引导您学习的更多，不依赖任何游戏平台（如JAPI、DzAPI）
但并不禁止你使用(有集成DzAPI)。
包含多样丰富的属性系统，内置多达几十种以上的自定义事件,可以轻松做出平时难以甚至不能做出的技能效果。
强大的物品合成分拆，丰富自定义技能模板！免去自行编写！
计时器、环境、镜头、单位、敌人、音乐、天气、遮罩、任务等等应有尽有。

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
    │   ├── unit - 单位
    │   └── start.lua - 开始准备
    ├── foundation - 基础文件
    │   ├── foundation - 基础文件
    │   ├── blizzard_b.lua - 暴雪BJ全局
    │   ├── blizzard_c.lua - 暴雪C全局
    │   ├── blizzard_bj.lua - 暴雪部分BJ函数
    │   ├── blizzard_def.lua - 实际无用，参考用途
    │   ├── color.lua - 颜色
    │   ├── debug.lua - 调试
    │   ├── f9.lua - 框架任务
    │   ├── json.lua - json库
    │   ├── math.lua - 计算库
    │   ├── md5.lua - MD5
    │   ├── runtime.lua - 运行时数据集
    │   ├── string.lua - 字符串库
    │   ├── table.lua - 表库
    │   └── start.lua - 开始准备
    ├── lib
    │   ├── attrbute.lua - 基础/拓展/伤害特效/自然/单位关联，万能属性系统，自由、强大
    │   ├── award.lua - 奖励模块，用于控制玩家的黄金木头经验
    │   ├── camera.lua - 镜头模块，用于控制玩家镜头
    │   ├── dialog.lua - 对话框模块，用于显示对话框
    │   ├── dzapi.lua - Dzapi
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
    │   ├── mark.lua - 遮罩模块
    │   ├── message.lua - 消息模块(注意漂浮字模块与h-vjass不同，是一个独立的ttg模块)
    │   ├── multiBoard.lua - 多面板
    │   ├── player.lua - 玩家
    │   ├── quest.lua - 任务
    │   ├── rect.lua - 区域
    │   ├── skill.lua - 高级技能
    │   ├── sound.lua - 声音模块
    │   ├── textTag.lua - 漂浮字模块
    │   ├── time.lua - 时间/计时器 * 常用
    │   ├── unit.lua - 单位
    │   └── weather.lua - 天气
    ├── resource - 资源数据(不需要在意的)
    └── slk - SLK物编生成数据
        ├── data.lua - 需要在触发编辑器加载的文件，slk数据
        ├── helper.lua - 可选在触发编辑器加载的文件，slk生成帮助函数
        └── init.jass - 需要在触发编辑器加载的文件，用于初始化
```

提醒：
### 本套代码免费提供给了解lua的作者试用，如果不了解lua语言请使用T来制作地图或自行学习，此处不提供教学

> 以下教程以YDWE为例
## 前期准备：
### 打开 YWDE【设置】的lua引擎 
### 只需要关闭 YWDE的“逆天”触发

## 好了，让我们开始接入：
### 打开 YDWE 打开地图按F4打开触发编辑器
### 在最上方第一的位置添加一个【新触发】
### 选中新建的触发点击菜单【编辑】将他转为自定义文本，替换成你的代码，如下：
```
<?
#include "[YOUR PATH]/h-lua/slk/helper.lua"
#include "[YOUR PATH]/h-lua/slk/data.lua"
#include "[YOUR PATH]/h-lua/slk/init.jass"
import("main.lua") ("main.lua", true)
?>
```
> （不建议路径存在有中文）

### 再新建一个触发器，事件为【地图初始化】
```
动作为：[游戏] - 输入作弊码：exec-lua: "main"
 * 不同的编辑器翻译可以有微弱的差异，请自行判断
```

> 注意：
h-lua库开源，不定时更新，可访问 http://hlua.book.hunzsig.org 查看最新文档
h-lua库仅提供一些功能函数协助做图作者更加轻松制作地图
h-lua库不保证完全正确且无bug，如有需要，请自行修改源码进行游戏制作，这里不过是提供思路与帮助
由于h-lua使用了slk，保存时会自动帮助你生成框架需要的所有物编，所以无需自行构建物编
