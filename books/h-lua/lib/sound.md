sound

> 调用：hsound.method()

---

* **sound(s)**
```
播放音效
```

* **sound2Player(s, whichPlayer)**
```
对某个玩家播放音效
```

* **sound2Unit(s, volumePercent, u)**
```
绑定单位音效
```

* **sound2XYZ(s, x, y, z)**
```
绑定坐标音效
```

* **sound2Loc(s, loc)**
```
绑定点音效
```

* **bgm(musicFileName, whichPlayer)**
```
对某玩家或所有玩家播放背景音乐
如果背景音乐无法循环播放，尝试格式工厂转wav再转回mp3
hsound.bgm(musicFileName, nil) 设nil则对所有玩家生效
```

* **bgmStop(whichPlayer)**
```
停止对某玩家或所有玩家播放背景音乐
hsound.bgmStop(nil) 设nil则对所有玩家生效
```
