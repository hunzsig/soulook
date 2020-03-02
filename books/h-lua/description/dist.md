
上线须知

> 上线的地图需要在发布后台勾选上启用平台的 japi 选项，否则无法调用 lua引擎库

> 上线的地图如果需要DZAPI功能，需要复制plugins里面的Dzapi.jass进触发里
> DZAPI功能是没有写完整的，有需要可自行拓展

> jass代码本身文件后缀应该是.j，但在hlua中不存在include j文件的行为。都是直接复制进触发器
> 为了直观，作者任性地将后缀改成了.jass

看过极简上手的您应该知道，配置过 package.path,例如下面的路径

```lua
package.path = package.path .. ';Z:\\war3\\hunzsig-warcraft3\\h-lua\\?.lua'
package.path = package.path .. ';Z:\\war3\\hunzsig-warcraft3\\w3x-my-tower\\?.lua'
```

> 在你的 hot.lua 文件（或者你的别名入口文件中）配置过 package.path在上线是无效的
> 原因是编辑器并没有帮你将lua代码打包入地图
> 所以 hot 文件才能不需要保存地图就刷新 lua 代码，因为它是在地图初始化过程中加载的

所以您要做的就是打包你的 lua 代码，人性化的框架已考虑过这一步
> 在package里面有个package.exe，隔壁还有个package.example.ini配置文件
> 将package.example.ini复制一份，命名为package.ini

这个package.ini里面是填写你的打包目录和入口文件的路径，如
```ini
paths=Z:\war3\hunzsig-warcraft3\h-lua,Z:\war3\hunzsig-warcraft3\w3x-my-tower
index=Z:\war3\hunzsig-warcraft3\w3x-my-tower\hot.lua
```

打包由index开始读取lua文件，仅支持一下的功能：
> 会自动将hot.lua内编写的package.path代码去掉
> 直接require方式加载的话会继续遍历（如果你直接require一个文件，他会继续递归后续的lua）
> 自动删除 -- 和 --[[]] 格式的注释
> 自动去除空行
> 自动识别HLUA_DEBUG

打包完成后，会在与你入口文件同级目录生成一个dist.lua
> 打包不一定完全准确，你应该去检查一下是否真的成功！
> 万一打包并不符合您的需求，package里面有打包的源码 main.go(golang)你可以随意修改至符合你自身的打包exe工具

如果打包确定100%正确，代码完好
> 将你的 import("main.lua") ("hot.lua", true) 改为 import("main.lua") ("dist.lua", true)

然后编辑器保存！
> 保存会自动把地图打包在魔兽客户端\Maps\Test\WorldEditTestMap.w3x
> 这个文件就是未加密的地图文件（几乎可以上线了！）

然后优化！
> 对自己地图优化的方法有很多，自行百度吧，这里说一个常用的：
> 例如：使用Wc3MapMax++1.3.11优化，不勾选任何优化，只去除地图编辑器需要的文件（类似简单加密）
> (上述的工具在这里有：https://github.com/hunzsig-warcraft3/assets-software)
> 把优化好的地图文件改个名，例如你的地图是剑圣求生之路：jsqszl.v1.0.0.w3x,就可以上传地图到支持lua引擎的平台了！

恭喜你！