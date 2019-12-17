
**如何令加载地图时播放音乐**
```
随意创建一个F4触发器
转为自定义代码并删除里面所有代码
贴上以下代码即可：
function hBgm takes string s returns nothing
	local string uri = "main.mp3"// 这个路径你可以播放默认的音乐（在F5）也可以播放F12导入的音乐
	call SetMapDescription(s)
	call PlayMusic(uri)
	set uri = null
endfunction
#define SetMapDescription(s) hBgm(s)
```

> 此方法在重制版魔兽中是无效的
