#### 目录结构如下：
```
    ├── h-lua.lua - 入口文件，你的main文件需要包含它
    ├── h-lua.fdf - 官方UI-fdf
    ├── h-lua.toc - 官方UI-toc
    ├── slk.lua - SLK物编生成数据
    ├── slkInit.lua - SLK物编初始化
    ├── ui - UI界面
    ├── const - 静态值
    │   ├── attritube - 属性KV
    │   ├── hotKey - 热键KV
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
    │   ├── runtime.lua - 运行时数据集
    │   ├── system.lua - 系统默认函数
    │   └── start.lua - 开始准备
    └── lib
        ├── attrbute.lua - 基础/拓展/伤害特效/自然/单位关联，万能属性系统，比h-vjass的更加自由及强大
        ├── award.lua - 奖励模块，用于控制玩家的黄金木头经验
        ├── camera.lua - 镜头模块，用于控制玩家镜头
        ├── dialog.lua - 对话框模块，用于显示对话框
        ├── dzapi.lua - Dzapi
        ├── effect.lua - 特效模块
        ├── enemy.lua - 敌人模块，用于设定敌人玩家，自动分配单位
        ├── env.lua - 环境模块，可随机为区域生成装饰物及地表纹理
        ├── event.lua - 事件模块，自定义事件，包括物品合成分拆/暴击，精确攻击捕捉等
        ├── group.lua - 单位组
        ├── hero.lua - 英雄/选英雄模块，包含点击/酒馆选择，repick/random功能等
        ├── is.lua - 判断模块 * 常用
        ├── item.lua - 物品模块，与属性系统无缝结合，合成/分拆等功能
        ├── leaderBoard.lua 排行榜模块，用于简易构建排行榜
        ├── lightning.lua - 闪电链
        ├── logic.lua - 逻辑模块
        ├── mark.lua - 遮罩模块
        ├── message.lua - 消息模块(注意漂浮字模块与hvjass不同，是一个独立的ttg模块)
        ├── multiboard.lua - 多面板，包含自带的属性系统
        ├── player.lua - 玩家
        ├── rect.lua - 区域
        ├── skill.lua - 高级技能
        ├── sound.lua - 声音模块
        ├── textTag.lua - 漂浮字模块
        ├── time.lua - 时间/计时器 * 常用
        ├── unit.lua - 单位
        └── weather.lua - 天气
```
