dzapi

> 调用：hdzapi.method()
> 由于lua的调用与原生的差距较大，这里还是支持封装一波dzapi

---

* **isVipRed(whichPlayer)**
```
是否红V
```

* **isVipBlue(whichPlayer)**
```
是否蓝V
```

* **mapLv(whichPlayer)**
```
获取地图等级
```

* **hasMallItem(whichPlayer, key)**
```
是否有商城道具
```

* **setMallItemCheater(whichPlayer)**
```
设置一个玩家为特殊商城人员，可以自动获得所有的商城道具
```

* **setRoomStat(whichPlayer, key, text)**
```
设置房间数据
```

* **server.save(whichPlayer, key, data)**
```
野生的服务器存档(不帮你加前缀)
```

* **server.load(whichPlayer, key)**
```
野生的服务器读档(不帮你加前缀)
```

* **server.clear(whichPlayer, key)**
```
野生的清理服务器数据(不帮你加前缀)
与你server.save(...nil)效果一致
```

* **封装的服务器存档 set**
```
server.set.int(whichPlayer, key, data)
server.set.real(whichPlayer, key, data)
server.set.bool(whichPlayer, key, data)
server.set.str(whichPlayer, key, data)
server.set.unit(whichPlayer, key, data)
server.set.item(whichPlayer, key, data)
set nil则清理了
```

* **封装的服务器存档 get**
```
server.get.int(whichPlayer, key)
server.get.real(whichPlayer, key)
server.get.bool(whichPlayer, key)
server.get.str(whichPlayer, key)
server.get.unit(whichPlayer, key)
server.get.item(whichPlayer, key)
```
