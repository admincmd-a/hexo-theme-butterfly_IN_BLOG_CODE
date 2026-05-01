---
title: 使用 PowerShell 管理 WindowsApps 
tags:
  - Power Shell
  - WindowsApps
  - Windows

categories:
  - Windows
date: 2024-10-07 08:38:21
layout:
top_img: https://unpkg.com/admincmd-blog-img-0@1.0.4/19bd6d8ad52f_TOP1_cic.webp
cover: https://unpkg.com/admincmd-blog-img-0@1.0.4/19bd6d8ad52f_TOP0_cic.webp
---
<!-- <meta name='description' content='该页讲述了使用power shell删除、添加UWP应用，并说明了如何用两种方式查看应用程序包名称。（欢迎进站访问|´・ω・) ノ）'> -->

{% note warning modern %}
注意备份，尤其是列表。
{% endnote %}
{% note danger modern %}
不正确的操作可能造成应用缺失或无法使用,
因本文中的内容错误使用造成的系统损坏，一切后果与UP无关。
{% endnote %}


## 前言

前言
  
## 操作

使用管理员打开 PowerShell，具体打开方式？
{% hideToggle 启动PowerShell %}
右键Windows菜单，单击搜索，然后输入`powershell`

然后在结果第一行的 Windows Power Shell 右键，选择`以管理员身份运行`
点`是`,就好了。
{% endhideToggle %}
### 找应用程序包
#### 第一种方法（知晓应用程序包发布名）
首先要确定你要删什么应用，这里以 Windows 上自带的 Xbox 为例，

粘贴运行下面的这个东东，

``` PowerShell
Get-AppxPackage | Select Name, PackageFullName
# 该命令输出了系统上已安装的 Windows 应用
```
然后系统就会输出类似下面的东西

这里输出了系统里所有 UWP 应用，即可以删除、修改的


      Name                                        PackageFullName
      ----                                        ---------------
      1527c705-839a-4832-9118-54d4Bd6a0c89        1527c705-839a-4832-9118-54d4Bd6a0c89_10.0.19041.1023_neutral_neutral_cw5...
      E2A4F912-2574-4A75-9BB0-0D023378592B        E2A4F912-2574-4A75-9BB0-0D023378592B_10.0.19041.1023_neutral_neutral_cw5...
      F46D4000-FD22-4DB4-AC8E-4E1DDDE828FE        F46D4000-FD22-4DB4-AC8E-4E1DDDE828FE_10.0.19041.1023_neutral_neutral_cw5...
      Microsoft.AAD.BrokerPlugin                  Microsoft.AAD.BrokerPlugin_1000.19041.1023.0_neutral_neutral_cw5n1h2txyewy
      Microsoft.AccountsControl                   Microsoft.AccountsControl_10.0.19041.1023_neutral__cw5n1h2txyewy
      Microsoft.AsyncTextService                  Microsoft.AsyncTextService_10.0.19041.1023_neutral__8wekyb3d8bbwe
      Microsoft.BioEnrollment                     Microsoft.BioEnrollment_10.0.19041.1023_neutral__cw5n1h2txyewy
      Microsoft.CredDialogHost                    Microsoft.CredDialogHost_10.0.19041.1023_neutral__cw5n1h2txyewy
      Microsoft.ECApp                             Microsoft.ECApp_10.0.19041.1023_neutral__8wekyb3d8bbwe
      Microsoft.LockApp                           Microsoft.LockApp_10.0.19041.1023_neutral__cw5n1h2txyewy
      ...

`Name`指应用程序包的发布名，`PackageFullName`指应用程序包名。

然后我们找 Xbox 有关的程序包，嫌麻烦可以右键标题栏,选择`编辑(&E) > 查找(&F)`打开查找框

这样可以查找到这些程序包

      Microsoft.Xbox.TCUI                         Microsoft.Xbox.TCUI_1.24.10001.0_x64__8wekyb3d8bbwe                        
      Microsoft.XboxGameOverlay                   Microsoft.XboxGameOverlay_1.54.4001.0_x64__8wekyb3d8bbwe                   
      Microsoft.XboxSpeechToTextOverlay           Microsoft.XboxSpeechToTextOverlay_1.21.13002.0_x64__8wekyb3d8bbwe 
      Microsoft.XboxApp                           Microsoft.XboxApp_48.89.25001.0_x64__8wekyb3d8bbwe     
      Microsoft.XboxGamingOverlay                 Microsoft.XboxGamingOverlay_5.822.10271.0_x64__8wekyb3d8bbwe               
      Microsoft.XboxIdentityProvider              Microsoft.XboxIdentityProvider_12.95.3001.0_x64__8wekyb3d8bbwe 

#### 第二种方法（知晓应用程序）

打开你要删的 UWP 应用，此处使用`电影和电视`举例

右键任务栏，打开`任务管理器`,拉开详细信息，找到`电影和电视`(你要删什么应用就找什么)
 ![19bd6d8ad52f_0](https://unpkg.com/admincmd-blog-img-0@1.0.4/19bd6d8ad52f_0.png)

展开`电影和电视`(你要删什么应用就找什么)，选中`电影和电视`(你要删什么应用就找什么)，选择`属性`
找到`位置`,选中位于`C:\Program Files\WindowsApps\`后的所有文本，复制下来，这就是应用程序包名


### 删除应用

#### 删除指定应用
删除包的语法长这样：
```powershell
Remove-AppxPackage [PackageFullName]
```
`[PackageFullName]`指应用程序包名称
{% note info modern %}
此处允许使用通配符。
{% endnote %}

{% tabs test1 %}
<!-- tab 删除指定程序包 -->
例如我们要删除名为 `Microsoft.Xbox.TCUI_1.24.10001.` 的程序包。
则传入以下命令
```Powershell
Remove-AppxPackage Microsoft.Xbox.TCUI_1.24.10001.
```
<!-- endtab -->

<!-- tab 删除指定通配符程序包 -->
或者说我们想把下面这些与`Xbox`有关程序包统统删除

      Microsoft.Xbox.TCUI                         Microsoft.Xbox.TCUI_1.24.10001.0_x64__8wekyb3d8bbwe                        
      Microsoft.XboxGameOverlay                   Microsoft.XboxGameOverlay_1.54.4001.0_x64__8wekyb3d8bbwe                   
      Microsoft.XboxSpeechToTextOverlay           Microsoft.XboxSpeechToTextOverlay_1.21.13002.0_x64__8wekyb3d8bbwe 
      Microsoft.XboxApp                           Microsoft.XboxApp_48.89.25001.0_x64__8wekyb3d8bbwe     
      Microsoft.XboxGamingOverlay                 Microsoft.XboxGamingOverlay_5.822.10271.0_x64__8wekyb3d8bbwe               
      Microsoft.XboxIdentityProvider              Microsoft.XboxIdentityProvider_12.95.3001.0_x64__8wekyb3d8bbwe 

这些程序包内名称内均有`Xbox`关键词，可以使用通配符，需要传入以下命令
```PowerShell
Remove-AppxPackage *Xbox*
```
<!-- endtab -->
{% endtabs %}
#### 删除所有 UWP 应用
{% note info modern %}
注意：某些 UWP 无法正常删除，列如 Windows 自带的杀毒，这种东西需要别的方法来移除。
{% endnote %}

{% tabs test3, 1 %}
<!-- tab 卸载当前用户所有 UWP 应用 -->
若想要删除当前用户的 UWP 应用，则传入以下命令
```powershell
Get-AppXPackage | Remove-AppxPackage
```
<!-- endtab -->

<!-- tab 卸载指定用户所有 UWP 应用 -->
在Powershell中输入以下命令，回车即可卸载指定用户`[username]`的所有 UWP 应用。
```powershell 无法直接运行
Get-AppXPackage -User [username] | Remove-AppxPackage
```
其中`[username]`为指定的用户。

列如要删除用户名为 `AdminCmd`的用户所有的 UWP 应用，可以传入下命令
```powershell
Get-AppXPackage -User AdminCmd | Remove-AppxPackage
```
<!-- endtab -->

<!-- tab 卸载所有账户所有 UWP 应用 -->
传入下命令，可以卸载所有账户的所有 UWP 应用
```powershell
Get-AppxPackage -AllUsers | Remove-AppxPackage
```
<!-- endtab -->
{% endtabs %}

### 安装应用

{% note info modern %}
此处仅演示系统原生应用安装，其他途径不在此处收录。
{% endnote %}

#### 安装所有默认 UWP 应用

传入下代码即可
`[-AllUsers]` 是可选的，该参数决定是否应用与所有账户，若删除此参数，则为本账户执行此操作。
```powershell 无法直接运行
Get-AppxPackage [-AllUsers] | foreach {Add-AppxPackage -register "$($_.InstallLocation)\appxmanifest.xml" -DisableDevelopmentMode}
```

#### 安装指定应用

首先你要知道你要装的应用程序包名称，具体请见 2.1

请将 `[PackageFullName]` 替换为应用程序包名

```powershell 无法直接运行
Add-AppxPackage -register "C:\Program Files\WindowsApps\[PackageFullName]\appxmanifest.xml" -DisableDevelopmentMode
```

## 后记

### 参考资料
- [PackageManager Class](https://blog.admincmd.xyz/url.html?url=https://learn.microsoft.com/en-us/powershell/module/appx/remove-appxpackage?view=windowsserver2022-ps)
- [Add-AppxPackage](https://blog.admincmd.xyz/url.html?url=https://learn.microsoft.com/en-us/powershell/module/appx/add-appxpackage?view=windowsserver2022-ps)
- [Remove-AppxPackage](https://blog.admincmd.xyz/url.html?url=https://learn.microsoft.com/en-us/powershell/module/appx/remove-appxpackage?view=windowsserver2022-ps)
- Get-Help