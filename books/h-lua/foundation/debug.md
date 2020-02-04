debug

> debug内都是全局函数，直接调用即可

---

* **rem(key1, key2)**
```
记录运行时间rem方法
只有key1时为记录，有key2时会打印对应记录间的差值，如：
rem("a") --1
rem("b") --2
rem("c") --4
print rem("a","b") =1
print rem("b","c") =2
print rem("a","c") =3
```

* **print_stack(...)**
```
结合YDWE的console命令台，你可以查看stack
简单例子：
if err then
    print_stack()
    return
end
```

* **print_mb(str)**
```
对应原生的print方法，此方法可以打印出中文
打印utf8时转为ansi编码
!需要开启console为enable
```

* **print_err(str)**
```
错误打印
```

* **print_r(t, printMethod, showDetail)**
```
打印对象table
```

* **print_mbr(table)**
```
打印对象table
对应print_r方法，此方法可以打印出中文
```
