---
title: 盘点把C盘弹出去的那些事
cover: 
color: #49b1a1
categories: 玩转系统
tags:
- tags
- windows
- 胡改
---
<meta name='description' content='（水文）有关将系统盘强制当 U 盘弹出的方式。（欢迎进站访问|´・ω・) ノ）'>
*C:\Windows\System32>_*
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=550 height=86 src="//music.163.com/outchain/player?type=2&id=33166666&auto=1&height=66"></iframe>

_这里使用的是 Windows 7_
总所周知，带热插拔的硬盘，CD呀DVD呀，U盘，都具有弹出选项。

So，系统盘能弹出去吗？

答案吧……

可以！
通过下面这条命令可以弹出你想要弹出的任何盘*（包括正在使用的盘）*
```Shell
mountvol <drive_letter> /d
```
```
<Drive_letter>: 指弹出的磁盘盘符，带冒号
```

然后你就发现，C盘没了……^_^       [UP 暗笑中...]
此时，你所看到的窗口，都是内存中的缓存，

此时计算机会变得卡顿，无法打开任何应用程序

要想恢复，只能强制重新启动计算机。

但是，

如果你又找了个WIN 10 的盘盘符更为C，

那么，

就会出现 Windows 7 + 10 = 17 !

啊对，半Win7半Win10


    创建、删除或列出卷装入点。

    MOUNTVOL [drive:]path VolumeName
    MOUNTVOL [drive:]path /D
    MOUNTVOL [drive:]path /L
    MOUNTVOL [drive:]path /P
    MOUNTVOL /R
    MOUNTVOL /N
    MOUNTVOL /E
    MOUNTVOL drive: /S

    path        指定装入点将驻留的现有 NTFS 目录。
    VolumeName  指定装入点的目标的卷名称。
    /D          从指定的目录中删除卷装入点。
    /L          列出指定目录的已装入的卷名称。
    /P          从指定目录删除卷装入点，卸下此卷并使此卷无法装入。你可以创建
                一个卷来再次使此卷可以装入。
    /R          删除不在系统中的、卷的装入点目录和注册表设置。
    /N          禁用新卷的自动装入。
    /E          再次启用新卷的自动装入。
    /S          将 EFI 系统分区装载到提供的驱动器。


这里用的是 mountvol 功能的删除载入点功能。