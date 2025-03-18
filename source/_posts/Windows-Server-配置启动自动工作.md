---
title: Windows Server 配置启动自动工作
tags:
  - null
categories:
  - null
date: 2025-03-18 21:29:05
layout:
top_img:
cover:
---
<meta name='description' content=''>
{% note default simple %}

{% endnote %}
{% note warning modern %}

{% endnote %}
{% note warning modern %}

{% endnote %}
{% note danger modern %}

{% endnote %}
{% note info modern %}

{% endnote %}

## 启动方面

### 配置自动用户登录

{% note warning simple %}
为了方便起见，提供了自动登录功能。 但是，此功能可能会带来安全风险。 如果将计算机设置为自动登录，则以物理方式获取计算机访问权限的任何人都可以访问计算机的所有内容~~把电脑锁着不就行了~~，包括计算机连接到的任何网络。 此外，启用自动登录时，密码以纯文本形式存储在注册表中。 Authenticated Users 组可以远程读取存储此值的特定注册表项。 仅当计算机处于物理安全状态且已采取步骤确保不受信任的用户无法远程访问注册表时，才建议使用此设置。
{% endnote %}

1. 启动注册表编辑器 | 远程连接注册表 | 使用 `REG` 命令 | [...]
1. 转到`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon`项
1. 新建 {% label 字符串值 blue %} ，值为`AutoAdminLogon`(自动登录启用?)
1. 修改 {% label AutoAdminLogon blue %} 值的关联数据为`1`*(true)*
1. 修改 {% label DefaultUserName blue %} ，值的关联数据为 ***欲登录账户的名称***
1. 修改 {% label DefaultPassword blue %} ，值的关联数据为 ***欲登录账户的密码***
 
{% note info modern %}
如果没有`DefaultPassword`，则请您为系统亲自创建一个字符串值。
{% endnote %}
{% note warning modern %}
如果没有`DefaultPassword`，那么系统启动时就会自动去吧`AutoAdminLogon`的关联数据改成`0`*(false)*
那不就白改了？
{% endnote %}

