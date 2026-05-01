---
layout: 
title: 修改 BOOTX64.EFI、BOOTMGR.EFI 所使用 BCD 文件位置
date: 2024-9-17 10:24
tags:
- Windows 引导
- Windows
- BCD
- BOOTX64.EFI
- BOOTMGR.EFI
- 魔改
- EFI
- UEFI
categories: 
- 魔改
- Windows 引导
top_img: https://s2.loli.net/2024/09/17/joPQcpGB8W7MmSK.png
cover: https://s2.loli.net/2024/09/17/9oK34tJSZMXVHDi.png
---
<!-- <meta name='description' content='本文介绍如何修改 EFI 启动的 Windows 10 系统的 BOOTX64.EFI、BOOTMGR.EFI 所使用 BCD 文件位置（欢迎进站访问|´・ω・) ノ）'> -->

## 前言

最近在搞 u 盘，想把不同的启动文件引到不同的 BCD 上，最开始以为引导的 BCD 是相对的
~BOOTX64.EFI 位于 \EFI\BOOS\ So,BCD 在 \EFI\BOOS\MICOSOSFT\BCD~
倒腾了半天，没倒腾出来

后来又折腾几个小时，才搞出来

又是翻这看那
然后就有了这个东西
{% note default simple %}
[EFI_DISK] 特指 EFI 引导卷
{% endnote %}
{% note warning modern %}
请注意，修改时两个字符中间请相隔一个空位(不是空格)
例如：
       Offset | 0  1  2  3  4  5  6  7   8  9  A  B  C  D  E  F  |
     000047B0 | 5C 00 45 00 46 00 49 00  5C 00 4D 00 69 00 63 00 | \ E F I \ M i c 
{% endnote %}
{% note warning modern %}
魔改有风险，请注意备——份——！
{% endnote %}
{% note danger modern %}
因未提前备份造成计算机无法启动或出现问题，一切后果与我无关。

{% endnote %}

{% note info modern %}
这篇文章仅对 Windows 的 EFI 引导文件有效

文章中的文件请在附件包中下载
{% endnote %}

---

## BOOTX64.EFI
该部分通过了测试，但不同计算机的环境、参数可能不同，请谨慎修改。

### 编辑 BCD 位置文件夹

关于 EFI ，这里这修改 [EFI_DISK]\efi\boot\bootx64.efi
**即计算机 BIOS 引导的文件**

打开 WinHex，然后打开你的 bootx64.efi

之后转到偏移量 `000047B0` 的位置

到右边的文本编辑区，你可以看到下面的内容

      Offset | 0  1  2  3  4  5  6  7   8  9  A  B  C  D  E  F  |
    000047B0 | 5C 00 45 00 46 00 49 00  5C 00 4D 00 69 00 63 00 | \ E F I \ M i c 
    000047C0 | 72 00 6F 00 73 00 6F 00  66 00 73 00 5C 00 42 00 | r o s o f s \ B 
    000047D0 | 6F 00 6F 00 31 00 00 00  00 00 00 00 00 00 00 00 | o o 1           
    
上面的东西有一些小修改，所以不同，只要大致长一样即可

![0001.png](https://s2.loli.net/2024/09/17/ZliKSF7NPyEGj5h.png)

可以修改的内容
 \Microsoft\ 
{% note info modern %}
修改此内容你需要同时修改 \EFI\boot\ [语言] \bootx64.efi.mui

否则只会留下 MUI 消息表，连 HTML 都出不来
就像这样:
![0002.png](https://s2.loli.net/2024/09/17/Q6eoTzYxHStuR17.png)
{% endnote %}
，至于 \BOOT\ 这个就可以随便改，只要保证不超过 000047D0 的范围就行了

### 修改 BCD 名称

转到偏移量 `00004A50` 的位置

到右边的文本编辑区，你可以看到下面的内容

      Offset | 0  1  2  3  4  5  6  7   8  9  A  B  C  D  E  F  |
    00004A50 | 5C 00 42 00 43 00 44 00  00 00 00 00 00 00 00 00 | \ B C D

同理，可以修改文件名，不超过 `00004A5F` 即可

## BOOTMGR.EFI

{% note warning modern %}
这个部分因为某些原因，尚未通过测试(不加载)，请谨慎修改。
{% endnote %}
##+
 修改 BCD 位置
这里这修改 [EFI_DISK]\bootmgr.efi

### 修改 BCD 路径

打开 WinHex，然后打开你的 bootmgr.efi

之后转到偏移量 `00001E50` 的位置

到右边的文本编辑区，你可以看到下面的内容

      Offset | 0  1  2  3  4  5  6  7   8  9  A  B  C  D  E  F  |
    00001E50 | 5C 00 45 00 46 00 49 00  5C 00 4D 00 69 00 63 00 | \ E F I \ M i c 
    00001E60 | 72 00 6F 00 73 00 6F 00  66 00 73 00 5C 00 42 00 | r o s o f s \ B 
    00001E70 | 6F 00 6F 00 31 00 00 00  00 00 00 00 00 00 00 00 | o o 1           
    
上面的东西有一些小修改，所以不同，只要大致长一样即可

可以修改的内容

 \BOOT\ 这个就可以随便改，只要保证不超过 00001E70 的范围就行了

### 修改 BCD 名称

转到偏移量 `000020F0` 的位置

到右边的文本编辑区，你可以看到下面的内容

      Offset | 0  1  2  3  4  5  6  7   8  9  A  B  C  D  E  F  |
    000020F0 | 5C 00 42 00 43 00 44 00  00 00 00 00 00 00 00 00 | \ B C D

同理，可以修改文件名，不超过 `000020FF` 即可

## 备注

{% note info modern %}
BCD 需要禁止数字签名认证，否则无法正常启动，此外需要关闭 安全启动 
{% endnote %}
[^需要验证]

关于 WinHex
<https://blog.admincmd.xyz/zy/app/#WinHex>

本文附件
<https://blog.admincmd.xyz/url.html?url=https://admincmd.lanzout.com/izwqR2af2ncf>

这是什么：？

![002.png](https://s2.loli.net/2024/09/17/xu78QlUowCdJY1X.png)