lightning

> 调用：hlightning.method()

---

* **电链类型**
```lua
hlightning = {
    type = {
        shan_dian_lian_zhu = "CLPB", -- 闪电效果 - 闪电链主
        shan_dian_lian_ci = "CLSB", -- 闪电效果 - 闪电链次
        ji_qu = "DRAB", -- 闪电效果 - 汲取
        sheng_ming_ji_qu = "DRAL", -- 闪电效果 - 生命汲取
        mo_fa_ji_qu = "DRAM", -- 闪电效果 - 魔法汲取
        si_wang_zhi_zhi = "AFOD", -- 闪电效果 - 死亡之指
        cha_zhuang_shan_dian = "FORK", -- 闪电效果 - 叉状闪电
        yi_liao_bo_zhu = "HWPB", -- 闪电效果 - 医疗波主
        yi_liao_bo_ci = "HWSB", -- 闪电效果 - 医疗波次
        shan_dian_gong_ji = "CHIM", -- 闪电效果 - 闪电攻击
        ma_fa_liao_kao = "LEAS", -- 闪电效果 - 魔法镣铐
        fa_li_ran_shao = "MBUR", -- 闪电效果 - 法力燃烧
        mo_li_zhi_yan = "MFPB", -- 闪电效果 - 魔力之焰
        ling_hun_suo_lian = "SPLK", -- 闪电效果 - 灵魂锁链
    }
}
```

* **del(lightning)**
```
删除闪电链
```

* **xyz2xyz(lightningType, x1, y1, z1, x2, y2, z2, during)**
```
创建一个闪电，xyz坐标到xyz坐标
```

* **loc2loc(lightningType, loc1, loc2, during)**
```
创建一个闪电，点到点
```

* **unit2unit(lightningType, unit1, unit2, during)**
```
创建一个闪电，单位到单位
```
