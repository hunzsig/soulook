texture

> 调用：htexture.method()

---

* **mark(path, during, whichPlayer)**
```
创建一个遮罩
path string 贴图路径 512x256 png->blp
during number 持续时间
whichPlayer userdata|nil 玩家
```


* **alertCircle(diameter, x, y, during)**
```
创建一个警示圈
例如可以用来提示技能范围
diameter number 直径范围(px)
x number 坐标X
y number 坐标Y
during number 持续时间，警示圈不允许永久存在，during默认为3秒
```
