debug

> debug内都是全局函数，直接调用即可

---

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

* **print_r(table)**
```
打印对象table
```

* **print_mbr(table)**
```
打印对象table
对应print_r方法，此方法可以打印出中文
```
