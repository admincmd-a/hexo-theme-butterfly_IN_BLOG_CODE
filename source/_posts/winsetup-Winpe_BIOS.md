---
layout: 
title: 如何使用 Windows PE 安装操作系统(BIOS)
date: 2024-05-20 23:53:45
tags:
- Windows
- Windows 欲安装环境
- 安装 Windows
- BIOS
- Legacy
categories: 
- 教程
- Windows 安装
top_img: https://s2.loli.net/2024/05/21/9UmV3oMvZtqShwH.png
cover: https://s2.loli.net/2024/05/21/5HLnBTrvqwsaVgm.png
---
<meta name='description' content='本文将介绍在 Legacy 启动方式下，如何使用 Windows PE (Windows 预安装环境) 安装 Windows 操作系统,包括分区、添加引导文件（欢迎进站访问|´・ω・) ノ）'>

本文中所使用的系统为 Windows PE(Windows 预安装环境)，安装系统为 Windows 10

{% note warning modern %}
本文中所适用的启动方式为 BIOS (Legacy)
{% endnote %}
{% note success modern %}
本文中所使用安装系统可以为 Windows 7 、Windows 8 、Windows 8.1 、Windows 10  即 wim \ esd 映像的Windows操作系统。(需要支持 Legacy,但大部分操作系统都支持)
{% endnote %}

!!! error "不支持的操作系统"
    该教程不适用于 Windows 11

{% note success modern %}
建议你先将文章过一遍，这样可以更清楚的知道自己下一步要干什么。

注意：本文大部配图与代码框内有出入，请以围栏代码框内为准
{% endnote %}
## 分配磁盘

使用 CMD 运行以下命令
```cmd
DiskPart
List Disk
```
{% note default simple %}
如果你已经完成此操作(或已经分区)，请移步右侧目录‘安装系统’

如果你的磁盘已经准备好了，(空白的)就请移步右侧目录‘创建分区’
{% endnote %}

使用 DISKPART 查看当前计算机的磁盘

运行后大概是这样

      磁盘 ###  状态           大小     可用     Dyn  Gpt
      --------  -------------  -------  -------  ---  ---
      磁盘 0    联机              465 GB      0 B

确定好需要的磁盘，输入命令，将其设为选中状态
```cmd
rem Select Disk <磁盘编号>

rem 例如如果你需要选择磁盘 0 则命令如下

Select Disk 0

```
![QQ20240619210151.png](https://s2.loli.net/2024/06/23/mgvUPYh6VMtuWbx.png)
### 删除分区

如果你的磁盘上有其他分区，想删除它们，请参照以下步骤：

首先列出磁盘上已有分区

```cmd
List Partition
```
运行后大概就是这样

      分区 ###       类型              大小     偏移量
      -------------  ----------------  -------  -------
      分区      1    主要                 415 GB  1024 KB
      分区      2    主要                  49 GB   415 GB
      分区      3    主要                 512 MB   465 GB

选择你需要进行操作并删除的分区
依照以下命令可以多次执行
```cmd
Select Partition <分区编号>
Delete Partition

REM 如果你需要选择分区 1 并删除，则命令如下

Select Partition 1
Delete Partition
```
命令执行成功应是`DISKPART 成功删除了所选分区`

{% note info modern %}
若要删除受保护的磁盘（如类型为“系统”与“保留”），则需要在 Delete Partition 命令后添加 Override 参数
如果需要一次性将磁盘上所有分区删除，请使用 Clean 命令

例如直接使用`Delete Partition`命令删除则会返回
    虚拟磁盘服务错误:
    如果不设置强制保护参数设置，则无法删除受保护的分区

而使用`Delete Partition Override`命令删除则会返回
    DISKPART 成功删除了所选分区

{% endnote %}

最后再次使用`List Partitio` 即可看到`这个磁盘上没有显示的分区`

---

如果你的磁盘已经准备好了，(空白的)就往下看创建分区

### 创建分区
首先通过这个命令转化一下磁盘分区表
```
Convert MBR
REM Convert MBR 将磁盘转换为 MBR
```

{% note info modern %}
在 MBR 磁盘分区表上，只允许最多四个主分区或三主分区加一个扩展分区，最多支持 2Tb 的硬盘

如果将 Size=<分区大小> 这个参数去掉，则会默认将该磁盘的所有可用的空间创建为一个分区
{% endnote %}
```
Create Partition Primary Size=<分区大小>
Convert MBR
REM Convert MBR 将磁盘转换为 MBR
REM 分区大小以 MiB 为单位，（微软常常写成‘MB、GB’，事实上MB、GB和MiB、GiB是两种不同的单位）
REM 1GiB=1024MiB 1GB=1000MB 以此类推，所以系统所报告的硬盘大小与硬盘标称大小通常要小。

REM 例如我需要创建一个大小为 50GiB 的主分区作为系统盘，9GiB 的主分区作为其它盘则命令如下

Create Partition Primary Size=51200
Create Partition Primary Size=9216
```

![QQ20240619210234.png](https://s2.loli.net/2024/06/23/PLvy5iSRh3jNYGu.png)
### 格式化分区

使用以下命令格式化主分区
```
REM List Partition
REM Select Partition <分区编号>
REM Format fs=NTFS Quick
REM Assign Letter=<盘符>

REM 例如需要格式化第 1 个分区，文件系统为 NTFS 并快速格式化，盘符为 C，则命令如下(将盘 1 作为系统安装盘)

List Partition
Select Partition 1
Format fs=NTFS Quick
Assign Letter=C
Active

```
![QQ20240619210747.png](https://s2.loli.net/2024/06/23/phNKtHLiz1emgWE.png)
看着都完成，没出错，就可以按`exit`退出DISKPART了

## 安装系统

首先确定你要安装啥系统

{% note info modern %}
如果不知道原版系统从哪下，到{% btn '/zy/www/',这个页面,%}找到原版系统资源分区找个站去下。

Wim 安装文件位于 \Sources\install.wim
{% endnote %}
### 查看版本
输入以下命令查看映像版本
```
REM DISM.exe /Get-WimInfo /WimFile:<WIM/ESD 路径>

REM 假如我存放在 E 盘下的 Sources 文件夹并命名为 install.wim，则命令如下

DISM.exe /Get-WimInfo /WimFile:E:\Sources\install.wim
```
返回出类似这个就算成功

    部署映像服务和管理工具
    版本: 10.0.19041.844

    映像的详细信息: K:\WSTC\Windows10x64.wim

    索引: 1
    名称: Windows 10 教育版
    描述: Windows 10 教育版
    大小: 16,715,582,809 个字节

    索引: 2
    名称: Windows 10 企业版
    描述: Windows 10 企业版
    大小: 16,715,736,804 个字节

    索引: 3
    名称: Windows 10 专业版
    描述: Windows 10 专业版
    大小: 16,735,296,644 个字节

    索引: 4
    名称: Windows 10 专业教育版
    描述: Windows 10 专业教育版
    大小: 16,715,521,227 个字节

    索引: 5
    名称: Windows 10 专业工作站版
    描述: Windows 10 专业工作站版
    大小: 16,715,552,018 个字节

    操作成功完成。

### 安装映像

```
REM DISM.exe /Apply-Image /ImageFile:<WIM/ESD 路径> /Index:<映像版本> /ApplyDir:<安装盘符>:\

REM 假如我存放在 E 盘下的 Sources 文件夹并命名为 install.wim，需要安装第一个版本，并安装在 C 盘，则命令如下

DISM.exe /Apply-Image /ImageFile:E:\Sources\install.wim /Index:1 /ApplyDir:C:\
```

由于刚才我们已经为系统盘设置盘符，所以 `<安装盘符>` 可以不用改
<映像版本> 请根据 ‘查看版本’那一步的索引进行选择

看到下面这个东东就说明正在部署

    正在应用镜像
    [                     0.0%                     ]

等个几分钟，看到`操作成功完成`就行了

## 安装引导
```
Bootrec.exe /FixMbr
BCDBoot C:\Windows /l zh-cn
```

把上面命令跑一下就可以重启了

{% note info modern %}
重启后进入 OOBE 开箱体验阶段
{% endnote %}
![QQ20240619211645.png](https://s2.loli.net/2024/06/23/mb8qRaZf4o6t3s5.png)