itemMix

> 调用：hitemMix.method()

---

* **newFormula**
```
设定新的合成公式,每一次newFormula代表一个新的公式
后面继续调用 addFlag 设定的那条公式内的零件
```

* **addFlag**
```
为合成公式添加零件,需要紧跟startFormula使用或作为多条addFlag（多零件）使用
```

* **getTotalQty**
```
获取注册的合成物数量
```

* **setTotalQty**
```
设定注册的合成物数量
```

* **getFormulaQty**
```
设定某种物品的合成公式数量
```

* **getFormulaResultQty**
```
获取某种物品的第 x 条公式合成的最终成品物品的使用次数
```

* **setFormulaResultQty**
```
设定某种物品的第 x 条公式合成的最终成品物品的使用次数
```

* **getFormulaFlagmentQty**
```
获取某种物品的第 x 条公式里面的零件种类数
```

* **setFormulaFlagmentQty**
```
设定某种物品的第 x 条公式里面的零件种类数
```

* **getFormulaFlagmentNeedType**
```
获取某种物品的第 x 条公式里面的第 y 件零件的物品类型
```

* **setFormulaFlagmentNeedType**
```
设定某种物品的第 x 条公式里面的第 y 件零件的物品类型
```

* **getFormulaFlagmentNeedQty**
```
获取某种物品的第 x 条公式里面第 y 件零件的物品类型
```

* **setFormulaFlagmentNeedQty**
```
设定某种物品的第 x 条公式里面第 y 件零件需要的数量
```

* **getFlagmentQty**
```
获取某种物品作为零件的合成公式数量（一个物品可以合成几种目标物品）
```

* **setFlagmentQty**
```
设定某种物品作为零件的合成公式数量
```

* **getFlagmentIsset**
```
获取零件是否存在于当前最新公式
```

* **setFlagmentIsset**
```
设定零件已经存在于当前最新公式（默认false）
```

* **getFlagmentResult**
```
获取零件服务的第 x 索引的结果物品id
```

* **setFlagmentResult**
```
设定零件服务的第 x 索引的结果物品id
```

* **getFlagmentFormulaIndex**
```
获取零件服务的对应目标物品的公式索引
```

* **setFlagmentFormulaIndex**
```
设定零件服务的对应目标物品的公式索引
```

* **getFlagmentNeedQty**
```
获取零件服务的第 x 索引的需求数量
```

* **setFlagmentNeedQty**
```
设定零件服务的第 x 索引的需求数量
```

















