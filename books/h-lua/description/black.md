
> 单位XY坐标
```
一个单位有4x3格子，分别对应下列坐标
(0,0) (1,0) (2,0) (3,0)
(0,1) (1,1) (2,1) (3,1)
(0,2) (1,2) (2,2) (3,2)
```

> 如何令加载地图时播放音乐(!此方法在重制版魔兽中是无效的)
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

> 如何令一个技能隐藏但是依然有效
```
设置它的图标坐标为（0,-11）
```



